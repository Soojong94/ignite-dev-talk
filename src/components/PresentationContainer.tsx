import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Menu, Play, Pause, Maximize, Share } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface PresentationContainerProps {
  children: React.ReactNode[];
  titles: string[];
}

const PresentationContainer = ({ children, titles }: PresentationContainerProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract slide number from URL hash
  const getSlideFromHash = () => {
    const hash = location.hash.replace('#slide-', '');
    const slideNum = parseInt(hash);
    return isNaN(slideNum) || slideNum < 1 || slideNum > children.length ? 1 : slideNum;
  };

  const [currentSlide, setCurrentSlide] = useState(getSlideFromHash);
  const [showMenu, setShowMenu] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Update URL when slide changes
  useEffect(() => {
    navigate(`#slide-${currentSlide}`, { replace: true });
  }, [currentSlide, navigate]);

  // Listen to hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentSlide(getSlideFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showMenu) return;
      
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          previousSlide();
          break;
        case 'Escape':
          setShowMenu(false);
          setIsFullscreen(false);
          break;
        case 'm':
        case 'M':
          setShowMenu(!showMenu);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showMenu]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide(prev => prev >= children.length ? 1 : prev + 1);
    }, 8000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying, children.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => prev >= children.length ? prev : prev + 1);
  }, [children.length]);

  const previousSlide = useCallback(() => {
    setCurrentSlide(prev => prev <= 1 ? prev : prev - 1);
  }, []);

  const goToSlide = (slide: number) => {
    setCurrentSlide(slide);
    setShowMenu(false);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const sharePresentation = async () => {
    if (navigator.share) {
      await navigator.share({
        title: 'AI와 클라우드 시대 개발자 생존 전략',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Background elements */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-40" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      {/* Slide content */}
      <AnimatePresence mode="wait" custom={1}>
        <motion.div
          key={currentSlide}
          custom={1}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {children[currentSlide - 1]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="glass-card px-6 py-3 flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={previousSlide}
            disabled={currentSlide === 1}
            className="hover:bg-white/10"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex items-center gap-2">
            {Array.from({ length: children.length }, (_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i + 1)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i + 1 === currentSlide 
                    ? 'bg-blue-400 w-6' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === children.length}
            className="hover:bg-white/10"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Top Controls */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="glass-card hover:bg-white/10"
        >
          {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleFullscreen}
          className="glass-card hover:bg-white/10"
        >
          <Maximize className="w-4 h-4" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={sharePresentation}
          className="glass-card hover:bg-white/10"
        >
          <Share className="w-4 h-4" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowMenu(!showMenu)}
          className="glass-card hover:bg-white/10"
        >
          <Menu className="w-4 h-4" />
        </Button>
      </div>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <div 
          className="h-full bg-gradient-primary transition-all duration-300"
          style={{ width: `${(currentSlide / children.length) * 100}%` }}
        />
      </div>

      {/* Slide Number */}
      <div className="fixed top-4 left-4 z-50 glass-card px-3 py-1 text-sm text-muted-foreground">
        {currentSlide} / {children.length}
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setShowMenu(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card p-6 max-w-md w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold mb-4">슬라이드 목록</h3>
              <div className="space-y-2">
                {titles.map((title, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index + 1)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      index + 1 === currentSlide 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{index + 1}. {title}</span>
                      {index + 1 === currentSlide && (
                        <span className="text-xs bg-blue-500/30 px-2 py-1 rounded">현재</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PresentationContainer;
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSlide = () => {
  const { scrollYProgress } = useScroll();
  const yCircle1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yCircle2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const pageVariants = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0 } 
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Floating blur circles */}
      <motion.div 
        aria-hidden 
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,hsl(var(--blue-400)/0.25),transparent)] blur-2xl floating" 
        style={{ y: yCircle1 }} 
      />
      <motion.div 
        aria-hidden 
        className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,hsl(var(--violet-400)/0.25),transparent)] blur-2xl floating" 
        style={{ y: yCircle2 }} 
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container px-6 max-w-4xl text-center space-y-8"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="text-gradient-blue">AI와 클라우드 시대,</span>
          <br />
          개발자의{" "}
          <span className="text-gradient-purple">진짜 생존 전략</span>
        </h1>
        
        <div className="space-y-6">
          <p className="text-2xl md:text-3xl text-muted-foreground font-semibold">
            "2025년, 코드를 짜는 시대는 끝났다"
          </p>
          
          <div className="space-y-2 text-lg md:text-xl">
            <p className="text-gradient-green font-semibold">김수종</p>
            <p className="text-muted-foreground">클라우드 솔루션 아키텍트</p>
          </div>
        </div>

        {/* Navigation hint */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="text-xs text-muted-foreground text-center">
            <p>키보드 화살표 또는 좌측 네비게이션으로 이동</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSlide;
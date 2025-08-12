import React from "react";
import { motion, useScroll } from "framer-motion";

const FloatingProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-50 h-1">
      <motion.div
        className="h-full origin-left bg-[hsl(var(--blue-400))]"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default FloatingProgress;

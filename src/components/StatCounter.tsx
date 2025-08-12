import React, { useEffect, useRef, useState } from "react";
import { animate, useInView, useMotionValue } from "framer-motion";

interface StatCounterProps {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ to, duration = 1.8, prefix = "", suffix = "" }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      setValue(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [count]);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};

export default StatCounter;


"use client";

// VISTA · Barra de progreso de scroll en la parte superior.
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX: progress }}
      className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-brand to-brand2"
    />
  );
}

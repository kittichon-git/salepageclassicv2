"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

// Both states visible — used on mobile and when motion is reduced
const variantsStatic: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export function ScrollReveal({ children, delay = 0, className }: Props) {
  const prefersReduced = useReducedMotion();
  // Default true (mobile-first) so SSR + initial hydration never renders opacity:0
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Only true desktop pointer devices (mouse) get the scroll animation
    setIsMobile(!window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const isStatic = prefersReduced || isMobile;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={isStatic ? variantsStatic : variants}
      transition={
        isStatic
          ? { duration: 0, delay: 0 }
          : { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }
      }
    >
      {children}
    </motion.div>
  );
}

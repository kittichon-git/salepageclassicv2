"use client";

import { useEffect, useState } from "react";

export type ScrollDirection = "up" | "down" | null;

export function useScrollDirection(threshold: number = 8): {
  direction: ScrollDirection;
  scrollY: number;
} {
  const [direction, setDirection] = useState<ScrollDirection>(null);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      if (Math.abs(delta) >= threshold) {
        setDirection(delta > 0 ? "down" : "up");
        lastY = currentY;
      }

      setScrollY(currentY);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { direction, scrollY };
}

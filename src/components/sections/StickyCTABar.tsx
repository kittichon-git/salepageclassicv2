"use client";

import { useEffect, useState } from "react";
import { CTAButton } from "@/components/ui/CTAButton";
import { cta } from "@/lib/data";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export function StickyCTABar() {
  const { direction, scrollY } = useScrollDirection();
  const [finalCtaVisible, setFinalCtaVisible] = useState(false);

  // Hide when S10 final CTA is ≥30% visible
  useEffect(() => {
    const el = document.querySelector("[data-final-cta]");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFinalCtaVisible(entry?.isIntersecting ?? false),
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Show: scrolled past hero AND scrolling down AND S10 not in view
  const isVisible = scrollY >= 80 && direction === "down" && !finalCtaVisible;

  return (
    <div
      role="region"
      aria-label="Quick action"
      className={[
        "lg:hidden",
        "fixed inset-x-0 bottom-0 z-50",
        "border-t-[1.5px] border-[var(--color-navy-500)]",
        "bg-[rgba(255,253,247,0.96)] backdrop-blur-sm",
        "shadow-[0_-3px_0_rgba(35,49,73,0.48)]",
        "px-4 pt-3 pb-3",
        "transition-transform duration-300 ease-out motion-reduce:transition-none",
        isVisible ? "translate-y-0" : "translate-y-full",
      ].join(" ")}
    >
      <CTAButton href={cta.lineUrl} variant="line" size="md" showIcon trackingLocation="sticky" className="w-full">
        {cta.stickyLabel}
      </CTAButton>
    </div>
  );
}

"use client";

import { CTAButton } from "@/components/ui/CTAButton";
import { cta } from "@/lib/data";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export function StickyCTABar() {
  const { direction, scrollY } = useScrollDirection();

  // Hide: at top of page (Hero CTA still visible) | scrolling up (TopNav takes over)
  // Show: scrolling down after 80px
  const isVisible = scrollY >= 80 && direction === "down";

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
      <CTAButton href={cta.lineUrl} variant="line" size="md" showIcon className="w-full">
        {cta.stickyLabel}
      </CTAButton>
    </div>
  );
}

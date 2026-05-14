"use client";

import { CTAButton } from "@/components/ui/CTAButton";
import { cta } from "@/lib/data";

export function StickyCTABar() {
  return (
    <div
      aria-label="ปุ่ม CTA ด่วน"
      className={[
        "lg:hidden",
        "fixed bottom-0 inset-x-0 z-50",
        "border-t-[1.5px] border-[var(--color-navy-500)]",
        "bg-[rgba(255,253,247,0.96)] backdrop-blur-sm",
        "shadow-[0_-3px_0_rgba(35,49,73,0.48)]",
        "px-4 py-3",
      ].join(" ")}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <CTAButton href={cta.lineUrl} variant="line" size="md" showIcon className="w-full">
        {cta.stickyLabel}
      </CTAButton>
    </div>
  );
}

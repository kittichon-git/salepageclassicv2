"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { cta, stickyCta } from "@/lib/data";

export function StickyCTABar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const trigger = document.querySelector(stickyCta.showAfterSelector);
    const hideTargets = stickyCta.hideOnSelectors
      .map((s) => document.querySelector(s))
      .filter((el): el is Element => el !== null);

    let shownByTrigger = false;
    let hiddenByOverlap = false;

    const update = () => setShow(shownByTrigger && !hiddenByOverlap);

    const triggerObs = trigger
      ? new IntersectionObserver(
          ([entry]) => {
            if (!entry) return;
            // show เมื่อ trigger เริ่มหลุดจอด้านบน (passed)
            if (entry.boundingClientRect.top < 0) {
              shownByTrigger = true;
            } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
              shownByTrigger = false;
            }
            update();
          },
          { threshold: [0, 1] }
        )
      : null;

    if (triggerObs && trigger) triggerObs.observe(trigger);

    const hideObs = new IntersectionObserver(
      (entries) => {
        hiddenByOverlap = entries.some((e) => e.isIntersecting);
        update();
      },
      { threshold: 0.2 }
    );

    hideTargets.forEach((t) => hideObs.observe(t));

    return () => {
      triggerObs?.disconnect();
      hideObs.disconnect();
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40",
        "lg:hidden",
        "transition-transform duration-300",
        show ? "translate-y-0" : "translate-y-full"
      )}
      aria-hidden={!show}
    >
      <div
        className={cn(
          "border-t border-[var(--color-beige-300)] bg-[var(--color-cream-50)]/95 backdrop-blur",
          "px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]",
          "shadow-[0_-4px_16px_rgba(58,53,48,.08)]"
        )}
      >
        <Link
          href={cta.lineUrl}
          className={cn(
            "flex w-full items-center justify-center gap-2 rounded-[var(--radius-lg)]",
            "bg-[var(--color-line-green)] px-5 py-3.5 text-base font-semibold text-white",
            "shadow-[var(--shadow-soft)] active:brightness-95"
          )}
        >
          {stickyCta.label.replace(" →", "")}
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}

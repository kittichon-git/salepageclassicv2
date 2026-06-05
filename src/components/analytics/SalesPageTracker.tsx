"use client";

import { useEffect } from "react";
import { trackSpEvent } from "@/lib/track";

function toSpPosition(loc: string): string {
  return loc === "mobile-bar" ? "sticky" : loc;
}

export function SalesPageTracker() {
  useEffect(() => {
    // ── Time-active timers ──────────────────────────────────────────────────
    const t3 = setTimeout(() => {
      if (document.visibilityState === "visible") {
        trackSpEvent("sp_3s_active");
      }
    }, 3000);

    const t10 = setTimeout(() => {
      if (document.visibilityState === "visible") {
        trackSpEvent("sp_10s_active");
      }
    }, 10000);

    // ── Scroll depth ────────────────────────────────────────────────────────
    const firedScroll = new Set<number>();

    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = (scrolled / total) * 100;

      if (pct >= 25 && !firedScroll.has(25)) {
        firedScroll.add(25);
        trackSpEvent("sp_scroll_25", { scroll_percent: 25 });
      }
      if (pct >= 50 && !firedScroll.has(50)) {
        firedScroll.add(50);
        trackSpEvent("sp_scroll_50", { scroll_percent: 50 });
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    // ── CTA visibility ──────────────────────────────────────────────────────
    const firedPosition = new Set<string>();
    const observers: IntersectionObserver[] = [];

    function observeCtas() {
      const ctaEls =
        document.querySelectorAll<HTMLElement>("[data-cta-position]");
      ctaEls.forEach((el) => {
        const rawPos = el.dataset.ctaPosition ?? "other";
        const position = toSpPosition(rawPos);
        if (firedPosition.has(position)) return;

        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry?.isIntersecting && !firedPosition.has(position)) {
              firedPosition.add(position);
              trackSpEvent("sp_cta_visible", {
                position,
                cta_text: el.textContent?.trim().slice(0, 80) ?? "",
              });
              obs.disconnect();
            }
          },
          { threshold: 0.5 },
        );
        obs.observe(el);
        observers.push(obs);
      });
    }

    const rafId = requestAnimationFrame(observeCtas);

    return () => {
      clearTimeout(t3);
      clearTimeout(t10);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";
import { trackSpEvent } from "@/lib/track";

function toSpPosition(loc: string): string {
  return loc === "mobile-bar" ? "sticky" : loc;
}

export function SalesPageTracker() {
  useEffect(() => {
    // ── Time-active timers (visibility-aware accumulator) ───────────────────
    let activeMs = 0;
    let prevTick = Date.now();
    let t3Fired = false, t10Fired = false;
    const engagementInterval = setInterval(() => {
      const now = Date.now();
      if (document.visibilityState === "visible") {
        activeMs += now - prevTick;
        if (!t3Fired && activeMs >= 3000) { t3Fired = true; trackSpEvent("sp_3s_active"); }
        if (!t10Fired && activeMs >= 10000) { t10Fired = true; trackSpEvent("sp_10s_active"); }
        if (t3Fired && t10Fired) clearInterval(engagementInterval);
      }
      prevTick = now;
    }, 500);

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
      if (pct >= 90 && !firedScroll.has(90)) {
        firedScroll.add(90);
        trackSpEvent("sp_scroll_90", { scroll_percent: 90 });
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
                cta_location: position,
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
      clearInterval(engagementInterval);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return null;
}

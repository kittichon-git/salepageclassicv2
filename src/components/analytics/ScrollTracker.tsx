"use client";

import { useEffect, useRef } from "react";

export function ScrollTracker() {
  const firedRef = useRef(false);

  useEffect(() => {
    const el = document.getElementById("fit");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !firedRef.current) {
          firedRef.current = true;
          if (typeof window.fbq === "function") {
            window.fbq("track", "ViewContent", { content_name: "salepage_50pct" });
          }
          if (typeof window.gtag === "function") {
            window.gtag("event", "scroll_50", { event_category: "engagement" });
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div aria-hidden="true" />;
}

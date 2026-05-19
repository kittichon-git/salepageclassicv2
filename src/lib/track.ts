"use client";

type LeadLocation = "hero" | "offer" | "final" | "sticky" | "mobile-bar";

export function trackLead(location: LeadLocation) {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;

  window.fbq("track", "Lead", {
    content_name: "Sales Page CTA",
    content_category: location,
    value: 890,
    currency: "THB",
  });
}

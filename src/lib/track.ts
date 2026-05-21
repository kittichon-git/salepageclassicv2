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

export function trackLineAdd(location: LeadLocation) {
  if (typeof window === "undefined") return;

  // Meta Pixel — Custom Event
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", "LINE_ADD", {
      content_name: "แค่เปลี่ยนคำ ก็ทำเงิน",
      content_category: "line_oa_add",
      value: 890,
      currency: "THB",
      cta_location: location,
    });
  }

  // GA4
  if (typeof window.gtag === "function") {
    window.gtag("event", "line_add", {
      event_category: "conversion",
      event_label: location,
      value: 890,
    });
    window.gtag("event", "generate_lead", {
      value: 890,
      currency: "THB",
      event_category: "cta_click",
      event_label: location,
    });
  }
}

export function buildLineUrlWithUtm(baseUrl: string): string {
  if (typeof window === "undefined") return baseUrl;
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"]) {
    const val = params.get(key);
    if (val) utm[key] = val;
  }
  if (Object.keys(utm).length === 0) return baseUrl;
  const state = new URLSearchParams(utm).toString();
  const sep = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${sep}liff.state=${encodeURIComponent(state)}`;
}

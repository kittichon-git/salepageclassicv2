"use client";

import { getFbp, getFbc } from "./fb-cookies";

type LeadLocation = "hero" | "offer" | "final" | "sticky" | "mobile-bar";

const CAPI_LEAD_URL =
  (process.env.NEXT_PUBLIC_PHACHARA_APP_URL ?? "https://app.phachara.com") +
  "/api/fb-capi/lead";

export function trackLead(location: LeadLocation) {
  if (typeof window === "undefined") return;

  const eventId = crypto.randomUUID();
  const fbp = getFbp();
  const fbc = getFbc();

  // Client Pixel — guard แยก ไม่กระทบ CAPI
  if (typeof window.fbq === "function") {
    window.fbq(
      "track",
      "Lead",
      {
        content_name: "add_line",
        content_category: location,
        value: 0,
        currency: "THB",
      },
      { eventID: eventId }
    );
  }

  // Server CAPI dedup — fire-and-forget, keepalive ให้ request เสร็จแม้ navigate
  fetch(CAPI_LEAD_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      event_id: eventId,
      event_name: "Lead",
      event_source_url: window.location.href,
      fbp,
      fbc,
    }),
    mode: "cors",
    credentials: "omit",
    keepalive: true,
  }).catch(() => {
    // ไม่บล็อก UX ถ้า CAPI fail
  });
}

export function trackLineAdd(location: LeadLocation) {
  if (typeof window === "undefined") return;

  const eventId = crypto.randomUUID();

  // Meta Pixel — Custom Event
  if (typeof window.fbq === "function") {
    window.fbq(
      "trackCustom",
      "LINE_ADD",
      {
        content_name: "แค่เปลี่ยนคำ ก็ทำเงิน",
        content_category: "line_oa_add",
        value: 0,
        currency: "THB",
        cta_location: location,
      },
      { eventID: eventId }
    );
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

// ── sp_* behavior event layer ─────────────────────────────────────────────────

function getSpSessionId(): string {
  try {
    const existing = sessionStorage.getItem("sp_session_id");
    if (existing) return existing;
    const id = crypto.randomUUID();
    sessionStorage.setItem("sp_session_id", id);
    return id;
  } catch {
    // sessionStorage unavailable (private mode, iframe restriction, etc.)
    return "no_storage_" + Math.random().toString(36).slice(2, 10);
  }
}

function getSpBaseParams(): Record<string, unknown> {
  const p = new URLSearchParams(window.location.search);
  const base: Record<string, unknown> = {
    page_path: window.location.pathname,
    page_location: window.location.href,
    device: window.matchMedia("(hover: hover) and (pointer: fine)").matches
      ? "desktop"
      : "mobile",
    sp_session_id: getSpSessionId(),
  };
  for (const key of [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
  ]) {
    const val = p.get(key);
    if (val) base[key] = val;
  }
  return base;
}

export function trackSpEvent(
  eventName: string,
  extraParams: Record<string, unknown> = {},
  useBeacon = false,
): void {
  if (typeof window === "undefined") return;
  const params = { ...getSpBaseParams(), ...extraParams };

  if (typeof window.gtag === "function") {
    window.gtag(
      "event",
      eventName,
      useBeacon ? { ...params, transport_type: "beacon" } : params,
    );
  }
  if (typeof window.clarity === "function") {
    window.clarity("event", eventName);
  }
}

export function buildLineUrlWithUtm(baseUrl: string): string {
  if (typeof window === "undefined") return baseUrl;
  const params = new URLSearchParams(window.location.search);
  const state: Record<string, string> = {};
  for (const key of [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "fbclid",
  ]) {
    const val = params.get(key);
    if (val) state[key] = val;
  }

  // เพิ่ม fbp/fbc ใน liff.state เพื่อ LIFF อ่านส่งเข้า /api/enroll/start
  const fbp = getFbp();
  const fbc = getFbc();
  if (fbp) state["fbp"] = fbp;
  if (fbc) state["fbc"] = fbc;

  if (Object.keys(state).length === 0) return baseUrl;
  const stateStr = new URLSearchParams(state).toString();
  const sep = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${sep}liff.state=${encodeURIComponent(stateStr)}`;
}

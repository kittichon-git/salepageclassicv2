// Cookie consent helpers — implied consent model
// null / 'all' → analytics load · 'essential' → analytics blocked

export const CONSENT_EVENT = "cookie_consent_changed";
const CONSENT_KEY = "cookie_consent";

export type ConsentValue = "all" | "essential";

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(CONSENT_KEY);
  if (v === "all" || v === "essential") return v;
  return null;
}

export function setConsent(value: ConsentValue): void {
  localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

/** Implied consent model: consent === null → load (user hasn't opted out yet) */
export function hasAnalyticsConsent(): boolean {
  return getConsent() !== "essential";
}

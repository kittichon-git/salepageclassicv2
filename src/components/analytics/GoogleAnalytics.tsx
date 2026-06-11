"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;

// Loads the GA4 measurement library async (afterInteractive).
// The gtag stub + config is injected as a raw <script> in the root layout <head>
// so window.gtag is defined before hydration — see app/layout.tsx.
export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      strategy="afterInteractive"
    />
  );
}

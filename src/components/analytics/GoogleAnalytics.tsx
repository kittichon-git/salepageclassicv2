"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { hasAnalyticsConsent, CONSENT_EVENT } from "@/lib/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;

export function GoogleAnalytics() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(hasAnalyticsConsent());
    const handler = () => setShow(hasAnalyticsConsent());
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  if (!GA_ID || !show) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}

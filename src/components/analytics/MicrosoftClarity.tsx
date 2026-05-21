"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { hasAnalyticsConsent, CONSENT_EVENT } from "@/lib/consent";

export function MicrosoftClarity() {
  const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(hasAnalyticsConsent());
    const handler = () => setShow(hasAnalyticsConsent());
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  if (!projectId || !show) return null;

  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${projectId}");`,
      }}
    />
  );
}

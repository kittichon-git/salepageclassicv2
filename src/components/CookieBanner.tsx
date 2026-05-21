"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getConsent, setConsent } from "@/lib/consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === null) setVisible(true);
  }, []);

  if (!visible) return null;

  function handleAccept() {
    setConsent("all");
    setVisible(false);
  }

  function handleEssential() {
    setConsent("essential");
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-label="การตั้งค่าคุกกี้"
      aria-live="polite"
      className={[
        "fixed inset-x-0 bottom-0 z-[60]",
        "bg-[rgba(20,29,51,0.96)] backdrop-blur-sm",
        "border-t-[1.5px] border-[var(--color-navy-500)]",
        "px-4 py-4",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-lg flex-col gap-3">
        <p className="text-sm leading-[1.6] text-[var(--color-cream)]">
          เว็บไซต์นี้ใช้คุกกี้เพื่อวิเคราะห์การใช้งานและปรับปรุงประสบการณ์ของคุณ{" "}
          <Link
            href="/legal/cookie"
            className="underline underline-offset-2 opacity-80 hover:opacity-100"
          >
            ดูนโยบายคุกกี้
          </Link>
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleAccept}
            className={[
              "flex-1 px-4 py-2 text-sm font-bold",
              "border-[1.5px] border-[var(--color-navy-500)]",
              "bg-[var(--color-amber-400)] text-[var(--color-navy-900)]",
            ].join(" ")}
          >
            ยอมรับทั้งหมด
          </button>
          <button
            type="button"
            onClick={handleEssential}
            className={[
              "flex-1 px-4 py-2 text-sm",
              "border-[1.5px] border-[rgba(255,253,247,0.35)]",
              "text-[var(--color-cream)]",
            ].join(" ")}
          >
            จำเป็นเท่านั้น
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { trackSpEvent } from "@/lib/track";

const LINE_ID = "@phachara";
const LINE_DIRECT_URL = "https://line.me/R/ti/p/@phachara";

const STEPS = [
  "ก๊อป @phachara (ปุ่มด้านบน)",
  "เปิดแอป LINE → แตะช่องค้นหา",
  "วาง @phachara แล้วกดเพิ่มเพื่อน",
  'พิมพ์ "อ่านฟรี" รับลิงก์ 2 บททันที',
] as const;

interface Props {
  ttclid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

export function TikTokBridgeContent({
  ttclid,
  utmSource,
  utmMedium,
  utmCampaign,
  utmContent,
  utmTerm,
}: Props) {
  const [copied, setCopied] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Persist attribution to localStorage (once)
    try {
      if (!localStorage.getItem("tt_attribution")) {
        const attr: Record<string, string> = {};
        if (ttclid) attr.ttclid = ttclid;
        if (utmSource) attr.utm_source = utmSource;
        if (utmMedium) attr.utm_medium = utmMedium;
        if (utmCampaign) attr.utm_campaign = utmCampaign;
        if (utmContent) attr.utm_content = utmContent;
        if (Object.keys(attr).length > 0) {
          localStorage.setItem("tt_attribution", JSON.stringify(attr));
        }
      }
    } catch {
      // localStorage unavailable — ignore
    }

    // Fire view event
    trackSpEvent("view_tiktok_bridge", {
      ...(ttclid && { ttclid }),
      ...(utmSource && { utm_source: utmSource }),
      ...(utmCampaign && { utm_campaign: utmCampaign }),
      ...(utmContent && { utm_content: utmContent }),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // QR IntersectionObserver — fire once when 50% visible
  useEffect(() => {
    const el = qrRef.current;
    if (!el) return;
    let fired = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!fired && entries[0]?.isIntersecting) {
          fired = true;
          trackSpEvent("view_line_qr");
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleCopy() {
    navigator.clipboard.writeText(LINE_ID).then(() => {
      setCopied(true);
      trackSpEvent("copy_line_id");
      setTimeout(() => setCopied(false), 3000);
    });
  }

  function handleOpenLine() {
    trackSpEvent("click_open_line");
  }

  return (
    <div className="-mt-16 bg-[#f6eedb]">
      {/* ── Sticky hint bar ── */}
      <div className="sticky top-0 z-50 border-b border-[rgba(36,54,80,0.1)] bg-[#efe3c8] px-4 py-[9px] text-center text-[12px] leading-[1.5] text-[#5b687a]">
        📌 กดปุ่มแล้ว LINE ไม่เปิด? แตะ{" "}
        <span className="font-bold text-[#243650]">•••</span> มุมขวาบน แล้วเลือก{" "}
        <span className="font-bold text-[#243650]">&lsquo;เปิดในเบราว์เซอร์&rsquo;</span>
      </div>

      {/* ── Page content ── */}
      <div className="flex flex-col items-center px-5">
        <div className="flex w-full max-w-[430px] flex-col gap-8 py-9">

          {/* Brand bar */}
          <div className="flex items-center gap-[9px]">
            <div className="grid h-[30px] w-[30px] flex-none place-items-center rounded-[9px] bg-[#2a3f5e] font-heading text-base font-black leading-none text-[#f6eedb]">
              ค
            </div>
            <span className="font-heading text-[18px] font-black text-[#243650]">คำขาย</span>
          </div>

          {/* Hero */}
          <div>
            <h1 className="font-heading text-[36px] font-black leading-[1.17] tracking-[-0.3px] text-[#243650]">
              อ่านต่อฟรี 2 บทเต็ม
              <br />
              ในแชต LINE
            </h1>
            <p className="mt-3 text-[16px] leading-[1.55] text-[#5b687a]">
              วิธีเปลี่ยน{" "}
              <span className="whitespace-nowrap font-semibold text-[#243650]">
                &lsquo;คำขาย&rsquo;
              </span>{" "}
              ธรรมดา ให้ลูกค้าเห็นคุณค่าและอยากซื้อ
            </p>
            <p className="mt-[7px] text-[12.5px] font-semibold text-[#c0552c]">
              ฟรี 100% · ไม่ต้องกรอกบัตร
            </p>
          </div>

          {/* Primary CTA — Copy LINE ID */}
          <div className="rounded-[18px] bg-[#2a3f5e] px-6 py-6 shadow-[0_18px_40px_-20px_rgba(36,54,80,0.55)]">
            <p className="mb-[2px] text-[11px] font-bold uppercase tracking-[1.5px] text-[#c9d2e0]">
              LINE ID
            </p>
            <p className="font-heading text-[34px] font-black leading-none text-white">
              @phachara
            </p>
            <button
              onClick={handleCopy}
              className={`mt-5 w-full rounded-full py-[14px] text-[16px] font-bold leading-[1.3] transition-all active:scale-95 ${
                copied
                  ? "bg-[#1a7f37] text-white"
                  : "bg-[#06C755] text-white hover:brightness-110"
              }`}
            >
              {copied
                ? "✓ ก๊อปแล้ว — เปิดแอป LINE แล้ววางในช่องค้นหาได้เลย"
                : "ก๊อป LINE ID"}
            </button>
          </div>

          {/* Steps */}
          <div>
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[1.5px] text-[#c0552c]">
              วิธีรับ 2 บทฟรี
            </p>
            <ol className="flex flex-col gap-[14px]">
              {STEPS.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="grid h-[26px] w-[26px] flex-none place-items-center rounded-full bg-[#2a3f5e] text-[12px] font-bold leading-none text-white">
                    {i + 1}
                  </span>
                  <span className="pt-[3px] text-[15px] leading-[1.5] text-[#243650]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Secondary — direct LINE link */}
          <p className="text-center text-[13.5px] text-[#5b687a]">
            เครื่องคุณเปิด LINE ได้อยู่แล้ว?{" "}
            <a
              href={LINE_DIRECT_URL}
              onClick={handleOpenLine}
              className="font-semibold text-[#243650] underline underline-offset-2"
            >
              เปิด LINE โดยตรง
            </a>
          </p>

          {/* QR section */}
          <div
            ref={qrRef}
            className="flex flex-col items-center gap-3 rounded-[14px] border border-[rgba(36,54,80,0.1)] bg-[#efe3c8] px-6 py-5"
          >
            <p className="text-center text-[13px] leading-[1.5] text-[#5b687a]">
              เปิดจากคอมหรือมีมือถืออีกเครื่อง? สแกนเพิ่มเพื่อนได้เลย
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/line_qr_code.jpg"
              alt="LINE QR Code @phachara"
              className="w-44 rounded-[10px] border border-[rgba(36,54,80,0.12)]"
            />
          </div>

          {/* Footer microcopy */}
          <p className="pb-2 text-center text-[11.5px] text-[#5b687a]">
            ฟรี 100% · ไม่ต้องกรอกบัตร · ไม่ใช่แนวคุณ ปิดได้ทุกเมื่อ
          </p>

        </div>
      </div>
    </div>
  );
}

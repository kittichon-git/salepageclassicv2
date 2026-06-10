import type { Metadata } from "next";
import { TikTokPixel } from "@/components/analytics/TikTokPixel";
import { TikTokBridgeCta } from "./TikTokBridgeCta";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "ขยันโพสต์ทุกวัน แต่ยอดขายยังนิ่ง? | phachara.com",
  description:
    "ลองอ่านฟรี 2 บทแรก แล้วดูวิธีเปลี่ยนคำขายธรรมดา ให้ลูกค้าเห็นคุณค่าและอยากซื้อมากขึ้น",
  robots: { index: false, follow: false },
};

interface Props {
  searchParams: Promise<{
    ttclid?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
  }>;
}

// Relevance pills and microcopy items — static, rendered server-side
const PILLS = ["คนขายของออนไลน์", "เจ้าของเพจ", "ฟรีแลนซ์"] as const;
const MICROCOPY = ["ไม่ต้องกรอกบัตร", "อ่านฟรีก่อน", "ไม่ใช่แนวคุณ ปิดได้เลย"] as const;

export default async function TikTokBridgePage({ searchParams }: Props) {
  const p = await searchParams;
  const { ttclid, utm_source, utm_medium, utm_campaign, utm_content, utm_term } = p;

  return (
    <>
      {/* TikTok base pixel — page-specific */}
      <TikTokPixel />

      {/*
        -mt-16 pulls the stage up to undo the body pt-16 from layout.tsx,
        so the cream background fills the full viewport.
      */}
      <div className="-mt-16 flex min-h-[100dvh] flex-col items-center bg-[#f6eedb] px-5">
        <div className="flex w-full max-w-[430px] min-h-[100dvh] flex-col justify-between py-8">

          {/* ── Brand bar ── */}
          <div className="flex items-center gap-[9px]">
            <div className="grid h-[30px] w-[30px] flex-none place-items-center rounded-[9px] bg-[#2a3f5e] font-heading text-base font-black leading-none text-[#f6eedb]">
              ค
            </div>
            <span className="font-heading text-[18px] font-black text-[#243650]">คำขาย</span>
            <span className="ml-auto whitespace-nowrap rounded-full border border-[rgba(192,85,44,0.28)] bg-[rgba(192,85,44,0.1)] px-[11px] py-[5px] text-[11px] font-semibold tracking-[0.2px] text-[#c0552c]">
              อ่านฟรีใน LINE
            </span>
          </div>

          {/* ── Middle: Hero + Callout ── */}
          <div className="flex flex-col gap-5">
            {/* Hero */}
            <div>
              <div className="mb-4 flex items-center gap-[7px]">
                <span className="h-[2px] w-[22px] flex-none rounded-[2px] bg-[#c0552c]" />
                <span className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#c0552c]">
                  สำหรับคนขายของออนไลน์
                </span>
              </div>
              <h1 className="font-heading text-[38px] font-black leading-[1.16] tracking-[-0.3px] text-[#243650]">
                ขยันโพสต์ทุกวัน
                <br />
                แต่ยอดขาย<span className="text-[#c0552c]">ยังนิ่ง?</span>
              </h1>
            </div>

            {/* Callout box */}
            <div className="relative rounded-[18px] bg-[#2a3f5e] px-[26px] pb-[28px] pt-[30px] shadow-[0_18px_40px_-20px_rgba(36,54,80,0.55)]">
              <span className="pointer-events-none absolute left-5 top-0.5 select-none font-heading text-[62px] font-black leading-none text-[#c0552c] opacity-60">
                &ldquo;
              </span>
              <p className="relative font-heading text-[22px] font-semibold leading-[1.46] text-white">
                ปัญหาไม่ใช่ว่าสินค้าคุณไม่ดี &mdash; แต่อยู่ที่{" "}
                <span className="text-[#efa766]">&ldquo;คำขาย&rdquo;</span>{" "}
                ที่ยังไม่ทำให้ลูกค้าอยากทัก
              </p>
              <p className="mt-[15px] text-[15.5px] leading-[1.55] text-[#c9d2e0]">
                <strong className="font-semibold text-white">ลองอ่านฟรี 2 บทแรก</strong>{" "}
                แล้วดูวิธีเปลี่ยนคำขายธรรมดา ให้ลูกค้าเห็นคุณค่าและอยากซื้อมากขึ้น
              </p>
            </div>
          </div>

          {/* ── Bottom: Pills → Microcopy → CTA ── */}
          <div className="flex flex-col gap-4">
            {/* Relevance pills */}
            <div className="flex flex-wrap justify-center gap-[7px]">
              {PILLS.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-[rgba(36,54,80,0.12)] bg-[#efe3c8] px-[11px] py-[6px] text-[12px] font-medium text-[#243650]"
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Microcopy reassurance */}
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              {MICROCOPY.map((text) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-[6px] text-[12.5px] font-medium text-[#5b687a]"
                >
                  <span className="h-[4px] w-[4px] flex-none rounded-full bg-[#c0552c]" />
                  {text}
                </span>
              ))}
            </div>

            {/* CTA button (ห้ามแตะ component นี้) */}
            <div className="flex flex-col items-center gap-[11px]">
              <TikTokBridgeCta
                ttclid={ttclid}
                utmSource={utm_source}
                utmMedium={utm_medium}
                utmCampaign={utm_campaign}
                utmContent={utm_content}
                utmTerm={utm_term}
              />
              <p className="text-center text-[11.5px] text-[#5b687a]">
                เริ่มอ่านได้ทันทีในแชต LINE · ฟรี 100%
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Debug panel (dev only) ── */}
      {process.env.NODE_ENV === "development" && (
        <aside className="fixed bottom-4 right-4 z-50 max-w-xs rounded-lg border border-[#2a3f5e]/20 bg-[#efe3c8] p-3 font-mono text-xs text-[#5b687a]">
          <p className="mb-1 font-semibold text-[#243650]">🔍 Query params</p>
          <ul className="space-y-0.5">
            <li>ttclid = <span className="text-[#c0552c]">{ttclid ?? "(none)"}</span></li>
            <li>utm_source = <span className="text-[#c0552c]">{utm_source ?? "(none)"}</span></li>
            <li>utm_medium = <span className="text-[#c0552c]">{utm_medium ?? "(none)"}</span></li>
            <li>utm_campaign = <span className="text-[#c0552c]">{utm_campaign ?? "(none)"}</span></li>
            <li>utm_content = <span className="text-[#c0552c]">{utm_content ?? "(none)"}</span></li>
            <li>utm_term = <span className="text-[#c0552c]">{utm_term ?? "(none)"}</span></li>
          </ul>
        </aside>
      )}
    </>
  );
}

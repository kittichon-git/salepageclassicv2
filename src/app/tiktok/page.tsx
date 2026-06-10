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

export default async function TikTokBridgePage({ searchParams }: Props) {
  const p = await searchParams;

  const { ttclid, utm_source, utm_medium, utm_campaign, utm_content, utm_term } = p;

  return (
    <>
      {/* TikTok base pixel — page-specific เท่านั้น */}
      <TikTokPixel />

      <main className="flex min-h-screen flex-col items-center justify-center bg-[#0f0f0f] px-5 py-16 text-white">
        {/* ── Copy ── */}
        <div className="w-full max-w-md space-y-6 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white">
            ขยันโพสต์ทุกวัน
            <br />
            แต่ยอดขายยังนิ่ง?
          </h1>

          <p className="text-base leading-relaxed text-white/75">
            ปัญหาไม่ใช่ว่าสินค้าคุณไม่ดี &mdash; แต่อยู่ที่ &ldquo;คำขาย&rdquo; ที่ยังไม่ทำให้ลูกค้าอยากทัก
          </p>

          <p className="text-base leading-relaxed text-white/60">
            ลองอ่านฟรี 2 บทแรก แล้วดูวิธีเปลี่ยนคำขายธรรมดา
            ให้ลูกค้าเห็นคุณค่าและอยากซื้อมากขึ้น
          </p>

          <p className="text-sm text-white/40">
            เหมาะกับคนขายของออนไลน์ / เจ้าของเพจ / ฟรีแลนซ์
          </p>

          <p className="text-sm text-white/45">
            ไม่ต้องกรอกบัตร &middot; อ่านฟรีก่อน &middot; ไม่ใช่แนวคุณ ปิดได้เลย
          </p>

          {/* ── CTA ── */}
          <div className="flex justify-center pt-2">
            <TikTokBridgeCta
              ttclid={ttclid}
              utmSource={utm_source}
              utmMedium={utm_medium}
              utmCampaign={utm_campaign}
              utmContent={utm_content}
              utmTerm={utm_term}
            />
          </div>
        </div>

        {/* ── Debug panel (dev only) ── */}
        {process.env.NODE_ENV === "development" && (
          <aside className="mt-12 w-full max-w-md rounded-lg border border-white/10 bg-white/5 p-4 font-mono text-xs text-white/60">
            <p className="mb-2 font-semibold text-white/80">🔍 Query params</p>
            <ul className="space-y-1">
              <li>ttclid = <span className="text-amber-400">{ttclid ?? "(none)"}</span></li>
              <li>utm_source = <span className="text-amber-400">{utm_source ?? "(none)"}</span></li>
              <li>utm_medium = <span className="text-amber-400">{utm_medium ?? "(none)"}</span></li>
              <li>utm_campaign = <span className="text-amber-400">{utm_campaign ?? "(none)"}</span></li>
              <li>utm_content = <span className="text-amber-400">{utm_content ?? "(none)"}</span></li>
              <li>utm_term = <span className="text-amber-400">{utm_term ?? "(none)"}</span></li>
            </ul>
          </aside>
        )}
      </main>
    </>
  );
}

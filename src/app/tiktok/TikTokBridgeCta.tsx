"use client";

import { trackLineAdd, trackSpEvent } from "@/lib/track";

// LINE oaMessage พร้อม prefill text "อ่านฟรีจาก TikTok" (static, ไม่มี per-click token)
const LINE_URL =
  "https://line.me/R/oaMessage/%40049vlbwy/?" +
  encodeURIComponent("อ่านฟรีจาก TikTok");

interface Props {
  ttclid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

export function TikTokBridgeCta({
  ttclid,
  utmSource,
  utmMedium,
  utmCampaign,
  utmContent,
  utmTerm,
}: Props) {
  function handleClick() {
    // 1. GA4 LineAddIntent (รวม utm + ttclid) — trackSpEvent อ่าน utm จาก URL อัตโนมัติ
    //    ส่ง ttclid เพิ่มเติมผ่าน extraParams
    trackSpEvent("LineAddIntent", {
      ...(ttclid && { ttclid }),
      ...(utmSource && { utm_source: utmSource }),
      ...(utmMedium && { utm_medium: utmMedium }),
      ...(utmCampaign && { utm_campaign: utmCampaign }),
      ...(utmContent && { utm_content: utmContent }),
      ...(utmTerm && { utm_term: utmTerm }),
      cta_location: "tiktok_bridge",
    });

    // 2. Meta Pixel LINE_ADD custom event
    trackLineAdd("hero");

    // 3. TikTok base pixel ClickButton
    if (typeof window.ttq?.track === "function") {
      window.ttq.track("ClickButton", {
        content_name: "LINE CTA — อ่านฟรีจาก TikTok",
        content_category: "tiktok_bridge",
      });
    }

    // 4. เปิด LINE OA พร้อม prefill text
    window.open(LINE_URL, "_blank", "noopener,noreferrer");
  }

  return (
    <button
      onClick={handleClick}
      className="w-full max-w-xs rounded-full bg-[#06C755] px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform active:scale-95 hover:brightness-110"
    >
      อ่านฟรี 2 บทแรกใน LINE
    </button>
  );
}

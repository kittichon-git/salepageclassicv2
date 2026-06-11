import type { Metadata } from "next";
import { TikTokPixel } from "@/components/analytics/TikTokPixel";
import { TikTokBridgeContent } from "./TikTokBridgeContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "อ่านต่อฟรี 2 บทเต็ม ในแชต LINE | phachara.com",
  description:
    "วิธีเปลี่ยน 'คำขาย' ธรรมดา ให้ลูกค้าเห็นคุณค่าและอยากซื้อ — รับฟรีในแชต LINE",
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

  return (
    <>
      {/* TikTok base pixel — page-specific */}
      <TikTokPixel />
      <TikTokBridgeContent
        ttclid={p.ttclid}
        utmSource={p.utm_source}
        utmMedium={p.utm_medium}
        utmCampaign={p.utm_campaign}
        utmContent={p.utm_content}
        utmTerm={p.utm_term}
      />
    </>
  );
}

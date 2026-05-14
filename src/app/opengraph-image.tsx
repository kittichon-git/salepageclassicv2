import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "แค่เปลี่ยนคำ ก็ทำเงิน — phachara.com";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #f8f3e6 0%, #f2ecdd 60%, #e9e3d4 100%)",
          color: "#3a3530",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            color: "#7a6e62",
            letterSpacing: 4,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: 40,
              height: 40,
              background: "#d27355",
              color: "#f8f3e6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 800,
              borderRadius: 8,
            }}
          >
            ค
          </span>
          phachara.com
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: -1.5,
            marginTop: 70,
            maxWidth: 1040,
          }}
        >
          เขียน 1 ประโยค ขายได้มากกว่าเขียน 100 ประโยค
        </div>

        {/* Sub */}
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#5a5048",
            marginTop: 30,
            maxWidth: 980,
            lineHeight: 1.4,
          }}
        >
          สูตรเปลี่ยน &ldquo;คำ&rdquo; 7 ภาค 24 บท · เริ่มอ่านฟรี 2 บทแรก
        </div>

        {/* Bottom CTA strip */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 80,
            display: "flex",
            gap: 20,
            fontSize: 24,
            color: "#3a3530",
            fontWeight: 600,
            alignItems: "center",
          }}
        >
          <span
            style={{
              background: "#d27355",
              color: "#f8f3e6",
              padding: "12px 24px",
              borderRadius: 12,
            }}
          >
            อ่านฟรี 2 บทแรก
          </span>
          <span>ผู้อ่าน 1,200+ · 4.8/5</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

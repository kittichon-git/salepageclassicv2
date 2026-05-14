import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#fffdf7",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid paper bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(35,49,73,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(35,49,73,0.03) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* Top: brand pill */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, position: "relative" }}>
          <div
            style={{
              background: "#2f8588",
              color: "#fffdf7",
              padding: "8px 16px",
              fontWeight: 800,
              fontSize: 18,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            phachara.com
          </div>
          <div
            style={{
              background: "#2f8588",
              color: "#fffdf7",
              padding: "6px 12px",
              fontWeight: 800,
              fontSize: 12,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            R-MOTRA SALE PAGE · MOBILE-FIRST
          </div>
        </div>

        {/* Center: headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "#233149",
              maxWidth: 900,
            }}
          >
            เขียน 1 ประโยค ขายของได้มากกว่าเขียน 100 ประโยค
          </div>
          <div style={{ fontSize: 22, color: "#5a6478", lineHeight: 1.55, maxWidth: 720 }}>
            สูตรเปลี่ยน "คำ" 7 ภาค 24 บท ที่คนไทย 1,200+ คนใช้แล้วยอดขายขึ้น
          </div>
        </div>

        {/* Bottom: CTA chip + trust strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              background: "#00b900",
              color: "white",
              border: "1.5px solid #233149",
              boxShadow: "3px 3px 0 rgba(35,49,73,0.74)",
              padding: "12px 24px",
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            อ่านฟรี 2 บทแรก
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              fontSize: 14,
              fontWeight: 700,
              color: "#5a6478",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            <span>ผู้อ่าน 1,200+</span>
            <span>·</span>
            <span>4.8/5</span>
            <span>·</span>
            <span>เนื้อหาตลาดไทยล้วน</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#fbf5e8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "6px solid #233149",
        }}
      >
        <span
          style={{
            color: "#233149",
            fontSize: 110,
            fontWeight: 800,
            fontFamily: "sans-serif",
          }}
        >
          ค
        </span>
      </div>
    ),
    { ...size },
  );
}

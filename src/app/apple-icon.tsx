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
          background: "#233149",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#fbf5e8",
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

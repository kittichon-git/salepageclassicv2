import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#fbf5e8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #233149",
        }}
      >
        <span
          style={{
            color: "#233149",
            fontSize: 20,
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

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
          background: "#233149",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#fbf5e8",
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

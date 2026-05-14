import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "แค่เปลี่ยนคำ ก็ทำเงิน — phachara.com",
    short_name: "phachara.com",
    description: "สูตรเปลี่ยน 'คำ' 7 ภาค 24 บท",
    start_url: "/",
    display: "standalone",
    background_color: "#f2ecdd",
    theme_color: "#d27355",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}

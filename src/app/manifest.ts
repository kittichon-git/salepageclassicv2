import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "แค่เปลี่ยนคำ ก็ทำเงิน",
    short_name: "เปลี่ยนคำ",
    description: "สูตรเปลี่ยน 'คำ' 7 ภาค 24 บท ที่คนไทย 1,200+ คนใช้แล้วยอดขายขึ้น",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdf7",
    theme_color: "#233149",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}

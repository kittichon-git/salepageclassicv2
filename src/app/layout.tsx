import type { Metadata, Viewport } from "next";
import { Kanit, Bai_Jamjuree, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://phachara.com";

const TITLE = "แค่เปลี่ยนคำ ก็ทำเงิน — บทเรียนการใช้คำเพิ่มยอดขาย";
const DESCRIPTION =
  "เปลี่ยนคำในโพสต์ขายของให้คนหยุดดูและตัดสินใจซื้อ — บทเรียน \"แค่เปลี่ยนคำ ก็ทำเงิน\" 7 ภาค 24 บท เพิ่มยอดขายบน Facebook, IG, TikTok, LINE โดยไม่ต้องเป็นนักเขียน";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · phachara.com",
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "phachara.com",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffdf7" },
    { media: "(prefers-color-scheme: dark)", color: "#233149" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="th"
      className={`${kanit.variable} ${baiJamjuree.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a href="#hero" className="skip-link">
          ข้ามไปยังเนื้อหา
        </a>
        {children}
      </body>
    </html>
  );
}

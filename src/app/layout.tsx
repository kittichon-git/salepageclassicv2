import type { Metadata, Viewport } from "next";
import { Kanit, Bai_Jamjuree, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-kanit",
  display: "swap",
});

const bai = Bai_Jamjuree({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bai-jamjuree",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://phachara.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "แค่เปลี่ยนคำ ก็ทำเงิน — สูตรเปลี่ยน 'คำ' 7 ภาค 24 บท | phachara.com",
    template: "%s | phachara.com",
  },
  description:
    "เขียน 1 ประโยค ขายของได้มากกว่าเขียน 100 ประโยค — สูตรเปลี่ยน 'คำ' ที่คนไทย 1,200+ คนใช้แล้วยอดขายขึ้น เริ่มอ่านฟรี 2 บทแรกผ่าน LINE",
  keywords: [
    "copywriting ไทย",
    "เขียนขายของออนไลน์",
    "Hook สูตร",
    "Sales page ภาษาไทย",
    "เปลี่ยนคำ",
    "phachara",
  ],
  authors: [{ name: "Kittichon" }],
  creator: "Kittichon",
  publisher: "phachara.com",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "/",
    siteName: "phachara.com",
    title: "แค่เปลี่ยนคำ ก็ทำเงิน",
    description:
      "สูตรเปลี่ยนคำ 7 ภาค 24 บท — คนไทย 1,200+ คนใช้แล้วยอดขายขึ้น เริ่มอ่านฟรี 2 บทแรก",
    // images auto-resolved from /opengraph-image route
  },
  twitter: {
    card: "summary_large_image",
    title: "แค่เปลี่ยนคำ ก็ทำเงิน",
    description: "สูตรเปลี่ยนคำ 7 ภาค 24 บท — เริ่มอ่านฟรี 2 บทแรก",
    // images auto-resolved from /opengraph-image route
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2ecdd" },
    { media: "(prefers-color-scheme: dark)", color: "#3a3530" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="th"
      className={`${kanit.variable} ${bai.variable} ${mono.variable}`}
    >
      <body className="antialiased">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--color-charcoal-900)] focus:px-4 focus:py-2 focus:text-[var(--color-cream-50)]"
        >
          ข้ามไปยังเนื้อหา
        </a>
        {children}
      </body>
    </html>
  );
}

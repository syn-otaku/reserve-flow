import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://reserve-flow.netlify.app"),
  title: "ReserveFlow — 予約管理をもっとかんたんに",
  description: "無断キャンセルを減らし、リピート来店を増やす。美容室・飲食店・整体院・クリニック向けの予約管理・顧客管理・LINE連携システム。",
  keywords: ["予約管理", "顧客管理", "無断キャンセル対策", "リピート促進", "LINE連携", "美容室", "飲食店", "整体院", "クリニック"],
  openGraph: {
    title: "ReserveFlow — 予約管理をもっとかんたんに",
    description: "無断キャンセルを減らし、リピート来店を増やす。店舗向け予約管理システム。",
    url: "https://reserve-flow.netlify.app",
    siteName: "ReserveFlow",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ReserveFlow" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReserveFlow — 予約管理をもっとかんたんに",
    description: "無断キャンセルを減らし、リピート来店を増やす。",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

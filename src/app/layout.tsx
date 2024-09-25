import type { Metadata } from "next";
import localFont from "next/font/local";
import FooterMenu from "./_components/Footer";
import HeaderMenu from "./_components/Header";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "眾資成城-在你心愛的餐廳成為合夥人",
  description:
    "在開發「眾資成城 - 在你心愛的餐廳成為合夥人」這個網站時，我們的理念是創造一個聚焦於美食愛好者和創業家之間合作的平台。這個網站旨在促進社區內外的餐廳發展，讓顧客不僅僅是消費者，更能成為餐廳成長的重要合作夥伴。首先，我們將提供一個直觀易用的募資平台，讓想要投資或支持餐廳發展的人能夠與餐廳業主直接溝通和合作。這不僅包括資金支持，還包括推廣、建議和體驗分享。其次，網站將建立一個社區氛圍，讓餐廳業主能夠與顧客建立密切的關係。這將透過討論區、社交媒體整合和專屬會員活動來實現，使得顧客不僅是消費者，更是餐廳成功的一部分。此外，我們將提供豐富的資源和工具，包括市場分析、行業洞察和專家建議，幫助餐廳業主做出明智的決策，並在競爭激烈的市場中保持競爭力。最後，我們將通過故事分享和成功案例來鼓勵和激勵更多人參與到餐廳合夥人計畫中，這些故事將展示不同餐廳和合夥人之間的合作模式和成就，啟發更多類似項目的創建和支持。總體而言，「眾資成城」將不僅僅是一個募資平台，更是一個社區聚集地，鼓勵和支持餐廳創業家們實現他們的夢想，同時讓顧客能夠深入參與到這個過程中，共同見證和分享美食和成功的喜悅。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <HeaderMenu />
        <main className="flex-1">{children}</main>
        <FooterMenu />
      </body>
    </html>
  );
}

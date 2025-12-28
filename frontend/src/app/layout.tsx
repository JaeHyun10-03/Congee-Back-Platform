import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { THEME_CONFIG } from "@/constants/theme";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const kbFont = localFont({
  src: "../../public/fonts/KB.ttf",
  variable: "--font-kb",
  display: "swap",
});

const shinhanFont = localFont({
  src: "../../public/fonts/Shinhan.ttf",
  variable: "--font-shinhan",
  display: "swap",
});

const hanaFont = localFont({
  src: "../../public/fonts/Hana.ttf",
  variable: "--font-hana",
  display: "swap",
});

const wooriFont = localFont({
  src: "../../public/fonts/Woori.ttf",
  variable: "--font-woori",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bank Platform",
  description: "Banking Platform Monorepo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-theme={THEME_CONFIG.currentBank}>
      <body
        className={`${notoSansKr.variable} ${kbFont.variable} ${shinhanFont.variable} ${hanaFont.variable} ${wooriFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

// app/layout.tsx or app/globals.tsx
import "./globals.css";
import { Noto_Nastaliq_Urdu, Amiri } from "next/font/google";
import type { Metadata } from "next";

import Footer from "@/app/components/Footer";
import CombinedHeader from "./components/CombinedHeader";

const notoNastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-noto-nastaliq",
  display: "swap",
  preload: true,
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "مجلس اتحاد العلماء - معرفت کا راستہ",
  description:
    "مجلس اتحاد العلماء خالصہ 2 قاضی آباد پشاور میں واقع علماء اور اماموں کی ایک نمائندہ تنظیم ہے۔",
  robots: "index, follow",
  alternates: {
    canonical: "https://ulama.vercel.app/",
  },
  openGraph: {
    title: "مجلس اتحاد العلماء - معرفت کا راستہ",
    description:
      "مجلس اتحاد العلماء خالصہ 2 قاضی آباد پشاور میں واقع علماء اور اماموں کی ایک نمائندہ تنظیم ہے۔",
    url: "https://ulama.vercel.app/",
    siteName: "مجلس اتحاد العلماء",
    images: [
      {
        url: "https://ulama.vercel.app//og-image.jpg",
        width: 800,
        height: 600,
        alt: "مجلس اتحاد العلماء",
      },
    ],
    locale: "ur_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "مجلس اتحاد العلماء - معرفت کا راستہ",
    description:
      "مجلس اتحاد العلماء خالصہ 2 قاضی آباد پشاور میں واقع علماء اور اماموں کی ایک نمائندہ تنظیم ہے۔",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="ur"
      dir="rtl"
      className={`${notoNastaliq.variable} ${amiri.variable}`}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[rgb(var(--background-rgb))] text-[rgb(var(--foreground-rgb))]">
        <CombinedHeader />
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

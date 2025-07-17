// app/layout.tsx or app/globals.tsx
import Footer from "@/app/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Amiri, Noto_Nastaliq_Urdu } from "next/font/google";
import CombinedHeader from "./components/CombinedHeader";
import "./globals.css";

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
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ulama.vercel.app"),
  title: "مجلس اتحاد العلماء - معرفت کا راستہ",
  description:
    "مجلس اتحاد العلماء خالصہ 2 قاضی آباد پشاور میں واقع علماء اور اماموں کی ایک نمائندہ تنظیم ہے۔",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ulama.vercel.app/",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google verification code
  },
  openGraph: {
    title: "مجلس اتحاد العلماء - معرفت کا راستہ",
    description:
      "مجلس اتحاد العلماء خالصہ 2 قاضی آباد پشاور میں واقع علماء اور اماموں کی ایک نمائندہ تنظیم ہے۔",
    url: "https://ulama.vercel.app/",
    siteName: "مجلس اتحاد العلماء",
    images: [
      {
        url: "https://ulama.vercel.app/og-image.jpg",
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
    images: ["https://ulama.vercel.app/og-image.jpg"],
  },
  authors: [{ name: "مجلس اتحاد العلماء" }],
  category: "Education",
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
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[rgb(var(--background-rgb))] text-[rgb(var(--foreground-rgb))]">
        <CombinedHeader />
        <main className="flex-grow">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}

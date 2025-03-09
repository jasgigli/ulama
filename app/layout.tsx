import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

// Example of using a Google Font (replace with a suitable Urdu font)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "مجلس اتحاد العلماء",
  description: "آپ کے علاقے کے اسلامی مسائل کے حل کے لئے علماء کی تنظیم",
  keywords:
    "اسلام, علماء, مسائل, حل, پشاور, قاضی آباد, دینی تعلیم, اتحاد, سماجی مسائل",
  openGraph: {
    images: ["/pic.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ur" dir="rtl" className={`${inter.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  title: {
    default: "نينجا الأرقام — تعلّم الرياضيات بمتعة",
    template: "%s — نينجا الأرقام",
  },
  description:
    "بوت تليجرام يُعلّم الأطفال الرياضيات بطريقة ممتعة — ٣ أسئلة يومياً مع أحزمة نينجا ونقاط وترتيب أسبوعي",
  keywords: [
    "نينجا الأرقام",
    "NumNinjas",
    "تعليم رياضيات",
    "أطفال",
    "بوت تليجرام",
    "math for kids",
    "telegram bot",
  ],
  authors: [{ name: "NumNinjas" }],
  creator: "NumNinjas",
  metadataBase: new URL("https://numninjas.com"),
  openGraph: {
    type: "website",
    locale: "ar_EG",
    siteName: "نينجا الأرقام",
    title: "نينجا الأرقام — تعلّم الرياضيات بمتعة",
    description:
      "٣ أسئلة رياضيات يومياً للأطفال — أحزمة نينجا، نقاط، أوسمة، وترتيب أسبوعي!",
  },
  twitter: {
    card: "summary_large_image",
    title: "نينجا الأرقام",
    description: "بوت تليجرام لتعليم الأطفال الرياضيات بطريقة ممتعة",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${geist.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col font-sans">{children}</body>
    </html>
  );
}

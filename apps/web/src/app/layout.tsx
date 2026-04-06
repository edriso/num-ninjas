import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { getLocale } from "@/lib/locale";
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
    "بوت تليجرام يُعلّم الأطفال الرياضيات بطريقة ممتعة — 3 أسئلة يومياً مع أحزمة نينجا ونقاط وترتيب أسبوعي",
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    siteName: "نينجا الأرقام",
    title: "نينجا الأرقام — تعلّم الرياضيات بمتعة",
    description:
      "3 أسئلة رياضيات يومياً للأطفال — أحزمة نينجا، نقاط، أوسمة، وترتيب أسبوعي!",
    images: ["/logo-640.png"],
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={`${geist.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col font-sans">{children}</body>
    </html>
  );
}

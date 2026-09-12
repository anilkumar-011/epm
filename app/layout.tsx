import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "./components";

// Optimized font loading with Next.js
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2d3ed2",
};

export const metadata: Metadata = {
  title: "Epaphras Ministries | A Life of Example",
  description:
    "Dedicated to serving communities and sharing the transformative power of faith since 1998. Join us for worship and spiritual growth.",
  keywords: [
    "Epaphras Ministries",
    "Church Hyderabad",
    "Spiritual Growth",
    "Worship",
    "Faith",
  ],
  metadataBase: new URL("https://epaphrasministries.org"),
  openGraph: {
    title: "Epaphras Ministries | A Life of Example",
    description:
      "Dedicated to serving communities and sharing the transformative power of faith since 1998.",
    type: "website",
    locale: "en_US",
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
    <html lang="en" className={outfit.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${outfit.className} antialiased overflow-x-hidden`}>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

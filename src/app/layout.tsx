import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PromoBar } from "@/components/PromoBar";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rivera Gifting — A gift for every moment that matters",
    template: "%s · Rivera Gifting",
  },
  description:
    "Rivera Gifting designs and delivers premium corporate hampers, branded merchandise and eco-conscious essentials for real estate, hospitality and corporate brands.",
  openGraph: {
    title: "Rivera Gifting — A gift for every moment that matters",
    description:
      "Premium corporate hampers, branded merchandise and eco-conscious essentials.",
    type: "website",
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: "Rivera Gifting" }],
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32.png",
  },
  manifest: "/manifest.webmanifest",
  metadataBase: new URL("https://riveragifting.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`}>
      <body className="grain min-h-screen antialiased">
        <SmoothScroll />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:bg-[var(--color-ink)] focus:text-[var(--color-paper)] focus:px-3 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <PromoBar />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

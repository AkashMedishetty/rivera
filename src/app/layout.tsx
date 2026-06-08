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
    default: "Rivera Gifting — Considered corporate gifting, layered with intent",
    template: "%s · Rivera Gifting",
  },
  description:
    "Rivera Gifting designs and delivers premium corporate hampers, branded merchandise and eco-conscious essentials for real estate, hospitality and corporate brands.",
  openGraph: {
    title: "Rivera Gifting — Considered corporate gifting, layered with intent",
    description:
      "Premium corporate hampers, branded merchandise and eco-conscious essentials.",
    type: "website",
  },
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

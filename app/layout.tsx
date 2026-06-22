import type { Metadata } from "next";
import { Bebas_Neue, Lato } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

// GTM container ID. Defaults to the production container; can be overridden
// per-environment via the NEXT_PUBLIC_GTM_ID env var (e.g. in Vercel).
const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-MBT56NQB";

// GA4 measurement ID. Defaults to the production property; can be overridden
// per-environment via the NEXT_PUBLIC_GA_ID env var.
const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "G-D9Y8X6ZYY5";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Viveka von Rosen — Legacy & Visibility Strategist",
  description:
    "Private coaching for female founders with 20+ years of experience. Repositioning what you already know into a visible authority business.",
  openGraph: {
    title: "Viveka von Rosen — Legacy & Visibility Strategist",
    description:
      "Private coaching for female founders with 20+ years of experience. Repositioning what you already know into a visible authority business.",
    images: ["/images/hero-viveka.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebas.variable} ${lato.variable}`}>
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      <body className="font-sans bg-brand-paper text-brand-ink">{children}</body>
    </html>
  );
}

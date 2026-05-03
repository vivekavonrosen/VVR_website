import type { Metadata } from "next";
import { Bebas_Neue, Lato } from "next/font/google";
import "./globals.css";

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
      <body className="font-sans bg-brand-paper text-brand-ink">{children}</body>
    </html>
  );
}

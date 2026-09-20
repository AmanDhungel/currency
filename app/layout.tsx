import type { Metadata, Viewport } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "YEM Ecosystem — Blockchain, Explorer, Payments & OTC",
  description:
    "One place for the YEM ecosystem: the YEM Chain network, the YEM Scan explorer, the YEM Foundation roadmap, YEM Pay and the Digital Chain Center OTC desk.",
  keywords: [
    "YEM",
    "YEM Chain",
    "YEM Scan",
    "YEM Foundation",
    "YEM Pay",
    "Digital Chain Center",
    "blockchain",
    "blockchain explorer",
    "OTC",
  ],
  openGraph: {
    title: "YEM Ecosystem",
    description:
      "The YEM Chain network, explorer, roadmap, payments and OTC desk — all in one place.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f1e3" },
    { media: "(prefers-color-scheme: dark)", color: "#071a13" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="sr-only" href="#ecosystem">
          Skip to the ecosystem links
        </a>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

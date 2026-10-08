import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { asset } from "@/lib/site";
import "./globals.css";

// Condensed display serif for titles.
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jb",
  display: "swap",
});

// Absolute origin for social preview URLs. Override with SITE_URL at build time.
const siteUrl = process.env.SITE_URL ?? "https://maftuuh1922.github.io";
const ogImage = asset("/art/og.jpg");

const title = "Neovarch Agent: agen AI di PC kamu, dikendalikan dari HP";
const description =
  "Aplikasi desktop Windows dan Linux dengan core agen sendiri yang berjalan di PC kamu, dengan aplikasi Android yang dipasangkan lewat QR di jaringan lokal. Kode terbuka.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "id_ID",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Neovarch Agent" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0606",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

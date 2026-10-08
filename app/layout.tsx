import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { asset } from "@/lib/site";
import "./globals.css";

// Display serif: system Didone stack (Playfair via next/font blocked offline).
// --font-display is defined in globals.css: "Playfair Display", Didot, "Bodoni MT", Georgia, serif.

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

// Absolute origin for social preview URLs. Override with SITE_URL at build time.
const siteUrl = process.env.SITE_URL ?? "https://maftuuh1922.github.io";
const ogImage = asset("/art/portal-banner.webp");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Neorach Agent — Command Your Own AI Workforce",
  description:
    "Neorach Agent: open-source AI workforce on your PC, commanded from your phone. Agents that code, research, and ship. MIT licensed, free forever.",
  keywords: [
    "AI agent platform",
    "autonomous AI agents",
    "open-source AI agent",
    "AI workforce",
    "AI task automation",
  ],
  openGraph: {
    title: "Neorach Agent — The Workforce That Never Sleeps",
    description:
      "Open-source AI agents on your PC, commanded from your phone. Free forever, MIT licensed.",
    type: "website",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Neorach Agent — luminous ice-blue wireframe globe" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neorach Agent — Command Your Own AI Workforce",
    description: "Open-source AI agents. Your PC is the brain, your phone is the remote.",
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1628",
  colorScheme: "light",
};

// Marks <html> as JS-enabled before first paint so reveal animations only hide content when JS can show it again.
const jsFlag = `document.documentElement.classList.add('js')`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
        <link
          rel="preload"
          as="image"
          href={asset("/art/hero-engraving.webp")}
          fetchPriority="high"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

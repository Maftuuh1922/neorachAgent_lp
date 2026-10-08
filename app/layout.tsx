import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { asset } from "@/lib/site";
import "@fontsource/cinzel-decorative/700.css";
import "@fontsource/cinzel/600.css";
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

// Tiny vanilla runtime: install tabs + copy, gentle reveal-on-scroll, artwork save guards.
const RUNTIME = `(function(){var d=document;d.documentElement.classList.add("js");
d.querySelectorAll("[data-term]").forEach(function(t){var c=t.querySelector("[data-cmdtext]"),p=t.querySelector(".term__prompt"),b=t.querySelector("[data-copy]"),tabs=t.querySelectorAll("[data-cmd]");
tabs.forEach(function(x){x.addEventListener("click",function(){tabs.forEach(function(y){y.setAttribute("aria-selected",y===x)});c.textContent=x.dataset.cmd;p.textContent=x.dataset.prompt})});
b.addEventListener("click",function(){navigator.clipboard&&navigator.clipboard.writeText(c.textContent).then(function(){b.textContent="Tersalin";setTimeout(function(){b.textContent="Salin"},1600)})})});
d.querySelectorAll(".title,.lede,.feat__text,.section__intro,.actions,.term,.meta").forEach(function(e){e.classList.add("reveal")});
var r=d.querySelectorAll(".reveal");if("IntersectionObserver"in window){var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");o.unobserve(e.target)}})},{rootMargin:"0px 0px -8% 0px"});r.forEach(function(e){o.observe(e)})}else r.forEach(function(e){e.classList.add("in")});
d.addEventListener("contextmenu",function(e){e.preventDefault()});d.addEventListener("dragstart",function(e){e.preventDefault()});
d.addEventListener("keydown",function(e){var k=(e.key||"").toLowerCase();if((e.ctrlKey||e.metaKey)&&(k==="s"||k==="u"))e.preventDefault()})})();`;

export const metadata: Metadata = {
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, noimageindex: true } },
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
  themeColor: "#8F0A0A",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        {children}
        <script id="rt" dangerouslySetInnerHTML={{ __html: RUNTIME }} />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { asset } from "@/lib/site";
import "@fontsource/cinzel-decorative/700.css";
import "@fontsource/cinzel/600.css";
import "@/app/globals.css";

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
export const siteUrl = process.env.SITE_URL ?? "https://neovarchagent.web.id";
// Social preview per language (new file names bust WhatsApp/Facebook caches). Absolute URLs.
const OG: Record<"id" | "en", { url: string; alt: string }> = {
  id: { url: `${siteUrl}${asset("/art/og-v2-id.jpg")}`, alt: "Neovarch Agent: agen AI di PC kamu, dikendalikan dari HP" },
  en: { url: `${siteUrl}${asset("/art/og-v2-en.jpg")}`, alt: "Neovarch Agent: your AI agent on your PC, controlled from your phone" },
};


// Tiny vanilla runtime: install tabs + copy, gentle reveal-on-scroll, artwork save guards.
export const RUNTIME = `(function(){var d=document;d.documentElement.classList.add("js");
d.querySelectorAll("[data-term]").forEach(function(t){var c=t.querySelector("[data-cmdtext]"),p=t.querySelector(".term__prompt"),b=t.querySelector("[data-copy]"),tabs=t.querySelectorAll("[data-cmd]");
tabs.forEach(function(x){x.addEventListener("click",function(){tabs.forEach(function(y){y.setAttribute("aria-selected",y===x)});c.textContent=x.dataset.cmd;p.textContent=x.dataset.prompt})});
b.addEventListener("click",function(){navigator.clipboard&&navigator.clipboard.writeText(c.textContent).then(function(){b.textContent=b.dataset.copiedLabel||"Tersalin";setTimeout(function(){b.textContent=b.dataset.copyLabel||"Salin"},1600)})})});
d.querySelectorAll(".title,.lede,.feat__text,.section__intro,.actions,.term,.meta").forEach(function(e){e.classList.add("reveal")});
var r=d.querySelectorAll(".reveal");if("IntersectionObserver"in window){var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");o.unobserve(e.target)}})},{rootMargin:"0px 0px -8% 0px"});r.forEach(function(e){o.observe(e)})}else r.forEach(function(e){e.classList.add("in")});
var nt=d.getElementById("nav-toggle"),nb=d.querySelector(".nav__burger");if(nt&&nb){var ns=function(){nb.setAttribute("aria-expanded",nt.checked?"true":"false")};nt.addEventListener("change",ns);ns();
nb.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();nt.click()}});
d.addEventListener("keydown",function(e){if(e.key==="Escape"&&nt.checked){nt.click();nb.focus()}});
d.querySelectorAll(".nav__menu a").forEach(function(a){a.addEventListener("click",function(){if(nt.checked)nt.click()})})}
d.addEventListener("contextmenu",function(e){e.preventDefault()});d.addEventListener("dragstart",function(e){e.preventDefault()});
d.addEventListener("keydown",function(e){var k=(e.key||"").toLowerCase();if((e.ctrlKey||e.metaKey)&&(k==="s"||k==="u"))e.preventDefault()})})();`;

export type Lang = "id" | "en";

const META: Record<Lang, { title: string; description: string; locale: string }> = {
  id: {
    title: "Neovarch Agent: agen AI di PC kamu, dikendalikan dari HP",
    description:
      "Aplikasi desktop Windows dan Linux dengan core agen sendiri yang berjalan di PC kamu, dengan aplikasi Android yang dipasangkan lewat QR di jaringan lokal. Kode terbuka.",
    locale: "id_ID",
  },
  en: {
    title: "Neovarch Agent: an AI agent on your PC, controlled from your phone",
    description:
      "A desktop app for Windows and Linux with its own agent core running on your PC, plus an Android app that pairs over QR on your local network. Open source.",
    locale: "en_US",
  },
};

/** Root layouts call this without `home`; the two landing pages pass `home` to add canonical + hreflang. */
export function buildMetadata(lang: Lang, home = false): Metadata {
  const { title, description, locale } = META[lang];
  return {
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, noimageindex: true } },
    metadataBase: new URL(siteUrl),
    icons: {
      icon: [
        { url: asset("/favicon.ico"), sizes: "any" },
        { url: asset("/icon.png"), type: "image/png", sizes: "512x512" },
        { url: asset("/icon-192.png"), type: "image/png", sizes: "192x192" },
      ],
      apple: [{ url: asset("/apple-touch-icon.png"), sizes: "180x180" }],
    },
    title,
    description,
    ...(home
      ? {
          alternates: {
            canonical: lang === "en" ? "/" : "/id/",
            languages: { en: "/", id: "/id/", "x-default": "/" },
          },
        }
      : {}),
    openGraph: {
      title,
      description,
      type: "website",
      locale,
      alternateLocale: lang === "en" ? ["id_ID"] : ["en_US"],
      ...(home ? { url: lang === "en" ? "/" : "/id/" } : {}),
      images: [{ url: OG[lang].url, width: 1200, height: 630, alt: OG[lang].alt, type: "image/jpeg" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [{ url: OG[lang].url, width: 1200, height: 630, alt: OG[lang].alt }] },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8F0A0A",
  colorScheme: "light",
};

export function RootShell({ lang, children }: Readonly<{ lang: Lang; children: React.ReactNode }>) {
  return (
    <html
      lang={lang}
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

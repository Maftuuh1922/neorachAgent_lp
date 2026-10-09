import "./Navbar.css";
import { GITHUB_URL, RELEASE_URL, RELEASE_VERSION, asset } from "@/lib/site";
import type { Lang } from "@/lib/rootShell";

const COPY = {
  id: { main: "Navigasi utama", menu: "Menu", burger: "Buka atau tutup menu", features: "Fitur", office: "Kantor", download: "Unduh", lang: "Bahasa" },
  en: { main: "Main navigation", menu: "Menu", burger: "Open or close menu", features: "Features", office: "Office", download: "Download", lang: "Language" },
} as const;

/** ID / EN switch. `docs` pages pass no lang and link to the two landing pages. */
function LangSwitch({ lang, className }: { lang: Lang; className: string }) {
  const t = COPY[lang];
  return (
    <span className={className} role="group" aria-label={t.lang}>
      <a href={asset("/")} hrefLang="id" lang="id" aria-current={lang === "id" ? "true" : undefined}>ID</a>
      <span className="nav__lang-sep" aria-hidden="true">/</span>
      <a href={asset("/en/")} hrefLang="en" lang="en" aria-current={lang === "en" ? "true" : undefined}>EN</a>
    </span>
  );
}

export default function Navbar({ lang = "id" }: { lang?: Lang }) {
  const t = COPY[lang];
  // Absolute links so the same navbar works on the landing page and under /docs.
  const home = lang === "en" ? asset("/en/") : asset("/");
  return (
    <header className="nav">
      <div className="wrap nav__row">
        <a className="nav__brand" href={`${home}#top`}>
          <img className="nav__logo" src={asset("/art/app-icon.webp")} alt="" width={100} height={100} aria-hidden="true" />
          <img className="nav__name" src={asset("/art/name.webp")} alt="Neovarch Agent" width={1600} height={296} />
        </a>
        <nav className="nav__links" aria-label={t.main}>
          <a href={`${home}#fitur`}>{t.features}</a>
          <a href={`${home}#mulai`}>{t.download}</a>
          <a className="nav__keep" href={asset("/docs/")}>Docs</a>
          <a className="nav__keep nav__gh" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
          <LangSwitch lang={lang} className="nav__lang" />
        </nav>
        <input id="nav-toggle" className="nav__toggle" type="checkbox" aria-hidden="true" />
        <label htmlFor="nav-toggle" className="nav__burger" aria-label={t.burger}>
          <span /><span /><span />
        </label>
        <nav className="nav__menu" aria-label={t.menu}>
          <a href={`${home}#fitur`}>{t.features}</a>
          <a href={`${home}#mulai`}>{t.download}</a>
          <a href={asset("/docs/")}>Docs</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
          <LangSwitch lang={lang} className="nav__lang nav__lang--menu" />
          <a className="btn btn--solid btn--sm" href={RELEASE_URL} target="_blank" rel="noopener noreferrer">
            Download {RELEASE_VERSION}
          </a>
        </nav>
      </div>
    </header>
  );
}

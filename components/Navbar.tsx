import "./Navbar.css";
import { GITHUB_URL, RELEASE_URL, RELEASE_VERSION, asset } from "@/lib/site";
import type { Lang } from "@/lib/rootShell";

const COPY = {
  id: { main: "Navigasi utama", menu: "Menu", burger: "Buka atau tutup menu", features: "Fitur", office: "Kantor", download: "Unduh", lang: "Bahasa" },
  en: { main: "Main navigation", menu: "Menu", burger: "Open or close menu", features: "Features", office: "Kantor", download: "Download", lang: "Language" },
} as const;

/** EN / ID switch. English lives at `/`, Indonesian at `/id/`. Docs pages pass no lang (ID). */
function LangSwitch({ lang, className }: { lang: Lang; className: string }) {
  const t = COPY[lang];
  return (
    <span className={className} role="group" aria-label={t.lang}>
      <a href={asset("/")} hrefLang="en" lang="en" aria-current={lang === "en" ? "true" : undefined}>EN</a>
      <span className="nav__lang-sep" aria-hidden="true">|</span>
      <a href={asset("/id/")} hrefLang="id" lang="id" aria-current={lang === "id" ? "true" : undefined}>ID</a>
    </span>
  );
}

/** Y2K four-point sparkle; rotates and springs into an open state while the menu is open. */
function StarIcon() {
  return (
    <svg className="nav__star" viewBox="0 0 48 48" width="34" height="34" aria-hidden="true" focusable="false">
      <circle className="nav__star-ring" cx="24" cy="24" r="17" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <g className="nav__star-main">
        <path
          d="M24 3C25.2 15.6 28.4 20.1 41 24C28.4 27.9 25.2 32.4 24 45C22.8 32.4 19.6 27.9 7 24C19.6 20.1 22.8 15.6 24 3Z"
          fill="currentColor"
        />
        <circle cx="24" cy="24" r="2.2" fill="#fff" />
      </g>
      <path
        className="nav__star-spark"
        d="M39 5C39.4 8.4 40.6 9.6 44 10C40.6 10.4 39.4 11.6 39 15C38.6 11.6 37.4 10.4 34 10C37.4 9.6 38.6 8.4 39 5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Navbar({ lang = "id" }: { lang?: Lang }) {
  const t = COPY[lang];
  // Absolute links so the same navbar works on the landing page and under /docs.
  const home = lang === "en" ? asset("/") : asset("/id/");
  return (
    <header className="nav">
      <div className="wrap nav__row">
        <a className="nav__brand" href={`${home}#top`}>
          <img className="nav__logo" src={asset("/art/app-icon.webp")} alt="" width={100} height={100} aria-hidden="true" />
          <img className="nav__name" src={asset("/art/wordmark-nva.webp")} alt="Neovarch Agent" width={526} height={144} />
        </a>
        <nav className="nav__links" aria-label={t.main}>
          <a href={`${home}#fitur`}>{t.features}</a>
          <a href={`${home}#kantor`}>{t.office}</a>
          <a href={`${home}#mulai`}>{t.download}</a>
          <a className="nav__keep" href={asset("/docs/")}>Docs</a>
          <a className="nav__keep nav__gh" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
          <LangSwitch lang={lang} className="nav__lang" />
        </nav>
        <LangSwitch lang={lang} className="nav__lang nav__lang--bar" />
        <input id="nav-toggle" className="nav__toggle" type="checkbox" tabIndex={-1} aria-hidden="true" />
        <label
          htmlFor="nav-toggle"
          className="nav__burger"
          role="button"
          tabIndex={0}
          aria-label={t.burger}
          aria-controls="nav-menu"
          aria-expanded="false"
        >
          <StarIcon />
        </label>
        <nav id="nav-menu" className="nav__menu" aria-label={t.menu}>
          <a href={`${home}#fitur`}>{t.features}</a>
          <a href={`${home}#kantor`}>{t.office}</a>
          <a href={`${home}#mulai`}>{t.download}</a>
          <a href={asset("/docs/")}>Docs</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="btn btn--solid btn--sm" href={RELEASE_URL} target="_blank" rel="noopener noreferrer">
            Download {RELEASE_VERSION}
          </a>
        </nav>
      </div>
    </header>
  );
}

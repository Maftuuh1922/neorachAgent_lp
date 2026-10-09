import "./Navbar.css";
import { GITHUB_URL, RELEASE_URL, RELEASE_VERSION, asset } from "@/lib/site";

export default function Navbar() {
  // Absolute links so the same navbar works on the landing page and under /docs.
  const home = asset("/");
  return (
    <header className="nav">
      <div className="wrap nav__row">
        <a className="nav__brand" href={`${home}#top`}>
          <img className="nav__logo" src={asset("/art/app-icon.webp")} alt="" width={100} height={100} aria-hidden="true" />
          <img className="nav__name" src={asset("/art/name.webp")} alt="Neovarch Agent" width={1600} height={296} />
        </a>
        <nav className="nav__links" aria-label="Navigasi utama">
          <a href={`${home}#fitur`}>Fitur</a>
          <a href={`${home}#mulai`}>Unduh</a>
          <a className="nav__keep" href={asset("/docs/")}>Docs</a>
          <a className="nav__keep nav__gh" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
        <input id="nav-toggle" className="nav__toggle" type="checkbox" aria-hidden="true" />
        <label htmlFor="nav-toggle" className="nav__burger" aria-label="Buka atau tutup menu">
          <span /><span /><span />
        </label>
        <nav className="nav__menu" aria-label="Menu">
          <a href={`${home}#fitur`}>Fitur</a>
          <a href={`${home}#mulai`}>Unduh</a>
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

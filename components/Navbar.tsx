import { DOCS_URL, GITHUB_URL, RELEASE_URL, RELEASE_VERSION } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="wrap nav__row">
        <a className="nav__brand" href="#top">
          Neovarch Agent
        </a>
        <nav className="nav__links" aria-label="Navigasi utama">
          <a href="#fitur">Fitur</a>
          <a href="#mulai">Unduh</a>
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">Dokumentasi</a>
          <a className="nav__keep" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="btn btn--solid btn--sm" href={RELEASE_URL} target="_blank" rel="noopener noreferrer">
            {RELEASE_VERSION}
          </a>
        </nav>
      </div>
    </header>
  );
}

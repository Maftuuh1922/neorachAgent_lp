import { GithubIcon } from "@/components/icons";
import { DOCS_URL, GITHUB_URL, COMMUNITY_URL, INSTALL_URL } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="wrap nav__grid">
        <nav className="nav__links nav__links--left" aria-label="Primary">
          <a href="#agent">Agent</a>
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">
            Docs
          </a>
        </nav>
        <div className="nav__brand">
          <a className="nav__home" href="#top" aria-label="Neovarch Agent — home">
            <span className="b1">NEOVARCH</span>
            <span className="b2">AGENT</span>
          </a>
          <span className="nav__social">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="Neovarch Agent on GitHub">
              <GithubIcon size={15} />
            </a>
          </span>
        </div>
        <nav className="nav__links nav__links--right" aria-label="Secondary">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer">
            Community
          </a>
          <a
            className="pill pill--blue"
            href={INSTALL_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Install
          </a>
        </nav>
      </div>
    </header>
  );
}

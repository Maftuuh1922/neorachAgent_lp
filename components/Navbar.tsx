import { GithubIcon, XIcon } from "@/components/icons";
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
        <a className="nav__brand" href="#top" aria-label="Neorach Agent — home">
          <span className="b1">NEORACH</span>
          <span className="b2">AGENT</span>
          <span className="nav__social">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={15} />
            </a>
            <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" aria-label="Community">
              <XIcon size={15} />
            </a>
          </span>
        </a>
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

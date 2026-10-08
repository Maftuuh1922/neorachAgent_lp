import { DOCS_URL, GITHUB_URL, ISSUES_URL, REMOTE_DOCS_URL, RELEASE_URL, RELEASE_VERSION, REPO_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__row">
        <p className="footer__name">Neovarch Agent {RELEASE_VERSION}</p>
        <nav className="footer__links" aria-label="Tautan footer">
          <a href={RELEASE_URL} target="_blank" rel="noopener noreferrer">Rilis</a>
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">Dokumentasi</a>
          <a href={REMOTE_DOCS_URL} target="_blank" rel="noopener noreferrer">Protokol remote</a>
          <a href={ISSUES_URL} target="_blank" rel="noopener noreferrer">Laporkan masalah</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer">Kode halaman ini</a>
        </nav>
      </div>
    </footer>
  );
}

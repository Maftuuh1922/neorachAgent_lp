import type { Lang } from "@/lib/rootShell";
import { asset, DOCS_URL, GITHUB_URL, ISSUES_URL, REMOTE_DOCS_URL, RELEASE_URL, RELEASE_VERSION, REPO_URL } from "@/lib/site";

const COPY = {
  id: { nav: "Tautan footer", rel: "Rilis", docs: "Dokumentasi", proto: "Protokol remote", issue: "Laporkan masalah", src: "Kode halaman ini" },
  en: { nav: "Footer links", rel: "Releases", docs: "Documentation", proto: "Remote protocol", issue: "Report an issue", src: "Source of this page" },
} as const;

export default function Footer({ lang = "id" }: { lang?: Lang }) {
  const t = COPY[lang];
  return (
    <footer className="footer footer--reveal">
      <div className="footer__art" aria-hidden="true">
        <span className="footer__img" style={{ backgroundImage: `url(${asset("/art/footer-mecha.webp")})` }} />
        <span className="shot__shield" />
      </div>
      <p className="footer__word" aria-hidden="true">NEOVARCH</p>
      <div className="wrap footer__row">
        <p className="footer__name">Neovarch Agent {RELEASE_VERSION}</p>
        <nav className="footer__links" aria-label={t.nav}>
          <a href={RELEASE_URL} target="_blank" rel="noopener noreferrer">{t.rel}</a>
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">{t.docs}</a>
          <a href={REMOTE_DOCS_URL} target="_blank" rel="noopener noreferrer">{t.proto}</a>
          <a href={ISSUES_URL} target="_blank" rel="noopener noreferrer">{t.issue}</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer">{t.src}</a>
        </nav>
      </div>
    </footer>
  );
}

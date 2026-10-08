import { asset, DOCS_URL, GITHUB_URL, ISSUES_URL, REMOTE_DOCS_URL, RELEASE_URL, RELEASE_VERSION, REPO_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer footer--reveal">
      <div className="footer__art" aria-hidden="true">
        <span className="footer__img" style={{ backgroundImage: `url(${asset("/art/footer-mecha.webp")})` }} />
        <span className="shot__shield" />
      </div>
      <p className="footer__word" aria-hidden="true">NEOVARCH</p>
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
      <script
        dangerouslySetInnerHTML={{
          __html:
            "(function(){var f=document.querySelector('.footer--reveal');if(!f)return;var t=0;function u(){t=0;var r=f.getBoundingClientRect(),h=window.innerHeight,p=Math.min(1,Math.max(0,(h-r.top)/Math.min(r.height,h)));f.style.setProperty('--p',p.toFixed(3))}function s(){if(!t){t=1;requestAnimationFrame(u)}}addEventListener('scroll',s,{passive:true});addEventListener('resize',s);u()})();",
        }}
      />
    </footer>
  );
}

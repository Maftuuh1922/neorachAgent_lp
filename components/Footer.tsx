import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import { asset, DOCS_URL, GITHUB_URL, COMMUNITY_URL, CHANGELOG_URL, RELEASE_URL } from "@/lib/site";

const COLS: { big: string; head: string; links: { label: string; href?: string }[] }[] = [
  {
    big: "Agent",
    head: "Install",
    links: [
      { label: "Release v1.2.1", href: RELEASE_URL },
      { label: "For Windows", href: RELEASE_URL },
      { label: "For Linux", href: RELEASE_URL },
      { label: "Android remote (APK)", href: RELEASE_URL },
      { label: "For macOS — segera" },
    ],
  },
  {
    big: "Resources",
    head: "Learn",
    links: [
      { label: "Docs", href: DOCS_URL },
      { label: "GitHub", href: GITHUB_URL },
      { label: "Community", href: COMMUNITY_URL },
      { label: "Changelog", href: CHANGELOG_URL },
    ],
  },
  {
    big: "Legal",
    head: "Fine print",
    links: [
      { label: "MIT License", href: `${GITHUB_URL}/blob/main/desktop/LICENSE` },
      { label: "Terms", href: `${GITHUB_URL}#terms` },
      { label: "Privacy", href: `${GITHUB_URL}#privacy` },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__art" aria-hidden="true">
        <Image
          src={asset("/art/footer-marble.webp")}
          alt=""
          width={1376}
          height={768}
          sizes="100vw"
        />
      </div>
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <div className="b1">NEOVARCH</div>
          <p className="mono tag">Your own AI workforce. Open source, MIT licensed.</p>
          <div className="footer__social">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="Neovarch Agent on GitHub">
              <GithubIcon size={17} />
            </a>
          </div>
        </div>
        {COLS.map((c) => (
          <nav key={c.big} className="footer__col" aria-label={c.head}>
            <h3>{c.head}</h3>
            <p className="big">{c.big}</p>
            <ul>
              {c.links.map((l) => (
                <li key={l.label}>
                  {l.href ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  ) : (
                    <span className="soon">{l.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="wrap footer__bar">
        <span className="mono">© 2026 Neovarch</span>
        <span className="mono">Open source</span>
        <span className="mono">MIT License</span>
        <span className="mono">Terms&nbsp;&nbsp;|&nbsp;&nbsp;Privacy</span>
      </div>
      <div className="footer__wm" aria-hidden="true">
        <span>NEOVARCH</span>
      </div>
    </footer>
  );
}

import Image from "next/image";
import { GithubIcon, XIcon } from "@/components/icons";
import { asset, DOCS_URL, GITHUB_URL, COMMUNITY_URL, INSTALL_URL } from "@/lib/site";

const COLS: { big: string; head: string; links: { label: string; href: string }[] }[] = [
  {
    big: "Agent",
    head: "Install",
    links: [
      { label: "Install", href: INSTALL_URL },
      { label: "For mac OS", href: INSTALL_URL },
      { label: "For Windows", href: INSTALL_URL },
      { label: "For Linux", href: INSTALL_URL },
    ],
  },
  {
    big: "Resources",
    head: "Learn",
    links: [
      { label: "Docs", href: DOCS_URL },
      { label: "GitHub", href: GITHUB_URL },
      { label: "Community", href: COMMUNITY_URL },
      { label: "Changelog", href: `${GITHUB_URL}#changelog` },
    ],
  },
  {
    big: "Legal",
    head: "Fine print",
    links: [
      { label: "MIT License", href: `${GITHUB_URL}#license` },
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
          alt="Dim wireframe globe fading into a near-black background"
          width={1040}
          height={2352}
          sizes="100vw"
        />
      </div>
      <div className="footer__wm" aria-hidden="true">
        <span>NEORACH</span>
      </div>
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <div className="b1">NEORACH</div>
          <p className="mono tag">Your own AI workforce. Open source, MIT licensed.</p>
          <div className="footer__social">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={17} />
            </a>
            <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" aria-label="Community">
              <XIcon size={17} />
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
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="wrap footer__bar">
        <span className="mono">© 2026 Neorach</span>
        <span className="mono">Open source</span>
        <span className="mono">MIT License</span>
        <span className="mono">Terms&nbsp;&nbsp;|&nbsp;&nbsp;Privacy</span>
      </div>
    </footer>
  );
}

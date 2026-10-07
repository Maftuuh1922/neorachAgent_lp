import CopyCommand from "./CopyCommand";
import { INSTALL_CMD, INSTALL_URL, NAV_LINKS } from "@/lib/site";

const PLATFORMS = ["Windows", "Linux", "macOS"] as const;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__tagline">
          NEOVARCH AGENT — The office runs itself. <span className="red">You just give orders.</span>
        </p>
        <div className="g footer__cols">
          <nav className="fcol" aria-label="Footer">
            <p className="fcol__h mono">INDEX</p>
            <ul className="fcol__list mono">
              <li>
                <a href="#top" aria-label="Home, back to top">
                  Home
                </a>
              </li>
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`${l.label} (opens in a new tab)`}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="fcol">
            <p className="fcol__h mono">DOWNLOAD</p>
            <ul className="fcol__list mono">
              {PLATFORMS.map((p) => (
                <li key={p}>
                  <a
                    href={INSTALL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Download Neovarch for ${p} (opens in a new tab)`}
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="fcol fcol--install">
            <p className="fcol__h mono">INSTALL</p>
            <CopyCommand command={INSTALL_CMD} />
          </div>
          <div className="fcol fcol--legal mono">
            <p className="fcol__h">LEGAL</p>
            <p>© 2026 Neovarch Project. Open-source under MIT License.</p>
            <p>Built with inspiration from Nous Research&apos;s Hermes Agent.</p>
          </div>
        </div>
      </div>
      <svg className="wordmark" viewBox="0 0 1000 146" preserveAspectRatio="xMidYMax meet" aria-hidden="true" focusable="false">
        <text x="0" y="146" textLength="1000" lengthAdjust="spacingAndGlyphs">
          NEOVARCH
        </text>
      </svg>
    </footer>
  );
}

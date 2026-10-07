import { DOCS_URL, REPO_URL } from "@/lib/site";
import styles from "./Footer.module.css";

const NAV = [
  { label: "Home", href: "#top", external: false },
  { label: "Docs", href: DOCS_URL, external: true },
  { label: "GitHub", href: REPO_URL, external: true },
  { label: "Community", href: `${REPO_URL}#community`, external: true },
  { label: "Changelog", href: `${REPO_URL}#changelog`, external: true },
];

const PLATFORMS = ["Windows", "Linux", "macOS"];

export default function Footer() {
  return (
    <footer className={styles.foot}>
      <p className={styles.tagline}>
        <span className={styles.brand}>NEOVARCH AGENT</span> — The office runs itself. You just give
        orders.
      </p>

      <nav className={styles.nav} aria-label="Quick links">
        {NAV.map((item) => (
          <a
            key={item.label}
            href={item.href}
            {...(item.external ? { target: "_blank", rel: "noopener" } : {})}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className={styles.install}>
        <ul className={styles.downloads} aria-label="Install options">
          {PLATFORMS.map((os) => (
            <li key={os}>
              <a
                className="link"
                href={REPO_URL}
                target="_blank"
                rel="noopener"
                aria-label={`Download for ${os} (opens the GitHub repository in a new tab)`}
              >
                Download for {os}
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.terminal}>
          <span>Install via terminal:</span>{" "}
          <code className={`x-code ${styles.cmd}`}>curl -fsSL https://install.neovarch.ai | sh</code>
        </p>
      </div>

      <div className={styles.legal}>
        <p>© 2026 Neovarch Project. Open-source under MIT License.</p>
        <p>Built with inspiration from Nous Research&apos;s Hermes Agent.</p>
      </div>
    </footer>
  );
}

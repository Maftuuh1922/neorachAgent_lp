import { REPO_URL, SECTIONS } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.foot}>
      <p className="x-mono">
        © 2026 Neovarchlabs · Maftuuh1922 ·{" "}
        <a className="link" href={REPO_URL} target="_blank" rel="noopener">
          GitHub
        </a>
      </p>
      <nav className={styles.nav} aria-label="Back to sections">
        <a href="#top">Top</a>
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            {s.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}

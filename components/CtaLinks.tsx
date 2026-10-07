import { DOCS_URL, REPO_URL } from "@/lib/site";

/** Primary bone CTA + secondary outline button. */
export default function CtaLinks() {
  return (
    <div className="links">
      <a
        className="x-cta"
        href={REPO_URL}
        target="_blank"
        rel="noopener"
        aria-label="Install Neovarch (opens the GitHub repository in a new tab)"
      >
        Install Neovarch
      </a>
      <a
        className="btn"
        href={DOCS_URL}
        target="_blank"
        rel="noopener"
        aria-label="Read the Docs (opens the README on GitHub in a new tab)"
      >
        Read the Docs
      </a>
    </div>
  );
}

import { REPO_URL } from "@/lib/site";

/** Primary crimson CTA + secondary outline button, both pointing at the repo. */
export default function CtaLinks() {
  return (
    <div className="links">
      <a className="x-cta" href={REPO_URL} target="_blank" rel="noopener">
        View on GitHub
      </a>
      <a className="btn" href={REPO_URL} target="_blank" rel="noopener">
        Download for Android
      </a>
    </div>
  );
}

import { INSTALL_URL, DOCS_URL } from "@/lib/site";

export default function FooterCta() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta__wm" aria-hidden="true">
        <span>NEOVARCH</span>
      </div>
      <div className="cta__inner">
        <h2 id="cta-title" className="display" data-reveal>
          Take <em>command.</em>
        </h2>
        <p data-reveal>
          Install Neovarch Agent tonight — wake up to finished work.
        </p>
        <div className="cta__btns" data-reveal>
          <a
            className="pill pill--red"
            href={INSTALL_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Install Neovarch
          </a>
          <a
            className="pill pill--outline-b"
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the docs →
          </a>
        </div>
      </div>
    </section>
  );
}

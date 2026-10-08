import Image from "next/image";
import { asset, GITHUB_URL } from "@/lib/site";

export default function Portal() {
  return (
    <section className="portal" aria-labelledby="portal-title">
      <div className="portal__bg" aria-hidden="true">
        <Image
          src={asset("/art/portal-banner.webp")}
          alt="Wide luminous wireframe panorama of glowing ice-blue globes and orbital rings on near-black background"
          width={1600}
          height={686}
          sizes="100vw"
        />
      </div>
      <div className="wrap portal__inner">
        <div className="portal__panel" data-reveal>
          <span className="mono kicker">— No tiers · No tolls</span>
          <h2 id="portal-title" className="display">
            Free <em className="serif-it" style={{ textTransform: "none" }}>forever.</em>
          </h2>
          <p>
            Neorach Agent is <strong>MIT open source</strong>. No pricing tiers,
            no subscriptions, no cloud lock-in — your infrastructure, your
            rules, your agents.
          </p>
          <a
            className="pill pill--white"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the source →
          </a>
        </div>
      </div>
    </section>
  );
}

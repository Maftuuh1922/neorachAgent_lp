import Image from "next/image";
import { Terminal as TerminalIcon } from "lucide-react";
import { asset, INSTALL_URL, DOCS_URL } from "@/lib/site";
import Terminal from "./Terminal";
import Particles from "./Particles";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <Particles />
      <div className="wrap hero__grid">
        <div>
          <h1 id="hero-title" className="display hero__title" data-reveal>
            The workforce
            <br />
            that <span className="thin">never</span>
            <br />
            <em className="serif-it" style={{ textTransform: "none" }}>
              sleeps.
            </em>
          </h1>
          <p className="hero__sub" data-reveal>
            Neovarch Agent is an open-source AI workforce that lives on your PC.
            Give orders from your phone — your agents code, research, and ship
            while you live your life.
          </p>
          <div className="hero__ctas" data-reveal>
            <a
              className="pill pill--red"
              href={INSTALL_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TerminalIcon size={15} aria-hidden="true" />
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
          <p className="mono hero__install-label" data-reveal>
            Install via terminal
          </p>
          <Terminal />
        </div>
        <figure className="hero__art" data-reveal>
          <Image
            src={asset("/art/hero-engraving.webp")}
            alt="Anime illustration: a giant bone-white mecha with a halo, cabled to a skyscraper-sized desktop PC, answers a girl raising her phone from a rooftop"
            width={1024}
            height={1024}
            priority
            fetchPriority="high"
            sizes="(max-width: 1024px) 92vw, 46vw"
          />
          <figcaption className="mono hero__cap">Fig. 00 — the desktop giant</figcaption>
        </figure>
      </div>
    </section>
  );
}

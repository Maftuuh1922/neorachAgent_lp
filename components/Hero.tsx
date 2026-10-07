"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { asset, DOCS_URL, INSTALL_URL } from "@/lib/site";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  // Parallax on the hero art only: drifts up with scroll, capped at 80px, GPU-composited.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = -Math.min(window.scrollY * 0.25, 80);
      if (bgRef.current) bgRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__text">
        <h1 id="hero-title" className="hero__title">
          <span className="hero__line" data-reveal>
            The office runs itself.
          </span>{" "}
          <span className="hero__line hero__line--red" data-reveal>
            You just give orders.
          </span>
        </h1>
        <div className="hero__foot">
          <p className="hero__sub" data-reveal>
            Your personal AI workforce: agents that code, research, and ship—all controlled from your phone. The brain
            lives on your PC. The remote lives in your pocket.
          </p>
          <div className="hero__ctas" data-reveal>
            <a
              className="blk"
              href={INSTALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Install Neovarch (opens in a new tab)"
            >
              Install Neovarch
            </a>
            <a
              className="txtlink"
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read the Docs (opens in a new tab)"
            >
              Read the Docs
            </a>
          </div>
        </div>
      </div>

      <figure className="hero__art">
        <div className="hero__frame">
          <div className="hero__bg" ref={bgRef}>
            <Image
              src={asset("/art/eva_hero.webp")}
              alt="Isometric architecture diagram showing PC desktop as agent core and mobile phone as remote control, duotone red and black illustration"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 56vw"
              className="hero__img"
            />
          </div>
        </div>
        <figcaption className="hero__cap mono">
          <span className="plate__fig">FIG.00</span>
          <span>Architecture: PC brain, mobile remote</span>
        </figcaption>
      </figure>

      <dl className="colophon mono" aria-label="Release details">
        <div>
          <dt>VER.</dt>
          <dd>0.1.0</dd>
        </div>
        <div>
          <dt>RUNS ON</dt>
          <dd>Windows / Linux / macOS</dd>
        </div>
        <div>
          <dt>LICENSE</dt>
          <dd>MIT, open-source</dd>
        </div>
      </dl>
    </section>
  );
}

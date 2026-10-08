import Image from "next/image";
import { asset } from "@/lib/site";

const FEATURES = [
  {
    n: "1",
    verb: "Ship",
    img: "/art/feat-code.webp",
    alt: "Luminous ice-blue wireframe globe erupting in an energy burst on near-black background",
    title: "Autonomous coding",
    desc: "Agents that write, test, and ship code while you sleep. Review the diff in the morning.",
  },
  {
    n: "2",
    verb: "Remember",
    img: "/art/feat-memory.webp",
    alt: "Luminous wireframe globe wrapped in a glowing ice-blue network lattice on near-black background",
    title: "Long memory",
    desc: "Every session remembered. Your agents pick up exactly where they left off.",
  },
  {
    n: "3",
    verb: "Automate",
    img: "/art/feat-automation.webp",
    alt: "Glowing orbital rings mechanism turning around a luminous wireframe globe on near-black background",
    title: "Total automation",
    desc: "Browser, terminal, files — agents operate your PC like a tireless night staff.",
  },
  {
    n: "4",
    verb: "Command",
    img: "/art/feat-remote.webp",
    alt: "Luminous wireframe globe sending ice-blue command beams to small orbiting satellites on near-black background",
    title: "Mobile command",
    desc: "Pair once. Direct the whole office from your pocket, from anywhere.",
  },
  {
    n: "5",
    verb: "Choose",
    img: "/art/feat-models.webp",
    alt: "Three glowing ice-blue and white wireframe orbs floating in a row on near-black background",
    title: "Any model",
    desc: "Plug in your favorite models. Open weights welcome, switch anytime.",
  },
  {
    n: "6",
    verb: "Liberate",
    img: "/art/feat-opensource.webp",
    alt: "Luminous wireframe globe with an open padlock of light orbiting it and sunrise rays on near-black background",
    title: "Open source",
    desc: "MIT licensed. Your infrastructure, your rules — free forever.",
  },
];

export default function Features() {
  return (
    <section className="section--paper" aria-labelledby="feat-title" style={{ borderTop: "1px solid var(--line-ice)" }}>
      <div className="wrap sec-head">
        <span className="mono kicker" data-reveal>
          — Capabilities
        </span>
        <h2 id="feat-title" className="display" data-reveal>
          Everything <em>an office needs.</em>
        </h2>
        <p data-reveal>
          Six crafts, one commander. Each agent is a specialist; together they
          are a workforce that never clocks out.
        </p>
      </div>
      <div className="wrap">
        <div className="featgrid">
          {FEATURES.map((f) => (
            <article key={f.n} className="feat" data-reveal>
              <div className="feat__img">
                <Image
                  src={asset(f.img)}
                  alt={f.alt}
                  width={800}
                  height={656}
                  sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="feat__body">
                <span className="feat__num">#{f.n} {f.verb}</span>
                <h3 className="serif-it feat__title">{f.title}</h3>
                <p className="feat__desc">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

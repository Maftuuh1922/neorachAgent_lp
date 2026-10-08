import Image from "next/image";
import { asset } from "@/lib/site";

const FEATURES = [
  {
    n: "1",
    verb: "Ship",
    img: "/art/feat-code.webp",
    alt: "Anime illustration: a giant mecha's hands type on a huge keyboard while a girl with a halo codes on a catwalk",
    title: "Autonomous coding",
    desc: "Agents that write, test, and ship code while you sleep. Review the diff in the morning.",
  },
  {
    n: "2",
    verb: "Remember",
    img: "/art/feat-memory.webp",
    alt: "Anime illustration: a girl walks through an endless archive of glowing memory cores beside a sleeping mecha head",
    title: "Long memory",
    desc: "Every session remembered. Your agents pick up exactly where they left off.",
  },
  {
    n: "3",
    verb: "Automate",
    img: "/art/feat-automation.webp",
    alt: "Anime illustration: haloed worker drones run a night-shift line while a giant mecha arm moves crates",
    title: "Total automation",
    desc: "Browser, terminal, files — agents operate your PC like a tireless night staff.",
  },
  {
    n: "4",
    verb: "Command",
    img: "/art/feat-remote.webp",
    alt: "Anime illustration: a girl on a rainy street sends an order from her phone to a distant giant mecha",
    title: "Mobile command",
    desc: "Pair once. Direct the whole office from your pocket, from anywhere.",
  },
  {
    n: "5",
    verb: "Choose",
    img: "/art/feat-models.webp",
    alt: "Anime illustration: a girl on a lift plugs a cable into one of five different mecha heads racked on a hangar wall",
    title: "Any model",
    desc: "Plug in your favorite models. Open weights welcome, switch anytime.",
  },
  {
    n: "6",
    verb: "Liberate",
    img: "/art/feat-opensource.webp",
    alt: "Anime illustration: hangar doors open onto a crimson dawn as a mecha walks free and a girl releases white birds",
    title: "Open source",
    desc: "MIT licensed. Your infrastructure, your rules — free forever.",
  },
];

export default function Features() {
  return (
    <section className="section--white section--ruled" aria-labelledby="feat-title">
      <div className="wrap sec-head">
        <span className="mono kicker" data-reveal>
          — Capabilities
        </span>
        <h2 id="feat-title" className="display" data-reveal>
          Everything <em>an office&nbsp;needs.</em>
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
                  width={1000}
                  height={806}
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

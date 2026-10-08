import Image from "next/image";
import { asset } from "@/lib/site";

const FEATURES = [
  {
    n: "1",
    verb: "Ship",
    img: "/art/feat-code.webp",
    alt: "Engraving: a clockwork scholar types at a desktop computer by lamplight as code scrolls pour from the screen",
    title: "Autonomous coding",
    desc: "Agents that write, test, and ship code while you sleep. Review the diff in the morning.",
  },
  {
    n: "2",
    verb: "Remember",
    img: "/art/feat-memory.webp",
    alt: "Engraving: a memory palace — an archive cabinet of countless drawers with an owl, a lamp and a nautilus shell",
    title: "Long memory",
    desc: "Every session remembered. Your agents pick up exactly where they left off.",
  },
  {
    n: "3",
    verb: "Automate",
    img: "/art/feat-automation.webp",
    alt: "Engraving: a gear-driven automaton operating a desktop computer, mouse and file drawer on its own",
    title: "Total automation",
    desc: "Browser, terminal, files — agents operate your PC like a tireless night staff.",
  },
  {
    n: "4",
    verb: "Command",
    img: "/art/feat-remote.webp",
    alt: "Engraving: a traveller raises a phone and beams carry orders across a valley to a distant desktop computer",
    title: "Mobile command",
    desc: "Pair once. Direct the whole office from your pocket, from anywhere.",
  },
  {
    n: "5",
    verb: "Choose",
    img: "/art/feat-models.webp",
    alt: "Engraving: four marble busts on pedestals cabled to one computer while a hand chooses which to plug in",
    title: "Any model",
    desc: "Plug in your favorite models. Open weights welcome, switch anytime.",
  },
  {
    n: "6",
    verb: "Liberate",
    img: "/art/feat-opensource.webp",
    alt: "Engraving: open iron gates with an unlocked padlock, an open book and doves flying toward a rising sun",
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

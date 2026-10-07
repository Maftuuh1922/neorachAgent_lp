import { Num, RunHead } from "./Section";

export default function Identity() {
  return (
    <section id="identity" className="sec sec--identity" aria-labelledby="identity-title">
      <RunHead num="06" name="IDENTITY" fig="STATEMENT" />
      <div className="container">
        <div className="id__head">
          <h2 id="identity-title" className="id__title" data-reveal>
            <span className="id__line">
              Hermes is <span className="id__blue">blue</span>.
            </span>{" "}
            <span className="id__line">
              We&apos;re <span className="red">red</span>.
            </span>
          </h2>
          <Num n="06" className="id__num" />
        </div>
        <div className="g id__cols">
          <p data-reveal>
            <span className="id__i mono" aria-hidden="true">
              i.
            </span>
            Neovarch Agent shares DNA with Hermes Agent—same agent reasoning, same tool ecosystem, same persistent
            memory—but diverges in identity and execution philosophy.
          </p>
          <p data-reveal>
            <span className="id__i mono" aria-hidden="true">
              ii.
            </span>
            Where Hermes emphasizes breadth and flexibility, Neovarch emphasizes control and craft. Built for technical
            professionals who want an AI workforce they can direct, debug, and deploy without compromise.
          </p>
          <p className="id__last" data-reveal>
            <span className="id__i mono" aria-hidden="true">
              iii.
            </span>
            Open-source core. MIT license. Community-driven roadmap.
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { asset } from "@/lib/site";

export default function AppSection() {
  return (
    <section className="section--paper" id="agent" aria-labelledby="app-title">
      <div className="wrap sec-head">
        <span className="mono kicker" data-reveal>
          — The concept
        </span>
        <h2 id="app-title" className="display" data-reveal>
          One phone.
          <br />
          <em>A thousand hands.</em>
        </h2>
        <p data-reveal>
          Your phone becomes the command center. The agent core runs on your PC —
          Windows or Linux (macOS segera) — and a staff of tireless agents executes
          your orders around the clock.
        </p>
      </div>
      <div className="wrap">
        <figure className="appfig" data-reveal>
          <div className="appfig__frame">
            <Image
              src={asset("/art/feat-remote.webp")}
              alt="Engraving: a traveller on a hilltop raises a phone; beams of light carry orders across a valley to a temple housing a desktop computer"
              width={1264}
              height={848}
              sizes="(max-width: 1080px) 100vw, 1080px"
            />
          </div>
          <figcaption className="mono appfig__cap">
            <span className="fig">Fig. 01</span>
            <span>Command concept · illustrated, not a screenshot</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

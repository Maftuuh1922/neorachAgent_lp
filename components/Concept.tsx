import { Num, RunHead } from "./Section";

export default function Concept() {
  return (
    <section id="concept" className="sec sec--concept" aria-labelledby="concept-title">
      <RunHead num="01" name="CONCEPT" fig="TEXT" />
      <div className="container g concept">
        <Num n="01" className="concept__num" />
        <h2 id="concept-title" className="concept__quote" data-reveal>
          One office. Many agents. <span className="red">You&apos;re the boss.</span>
        </h2>
        <div className="concept__body">
          <p data-reveal>
            Neovarch Agent is an open-source agent platform inspired by Nous Research&apos;s Hermes Agent, rebuilt with
            a singular identity.
          </p>
          <p data-reveal>
            The agent core runs on your PC (Windows/Linux/macOS). Your phone becomes the command center. You direct the
            strategy. Your agents execute the details.
          </p>
          <p className="concept__kicker mono" data-reveal>
            No cloud dependency. No subscription. Your infrastructure, your control.
          </p>
        </div>
      </div>
    </section>
  );
}

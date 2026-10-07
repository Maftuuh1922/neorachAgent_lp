import SectionHead from "./SectionHead";

export default function Concept() {
  return (
    <section className="section" id="concept" aria-labelledby="concept-title">
      <SectionHead
        id="concept-title"
        eyebrow="01 · The Concept"
        title="One office. Many agents."
        emphasis="You're the boss."
      />
      <div className="prose">
        <p>
          Neovarch Agent is an open-source agent platform inspired by Nous Research&apos;s Hermes
          Agent, rebuilt with a singular identity.
        </p>
        <p>
          The agent core runs on your PC (Windows/Linux/macOS). Your phone becomes the command
          center. You direct the strategy. Your agents execute the details.
        </p>
        <p>No cloud dependency. No subscription. Your infrastructure, your control.</p>
      </div>
    </section>
  );
}

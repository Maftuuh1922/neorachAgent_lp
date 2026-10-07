import SectionHead from "./SectionHead";
import ArtFigure from "./ArtFigure";
import CardGrid, { type Card } from "./CardGrid";

const CARDS: Card[] = [
  {
    label: "JOIN",
    title: "Bring a partner into the office",
    items: [
      "Add by ID or QR scan",
      "They accept the invite",
      "You share one workspace, one agent pool, one task queue",
    ],
    note: "Linked to a single GitHub repository. Every commit traceable.",
  },
  {
    label: "WORK",
    title: "Parallel execution, zero collisions",
    items: [
      "Unified task queue visible to both users",
      "Every task logs the originating user",
      <>
        Code changes branch by user: <code className="x-code">user-a/feature-x</code>,{" "}
        <code className="x-code">user-b/fix-y</code>
      </>,
      "Automatic conflict detection before merge",
    ],
    note: "No overwriting. No confusion. Just clean, collaborative execution.",
  },
];

export default function Collaboration() {
  return (
    <section className="section" id="collaboration" aria-labelledby="collaboration-title">
      <SectionHead
        id="collaboration-title"
        eyebrow="05 · Collaboration"
        title="One office."
        emphasis="Two bosses."
        sub={
          <>
            <span className="chip">Coming soon</span>
            <span className="head__subline">Shared workspace. Zero conflicts.</span>
          </>
        }
      />
      <ArtFigure
        src="/art/eva_pairing.jpg"
        alt="Two coders on a rooftop pairing their phones, a mecha standing behind them"
        width={1024}
        height={1024}
        caption="FIG.03 — Pairing: Two users, one office, one GitHub repo"
      />
      <CardGrid cards={CARDS} />
    </section>
  );
}

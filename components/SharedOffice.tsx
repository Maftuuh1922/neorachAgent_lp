import SectionHead from "./SectionHead";
import ArtFigure from "./ArtFigure";
import CardGrid, { type Card } from "./CardGrid";

const SHARED: Card[] = [
  {
    label: "Join",
    title: "Bring a friend to the office",
    items: [
      "Add a friend by ID or QR",
      "They accept the request",
      "You both share one office, linked to one GitHub repo",
    ],
  },
  {
    label: "Work",
    title: "No collisions",
    items: [
      "One task queue, visible to both",
      "Every task logs who gave the order",
      "Code changes go through a branch per person. No conflicts.",
    ],
  },
];

export default function SharedOffice() {
  return (
    <section className="section" id="bareng">
      <SectionHead
        eyebrow="04 · Shared office — Coming soon"
        title="One office."
        emphasis="Two bosses."
        sub={<span className="chip">Coming soon</span>}
      />
      <ArtFigure
        src="/art/eva_pairing.jpg"
        alt="Two coders on a rooftop pairing their phones, a mecha behind them"
        width={1024}
        height={1024}
        fig="FIG.03 — Pairing"
        note="One office · two bosses"
      />
      <CardGrid cards={SHARED} />
    </section>
  );
}

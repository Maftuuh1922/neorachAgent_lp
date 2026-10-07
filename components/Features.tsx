import SectionHead from "./SectionHead";
import CardGrid, { type Card } from "./CardGrid";

const FEATURES: Card[] = [
  {
    label: "Work",
    title: "Orders become tasks",
    items: [
      "Streaming chat with live tool activity",
      "A task Kanban your agents can execute",
      "Multi-agent meetings with minutes & action items",
      "Scheduled prompts (cron)",
    ],
  },
  {
    label: "Staff",
    title: "Agents that remember",
    items: [
      "Agent profiles + persistent memory & sessions",
      "Skills and a file browser",
      "Voice input & TTS",
    ],
  },
  {
    label: "Models",
    title: "Any provider",
    items: ["OpenRouter", "Nous Portal", "OpenAI", "Local Ollama / LM Studio"],
  },
  {
    label: "Look",
    title: "An office that's yours",
    items: ["Isometric office view", "Light/dark themes", "Indonesian-language UI"],
  },
];

export default function Features() {
  return (
    <section className="section" id="fitur">
      <SectionHead
        eyebrow="02 · Features"
        title="Everything an office needs."
        emphasis="Nothing it doesn't."
        sub="Ten features, grouped by job."
      />
      <CardGrid cards={FEATURES} />
    </section>
  );
}

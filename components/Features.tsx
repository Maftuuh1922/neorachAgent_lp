import SectionHead from "./SectionHead";
import CardGrid, { type Card } from "./CardGrid";

const FEATURES: Card[] = [
  {
    label: "WORK",
    title: "Orders become execution",
    items: [
      "Real-time streaming chat with live tool activity",
      "Task board: agents execute from a shared queue",
      "Multi-agent collaboration with meeting logs & action items",
      "Scheduled automation via natural-language cron",
    ],
  },
  {
    label: "STAFF",
    title: "Agents that remember",
    items: [
      "Agent profiles with persistent memory across sessions",
      "Self-generated skills library",
      "File browser with project context",
      "Voice input & text-to-speech output",
    ],
  },
  {
    label: "MODELS",
    title: "Any provider, any model",
    items: [
      "OpenRouter (200+ models)",
      "Nous Portal",
      "OpenAI Platform",
      "Local inference: Ollama, LM Studio, vLLM",
    ],
  },
  {
    label: "INTERFACE",
    title: "An office that's yours",
    items: [
      "Isometric office visualization",
      "Light/dark themes",
      "Multi-language UI (English, Indonesian)",
      "Customizable workspace layout",
    ],
  },
];

export default function Features() {
  return (
    <section className="section" id="features" aria-labelledby="features-title">
      <SectionHead
        id="features-title"
        eyebrow="03 · Features"
        title="Everything an office needs."
        emphasis="Nothing it doesn't."
        sub="Ten capabilities, organized by function."
      />
      <CardGrid cards={FEATURES} />
    </section>
  );
}

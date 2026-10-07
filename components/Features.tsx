import { Num, RunHead } from "./Section";

const ROWS = [
  {
    tag: "WORK",
    title: "Orders become execution",
    items: [
      "Real-time streaming chat with live tool activity",
      "Task board: agents execute from a shared queue",
      "Multi-agent collaboration with meeting logs & action items",
      "Scheduled automation via natural-language cron",
    ],
  },
  {
    tag: "STAFF",
    title: "Agents that remember",
    items: [
      "Agent profiles with persistent memory across sessions",
      "Self-generated skills library",
      "File browser with project context",
      "Voice input & text-to-speech output",
    ],
  },
  {
    tag: "MODELS",
    title: "Any provider, any model",
    items: ["OpenRouter (200+ models)", "Nous Portal", "OpenAI Platform", "Local inference: Ollama, LM Studio, vLLM"],
  },
  {
    tag: "INTERFACE",
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
    <section id="features" className="sec sec--features" aria-labelledby="features-title">
      <RunHead num="03" name="FEATURES" fig="INDEX" />
      <div className="container">
        <div className="g feat__head">
          <h2 id="features-title" className="feat__title" data-reveal>
            Everything an office needs. Nothing it doesn&apos;t.
          </h2>
          <Num n="03" className="feat__num" />
          <p className="feat__sub mono" data-reveal>
            Ten capabilities, organized by function.
          </p>
        </div>
        <ol className="feat__index">
          {ROWS.map(({ tag, title, items }, r) => (
            <li className="feat__row g" key={tag} data-reveal>
              <div className="feat__label">
                <span className="feat__idx mono">03.{String.fromCharCode(65 + r)}</span>
                <h3 className="feat__tag">{tag}</h3>
                <p className="feat__name">{title}</p>
              </div>
              <ul className="feat__items mono">
                {items.map((it, i) => (
                  <li key={it}>
                    <span className="feat__n" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

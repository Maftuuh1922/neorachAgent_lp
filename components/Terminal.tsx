import { INSTALL_COMMANDS } from "@/lib/site";
import type { Lang } from "@/lib/rootShell";

type Tab = keyof typeof INSTALL_COMMANDS;
const TABS = Object.keys(INSTALL_COMMANDS) as Tab[];
const PROMPTS: Record<Tab, string> = { Linux: "$", Windows: "PS>", npm: "$" };

const COPY = {
  id: { tabs: "Perintah instalasi per sistem", copyLabel: "Salin perintah instalasi", copy: "Salin", done: "Tersalin" },
  en: { tabs: "Install command by system", copyLabel: "Copy install command", copy: "Copy", done: "Copied" },
} as const;

/** Static markup; tab switching and copy are handled by the small inline script in layout. */
export default function Terminal({ lang = "id" }: { lang?: Lang }) {
  const t = COPY[lang];
  return (
    <div className="term" data-term>
      <div className="term__bar">
        <div className="term__tabs" role="tablist" aria-label={t.tabs}>
          {TABS.map((tab, i) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={i === 0}
              className="term__tab"
              data-cmd={INSTALL_COMMANDS[tab]}
              data-prompt={PROMPTS[tab]}
            >
              {tab}
            </button>
          ))}
        </div>
        <button type="button" className="term__copy" data-copy data-copy-label={t.copy} data-copied-label={t.done} aria-label={t.copyLabel}>
          {t.copy}
        </button>
      </div>
      <code className="term__cmd">
        <span className="term__prompt">{PROMPTS.Linux}</span> <span data-cmdtext>{INSTALL_COMMANDS.Linux}</span>
      </code>
    </div>
  );
}

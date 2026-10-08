import { INSTALL_COMMANDS } from "@/lib/site";

type Tab = keyof typeof INSTALL_COMMANDS;
const TABS = Object.keys(INSTALL_COMMANDS) as Tab[];
const PROMPTS: Record<Tab, string> = { Linux: "$", Windows: "PS>", npm: "$" };

/** Static markup; tab switching and copy are handled by the small inline script in layout. */
export default function Terminal() {
  return (
    <div className="term" data-term>
      <div className="term__bar">
        <div className="term__tabs" role="tablist" aria-label="Perintah instalasi per sistem">
          {TABS.map((t, i) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={i === 0}
              className="term__tab"
              data-cmd={INSTALL_COMMANDS[t]}
              data-prompt={PROMPTS[t]}
            >
              {t}
            </button>
          ))}
        </div>
        <button type="button" className="term__copy" data-copy aria-label="Salin perintah instalasi">
          Salin
        </button>
      </div>
      <code className="term__cmd">
        <span className="term__prompt">{PROMPTS.Linux}</span> <span data-cmdtext>{INSTALL_COMMANDS.Linux}</span>
      </code>
    </div>
  );
}

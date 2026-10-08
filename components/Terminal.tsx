"use client";

import { useState } from "react";
import { INSTALL_COMMANDS } from "@/lib/site";

type Tab = keyof typeof INSTALL_COMMANDS;
const TABS = Object.keys(INSTALL_COMMANDS) as Tab[];
const PROMPTS: Record<Tab, string> = { Linux: "$", Windows: "PS>", npm: "$" };

export default function Terminal() {
  const [tab, setTab] = useState<Tab>("Linux");
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMANDS[tab]);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="term">
      <div className="term__bar">
        <div className="term__tabs" role="tablist" aria-label="Perintah instalasi per sistem">
          {TABS.map((t) => (
            <button key={t} type="button" role="tab" aria-selected={tab === t} className="term__tab" onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>
        <button type="button" className="term__copy" onClick={copy} aria-label="Salin perintah instalasi">
          {copied ? "Tersalin" : "Salin"}
        </button>
      </div>
      <code className="term__cmd">
        <span className="term__prompt">{PROMPTS[tab]}</span> {INSTALL_COMMANDS[tab]}
      </code>
      <span className="sr-only" aria-live="polite">{copied ? "Perintah disalin" : ""}</span>
    </div>
  );
}

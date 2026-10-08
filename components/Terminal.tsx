"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

import { INSTALL_COMMANDS } from "@/lib/site";

const COMMANDS: Record<string, string> = INSTALL_COMMANDS;
const PROMPTS: Record<string, string> = { Linux: "$", Windows: "PS>", npm: "$" };

const TABS = Object.keys(COMMANDS);

export default function Terminal() {
  const [tab, setTab] = useState("Linux");
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(COMMANDS[tab]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <div className="term" data-reveal>
      <div className="term__tabs" role="tablist" aria-label="Install command per OS">
        {TABS.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            className="term__tab"
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="term__body">
        <code className="term__cmd">
          <span className="prompt">{PROMPTS[tab]}</span>
          {COMMANDS[tab]}
        </code>
        <button
          className="term__copy"
          onClick={copy}
          aria-label={copied ? "Copied" : "Copy install command"}
        >
          {copied ? <Check /> : <Copy />}
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyCommand({
  command,
  prompt = "$",
  label = "install command",
}: {
  command: string;
  prompt?: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
    } catch {
      // Fallback for browsers without async clipboard (e.g. non-secure contexts).
      const ta = document.createElement("textarea");
      ta.value = command;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="cmd">
      <code className="cmd__text mono">
        <span className="term__p" aria-hidden="true">
          {prompt}
        </span>{" "}
        {command}
      </code>
      <button type="button" className="cmd__copy mono" onClick={copy} aria-label={copied ? `Copied ${label}` : `Copy ${label}`}>
        {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
        <span>{copied ? "COPIED" : "COPY"}</span>
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? `${label[0].toUpperCase()}${label.slice(1)} copied to clipboard` : ""}
      </span>
    </div>
  );
}

// A small Markdown renderer for the docs, run at build time (server component).
// Supports: ## / ### headings (with ids), paragraphs, - and 1. lists, ``` code fences,
// | tables |, > callouts, inline `code`, **bold**, *em*, [links](url) and {{soon}} badges.
import type { ReactNode } from "react";
import { asset } from "@/lib/site";

export type Heading = { depth: 2 | 3; text: string; id: string };

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/`/g, "")
    .replace(/\{\{[^}]*\}\}/g, "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "bagian";
}

/** Plain text of a heading line, without markup. */
export function plain(text: string): string {
  return text
    .replace(/\{\{soon\}\}/g, "")
    .replace(/\{\{soon:([^}]*)\}\}/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
}

function href(url: string): string {
  if (url.startsWith("/")) return asset(url);
  return url;
}

let keySeq = 0;
const k = () => `m${keySeq++}`;

export function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  // order matters: code first so its contents stay literal
  const re = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\*[^*\s][^*]*\*)|(\[[^\]]+\]\([^)\s]+\))|(\{\{soon(?::[^}]*)?\}\})/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tok = m[0];
    if (m[1]) out.push(<code key={k()}>{tok.slice(1, -1)}</code>);
    else if (m[2]) out.push(<strong key={k()}>{inline(tok.slice(2, -2))}</strong>);
    else if (m[3]) out.push(<em key={k()}>{inline(tok.slice(1, -1))}</em>);
    else if (m[4]) {
      const lm = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(tok)!;
      const ext = /^https?:/.test(lm[2]);
      out.push(
        <a key={k()} href={href(lm[2])} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {inline(lm[1])}
        </a>,
      );
    } else if (m[5]) {
      const label = tok.includes(":") ? tok.slice(7, -2) : "segera hadir (v1.4.0)";
      out.push(
        <span key={k()} className="dx-soon">
          {label}
        </span>,
      );
    }
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const isTableRow = (l: string) => /^\s*\|.*\|\s*$/.test(l);
const cells = (l: string) =>
  l
    .trim()
    .replace(/^\||\|$/g, "")
    .split(/(?<!\\)\|/)
    .map((c) => c.trim().replace(/\\\|/g, "|"));

export function renderMarkdown(src: string): { nodes: ReactNode[]; headings: Heading[] } {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  const nodes: ReactNode[] = [];
  const headings: Heading[] = [];
  const used = new Map<string, number>();
  let i = 0;

  const uniq = (id: string) => {
    const n = used.get(id) ?? 0;
    used.set(id, n + 1);
    return n ? `${id}-${n + 1}` : id;
  };

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    // code fence
    const fence = /^```(\S*)\s*$/.exec(line);
    if (fence) {
      const lang = fence[1] || "";
      const body: string[] = [];
      i++;
      while (i < lines.length && !/^```\s*$/.test(lines[i])) body.push(lines[i++]);
      i++;
      nodes.push(
        <div key={k()} className="dx-code" data-lang={lang || undefined}>
          {lang ? <span className="dx-code__lang">{lang}</span> : null}
          <button type="button" className="dx-code__copy" data-copycode>
            Salin
          </button>
          <pre>
            <code>{body.join("\n")}</code>
          </pre>
        </div>,
      );
      continue;
    }

    // headings
    const h = /^(#{2,3})\s+(.*)$/.exec(line);
    if (h) {
      const depth = h[1].length as 2 | 3;
      const text = h[2].trim();
      const id = uniq(slugify(plain(text)));
      headings.push({ depth, text: plain(text), id });
      const Tag = depth === 2 ? "h2" : "h3";
      nodes.push(
        <Tag key={k()} id={id} className={`dx-h${depth}`}>
          {inline(text)}
          <a className="dx-anchor" href={`#${id}`} aria-label="Tautan ke bagian ini">
            #
          </a>
        </Tag>,
      );
      i++;
      continue;
    }

    // table
    if (isTableRow(line) && i + 1 < lines.length && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
      const head = cells(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && isTableRow(lines[i])) rows.push(cells(lines[i++]));
      nodes.push(
        <div key={k()} className="dx-table">
          <table>
            <thead>
              <tr>
                {head.map((c) => (
                  <th key={k()}>{inline(c)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={k()}>
                  {r.map((c) => (
                    <td key={k()}>{inline(c)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    // callout / blockquote
    if (/^>\s?/.test(line)) {
      const body: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) body.push(lines[i++].replace(/^>\s?/, ""));
      let kind = "note";
      const first = body[0] ?? "";
      const km = /^\[!(catatan|penting|tips|segera)\]\s*/i.exec(first);
      if (km) {
        kind = km[1].toLowerCase();
        body[0] = first.slice(km[0].length);
      }
      const titles: Record<string, string> = { note: "Catatan", catatan: "Catatan", penting: "Penting", tips: "Tips", segera: "Segera hadir" };
      const paras = body.join("\n").split(/\n\s*\n/).filter((p) => p.trim());
      nodes.push(
        <aside key={k()} className={`dx-callout dx-callout--${kind}`}>
          <p className="dx-callout__title">{titles[kind] ?? "Catatan"}</p>
          {paras.map((p) => (
            <p key={k()}>{inline(p.replace(/\n/g, " "))}</p>
          ))}
        </aside>,
      );
      continue;
    }

    // lists
    const ul = /^(\s*)[-*]\s+/;
    const ol = /^(\s*)\d+\.\s+/;
    if (ul.test(line) || ol.test(line)) {
      const ordered = ol.test(line);
      const re = ordered ? ol : ul;
      const items: string[] = [];
      while (i < lines.length && (re.test(lines[i]) || (/^\s{2,}\S/.test(lines[i]) && items.length))) {
        if (re.test(lines[i])) items.push(lines[i].replace(re, ""));
        else items[items.length - 1] += " " + lines[i].trim();
        i++;
      }
      const L = ordered ? "ol" : "ul";
      nodes.push(
        <L key={k()} className="dx-list">
          {items.map((it) => (
            <li key={k()}>{inline(it)}</li>
          ))}
        </L>,
      );
      continue;
    }

    // paragraph
    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{2,3}\s|```|>|\s*[-*]\s|\s*\d+\.\s)/.test(lines[i]) &&
      !isTableRow(lines[i])
    ) {
      para.push(lines[i++].trim());
    }
    if (para.length) nodes.push(<p key={k()}>{inline(para.join(" "))}</p>);
    else i++;
  }

  return { nodes, headings };
}

/** Headings only, for the search index (no React work). */
export function extractHeadings(src: string): { text: string; id: string }[] {
  const used = new Map<string, number>();
  const out: { text: string; id: string }[] = [];
  let inFence = false;
  for (const line of src.split("\n")) {
    if (/^```/.test(line)) inFence = !inFence;
    if (inFence) continue;
    const h = /^(#{2,3})\s+(.*)$/.exec(line);
    if (!h) continue;
    const text = plain(h[2]);
    const base = slugify(text);
    const n = used.get(base) ?? 0;
    used.set(base, n + 1);
    out.push({ text, id: n ? `${base}-${n + 1}` : base });
  }
  return out;
}

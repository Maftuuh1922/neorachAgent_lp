// Build-time access to the docs Markdown files.
import fs from "node:fs";
import path from "node:path";
import { ALL_DOCS, type FlatDoc } from "@/content/docs/nav";
import { extractHeadings } from "./markdown";

export function readDoc(doc: FlatDoc): string {
  return fs.readFileSync(path.join(process.cwd(), doc.file), "utf8");
}

export function findDoc(section: string, page: string): FlatDoc | undefined {
  return ALL_DOCS.find((d) => d.section.slug === section && d.slug === page);
}

export type SearchEntry = { t: string; h?: string; u: string; s: string };

/** Titles and headings of every page, embedded in each docs page for the client-side search. */
export function searchIndex(): SearchEntry[] {
  const out: SearchEntry[] = [];
  for (const d of ALL_DOCS) {
    out.push({ t: d.title, u: d.href, s: d.section.title });
    for (const h of extractHeadings(readDoc(d))) out.push({ t: d.title, h: h.text, u: `${d.href}#${h.id}`, s: d.section.title });
  }
  return out;
}

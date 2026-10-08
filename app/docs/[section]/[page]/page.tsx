import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DocsShell from "@/components/docs/DocsShell";
import { renderMarkdown } from "@/components/docs/markdown";
import { findDoc, readDoc } from "@/components/docs/source";
import { ALL_DOCS } from "@/content/docs/nav";

type Params = { section: string; page: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return ALL_DOCS.map((d) => ({ section: d.section.slug, page: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { section, page } = await params;
  const doc = findDoc(section, page);
  if (!doc) return {};
  const title = `${doc.title} · Dokumentasi Neovarch Agent`;
  return { title, description: doc.description, openGraph: { title, description: doc.description } };
}

export default async function DocPage({ params }: { params: Promise<Params> }) {
  const { section, page } = await params;
  const doc = findDoc(section, page);
  if (!doc) notFound();
  const { nodes, headings } = renderMarkdown(readDoc(doc));
  return (
    <DocsShell current={doc} headings={headings}>
      <article className="dx-article">
        <p className="label">// {doc.section.title}</p>
        <h1 className="dx-h1">{doc.title}</h1>
        <p className="dx-desc">{doc.description}</p>
        {nodes}
      </article>
    </DocsShell>
  );
}

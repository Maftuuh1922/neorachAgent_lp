import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DocsShell from "@/components/docs/DocsShell";
import { DOC_SECTIONS } from "@/content/docs/nav";
import { asset } from "@/lib/site";

type Params = { section: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return DOC_SECTIONS.map((s) => ({ section: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { section } = await params;
  const s = DOC_SECTIONS.find((x) => x.slug === section);
  return s ? { title: `${s.title} · Dokumentasi Neovarch Agent` } : {};
}

export default async function SectionPage({ params }: { params: Promise<Params> }) {
  const { section } = await params;
  const s = DOC_SECTIONS.find((x) => x.slug === section);
  if (!s) notFound();
  return (
    <DocsShell>
      <article className="dx-article">
        <p className="label">// Dokumentasi</p>
        <h1 className="dx-h1">{s.title}</h1>
        <div className="dx-cards dx-cards--one">
          {s.pages.map((p) => (
            <section key={p.slug} className="dx-card">
              <h2 className="dx-card__title">
                <a href={asset(`/docs/${s.slug}/${p.slug}/`)}>{p.title}</a>
              </h2>
              <p className="dx-card__intro">{p.description}</p>
            </section>
          ))}
        </div>
      </article>
    </DocsShell>
  );
}

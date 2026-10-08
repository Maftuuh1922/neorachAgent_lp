import type { Metadata } from "next";
import DocsShell from "@/components/docs/DocsShell";
import { DOC_SECTIONS } from "@/content/docs/nav";
import { RELEASE_VERSION, asset } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dokumentasi · Neovarch Agent",
  description:
    "Dokumentasi Neovarch Agent: instalasi, pairing HP, provider model, Kanban, Office, memori, cron, API core, dan tech stack.",
};

const INTRO: Record<string, string> = {
  mulai: "Pasang aplikasi, pilih model, dan jalankan sesi pertama.",
  panduan: "Desktop, HP, provider model, konfigurasi, dan keamanan.",
  fitur: "Apa saja yang bisa dikerjakan agen dan cara memakainya.",
  developer: "Arsitektur, tech stack, dan cara membangun dari source.",
  referensi: "API core, CLI, FAQ, changelog, dan lisensi.",
};

export default function DocsHome() {
  return (
    <DocsShell>
      <article className="dx-article">
        <p className="label">// Dokumentasi</p>
        <h1 className="dx-h1">Dokumentasi Neovarch Agent</h1>
        <p className="dx-desc">
          Neovarch Agent adalah agen AI yang berjalan di PC kamu (Windows, Linux) dan bisa dikendalikan dari HP Android.
          Halaman ini mengikuti rilis {RELEASE_VERSION}; fitur bertanda <span className="dx-soon">segera hadir (v1.4.0)</span>{" "}
          sudah ada di kode tetapi belum dirilis.
        </p>
        <div className="dx-cards">
          {DOC_SECTIONS.map((s) => (
            <section key={s.slug} className="dx-card">
              <h2 className="dx-card__title">
                <a href={asset(`/docs/${s.slug}/${s.pages[0].slug}/`)}>{s.title}</a>
              </h2>
              <p className="dx-card__intro">{INTRO[s.slug]}</p>
              <ul>
                {s.pages.map((p) => (
                  <li key={p.slug}>
                    <a href={asset(`/docs/${s.slug}/${p.slug}/`)}>{p.title}</a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="dx-note">
          Untuk alat AI: indeks seluruh halaman tersedia di <a href={asset("/docs/llms.txt")}>/docs/llms.txt</a>.
        </p>
      </article>
    </DocsShell>
  );
}

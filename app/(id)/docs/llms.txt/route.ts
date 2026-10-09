import { ALL_DOCS, DOC_SECTIONS } from "@/content/docs/nav";
import { APP_REPO_URL, RELEASE_VERSION } from "@/lib/site";

export const dynamic = "force-static";

// Absolute origin for the links; override with SITE_URL. Default: the Vercel deployment,
// or GitHub Pages when the site is built for a sub-path (BASE_PATH).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const origin =
  (process.env.SITE_URL ?? (basePath ? "https://maftuuh1922.github.io" : "https://neorachagent.vercel.app")) + basePath;

export function GET() {
  const lines: string[] = [
    "# Neovarch Agent",
    "",
    `> Agen AI yang berjalan di PC (Windows, Linux) dengan core Python sendiri dan dikendalikan dari aplikasi Android lewat pairing QR. Dokumentasi berbahasa Indonesia, mengikuti rilis ${RELEASE_VERSION}; fitur bertanda "segera hadir (v1.4.0)" belum dirilis.`,
    "",
    `Kode sumber: ${APP_REPO_URL}`,
    "",
  ];
  for (const s of DOC_SECTIONS) {
    lines.push(`## ${s.title}`, "");
    for (const d of ALL_DOCS.filter((x) => x.section.slug === s.slug)) {
      lines.push(`- [${d.title}](${origin}${d.href}): ${d.description}`);
    }
    lines.push("");
  }
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

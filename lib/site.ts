export const REPO_URL = "https://github.com/Maftuuh1922/neorachAgent_lp";
export const DOCS_URL = `${REPO_URL}#readme`;

/** Prefix a public/ asset path with the configured basePath (needed for GitHub Pages sub-paths). */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

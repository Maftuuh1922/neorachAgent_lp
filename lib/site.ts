export const REPO_URL = "https://github.com/Maftuuh1922/neovrach_Agent";

/** Prefix a public/ asset path with the configured basePath (needed for GitHub Pages sub-paths). */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

/** Sections in page order; drives the footer's jump links. */
export const SECTIONS = [
  { id: "apa", label: "What it is" },
  { id: "fitur", label: "Features" },
  { id: "cara", label: "How it works" },
  { id: "bareng", label: "Shared office" },
  { id: "merah", label: "We're red" },
] as const;

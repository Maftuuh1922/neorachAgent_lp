export const REPO_URL = "https://github.com/Maftuuh1922/neorachAgent_lp";
export const APP_REPO_URL = "https://github.com/Maftuuh1922/neovrach_Agent";
export const RELEASES_URL = `${APP_REPO_URL}/releases/latest`;
export const INSTALL_URL = RELEASES_URL;
export const DOCS_URL = APP_REPO_URL;
export const GITHUB_URL = APP_REPO_URL;
export const COMMUNITY_URL = `${REPO_URL}#community`;
export const CHANGELOG_URL = `${REPO_URL}#changelog`;
export const INSTALL_CMD = "curl -fsSL https://raw.githubusercontent.com/Maftuuh1922/neovrach_Agent/main/scripts/install.sh | sh";

export const INSTALL_CMDS = [
  { id: "linux", label: "LINUX · SHELL", prompt: "$", command: INSTALL_CMD },
  {
    id: "windows",
    label: "WINDOWS · POWERSHELL",
    prompt: "PS>",
    command: "irm https://raw.githubusercontent.com/Maftuuh1922/neovrach_Agent/main/scripts/install.ps1 | iex",
  },
  {
    id: "npm",
    label: "NPM · NODE 18+",
    prompt: "$",
    command: "npm i -g https://github.com/Maftuuh1922/neovrach_Agent/releases/latest/download/neovarch-agent-npm.tgz",
  },
] as const;

export const DOWNLOADS = [
  { label: "Windows", href: RELEASES_URL, soon: false },
  { label: "Linux", href: RELEASES_URL, soon: false },
  { label: "macOS", href: RELEASES_URL, soon: true },
] as const;

export const NAV_LINKS = [
  { label: "Docs", href: DOCS_URL },
  { label: "GitHub", href: GITHUB_URL },
  { label: "Community", href: COMMUNITY_URL },
  { label: "Changelog", href: CHANGELOG_URL },
] as const;

/** Prefix a public/ asset path with the configured basePath (needed for GitHub Pages sub-paths). */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

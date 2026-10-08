// Landing page repo (this site) and the product repo (app + releases).
export const REPO_URL = "https://github.com/Maftuuh1922/neorachAgent_lp";
export const APP_REPO_URL = "https://github.com/Maftuuh1922/neovrach_Agent";

export const RELEASE_VERSION = "v1.2.1";
/** Every download / install button points at the published release page. */
export const RELEASE_URL = `${APP_REPO_URL}/releases/tag/${RELEASE_VERSION}`;

export const INSTALL_URL = RELEASE_URL;
export const DOCS_URL = `${APP_REPO_URL}#readme`;
export const GITHUB_URL = APP_REPO_URL;
export const COMMUNITY_URL = `${APP_REPO_URL}/issues`;
export const CHANGELOG_URL = `${APP_REPO_URL}/releases`;

/** Real one-line installers (scripts live in the app repo; npm launcher ships as a release asset). */
export const INSTALL_COMMANDS = {
  Linux: "curl -fsSL https://raw.githubusercontent.com/Maftuuh1922/neovrach_Agent/main/scripts/install.sh | sh",
  Windows: "irm https://raw.githubusercontent.com/Maftuuh1922/neovrach_Agent/main/scripts/install.ps1 | iex",
  npm: "npm i -g https://github.com/Maftuuh1922/neovrach_Agent/releases/latest/download/neovarch-agent-npm.tgz",
} as const;
export const INSTALL_CMD = INSTALL_COMMANDS.Linux;

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

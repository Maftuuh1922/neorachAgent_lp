// Landing page repo (this site) and the product repo (app + releases).
export const REPO_URL = "https://github.com/Maftuuh1922/neorachAgent_lp";
export const APP_REPO_URL = "https://github.com/Maftuuh1922/neovrach_Agent";

export const RELEASE_VERSION = "v1.4.5";
// Pinned to the release whose files and sizes are listed below (bump all three together).
export const RELEASE_URL = `${APP_REPO_URL}/releases/tag/${RELEASE_VERSION}`;
const DL = `${APP_REPO_URL}/releases/download/${RELEASE_VERSION}`;

export const DOCS_URL = `${APP_REPO_URL}#readme`;
export const REMOTE_DOCS_URL = `${APP_REPO_URL}/blob/main/docs/remote-protocol.md`;
export const GITHUB_URL = APP_REPO_URL;
export const ISSUES_URL = `${APP_REPO_URL}/issues`;
export const LICENSE_URL = `${APP_REPO_URL}/blob/main/desktop/LICENSE`;
export const NOTICE_URL = `${APP_REPO_URL}/blob/main/desktop/NOTICE`;

/** Real one-line installers (scripts live in the app repo; npm launcher ships as a release asset). */
export const INSTALL_COMMANDS = {
  Linux: "curl -fsSL https://raw.githubusercontent.com/Maftuuh1922/neovrach_Agent/main/scripts/install.sh | sh",
  Windows: "irm https://raw.githubusercontent.com/Maftuuh1922/neovrach_Agent/main/scripts/install.ps1 | iex",
  npm: "npm i -g https://github.com/Maftuuh1922/neovrach_Agent/releases/download/v1.4.5/neovarch-agent-npm.tgz",
} as const;

export type ReleaseFile = { name: string; size: string; url: string };

/** Release v1.4.5 assets (sizes in MB, as listed on the GitHub release). */
export const FILES = {
  winSetup: { name: "neovarch-agent-windows-x64-setup.exe", size: "122.0 MB", url: `${DL}/neovarch-agent-windows-x64-setup.exe` },
  winZip: { name: "neovarch-agent-windows-x64.zip", size: "155.3 MB", url: `${DL}/neovarch-agent-windows-x64.zip` },
  appImage: { name: "neovarch-agent-linux-x64.AppImage", size: "128.6 MB", url: `${DL}/neovarch-agent-linux-x64.AppImage` },
  deb: { name: "neovarch-agent-linux-x64.deb", size: "109.1 MB", url: `${DL}/neovarch-agent-linux-x64.deb` },
  apkUniversal: { name: "neovarch-agent-android-universal.apk", size: "146.3 MB", url: `${DL}/neovarch-agent-android-universal.apk` },
} satisfies Record<string, ReleaseFile>;

/** Prefix a public/ asset path with the configured basePath (needed for GitHub Pages sub-paths). */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

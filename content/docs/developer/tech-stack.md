Semua nama dan versi di bawah diambil dari file manifest di repo: `core/pyproject.toml`, `desktop/package.json`, `desktop/apps/desktop/package.json`, `pubspec.yaml`, workflow GitHub Actions, dan `package.json` repo landing.

## Ringkasan

| Lapisan | Teknologi |
|---|---|
| Core: bahasa | **Python** ≥ 3.11 (installer memasang Python 3.14 lewat `uv`) |
| Core: dependensi | **aiohttp** ≥ 3.9, < 4 dan **PyYAML** ≥ 6, < 7 (hanya dua) |
| Core: paket | setuptools ≥ 68, `pyproject.toml`, entry point `neovarch = neovarch.cli:main` |
| Server / API | **aiohttp.web**: REST HTTP (`/api/*`), **WebSocket** JSON-RPC 2.0 (`/api/ws`), **SSE** `text/event-stream` (`/api/events`, `/api/office/events`) |
| Klien model | HTTP streaming ke API kompatibel OpenAI `/chat/completions` (aiohttp) |
| Desktop: shell | **Electron** 40.10.2, dibangun dengan **electron-builder** 27.0.0-alpha.6; electron-updater 6.8.9 |
| Desktop: UI | **React** 19.2.7 + **TypeScript** 6.0.3, **Vite** 8.2.0 (`@vitejs/plugin-react` 6.0.3, babel-plugin-react-compiler 1.0.0) |
| Desktop: styling | **Tailwind CSS** 4.3.3 (`@tailwindcss/vite`, `@tailwindcss/typography`), tailwind-merge, class-variance-authority |
| Desktop: komponen | **Radix UI** 1.6.7, cmdk 1.1.1 (palet perintah), lucide-react 0.577.0 dan Tabler Icons 3.44.0, motion 12.42.2 |
| Desktop: state & data | **nanostores** 1.4.2 (+ `@nanostores/react`), **TanStack Query** 5.101.2, TanStack Virtual 3.14.6, react-router 8.3.0 |
| Desktop: chat & konten | assistant-ui 0.14.24, **streamdown** 2.5.0 (Markdown streaming), **shiki** 4.3.1 (highlight kode), CodeMirror 6, d3-force 3.0.0 (graf) |
| Desktop: terminal & lain | **xterm.js** 6.0.0, **node-pty** 1.1.0, qrcode 1.5.4 (QR pairing), dnd-kit (seret-lepas) |
| Android | **Flutter** 3.47.6 (Dart SDK ^3.13.5), JDK 17, applicationId `com.neovarch.agent` |
| Android: paket utama | flutter_riverpod ^3.4.3, web_socket_channel ^3.0.3, http ^1.6.0, mobile_scanner ^7.4.2 (QR), flutter_secure_storage ^11.2.0 (token), shared_preferences ^2.5.6, url_launcher ^6.3.3, google_fonts ^9.0.0 |
| Penyimpanan | File biasa di `~/.neovarch`: JSON (sesi, `kanban.json`, `cron.json`), YAML (`config.yaml`), `.env` (rahasia), Markdown (memori, skill, vault). HP: shared_preferences + flutter_secure_storage |
| Build & CI | **GitHub Actions** (`desktop-electron.yml`: Node 22.22.0, npm 11.21.0, Python 3.12; `build-release.yml`: Flutter 3.47.6, JDK 17; `npm-asset.yml`: Node 20). Installer `install.sh` / `install.ps1` dengan **uv** |
| Testing | **pytest** ≥ 8 + pytest-asyncio ≥ 0.23 (core), **Vitest** 4.1.10 + Testing Library (desktop), **Playwright** 1.62.1 (e2e/sweep), `tsc --noEmit` (typecheck), `flutter test` |
| Landing & docs | **Next.js** 16.4.0 (static export) + React 19.3 + TypeScript 5.9, CSS biasa, font Instrument Serif / IBM Plex Sans / JetBrains Mono lewat `next/font`, di-host di **Vercel** |

## Core (Python)

```toml
[project]
name = "neovarch-agent"
requires-python = ">=3.11"
dependencies = ["aiohttp>=3.9,<4", "PyYAML>=6,<7"]

[project.optional-dependencies]
test = ["pytest>=8", "pytest-asyncio>=0.23"]

[project.scripts]
neovarch = "neovarch.cli:main"
```

Core sengaja kecil: satu event loop asyncio, satu server aiohttp, dan file JSON/YAML biasa. Tidak ada database, ORM, atau framework web lain.

## Desktop (Electron)

Workspace npm (`desktop/`) dengan dua paket: `apps/desktop` (aplikasi) dan `apps/shared` (kode bersama). Mesin: Node `^22.22.0 || ^24.11.0 || >=26.0.0`. Target build: Windows NSIS + zip, Linux AppImage + tar.gz + deb (x64).

## Android (Flutter)

Remote saja: tidak ada runtime agen di HP. Transport ke PC memakai WebSocket JSON-RPC 2.0 dan REST yang sama dengan desktop. APK dibangun dengan `flutter build apk --release --split-per-abi` (arm64 dan universal).

## Landing page dan dokumentasi

Situs ini (repo `neorachAgent_lp`) adalah Next.js dengan `output: "export"`. Halaman dokumentasi ditulis sebagai file Markdown di `content/docs/` dan dirender saat build menjadi HTML statis. Skrip pasca-build (`scripts/clean.mjs`) membuang JavaScript framework sehingga yang dikirim hanya HTML, CSS, dan satu skrip kecil (tab perintah, salin, dan pencarian docs).

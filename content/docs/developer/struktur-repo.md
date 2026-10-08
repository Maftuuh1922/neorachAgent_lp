Repo aplikasi: [github.com/Maftuuh1922/neovrach_Agent](https://github.com/Maftuuh1922/neovrach_Agent).

```text
core/                         core Python (perintah neovarch, gateway neovarch serve)
  neovarch/                   paket: agent, cli, config, llm, server, store, tools, ...
  tests/                      pytest + mock_llm.py (provider tiruan)
  scripts/smoke_serve.py      uji asap gateway + mock
  pyproject.toml
desktop/                      aplikasi desktop (Electron), workspace npm
  apps/desktop/
    electron/                 proses utama Electron
    electron/neovarch-remote.ts   gateway LAN + token untuk HP
    src/                      renderer React
    src/components/neovarch/  rail, Office, vault, banner update, tampilan
    src/i18n/                 teks antarmuka (bahasa Indonesia)
    electron-builder.config.cjs
  apps/shared/                kode bersama
  tests-js/smoke/             sweep desktop (neovarch-sweep.mts)
  tests-js/isolation/         tes isolasi data
lib/                          aplikasi HP (Flutter)
  remote/                     pairing, klien gateway, transkrip, UI remote
  data/gateway_client.dart    JSON-RPC 2.0 lewat WebSocket
  state/  theme/  ui/
test/                         tes Flutter (remote_gateway_test.dart, dll.)
android/  ios/                proyek native Flutter
docs/remote-protocol.md       protokol HP ↔ desktop
docs/release-notes/           catatan rilis
scripts/install.sh            installer Linux
scripts/install.ps1           installer Windows
scripts/isolation-test/       tes isolasi data (Linux)
npm/                          peluncur npm
.github/workflows/            CI dan rilis
LICENSE  NOTICE  README.md
```

Folder `linux/` dan `windows/` di root adalah sisa build desktop Flutter lama (v1.1.0) dan tidak lagi dirilis.

## Repo landing

Situs ini ada di repo terpisah, [github.com/Maftuuh1922/neorachAgent_lp](https://github.com/Maftuuh1922/neorachAgent_lp):

```text
app/                 halaman Next.js (landing di page.tsx, dokumentasi di app/docs/)
components/          komponen landing; components/docs/ untuk dokumentasi
content/docs/        isi dokumentasi (Markdown) dan urutan sidebar (nav.ts)
lib/site.ts          URL, versi rilis, perintah instalasi
public/              gambar
scripts/clean.mjs    pembersihan output statis
```

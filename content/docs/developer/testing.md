## Core: pytest

```bash
cd core
uv venv .venv && uv pip install -p .venv -e '.[test]'
.venv/bin/pytest -q
```

Tes ada di `core/tests/`, dengan `asyncio_mode = auto`. Cakupannya antara lain:

| File | Menguji |
|---|---|
| `test_agent_llm.py` | Loop agen dan klien streaming terhadap provider tiruan |
| `test_server.py` | Gateway: REST, WebSocket JSON-RPC, autentikasi |
| `test_store_tools.py` | Sesi, Kanban, alat, dan pemeriksaan perintah berbahaya |
| `test_paths_config.py` | Folder data, config, `.env` |
| `test_cli.py` | Perintah `neovarch` |
| `test_providers.py` | Endpoint kustom: http lokal, https self-signed + key + header, `/models` tidak ada (v1.4.0) |
| `test_office.py`, `test_obsidian.py`, `test_vault_viewer.py` | Office dan vault (v1.4.0) |
| `test_cron.py`, `test_updates.py`, `test_realtime.py` | Jadwal, cek update, dan aliran event termasuk latensi di bawah 300 ms dengan RTT simulasi 150 ms (v1.4.0) |

## Desktop: typecheck dan unit test

```bash
cd desktop
npm ci
npm run typecheck                                   # tsc untuk renderer, electron, e2e
cd apps/desktop
npx vitest run --project ui                         # tes UI
npx vitest run --project electron                   # tes proses utama
```

Ketiganya juga berjalan di CI (`desktop-electron.yml`) sebelum paket dibangun.

## Desktop: sweep

Sweep menyalakan aplikasi yang sudah dibangun dengan core dari checkout ini dan provider tiruan, lalu:

1. membuka setiap halaman di rail dan setiap bagian Pengaturan, dan gagal bila ada error konsol, teks "failed to load", atau respons API 4xx/5xx;
2. menjalankan alur Add model dua kali: endpoint http lokal dan gateway https dengan sertifikat self-signed, API key, dan header; lalu chat lewat endpoint itu.

```bash
cd desktop
npm run build --workspace apps/desktop
SWEEP_DIR=/tmp/neovarch-sweep PYTHON=$(which python3) xvfb-run -a npx tsx tests-js/smoke/neovarch-sweep.mts
```

`PYTHON` harus punya `aiohttp` dan `PyYAML`. Tangkapan layar disimpan di `$SHOTS` (bawaan `$SWEEP_DIR/shots`).

## Android: flutter test

```bash
flutter pub get
flutter analyze
flutter test test/remote_gateway_test.dart    # klien remote terhadap gateway tiruan
flutter test                                  # semua tes
```

Tes layar menulis tangkapan layar hanya dengan `--update-goldens`.

## Tes isolasi

`scripts/isolation-test/run.sh` (Linux) membuat lingkungan palsu, memasang core dengan `install.sh --core-only`, lalu memastikan Neovarch tidak membaca atau mengubah apa pun di luar foldernya sendiri, termasuk saat uninstall.

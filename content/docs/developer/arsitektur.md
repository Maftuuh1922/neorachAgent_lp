Neovarch terdiri dari satu core Python dan dua aplikasi yang berbicara dengannya lewat HTTP dan WebSocket.

## Gambaran besar

```text
                    ┌──────────────────────────── PC ────────────────────────────┐
                    │                                                            │
  Provider model ◄──┤  core (Python)                                             │
  (OpenAI-compat.)  │   agent loop ─ tools ─ sessions ─ memory ─ skills          │
                    │   kanban ─ office ─ cron ─ obsidian ─ updates              │
                    │        ▲                                                   │
                    │        │ neovarch serve (aiohttp: REST + WS + SSE)         │
                    │        │                                                   │
                    │   127.0.0.1:<port acak> ◄── aplikasi desktop (Electron)    │
                    │   0.0.0.0:9319 --isolated ◄─────────────┐                  │
                    └─────────────────────────────────────────┼──────────────────┘
                                                              │ LAN / VPN, token
                                                    aplikasi Android (Flutter)
```

## Core

Paket Python `neovarch` di `core/`. Modul utamanya:

| Modul | Tugas |
|---|---|
| `paths.py` | Lokasi `~/.neovarch` dan penjaga yang menolak operasi file di luar wilayah Neovarch |
| `config.py` | `config.yaml`, `.env`, preset provider, resolusi endpoint, `SOUL.md` |
| `llm.py` | Klien streaming untuk `/chat/completions` (teks, penalaran, pemanggilan alat) |
| `tools.py` | Alat agen dan pemeriksaan perintah berbahaya |
| `agent.py` | Loop agen: stream, jalankan alat, ulangi; menyusun prompt sistem |
| `store.py` | Sesi (`sessions/<id>.json`) dan papan Kanban (`kanban.json`) |
| `server.py` | Gateway `neovarch serve`: HTTP + WebSocket |
| `cli.py` | Perintah `neovarch` |
| `providers.py` | Preset dan endpoint kustom, probe `/models` (v1.4.0) |
| `office.py` | Snapshot Office dan umpan aktivitas (v1.4.0) |
| `obsidian.py` | Vault Obsidian: cari, baca, tulis, tautan, graf (v1.4.0) |
| `cron.py` | Tugas terjadwal dan penjadwal (v1.4.0) |
| `realtime.py` | Aliran event berurutan dengan `seq` dan pemutaran ulang (v1.4.0) |
| `netinfo.py` | Alamat LAN dan Tailscale (v1.4.0) |
| `updates.py` | Cek rilis GitHub (v1.4.0) |

## Loop agen

1. Susun prompt sistem: `SOUL.md`, `agent.system_prompt`, catatan memori, catatan vault yang relevan, daftar skill, folder kerja, dan tanggal.
2. Kirim riwayat ke model dengan definisi alat, dalam mode streaming.
3. Teruskan potongan teks dan penalaran sebagai event (`message.delta`, `reasoning.delta`).
4. Bila model meminta alat, jalankan (dengan persetujuan bila perlu), kirim `tool.start` / `tool.complete`, tambahkan hasilnya ke riwayat, ulangi.
5. Berhenti saat model selesai atau `agent.max_turns` tercapai; kirim `message.complete` dan simpan sesi.

## Gateway

`neovarch serve` adalah server aiohttp dengan tiga jalur:

- **REST** di `/api/*` untuk sesi, config, model, provider, Kanban, Office, vault, cron, file, dan status.
- **WebSocket** di `/api/ws` dengan JSON-RPC 2.0: permintaan (`session.create`, `prompt.submit`, ...), notifikasi event, dan permintaan dari server ke klien (persetujuan).
- **SSE** di `/api/events` dan `/api/office/events` untuk aliran event hanya-baca. {{soon}}

Setiap jalur butuh token. Saat siap, gateway mencetak baris kesiapan berisi port; aplikasi desktop menunggu baris ini sebelum menyambung.

## Aplikasi desktop

Electron (proses utama di `electron/`, renderer React di `src/`). Proses utama menyalakan core sebagai proses anak di `127.0.0.1` dengan token per peluncuran, dan menyalakan gateway kedua di `0.0.0.0:9319` dengan `--isolated` saat akses remote diaktifkan (`electron/neovarch-remote.ts`). Token HP adalah token akses bertanda tangan HMAC-SHA256 dengan rahasia yang disimpan di data aplikasi (`neovarch-remote.json`, mode 0600).

## Aplikasi Android

Flutter di `lib/`. Folder `lib/remote/` berisi pairing (QR/manual), klien gateway, transkrip, dan UI remote; `lib/data/gateway_client.dart` adalah klien JSON-RPC 2.0 lewat WebSocket. HP mengirim `client.capabilities {server_requests: true}` agar menerima permintaan persetujuan, dan `ping` setiap 15 detik sebagai keepalive.

## Data

Semua status ada di file biasa di bawah `~/.neovarch`: JSON untuk sesi, Kanban, dan cron; YAML untuk config; `.env` untuk rahasia; Markdown untuk memori dan skill. Penulisan file dilakukan secara atomik (tulis ke file sementara lalu ganti).

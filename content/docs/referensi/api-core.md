`neovarch serve` menyediakan REST, WebSocket JSON-RPC 2.0, dan SSE di satu port. Aplikasi desktop dan HP memakai API ini; kamu juga bisa memakainya untuk skrip dan integrasi sendiri.

Endpoint bertanda {{soon:v1.4.0}} sudah ada di kode pengembangan tetapi belum ada di rilis v1.3.0.

## Menyalakan dan autentikasi

```bash
neovarch serve --host 127.0.0.1 --port 9319
```

- `--port 0` memilih port bebas. Bawaan `9319`.
- `--isolated` adalah mode remote/HP: hanya token pairing bertanda tangan yang diterima.
- Gateway tidak pernah berjalan tanpa token. Bila tidak diberi token, ia membuat satu dan mencetaknya.

Kirim token dengan salah satu cara:

```text
Authorization: Bearer <token>
X-Neovarch-Session-Token: <token>
?token=<token>              (untuk WebSocket dan SSE)
```

`GET /api/status` bisa dibaca tanpa token.

## REST: dasar

| Metode | Path | Fungsi |
|---|---|---|
| GET | `/api/health` | Cek hidup |
| GET | `/api/status` | Versi, model, status (publik) |
| GET | `/api/sessions` | Daftar sesi |
| GET | `/api/sessions/{id}` | Detail sesi |
| GET | `/api/sessions/{id}/messages` | Pesan sesi |
| PATCH | `/api/sessions/{id}` | Ubah sesi (misalnya judul) |
| DELETE | `/api/sessions/{id}` | Hapus sesi |
| GET | `/api/sessions/search` | Cari sesi {{soon:v1.4.0}} |
| GET, PUT | `/api/config` | Baca / ubah `config.yaml` |
| GET | `/api/config/defaults` | Nilai bawaan |
| GET | `/api/config/schema` | Skema pengaturan {{soon:v1.4.0}} |
| GET | `/api/model/info` | Model aktif |
| GET | `/api/model/options` | Provider dan model yang tersedia |
| POST | `/api/model/set` | Ganti model |
| GET | `/api/skills` | Daftar skill |
| GET | `/api/skills/content` | Isi `SKILL.md` {{soon:v1.4.0}} |
| GET | `/api/tools/toolsets` | Daftar alat |
| GET | `/api/profiles` | Daftar profil |
| GET | `/api/fs/list`, `/api/fs/read`, `/api/fs/default` | Penjelajah file hanya-baca |

## REST: provider dan .env {{soon:v1.4.0}}

| Metode | Path | Fungsi |
|---|---|---|
| GET | `/api/providers/custom-endpoints` | Daftar endpoint kustom |
| POST | `/api/providers/custom-endpoints` | Simpan endpoint (`name`, `base_url`, `api_key`, `headers`, `allow_insecure_tls`, `model`, `make_default`) |
| POST | `/api/providers/custom-endpoints/validate` | Tes koneksi dan ambil `/models` |
| POST | `/api/providers/custom-endpoints/{id}/activate` | Jadikan aktif |
| DELETE | `/api/providers/custom-endpoints/{id}` | Hapus |
| POST | `/api/providers/validate` | Tes key preset |
| GET, PUT, DELETE | `/api/env` | Baca (disamarkan) / ubah / hapus nilai `.env` |
| POST | `/api/env/reveal` | Tampilkan satu nilai |

## REST: Kanban

| Metode | Path | Fungsi |
|---|---|---|
| GET | `/api/plugins/kanban/board` | Papan lengkap (kolom + tugas) |
| POST | `/api/plugins/kanban/tasks` | Buat tugas (`title`, `body`, `assignee`, `priority`) |
| PATCH | `/api/plugins/kanban/tasks/{id}` | Ubah tugas atau status |
| POST | `/api/plugins/kanban/tasks/{id}/comments` | Tambah komentar |
| GET, DELETE | `/api/plugins/kanban/tasks/{id}` | Detail / hapus {{soon:v1.4.0}} |
| GET | `/api/plugins/kanban/tasks/{id}/log` | Riwayat tugas {{soon:v1.4.0}} |
| POST | `/api/plugins/kanban/tasks/bulk` | Ubah banyak tugas {{soon:v1.4.0}} |
| GET | `/api/plugins/kanban/boards`, `/api/plugins/kanban/events` | Daftar papan, socket event {{soon:v1.4.0}} |

## REST: Office, vault, tampilan, update {{soon:v1.4.0}}

| Metode | Path | Fungsi |
|---|---|---|
| GET | `/api/office` | Snapshot Office (`agents`, `feed`, `counts`, `kanban`, `vault`) |
| GET | `/api/office/events` | SSE `office.update` |
| GET | `/api/memory/obsidian` | Status vault |
| GET | `/api/obsidian/tree` | Pohon vault |
| GET | `/api/obsidian/note` | Catatan + backlink + tautan `obsidian://` |
| GET | `/api/obsidian/graph` | Graf catatan |
| GET | `/api/obsidian/search` | Pencarian vault |
| GET, PUT | `/api/appearance` | `{accent, base, on_accent}` |
| GET | `/api/update` | Cek rilis terbaru |
| GET | `/api/network/addresses` | Alamat LAN, Tailscale, MagicDNS |

## REST: cron {{soon:v1.4.0}}

| Metode | Path | Fungsi |
|---|---|---|
| GET, POST | `/api/cron/jobs` | Daftar / buat (`name`, `prompt`, `schedule`, `repeat`) |
| GET, PUT, PATCH, DELETE | `/api/cron/jobs/{id}` | Detail / ubah / hapus |
| POST | `/api/cron/jobs/{id}/pause`, `/api/cron/jobs/{id}/resume` | Jeda / lanjutkan |
| POST | `/api/cron/jobs/{id}/trigger` | Jalankan sekarang |
| GET | `/api/cron/jobs/{id}/runs` | Riwayat jalan |

## WebSocket JSON-RPC: `/api/ws`

Satu objek JSON per frame. Frame pertama dari server adalah event `gateway.ready`.

```json
{"jsonrpc": "2.0", "id": 1, "method": "session.create", "params": {"source": "script"}}
{"jsonrpc": "2.0", "id": 2, "method": "prompt.submit", "params": {"session_id": "<id>", "text": "halo"}}
```

| Kelompok | Metode |
|---|---|
| Koneksi | `ping`, `client.capabilities` |
| Sesi | `session.list`, `session.active_list`, `session.create`, `session.resume`, `session.activate`, `session.status`, `session.title`, `session.save`, `session.interrupt` |
| Chat | `prompt.submit` |
| Persetujuan | `approval.pending`, `approval.respond` |
| Config & model | `config.get`, `config.set`, `model.options`, `model.set`, `setup.status`, `setup.runtime_check` |
| Lain | `commands.catalog`, `profiles.list` |
| Baru {{soon:v1.4.0}} | `office.snapshot`, `events.replay`, `network.addresses` |

Fitur yang tidak dimiliki core dijawab dengan hasil kosong yang valid, bukan error. Metode yang tidak dikenal dijawab `-32601` dan dicatat di `logs/unhandled.log`.

### Event

Event dikirim sebagai notifikasi `{"method": "event", "params": {"type", "session_id", "payload"}}`:

| Event | Isi |
|---|---|
| `message.start`, `message.delta`, `message.complete` | Jawaban streaming dan akhir giliran (dengan `usage`) |
| `reasoning.delta` | Teks penalaran |
| `tool.start`, `tool.complete` | Pemanggilan alat dan hasilnya |
| `session.title`, `sessions.changed` | Judul sesi, daftar sesi berubah |
| `approval.request`, `approval.cancelled` | Persetujuan baru / ditarik |
| `office.update`, `kanban.changed`, `vault.changed`, `cron.changed`, `appearance.changed` | Perubahan global {{soon:v1.4.0}} |

### Persetujuan

Klien yang mengirim `client.capabilities {"server_requests": true}` menerima permintaan dari server:

```json
{"jsonrpc": "2.0", "id": "srq-…", "method": "approval",
 "params": {"session_id": "…", "request_id": "apr-…", "command": "rm -rf build",
            "description": "This command deletes files recursively/forcibly.",
            "choices": ["once", "session", "deny"], "tool_name": "shell"}}
```

Jawab dengan `{"jsonrpc": "2.0", "id": "srq-…", "result": {"choice": "once"}}`. Batas waktu 300 detik.

## Event berurutan dan SSE {{soon:v1.4.0}}

Di v1.4.0 setiap event membawa `seq` yang terus naik selama satu kali core menyala (`boot_id`):

- **WebSocket**: sambung ulang dengan `/api/ws?token=…&since=<seq>&boot_id=<id>`. Event global yang terlewat diputar ulang (`replayed: true`). Bila tidak bisa, server mengirim `resync.required` dan klien memuat ulang data.
- **`events.replay`** `{since, boot_id, session_ids}`: memutar ulang event sesi tertentu.
- **SSE** `GET /api/events`: `text/event-stream` dengan `id: <seq>`, filter `?types=office.,kanban.` dan `?session=…`, lanjut dengan header `Last-Event-ID`, dan komentar keep-alive setiap 15 detik.
- **REST** `GET /api/events/replay?since=&boot_id=&session=`.
- `ping` mengembalikan `{pong, seq, boot_id, ts}` dan bisa dipakai sebagai keepalive.

Protokol lengkap HP ↔ PC: [docs/remote-protocol.md](https://github.com/Maftuuh1922/neovrach_Agent/blob/main/docs/remote-protocol.md).

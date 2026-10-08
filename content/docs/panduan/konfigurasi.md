Semua data dan pengaturan Neovarch ada di satu folder. Tidak ada yang disimpan di tempat lain.

## Folder data

| Sistem | Lokasi |
|---|---|
| Linux | `~/.neovarch` |
| Windows | `%LOCALAPPDATA%\neovarch` |
| Kustom | variabel lingkungan `NEOVARCH_HOME` |

Isinya:

```text
~/.neovarch/
  config.yaml          pengaturan (tanpa rahasia)
  .env                 API key dan header (KEY=value)
  SOUL.md              kepribadian dan instruksi dasar agen
  kanban.json          papan tugas
  cron.json            tugas terjadwal (v1.4.0)
  sessions/<id>.json   riwayat setiap sesi
  memory/*.md          catatan memori
  skills/<nama>/SKILL.md
  logs/
  neovarch-agent/      core terpasang (Python + venv)
  profiles/<nama>/     data per profil (bila memakai --profile)
```

`neovarch config path` menampilkan lokasi `config.yaml` yang sedang dipakai.

## config.yaml

Semua kunci opsional; nilai yang tidak ada memakai bawaan.

```yaml
model:
  default: gpt-4o-mini            # id model yang dikirim ke provider
  provider: openai                # nama preset, custom, atau custom:<id>
  base_url: https://api.openai.com/v1
  context_length: 128000
providers: {}                     # endpoint bernama (bentuk map)
custom_providers: []              # endpoint kustom (bentuk list)
approvals:
  mode: ask                       # ask | off
agent:
  max_turns: 30                   # batas putaran alat per pesan
  system_prompt: ""               # instruksi tambahan setelah SOUL.md
memory:
  obsidian_vault: ""              # folder vault Obsidian (v1.4.0)
appearance:
  accent: "#EE1C1C"               # warna aksen (v1.4.0)
  base: dark                      # dark | light (v1.4.0)
```

Ubah dari terminal:

```bash
neovarch config show
neovarch config get model.default
neovarch config set agent.max_turns 50
neovarch config set approvals.mode ask
```

## .env

API key tidak pernah ditulis ke `config.yaml`. Mereka ada di `.env`, satu per baris:

```bash
OPENAI_API_KEY=sk-...
OPENROUTER_API_KEY=sk-or-...
NEOVARCH_EP_LITELLM_LOKAL_API_KEY=...
```

Di v1.4.0 aplikasi desktop bisa membaca dan mengubah file ini lewat Pengaturan; nilainya disamarkan kecuali kamu menekan tombol tampilkan. {{soon}}

## SOUL.md

Prompt dasar agen. Bila belum ada, core memakai teks bawaan: agen bekerja di komputer pengguna, singkat dan langsung, melaporkan apa yang diubah dan diverifikasi, dan bertanya sebelum melakukan hal yang merusak. Ubah file ini untuk mengganti gaya atau aturan agen. `agent.system_prompt` ditambahkan setelahnya.

## Profil

`neovarch --profile kerja ...` menyimpan data profil itu di `~/.neovarch/profiles/kerja`: config, key, sesi, dan memori sendiri. Aplikasi desktop meneruskan `--profile` bila sebuah profil dipilih.

## Variabel lingkungan

| Variabel | Fungsi |
|---|---|
| `NEOVARCH_HOME` | Folder data selain bawaan. |
| `NEOVARCH_VERSION` | (installer) tag rilis yang dipasang, misalnya `v1.3.0`. |
| `NEOVARCH_REF` | (installer) ref git untuk core. |
| `NEOVARCH_CORE_SRC` | (installer) pasang core dari checkout lokal. |
| `NEOVARCH_RELEASES_URL` | Alamat API rilis lain untuk cek update (v1.4.0, untuk pengujian). |

Perintah `neovarch` adalah antarmuka terminal untuk core. `python -m neovarch …` sama dengan `neovarch …`.

## Ringkasan

```text
neovarch                         chat interaktif di terminal
neovarch -q "prompt"             satu prompt, lalu keluar
neovarch --resume <id|judul>     lanjutkan sesi
neovarch -p <profil> …           pakai profil (data di <home>/profiles/<profil>)
neovarch setup                   pilih provider model dan simpan API key
neovarch config [show|get|set|path] [kunci] [nilai]
neovarch sessions [list|show|delete] [id]
neovarch serve [--host 127.0.0.1] [--port 9319] [--isolated]
neovarch desktop                 buka aplikasi desktop
neovarch update                  cara memperbarui
neovarch uninstall [--yes]       hapus Neovarch (hanya ~/.neovarch)
neovarch --version
```

## Opsi global

| Opsi | Fungsi |
|---|---|
| `-q`, `--query` | Jalankan satu prompt lalu keluar |
| `--resume` | Lanjutkan sesi berdasarkan id atau judul |
| `-p`, `--profile` | Pakai profil bernama |
| `-V`, `--version` | Tampilkan versi |

## `neovarch` / `neovarch chat`

Chat interaktif dengan streaming dan aktivitas alat. Perintah berisiko menanyakan `Allow? [o]nce / [s]ession / [N]o`.

## `neovarch setup`

| Opsi | Fungsi |
|---|---|
| `--provider` | `openai`, `openrouter`, `groq`, `deepseek`, `ollama`, atau `custom` |
| `--base-url` | Base URL (`…/v1`) untuk `custom` |
| `--model` | Id model |
| `--api-key` | API key (disimpan di `.env`) |
| `--non-interactive` | Jangan bertanya; pakai nilai yang diberikan dan bawaan preset |

## `neovarch config`

```bash
neovarch config show                       # seluruh config
neovarch config get model                  # satu kunci (JSON)
neovarch config set agent.max_turns 50     # nilai di-parse sebagai JSON bila bisa
neovarch config set memory.obsidian_vault ~/Vault
neovarch config path                       # lokasi config.yaml
```

## `neovarch sessions`

```bash
neovarch sessions list --limit 30
neovarch sessions show <id>
neovarch sessions delete <id>
```

## `neovarch serve`

| Opsi | Bawaan | Fungsi |
|---|---|---|
| `--host` | `127.0.0.1` | Alamat dengar. `0.0.0.0` untuk LAN |
| `--port` | `9319` | Port. `0` memilih port bebas |
| `--isolated` | mati | Mode remote: wajib token pairing |

Lihat [API core](/docs/referensi/api-core/).

## `neovarch desktop`

Membuka aplikasi desktop yang terpasang. Bila belum terpasang, perintah ini menampilkan cara memasangnya.

## `neovarch uninstall`

Menghapus `~/.neovarch` saja. `--yes` melewati konfirmasi. Untuk menghapus aplikasi desktop juga, pakai installer dengan `--uninstall` (Linux) atau `-Uninstall` (Windows). Lihat [Instalasi](/docs/mulai/instalasi/).

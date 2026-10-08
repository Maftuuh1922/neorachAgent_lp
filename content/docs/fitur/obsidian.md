{{soon}}

Neovarch bisa memakai vault [Obsidian](https://obsidian.md) sebagai memori jangka panjang. Vault hanyalah folder berisi catatan Markdown, jadi agen bisa mencari, membaca, menulis, dan mengikuti tautan di dalamnya.

## Mengaktifkan

Pilih folder vault di **Pengaturan ▸ Vault** di aplikasi desktop, atau lewat terminal:

```bash
neovarch config set memory.obsidian_vault ~/Documents/VaultKu
```

Status vault: `GET /api/memory/obsidian` (terkonfigurasi, terhubung, jumlah catatan).

## Alat agen

| Alat | Fungsi |
|---|---|
| `obsidian_search` | Mencari catatan berdasarkan kata kunci, dengan cuplikan |
| `obsidian_read` | Membaca satu catatan (frontmatter, isi, tag) |
| `obsidian_write` | Membuat, menambah (`append`), atau menimpa (`overwrite`) catatan |
| `obsidian_links` | Daftar wikilink keluar dan backlink sebuah catatan |

Selain itu, core memilih kata kunci dari pesanmu dan menyertakan beberapa catatan yang relevan di prompt sistem secara otomatis.

## Keamanan path

Setiap path harus relatif dan tetap di dalam vault. `..`, path absolut, symlink ke luar vault, dan folder tersembunyi (`.obsidian`, `.trash`, `.git`) ditolak.

## Penampil vault di desktop

Halaman **Vault Obsidian** di rail menampilkan:

- pohon file vault;
- isi catatan dalam Markdown dengan wikilink yang bisa diklik;
- backlink (catatan lain yang menaut ke catatan ini);
- tampilan graf: catatan sebagai simpul dan wikilink sebagai garis.

Di HP, vault bisa dibuka dalam mode hanya baca.

## Buka di Obsidian

Setiap catatan yang ditulis agen menyertakan tautan `obsidian://open?vault=<nama>&file=<path>`. Klik untuk membukanya langsung di aplikasi Obsidian.

## API

| Endpoint | Isi |
|---|---|
| `GET /api/obsidian/tree` | Pohon folder dan catatan |
| `GET /api/obsidian/note?path=...` | Catatan + backlink + tautan `obsidian://` |
| `GET /api/obsidian/graph` | Simpul dan garis untuk graf |
| `GET /api/obsidian/search?q=...` | Pencarian |

Perubahan oleh agen didorong sebagai event `vault.changed`.

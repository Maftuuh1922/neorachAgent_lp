Agen punya memori jangka panjang berupa catatan Markdown biasa di `~/.neovarch/memory/`. Kamu bisa membuka, mengedit, atau menghapusnya dengan editor teks apa pun.

## Alat `memory`

| Aksi | Fungsi |
|---|---|
| `list` | Daftar catatan |
| `read` | Membaca satu catatan |
| `append` | Menambah baris ke catatan |
| `write` | Menulis ulang catatan |

Contoh perintah ke agen:

```text
Ingat bahwa proyek utamaku ada di ~/kerja/toko-online dan pakai pnpm.
```

Agen akan menyimpan catatan seperti `memory/proyek.md`. Di sesi berikutnya, kamu bisa bertanya "proyek utamaku di mana?" dan agen membaca memorinya.

## Masuk ke prompt

Setiap kali agen menjawab, core menyertakan catatan di folder memori ke prompt sistem (paling banyak 20 catatan, masing-masing 4.000 karakter pertama), sehingga agen sudah tahu konteks dasar tanpa harus mencari.

## Vault Obsidian sebagai memori {{soon}}

Di v1.4.0 kamu bisa memakai vault Obsidian sebagai memori jangka panjang yang lebih besar: dicari, dibaca, ditulis, dan ditautkan oleh agen. Lihat [Obsidian vault](/docs/fitur/obsidian/).

## Privasi

Memori hanya ada di PC kamu. Isinya dikirim ke provider model sebagai bagian dari prompt, jadi jangan simpan rahasia (password, API key) di catatan memori.

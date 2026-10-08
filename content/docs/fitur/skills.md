Skill adalah instruksi siap pakai untuk tugas tertentu, disimpan sebagai file Markdown di PC kamu. Agen melihat daftar skill di prompt sistemnya dan membaca isinya dengan alat `skill` sebelum memakainya.

## Struktur

```text
~/.neovarch/skills/
  rapikan-unduhan/
    SKILL.md
  laporan-mingguan/
    SKILL.md
```

Nama folder adalah nama skill. Contoh `SKILL.md`:

```markdown
---
name: rapikan-unduhan
description: Merapikan folder Unduhan ke subfolder per jenis file.
---

# Rapikan unduhan

1. Daftar isi ~/Downloads.
2. Buat subfolder Dokumen, Gambar, Arsip, Lainnya.
3. Pindahkan file sesuai ekstensi. Jangan hapus apa pun.
4. Laporkan berapa file yang dipindahkan ke tiap folder.
```

Baris `description:` dipakai sebagai ringkasan. Bila tidak ada, core memakai baris isi pertama.

## Cara agen memakainya

1. Saat sesi dimulai, core menambahkan daftar `nama: deskripsi` semua skill ke prompt sistem.
2. Bila tugasmu cocok, agen memanggil `skill` dengan nama skill itu untuk membaca isinya.
3. Agen mengikuti langkahnya dengan alat biasa (`shell`, file, web).

Kamu juga bisa menyuruh langsung: "pakai skill rapikan-unduhan".

## Di aplikasi desktop

Halaman **Skill & alat** di rail menampilkan skill lokal dan daftar alat agen. Di v1.4.0 halaman ini hanya menampilkan skill lokal, tanpa hub atau situs skill online. {{soon}}

## Lewat API

- `GET /api/skills`: daftar skill.
- `GET /api/skills/content?name=<nama>`: isi `SKILL.md`. {{soon}}

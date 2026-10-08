{{soon}}

> [!segera] Fitur ini direncanakan untuk v1.4.0 dan belum ada di rilis. Halaman ini menjelaskan rancangannya.

Agen bisa menyusun laporan atau skripsi dengan referensi yang nyata, lalu mengekspornya ke DOCX dan PDF dengan format kampus. Semua alat yang dipakai gratis.

## Referensi nyata, tanpa sitasi palsu

Agen mencari referensi lewat API ilmiah terbuka: **OpenAlex**, **Crossref**, dan **Semantic Scholar**. Hanya karya yang benar-benar ditemukan yang masuk ke daftar pustaka (`references.bib`).

## Alur

1. Agen menulis naskah dalam Markdown dan `references.bib`.
2. **Pandoc** dengan citeproc mengubahnya menjadi `.docx`, memakai gaya sitasi CSL (APA atau IEEE) dan `reference.docx` format kampus: Times New Roman 12, spasi 1,5, margin 4-3-3-3 cm, daftar isi, dan penomoran bab.
3. PDF dibuat lewat Typst, atau LibreOffice headless bila terpasang.
4. Bila Pandoc belum ada, core mengunduhnya ke `~/.neovarch/bin`.

Alat core yang direncanakan: `report_create` dan `report_export`.

## Pratinjau dokumen

Hasil bisa dipratinjau di aplikasi sesuai bentuk aslinya: PDF lewat pdf.js dan DOCX lewat docx-preview, di panel File/Artefak desktop. Dari HP kamu bisa membuka dan mengunduh file hasil.

## Simpan ke Obsidian

Laporan juga bisa disimpan sebagai Markdown di vault Obsidian, dengan tombol **Buka di Obsidian**. Lihat [Obsidian vault](/docs/fitur/obsidian/).

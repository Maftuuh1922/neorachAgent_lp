Aplikasi desktop adalah tempat utama kamu bekerja dengan agen. Ia menyalakan core di latar belakang (hanya bisa diakses dari PC itu sendiri, `127.0.0.1`) dan menampilkan semua yang dikerjakan agen secara langsung.

## Tata letak

| Area | Isi |
|---|---|
| **Rail kiri** | Tombol ikon untuk berpindah halaman. |
| **Tab sesi** | Setiap obrolan terbuka sebagai tab. Tab baru bernama "Sesi baru" sampai agen memberinya judul. |
| **Area chat** | Jawaban streaming, blok penalaran, baris aktivitas alat, dan kotak ketik (composer). |
| **Panel kanan** | File di folder kerja sesi, dan kartu mini "Kantor" yang menunjukkan agen yang sedang bekerja. {{soon}} |
| **Bilah status** | Model aktif, status koneksi core, dan pemberitahuan update. |

Palet perintah dibuka dengan **Ctrl K**.

## Menu di rail (v1.4.0)

Di v1.4.0 setiap item di rail terhubung ke fitur core yang nyata; item yang tidak didukung dihapus dari rail. {{soon}}

| Item | Fungsi | Dokumentasi |
|---|---|---|
| Obrolan baru | Membuka sesi baru | [Quickstart](/docs/mulai/quickstart/) |
| Sesi | Daftar dan pencarian sesi tersimpan | - |
| Kantor | Agen sebagai pegawai | [Office](/docs/fitur/office/) |
| Vault Obsidian | Pohon catatan, isi catatan, backlink, graf | [Obsidian vault](/docs/fitur/obsidian/) |
| Skill & alat | Skill lokal dan daftar alat | [Skills lokal](/docs/fitur/skills/) |
| Tugas (Kanban) | Papan tugas | [Kanban](/docs/fitur/kanban/) |
| Artefak | File yang dihasilkan agen | - |
| Jadwal | Tugas terjadwal | [Cron & otomasi](/docs/fitur/cron/) |
| Pasangkan HP | QR untuk aplikasi Android | [Android & pairing QR](/docs/panduan/android-pairing/) |
| Tema gelap / terang | Berganti mode | [Tema & tampilan](/docs/fitur/tema/) |
| Pengaturan | Model, provider, remote, tampilan, dan lainnya | [Konfigurasi](/docs/panduan/konfigurasi/) |

Di v1.3.0 beberapa menu rail (misalnya Skills, Kanban, Artefak, Jadwal) masih kosong atau tidak bisa dipakai. Ini diperbaiki di v1.4.0.

## Layar awal

Di v1.4.0 layar awal dibuat minimal: hanya sapaan sesuai jam (misalnya "Selamat malam") dan kotak ketik. {{soon}}

## Pengaturan

Bagian yang paling sering dipakai:

- **Provider / Model**: memilih model, menambah API key, dan endpoint kustom. Lihat [Provider & endpoint kustom](/docs/panduan/provider-endpoint/).
- **Remote / Perangkat**: mengaktifkan akses dari HP, menampilkan QR, alamat, dan token. Lihat [Android & pairing QR](/docs/panduan/android-pairing/).
- **Tampilan**: tema, warna aksen, mode gelap/terang. Lihat [Tema & tampilan](/docs/fitur/tema/).
- **Keamanan**: mode persetujuan perintah. Lihat [Persetujuan & keamanan](/docs/panduan/persetujuan-keamanan/).
- **Vault**: memilih folder vault Obsidian. {{soon}}

## Folder kerja

Setiap sesi punya folder kerja (cwd). Perintah `shell` dan path relatif di alat file dijalankan dari folder itu. Panel File di kanan hanya membaca isi folder (lewat `/api/fs/list` dan `/api/fs/read`).

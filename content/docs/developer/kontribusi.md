Neovarch Agent adalah proyek terbuka berlisensi MIT. Laporan masalah, ide, dan perubahan kode diterima.

## Melaporkan masalah

Buka [issue baru](https://github.com/Maftuuh1922/neovrach_Agent/issues) dan sertakan:

- versi (`neovarch --version`) dan sistem operasi;
- langkah untuk memunculkan masalah;
- apa yang terjadi dan apa yang seharusnya terjadi;
- potongan log dari `~/.neovarch/logs/` bila relevan (hapus token dan API key lebih dulu).

## Mengirim perubahan

1. Fork repo dan buat branch dari `main`.
2. Buat perubahan kecil dan fokus. Ikuti gaya kode yang ada.
3. Jalankan tes yang relevan (lihat [Testing](/docs/developer/testing/)):
   - core: `pytest -q`;
   - desktop: `npm run typecheck` dan vitest;
   - Android: `flutter analyze` dan `flutter test`.
4. Tulis pesan commit yang menjelaskan apa yang berubah dan kenapa.
5. Buka pull request ke `main`.

## Aturan proyek

- **Antarmuka berbahasa Indonesia.** Teks baru di desktop masuk ke `desktop/apps/desktop/src/i18n/`.
- **Gaya visual**: merah gelap, datar, sudut membulat, tanpa gradien, glow, atau bayangan.
- **Data hanya di `~/.neovarch`.** Jangan menulis ke folder lain di luar folder kerja sesi.
- **Tanpa fitur kosong.** Item menu yang belum didukung core dihapus, bukan dibiarkan kosong.
- **Core tetap kecil.** Tambahkan dependensi Python hanya bila benar-benar perlu.

## Rilis

Rilis dibuat dengan mendorong tag `v*` (misalnya `v1.4.0`). GitHub Actions membangun installer Windows, paket Linux, APK Android, dan paket npm, lalu mengunggahnya ke halaman rilis.

## Dokumentasi

Halaman ini ada di repo [neorachAgent_lp](https://github.com/Maftuuh1922/neorachAgent_lp) di `content/docs/`. Klik "Edit halaman ini di GitHub" di bawah setiap halaman untuk mengusulkan perbaikan.

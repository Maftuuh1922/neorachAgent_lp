{{soon}}

Neovarch memeriksa apakah ada rilis yang lebih baru di GitHub dan memberi tahu kamu di desktop dan HP. Tidak ada yang diunduh atau dipasang otomatis.

## Cara kerja

1. Core memanggil `https://api.github.com/repos/Maftuuh1922/neovrach_Agent/releases/latest` dan membandingkan tag rilis dengan versinya sendiri.
2. Hasil disimpan 6 jam (15 menit bila gagal) agar tidak membebani API GitHub.
3. Bila ada versi baru, aplikasi desktop menampilkan banner **Update tersedia vX** dengan tautan unduhan, dan aplikasi Android menampilkan pemberitahuan yang sama.
4. Tautan unduhan menunjuk ke file yang cocok untuk platformmu (Linux: tar.gz/AppImage/deb, Windows: zip/exe, Android: apk), atau ke halaman rilis.

## API

```bash
curl -H "Authorization: Bearer $TOKEN" http://127.0.0.1:9319/api/update
```

Jawaban berisi `current`, `latest`, `available`, `url`, `download_url`, `name`, `published_at`, dan `notes` (catatan rilis).

## Memperbarui

- **Installer satu baris**: jalankan lagi perintah instalasi. Lihat [Instalasi](/docs/mulai/instalasi/).
- **File rilis**: unduh file baru dari tautan di banner dan pasang di atas versi lama.
- **Android**: unduh APK baru dan pasang di atas versi lama.

`neovarch update` di terminal menampilkan cara memperbarui untuk instalasi kamu.

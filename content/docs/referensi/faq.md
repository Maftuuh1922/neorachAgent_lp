## Umum

### Apakah Neovarch gratis?

Ya. Kodenya terbuka dengan lisensi MIT. Kamu hanya membayar model AI yang kamu pakai ke provider-nya, atau gratis bila memakai model lokal seperti Ollama.

### Apakah data saya dikirim ke server Neovarch?

Tidak ada server Neovarch. Data tersimpan di `~/.neovarch` di PC kamu. Yang keluar dari PC hanyalah percakapan yang dikirim ke provider model pilihanmu, dan (mulai v1.4.0) cek versi ke GitHub.

### Apakah HP menjalankan agen sendiri?

Tidak. Aplikasi Android adalah remote. Semua kerja terjadi di PC, jadi PC harus menyala dan aplikasi desktop (atau `neovarch serve`) harus berjalan.

### Apakah bisa dipakai di macOS?

Belum. Rilis saat ini untuk Windows x64, Linux x64, dan Android.

## Instalasi

### Windows memblokir installer

Build belum ditandatangani. Di layar SmartScreen pilih **More info** lalu **Run anyway**.

### Aplikasi Linux tidak terbuka

Pastikan GTK 3, NSS, ALSA, dan libsecret terpasang. Installer menampilkan perintah `apt`, `dnf`, atau `pacman` yang perlu dijalankan. Untuk AppImage, jangan lupa `chmod +x`.

### Perintah `neovarch` tidak ditemukan

Di Linux, pastikan `~/.local/bin` ada di `PATH`, lalu buka terminal baru. Di Windows, buka PowerShell baru setelah instalasi.

### Android menolak memasang APK

Izinkan pemasangan dari sumber tidak dikenal untuk aplikasi yang membuka APK (browser atau file manager). APK ditandatangani dengan kunci debug.

## Model

### Agen tidak menjawab atau muncul error 401

API key salah atau belum diisi. Jalankan `neovarch setup` lagi, atau periksa `~/.neovarch/.env`.

### "Add model" di aplikasi v1.3.0 tidak berfungsi

Ini masalah yang diketahui di v1.3.0. Pakai `neovarch setup` di terminal. Diperbaiki di v1.4.0 dengan form endpoint kustom. Lihat [Provider & endpoint kustom](/docs/panduan/provider-endpoint/).

### Server lokal saya tidak punya `/models`

Ketik nama model secara manual. Endpoint tetap bisa dipakai untuk chat.

### Error sertifikat pada endpoint https sendiri

Server memakai sertifikat self-signed. Nyalakan "Izinkan sertifikat self-signed" di form endpoint (v1.4.0), atau pasang CA-nya di sistem.

## Desktop

### Banyak halaman menampilkan "failed to load"

Diketahui di v1.3.0 untuk beberapa menu di rail. Di v1.4.0 setiap rute yang dipanggil desktop dijawab oleh core, dan item yang tidak didukung dihapus dari rail.

### Masih ada teks berbahasa Inggris

Beberapa teks di v1.3.0 masih berbahasa Inggris. v1.4.0 menerjemahkan sisa teks antarmuka.

## HP dan pairing

### HP tidak bisa terhubung ke PC

1. Pastikan HP dan PC di Wi-Fi/LAN yang sama, atau terhubung lewat VPN.
2. Izinkan port **9319** di firewall PC.
3. Pastikan alamat di QR adalah alamat LAN PC (misalnya `192.168.x.y`), bukan alamat adapter virtual. Pilih alamat lain di layar Remote bila perlu.
4. Setelah update dari versi lama, pindai ulang QR sekali.

### HP sudah dipasangkan tapi tiba-tiba ditolak

Token mungkin dibuat ulang di PC (**Buat token baru**). Pindai QR yang baru.

### Notifikasi persetujuan tidak muncul di HP

Persetujuan dikirim ke HP yang sedang membuka sesi itu. Buka sesinya di HP, atau lihat tab **Setujui**. Izinkan notifikasi untuk aplikasi Neovarch di Android.

## Data

### Bagaimana cara menghapus semuanya?

Linux: jalankan installer dengan `--uninstall`. Windows: jalankan `install.ps1` dengan `-Uninstall`. Hanya data Neovarch yang dihapus. Perintah lengkapnya ada di [Instalasi](/docs/mulai/instalasi/).

### Bisakah memindahkan data ke folder lain?

Ya, atur variabel lingkungan `NEOVARCH_HOME`. Lihat [Konfigurasi](/docs/panduan/konfigurasi/).

### Ada masalah lain?

Buka [issue di GitHub](https://github.com/Maftuuh1922/neovrach_Agent/issues).

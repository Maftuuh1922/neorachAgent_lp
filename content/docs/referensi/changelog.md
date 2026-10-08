## v1.4.0 {{soon}}

Rilis berikutnya. Semua poin di bawah sedang dikerjakan dan akan dirilis setelah lolos pengujian tanpa error. Daftar ini bisa berubah sampai rilis.

### Perbaikan dari v1.3.0

- **Add model berfungsi**: core punya endpoint provider dan endpoint kustom.
- **Tidak ada lagi "failed to load"**: setiap rute API yang dipanggil desktop dijawab, minimal dengan bentuk kosong yang valid.
- **Rail yang jujur**: Skill & alat, Kanban, Artefak, dan Jadwal terhubung ke fitur core yang nyata; Messaging dihapus dari rail.
- **Semua sudut membulat**, termasuk tab sesi dan indikatornya.
- **Teks Indonesia**: "Sesi baru", composer, palet perintah, Kanban, Pengaturan.
- Halaman skill hanya menampilkan skill lokal, tanpa situs online yang ditanam.

### Fitur baru

- **Endpoint kustom OpenAI-compatible**: HTTPS (gateway online) dan HTTP lokal/LAN dengan port bebas, API key dan header opsional, sertifikat self-signed, daftar model otomatis dari `/models` atau ketik manual, tombol tes koneksi.
- **Notifikasi update** di desktop dan Android dari GitHub Releases.
- **Layar awal minimal**: sapaan sesuai jam dan kotak ketik.
- **Office**: agen sebagai pegawai (nama, peran, status, tugas, aktivitas), kartu mini "Kantor" di panel kanan, dipantau dari HP.
- **Obsidian vault** sebagai memori: cari, baca, tulis, backlink; penampil vault dan graf di desktop; hanya baca di HP; tombol "Buka di Obsidian".
- **Tema saat setup awal**: Merah, Biru, Hijau, Ungu, Oranye, Monokrom, atau hex sendiri; gelap/terang; HP ikut tema PC.
- **Android bergaya kaca**: blur, warna datar, garis tepi tipis, tanpa gradien dan bayangan.
- **Tugas terjadwal (cron)** di core.
- **HP real-time**: event didorong lewat WebSocket/SSE dengan nomor urut, sambung ulang otomatis dan sinkron ulang, target di bawah 300 ms di LAN.
- **Alamat Tailscale** (IP 100.x dan MagicDNS) sebagai cadangan di QR pairing.
- **Laporan riset dan ekspor**: referensi nyata dari OpenAlex/Crossref/Semantic Scholar, ekspor DOCX/PDF format kampus lewat Pandoc, pratinjau PDF dan DOCX di aplikasi.

### Ditunda

- Voice dan MCP.

## v1.3.0

Rilis ini menjadikan Neovarch produk yang berdiri sendiri: otak sendiri, folder data sendiri, port sendiri, dan tampilan baru.

### Yang baru

- **Core sendiri**: otak agen di `core/` (perintah `neovarch`, loop agen, alat, sesi, memori, skill, dan gateway `neovarch serve`) ditulis dari nol untuk Neovarch.
- **Data terpisah di `~/.neovarch`** (`%LOCALAPPDATA%\neovarch` di Windows). Neovarch bisa dipasang berdampingan dengan agen lain di satu PC.
- **Port remote baru: 9319.** Aplikasi HP juga harus diperbarui ke 1.3.0, lalu pindai ulang QR dari desktop sekali.
- **Tampilan baru** di desktop dan Android: merah gelap, datar, semua sudut membulat, tanpa gradien.
- Installer satu baris untuk Linux dan Windows, dan peluncur npm.

### Unduhan

- Windows (x64): `neovarch-agent-windows-x64-setup.exe` atau `neovarch-agent-windows-x64.zip`
- Linux (x64): `.AppImage`, `.deb`, atau `.tar.gz`
- Android: `neovarch-agent-android-arm64.apk` atau `neovarch-agent-android-universal.apk`

### Yang diketahui

- Belum ada voice, MCP, dan cron.
- APK masih ditandatangani dengan kunci debug.
- Build Windows dan paket belum diuji di perangkat asli; pengujian dilakukan di Linux headless.
- Build belum ditandatangani (SmartScreen).
- Beberapa teks masih berbahasa Inggris.

[Semua rilis di GitHub](https://github.com/Maftuuh1922/neovrach_Agent/releases)

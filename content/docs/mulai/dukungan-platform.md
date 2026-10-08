## Ringkasan

| Platform | Arsitektur | Status | Peran |
|---|---|---|---|
| Windows | x64 | Tersedia (v1.3.0) | Aplikasi desktop + core |
| Linux | x64 | Tersedia (v1.3.0) | Aplikasi desktop + core |
| Android | arm64, universal | Tersedia (v1.3.0) | Remote untuk PC |
| macOS | - | Belum dirilis | - |
| Linux | ARM64 | Belum dirilis | - |
| iOS | - | Belum dirilis (butuh macOS + Xcode untuk build) | Remote |

## Kebutuhan PC

- **Linux**: x86_64 dengan GTK 3, NSS, ALSA, dan libsecret untuk aplikasi desktop. Core saja (`--core-only`) tidak butuh pustaka grafis.
- **Windows**: x64. Installer berjalan per pengguna, tanpa hak admin.
- **Python**: tidak perlu dipasang sendiri. Installer membawa Python 3.14 dan venv sendiri lewat `uv` di bawah `~/.neovarch`. Bila menjalankan core dari source, butuh Python 3.11 atau lebih baru.
- **npm launcher**: Node.js 18 atau lebih baru.
- **Model AI**: API key dari provider yang kompatibel OpenAI, atau server model lokal seperti Ollama.

## Kebutuhan HP

- Android dengan APK arm64 (kebanyakan HP modern) atau APK universal.
- HP dan PC di jaringan yang sama (Wi-Fi/LAN), atau terhubung lewat VPN seperti Tailscale/WireGuard.
- Kamera untuk memindai QR (alamat dan token juga bisa diisi manual).

## Berdampingan dengan agen lain

Neovarch memakai folder data sendiri (`~/.neovarch`), perintah sendiri (`neovarch`), dan port remote sendiri (**9319**). Core menolak membaca atau mengubah folder milik agen lain yang terpasang di PC yang sama, jadi keduanya bisa dipasang bersamaan.

## Status pengujian

Rilis dibangun oleh GitHub Actions dari tag versi. Pengujian otomatis berjalan di Linux headless. Build Windows dan paket (setup.exe, zip, AppImage, deb) belum diuji di perangkat asli, dan build belum ditandatangani.

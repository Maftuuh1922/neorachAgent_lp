Ada tiga cara memasang Neovarch Agent di PC: installer satu baris (disarankan), file rilis dari GitHub, atau npm. Aplikasi Android dipasang terpisah dari file APK. Semua file berasal dari [rilis terbaru di GitHub](https://github.com/Maftuuh1922/neovrach_Agent/releases/latest).

## Linux (x64)

Jalankan di terminal:

```bash
curl -fsSL https://raw.githubusercontent.com/Maftuuh1922/neovrach_Agent/main/scripts/install.sh | sh
```

Installer ini:

- memasang core ke `~/.neovarch/neovarch-agent` dengan Python dan venv sendiri (lewat `uv`, disimpan di `~/.neovarch/tools`);
- membuat perintah `neovarch` di `~/.local/bin`;
- memasang aplikasi desktop ke `~/.local/share/neovarch-agent` dan menambah entri di menu aplikasi.

Aplikasi desktop butuh GTK 3, NSS, ALSA, dan libsecret. Bila belum ada, installer menampilkan perintah `apt`, `dnf`, atau `pacman` yang perlu kamu jalankan.

### Opsi installer Linux

| Kebutuhan | Perintah |
|---|---|
| Hanya core + CLI (tanpa aplikasi desktop) | `curl -fsSL …/install.sh \| sh -s -- --core-only` |
| Versi tertentu | `curl -fsSL …/install.sh \| NEOVARCH_VERSION=v1.3.0 sh` |
| Folder data lain | `NEOVARCH_HOME=/path/lain` sebelum `sh` |
| Hapus Neovarch | `curl -fsSL …/install.sh \| sh -s -- --uninstall` |

`…` adalah `https://raw.githubusercontent.com/Maftuuh1922/neovrach_Agent/main/scripts`. Uninstall hanya menghapus file Neovarch, termasuk `~/.neovarch`.

## Windows (x64)

Jalankan di PowerShell (tidak perlu hak admin):

```powershell
irm https://raw.githubusercontent.com/Maftuuh1922/neovrach_Agent/main/scripts/install.ps1 | iex
```

Installer memasang core ke `%LOCALAPPDATA%\neovarch\neovarch-agent`, membuat perintah `neovarch`, lalu menjalankan `neovarch-agent-windows-x64-setup.exe` secara senyap untuk pengguna saat ini. Aplikasi dipasang di bawah `%LOCALAPPDATA%\Programs`.

| Kebutuhan | Opsi |
|---|---|
| Hanya core + CLI | `-CoreOnly` |
| Versi portabel (zip) | `-Portable` |
| Hapus | `& ([scriptblock]::Create((irm https://raw.githubusercontent.com/Maftuuh1922/neovrach_Agent/main/scripts/install.ps1))) -Uninstall` |

> [!catatan] Build belum ditandatangani. Windows SmartScreen mungkin meminta konfirmasi: pilih **More info** lalu **Run anyway**.

## npm (Linux x64 / Windows x64)

Butuh Node.js 18 atau lebih baru:

```bash
npm i -g https://github.com/Maftuuh1922/neovrach_Agent/releases/latest/download/neovarch-agent-npm.tgz
neovarch
```

Aplikasi diunduh ke `~/.neovarch/app` dan core dipasang ke `~/.neovarch/neovarch-agent`. `neovarch` tanpa argumen membuka aplikasi desktop; `neovarch <perintah>` menjalankan [CLI](/docs/referensi/cli/). Paket belum diterbitkan di registry npm, jadi pakai URL di atas.

## File rilis manual

| Platform | File | Keterangan |
|---|---|---|
| Windows x64 | `neovarch-agent-windows-x64-setup.exe` | Installer per pengguna |
| Windows x64 | `neovarch-agent-windows-x64.zip` | Portabel, jalankan `Neovarch Agent.exe` |
| Linux x64 | `neovarch-agent-linux-x64.AppImage` | Satu file, `chmod +x` lalu jalankan |
| Linux x64 | `neovarch-agent-linux-x64.deb` | Debian/Ubuntu |
| Linux x64 | `neovarch-agent-linux-x64.tar.gz` | Ekstrak, jalankan `./neovarch-agent` |
| Android | `neovarch-agent-android-arm64.apk` | Kebanyakan HP modern |
| Android | `neovarch-agent-android-universal.apk` | Semua arsitektur (lebih besar) |

Saat pertama dibuka, aplikasi desktop memasang core bila belum ada.

## Android

1. Unduh `neovarch-agent-android-arm64.apk` (atau versi universal) dari [rilis terbaru](https://github.com/Maftuuh1922/neovrach_Agent/releases/latest).
2. Buka file itu dan izinkan pemasangan dari sumber tidak dikenal (sideload).
3. Pasangkan dengan PC lewat QR. Lihat [Android & pairing QR](/docs/panduan/android-pairing/).

> [!penting] APK rilis masih ditandatangani dengan kunci debug. Android mungkin memberi peringatan saat memasang, dan pembaruan ke versi bertanda tangan resmi nanti mungkin perlu uninstall dulu.

## Setelah terpasang

Cek versi core:

```bash
neovarch --version
```

Lalu lanjut ke [Quickstart](/docs/mulai/quickstart/).

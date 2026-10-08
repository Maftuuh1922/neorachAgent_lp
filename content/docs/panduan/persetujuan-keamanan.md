Agen bekerja dengan alat sungguhan di PC kamu. Karena itu core memeriksa setiap perintah `shell` sebelum dijalankan dan meminta izin untuk perintah yang berisiko.

## Perintah yang perlu persetujuan

| Pola | Alasan |
|---|---|
| `rm -r`, `rm -f`, `rm -rf` | Menghapus file secara rekursif atau paksa |
| `sudo`, `doas`, `su -` | Berjalan sebagai pengguna lain (root) |
| `mkfs`, `fdisk`, `parted`, `wipefs` | Memformat atau mempartisi disk |
| `dd ... of=` | Menulis data mentah dengan dd |
| `> /dev/sd*`, `/dev/nvme*` | Menulis ke perangkat blok |
| `shutdown`, `reboot`, `halt`, `poweroff` | Mematikan atau memulai ulang mesin |
| `chmod 777 /...`, `chown -R` | Mengubah izin atau kepemilikan secara luas |
| `git push --force`, `git reset --hard`, `git clean -f` | Menulis ulang atau membuang riwayat/pekerjaan git |
| `curl ... \| sh`, `wget ... \| bash` | Menjalankan unduhan langsung di shell |
| `kill -9`, `killall -9`, `pkill` | Mematikan proses secara paksa |
| fork bomb | Menghabiskan sumber daya |
| `DROP TABLE`, `DROP DATABASE`, `TRUNCATE TABLE` | Menghancurkan data database |

Perintah lain berjalan langsung. Perintah yang menyentuh folder data agen lain di PC selalu ditolak, tanpa pilihan untuk mengizinkan.

## Pilihan jawaban

| Pilihan | Artinya |
|---|---|
| **Sekali** (`once`) | Jalankan perintah ini sekali saja. |
| **Sesi ini** (`session`) | Izinkan perintah yang sama persis tanpa bertanya lagi selama sesi ini. |
| **Tolak** (`deny`) | Jangan jalankan. Agen diberi tahu bahwa kamu menolak. |

Permintaan yang tidak dijawab dalam **5 menit** dianggap ditolak. Di terminal (`neovarch`), pertanyaan muncul sebagai `Allow? [o]nce / [s]ession / [N]o`; tanpa terminal interaktif perintah otomatis ditolak.

## Di mana permintaan muncul

- Di aplikasi desktop, di dalam chat sesi itu.
- Di HP, di tab **Setujui**, di chat sesi itu, dan sebagai notifikasi Android.
- Jawaban dari satu perangkat menutup permintaan di perangkat lain.

## Mematikan persetujuan

```bash
neovarch config set approvals.mode off
```

Dengan `off` semua perintah berjalan tanpa bertanya. Ini hanya disarankan di mesin uji atau container. Kembalikan dengan `approvals.mode ask`.

## Batas lain

- **Batas waktu shell**: bawaan 120 detik per perintah, maksimum 30 menit. Keluaran dipotong di 20.000 karakter.
- **Batas putaran**: `agent.max_turns` (bawaan 30) membatasi berapa kali agen boleh memanggil alat untuk satu pesan.
- **Vault Obsidian**: setiap path harus tetap di dalam vault; `..`, path absolut, dan symlink ke luar vault ditolak. {{soon}}
- **Gateway**: core tidak pernah berjalan tanpa token. Gateway lokal hanya mendengarkan di `127.0.0.1`; gateway untuk HP memakai token yang ditandatangani (HMAC).

## Token HP

Token pairing memberi kendali penuh atas agen. Simpan baik-baik, jangan bagikan tangkapan layar QR, dan tekan **Buat token baru** bila HP hilang. Di Wi-Fi umum gunakan VPN.

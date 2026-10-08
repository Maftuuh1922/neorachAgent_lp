Neovarch Agent adalah agen AI yang bekerja **di komputer kamu sendiri**. Kamu mengetik perintah dalam bahasa biasa, lalu agen menjalankannya dengan alat sungguhan: menjalankan perintah shell, membaca dan mengubah file, mengambil halaman web, menyimpan catatan memori, dan memakai skill. Semua berjalan di PC kamu, dan kamu bisa mengendalikannya dari HP Android.

## Tiga bagian

| Bagian | Berjalan di | Tugasnya |
|---|---|---|
| **Core** (`neovarch`) | PC (Windows, Linux) | Otak agen yang ditulis dengan Python: loop chat dengan pemanggilan alat, sesi, memori, skill, papan Kanban, dan gateway `neovarch serve`. |
| **Aplikasi desktop** | PC (Windows, Linux) | Aplikasi Electron + React yang menjalankan core, menampilkan chat, sesi, Kanban, pengaturan, dan QR untuk HP. |
| **Aplikasi Android** | HP | Remote berbasis Flutter. Tidak menjalankan agen sendiri; ia terhubung ke core di PC lewat QR. |

Kode core ditulis sendiri untuk Neovarch, berlisensi MIT, dan hanya bergantung pada dua pustaka Python (`aiohttp` dan `PyYAML`). Aplikasi desktop dan Android juga terbuka di repo yang sama: [github.com/Maftuuh1922/neovrach_Agent](https://github.com/Maftuuh1922/neovrach_Agent).

## Cara kerjanya

1. Kamu menulis perintah di aplikasi desktop, di HP, atau di terminal (`neovarch`).
2. Core mengirim percakapan ke model AI pilihanmu lewat API yang kompatibel dengan OpenAI (`/chat/completions`), dalam mode streaming.
3. Bila model memanggil alat, core menjalankannya di PC dan mengirim hasilnya kembali ke model. Ini diulang sampai jawaban selesai (paling banyak `agent.max_turns` putaran, bawaan 30).
4. Perintah yang berisiko, misalnya `rm -rf`, `sudo`, atau `git push --force`, menunggu persetujuanmu dulu. Lihat [Persetujuan & keamanan](/docs/panduan/persetujuan-keamanan/).
5. Setiap langkah (teks, penalaran, alat) dikirim sebagai event ke desktop dan HP, jadi kamu melihatnya secara langsung.

## Alat yang dimiliki agen

| Alat | Fungsi |
|---|---|
| `shell` | Menjalankan perintah di terminal PC (batas waktu bawaan 120 detik, maksimum 30 menit). |
| `read_file`, `write_file`, `edit_file` | Membaca, menulis, dan mengedit file. |
| `web_fetch` | Mengambil isi halaman web sebagai teks. |
| `memory` | Menyimpan dan membaca catatan memori di `~/.neovarch/memory`. |
| `skill` | Membaca skill dari `~/.neovarch/skills`. |
| `obsidian_search`, `obsidian_read`, `obsidian_write`, `obsidian_links` | Memakai vault Obsidian sebagai memori. {{soon}} |

## Model apa yang bisa dipakai?

Semua layanan yang menyediakan API kompatibel OpenAI: OpenAI, OpenRouter, Groq, DeepSeek, Ollama di PC sendiri, atau gateway dan server lokal lain (LiteLLM, LM Studio, router AI). Kamu memakai API key milikmu sendiri; Neovarch tidak menjual akses model. Lihat [Provider & endpoint kustom](/docs/panduan/provider-endpoint/).

## Data kamu

Semua data disimpan di folder `~/.neovarch` (Windows: `%LOCALAPPDATA%\neovarch`): konfigurasi, API key, riwayat sesi, memori, skill, dan papan tugas. Tidak ada akun atau server Neovarch di tengah. Lihat [Konfigurasi](/docs/panduan/konfigurasi/).

> [!tips] Mau langsung mencoba? Ikuti [Instalasi](/docs/mulai/instalasi/) lalu [Quickstart](/docs/mulai/quickstart/).

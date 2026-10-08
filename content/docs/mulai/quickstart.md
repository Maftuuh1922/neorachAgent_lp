Panduan singkat dari aplikasi terpasang sampai agen menyelesaikan tugas pertamanya.

## 1. Buka aplikasi

Buka **Neovarch Agent** dari menu aplikasi (Linux) atau Start (Windows), atau jalankan `neovarch desktop` di terminal. Saat pertama dibuka, aplikasi memasang core bila belum ada lalu menyalakannya di latar belakang.

Di v1.4.0 kamu juga diminta memilih tema (Merah, Biru, Hijau, Ungu, Oranye, Monokrom, atau warna hex sendiri, gelap atau terang). {{soon}}

## 2. Tambah model

Agen butuh satu model AI. Cara tercepat di v1.3.0 adalah lewat terminal:

```bash
neovarch setup
```

Pilih provider (`openai`, `openrouter`, `groq`, `deepseek`, `ollama`, atau `custom`), lalu isi API key. Key disimpan di `~/.neovarch/.env`, bukan di `config.yaml`. Tanpa tanya-jawab:

```bash
neovarch setup --provider openrouter --api-key sk-or-... --model openai/gpt-4o-mini --non-interactive
```

Untuk server lokal atau gateway sendiri:

```bash
neovarch setup --provider custom --base-url http://127.0.0.1:11434/v1 --model llama3.1
```

Di v1.4.0, menambah model juga bisa dari aplikasi: **Pengaturan ▸ Provider ▸ Endpoint kustom**, dengan tombol tes koneksi dan daftar model otomatis. {{soon}} Lihat [Provider & endpoint kustom](/docs/panduan/provider-endpoint/).

## 3. Sesi pertama

Klik **Sesi baru**, lalu ketik perintah, misalnya:

```text
Buat folder ~/coba-neovarch, tulis file catatan.md berisi daftar 3 ide proyek, lalu tampilkan isinya.
```

Kamu akan melihat agen berpikir, memanggil alat (`shell`, `write_file`, `read_file`), lalu menjawab. Setiap sesi disimpan di `~/.neovarch/sessions/` dan bisa dibuka lagi dari daftar sesi.

## 4. Setujui perintah berisiko

Bila agen ingin menjalankan perintah berisiko (misalnya `rm -rf` atau `sudo`), aplikasi menampilkan permintaan persetujuan. Pilih **sekali**, **untuk sesi ini**, atau **tolak**. Bila tidak dijawab dalam 5 menit, perintah ditolak. Lihat [Persetujuan & keamanan](/docs/panduan/persetujuan-keamanan/).

## 5. Pasangkan HP (opsional)

Di PC buka **Pengaturan ▸ Remote / Perangkat ▸ Aktifkan akses remote**, lalu pindai QR dari aplikasi Android. Lihat [Android & pairing QR](/docs/panduan/android-pairing/).

## Dari terminal saja

Core juga bisa dipakai tanpa aplikasi desktop:

```bash
neovarch                          # chat interaktif di terminal
neovarch -q "ringkas isi README.md di folder ini"
neovarch sessions list            # daftar sesi tersimpan
```

Lihat semua perintah di [CLI](/docs/referensi/cli/).

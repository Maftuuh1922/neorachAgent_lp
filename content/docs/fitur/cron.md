{{soon}}

Tugas terjadwal menjalankan sebuah prompt secara otomatis pada jadwal tertentu. Setiap jalan membuka sesi baru, jadi hasilnya bisa dibaca seperti sesi biasa.

## Format jadwal

| Jenis | Contoh | Artinya |
|---|---|---|
| Interval | `30m`, `every 2h`, `tiap 45m`, `1d` | Setiap rentang waktu (satuan s/m/h/d) |
| Harian | `daily 08:00`, `harian 08:00` | Setiap hari pada jam itu (waktu lokal PC) |
| Ekspresi cron | `0 9 * * 1-5` | 5 kolom: menit, jam, tanggal, bulan, hari (Senin-Jumat jam 09.00) |
| Sekali jalan | `2026-10-09T08:00` | Satu kali pada waktu lokal itu (ISO 8601) |

## Membuat tugas

Dari aplikasi desktop: buka **Jadwal** di rail, isi nama, prompt, dan jadwal.

Lewat API:

```bash
curl -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"name":"Ringkasan pagi","prompt":"Ringkas isi ~/catatan/hari-ini.md jadi 5 poin.","schedule":"daily 07:30"}' \
  http://127.0.0.1:9319/api/cron/jobs
```

Opsi tambahan: `repeat` (berhenti setelah N kali jalan), `model`, dan `provider`.

## Status tugas

| Status | Artinya |
|---|---|
| `scheduled` | Aktif dan menunggu waktu jalan berikutnya |
| `running` | Sedang berjalan |
| `paused` | Dijeda |
| `completed` | Selesai (sekali jalan, atau batas `repeat` tercapai) |

Setiap tugas mencatat `next_run_at`, `last_run_at`, `last_error`, jumlah jalan, dan sesi terakhirnya.

## Cara kerja

- Tugas disimpan di `~/.neovarch/cron.json`.
- Penjadwal berjalan di dalam gateway (`neovarch serve`), bangun setiap beberapa detik, dan memulai tugas yang jatuh tempo. Satu tugas paling banyak berjalan satu kali dalam waktu yang sama.
- Jadwal hanya berjalan selama aplikasi desktop (atau `neovarch serve`) menyala.
- Perubahan didorong ke klien sebagai event `cron.changed`.

## Mengelola

| Aksi | Endpoint |
|---|---|
| Jeda / lanjutkan | `POST /api/cron/jobs/{id}/pause`, `/resume` |
| Jalankan sekarang | `POST /api/cron/jobs/{id}/trigger` |
| Riwayat jalan | `GET /api/cron/jobs/{id}/runs` |
| Ubah / hapus | `PATCH` / `DELETE /api/cron/jobs/{id}` |

> [!catatan] Persetujuan perintah tetap berlaku untuk tugas terjadwal. Perintah berisiko akan menunggu persetujuan (maksimal 5 menit) seperti sesi biasa.

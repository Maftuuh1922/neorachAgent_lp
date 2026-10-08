{{soon}}

Office (di aplikasi disebut **Kantor**) menampilkan agen yang berjalan di PC sebagai pegawai di meja kerja: siapa sedang bekerja, mengerjakan apa, memakai alat apa, dan siapa yang menunggu persetujuanmu.

## Tidak ada yang disimulasikan

Setiap pegawai berasal dari sesuatu yang nyata:

- percakapan yang sedang terbuka di gateway, atau yang baru saja berjalan;
- penanggung jawab tugas Kanban yang masih terbuka.

Setiap pegawai diberi nama Indonesia yang tetap (misalnya Ayu, Bima, Citra, Dimas) dan peran sesuai asal sesinya, misalnya "Agen utama · desktop" atau "Agen terminal".

## Status pegawai

| Status | Artinya |
|---|---|
| `working` | Sedang menjalankan giliran (berpikir atau memakai alat) |
| `waiting-approval` | Menunggu kamu menyetujui perintah |
| `idle` | Tidak sedang bekerja |

Setiap kartu juga menunjukkan tugas saat ini, alat yang sedang dipakai, dan aktivitas terakhir.

## Umpan aktivitas

Di samping meja ada umpan aktivitas (terbaru di atas): pemanggilan alat, pesan, persetujuan, dan perpindahan tugas Kanban. Office juga menampilkan ringkasan papan Kanban dan status vault Obsidian (terhubung atau tidak, jumlah catatan).

## Di mana Office muncul

- **Desktop**: halaman **Kantor** di rail (`/office`), dan kartu mini "Kantor" di panel kanan sesi, di bawah bagian File. Klik kartu untuk membuka halaman Office.
- **HP**: Office bisa dipantau dari aplikasi Android dan diperbarui secara langsung.

## Pembaruan langsung

Setiap perubahan didorong ke semua klien sebagai event `office.update` lewat WebSocket `/api/ws`, dan juga tersedia sebagai aliran SSE di `GET /api/office/events`. Snapshot lengkap: `GET /api/office` atau JSON-RPC `office.snapshot`. Lihat [API core](/docs/referensi/api-core/).

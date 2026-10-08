Papan Kanban adalah daftar tugas bersama untuk kamu dan agen. Papan disimpan di `~/.neovarch/kanban.json` dan bisa dibuka dari aplikasi desktop maupun HP.

## Kolom

| Status | Artinya |
|---|---|
| `triage` | Baru masuk, belum dipilah |
| `todo` | Akan dikerjakan (status tugas baru) |
| `ready` | Siap dikerjakan |
| `running` | Sedang dikerjakan |
| `blocked` | Terhambat |
| `done` | Selesai |

## Isi tugas

Setiap tugas punya judul, isi (body), penanggung jawab (assignee), prioritas, status, dan komentar. Setiap perpindahan status dicatat sebagai event, sehingga riwayat tugas bisa dilihat.

## Di desktop

Buka **Tugas (Kanban)** di rail. Kamu bisa membuat tugas, menyeret kartu antar kolom, membuka detail, menambah komentar, dan menghapus tugas. Di v1.3.0 halaman Kanban desktop belum berfungsi penuh; di v1.4.0 semua rute yang dibaca papan desktop sudah tersedia di core. {{soon}}

## Di HP

Tab **Tugas** di aplikasi Android menampilkan papan yang sama. Dari HP kamu bisa membuat tugas, memindahkan status, dan menambah komentar. Di v1.4.0 perubahan papan didorong langsung ke HP (event `kanban.changed`), tanpa perlu memuat ulang. {{soon}}

## Lewat API

```bash
# lihat papan
curl -H "Authorization: Bearer $TOKEN" http://127.0.0.1:9319/api/plugins/kanban/board

# buat tugas
curl -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"title":"Rapikan folder unduhan","priority":1}' \
  http://127.0.0.1:9319/api/plugins/kanban/tasks

# pindahkan status
curl -X PATCH -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"status":"done"}' http://127.0.0.1:9319/api/plugins/kanban/tasks/<id>
```

Daftar lengkap ada di [API core](/docs/referensi/api-core/).

## Hubungan dengan Office

Setiap penanggung jawab tugas yang masih terbuka muncul sebagai pegawai di [Office](/docs/fitur/office/), dan perpindahan tugas tampil di umpan aktivitas.

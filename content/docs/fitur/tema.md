Tampilan Neovarch bergaya merah gelap yang datar: sudut membulat, tanpa gradien, tanpa glow, dan tanpa bayangan.

## Mode gelap dan terang

Tombol **Tema gelap / Tema terang** di rail desktop berganti mode secara langsung.

## Pilih warna saat setup awal {{soon}}

Di v1.4.0, saat aplikasi desktop pertama kali dibuka, kamu memilih warna aksen dan mode:

| Preset | Hex |
|---|---|
| Merah (bawaan) | `#EE1C1C` |
| Biru | `#2563EB` |
| Hijau | `#16A34A` |
| Ungu | `#7C3AED` |
| Oranye | `#EA580C` |
| Monokrom | `#A3A3A3` |
| Kustom | hex apa pun |

Pilihan bisa diubah kapan saja di **Pengaturan ▸ Tampilan**. Nilainya disimpan di `config.yaml`:

```yaml
appearance:
  accent: "#EE1C1C"
  base: dark        # dark | light
```

API: `GET /api/appearance` mengembalikan `{accent, base, on_accent}`; `PUT /api/appearance` mengubahnya.

## HP mengikuti PC {{soon}}

Setiap perubahan tampilan di PC didorong ke HP sebagai event `appearance.changed`, sehingga aplikasi Android ikut memakai warna yang sama. HP tetap bisa memakai pilihan lokal sendiri.

Di Android v1.4.0 tampilan memakai gaya kaca (blur dengan warna datar dan garis tepi tipis), tetap tanpa gradien dan bayangan.

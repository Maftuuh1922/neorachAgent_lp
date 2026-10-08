Aplikasi Android adalah **remote** untuk PC. Ia tidak menjalankan agen dan tidak menyimpan API key; semua kerja tetap terjadi di PC. Dari HP kamu bisa chat dengan agen, melihat aktivitas alat secara langsung, menyetujui perintah, dan mengelola papan Kanban.

## Memasangkan HP dengan PC

1. Di PC buka **Pengaturan ▸ Remote / Perangkat**, lalu nyalakan **Aktifkan akses remote**. Aplikasi menyalakan gateway kedua yang bisa diakses dari jaringan: `neovarch serve --host 0.0.0.0 --port 9319 --isolated`, dikunci dengan token.
2. Layar itu menampilkan QR, alamat (misalnya `192.168.1.5:9319`), dan token. Bila PC punya beberapa alamat, pilih alamat LAN yang benar.
3. Di HP buka Neovarch Agent ▸ **Pindai QR dari PC**. Atau isi alamat `IP-PC:9319` dan token secara manual.
4. HP menyimpan alamat dan nama PC; token disimpan di penyimpanan aman HP (`flutter_secure_storage`).

> [!penting] HP dan PC harus berada di jaringan yang sama (Wi-Fi/LAN) atau terhubung lewat VPN. Izinkan port **9319** di firewall PC. Jangan buka port 9319 ke internet.

## Isi QR

QR berisi URI pairing:

```text
neovarch://pair?v=1&url=http%3A%2F%2F192.168.1.5%3A9319&token=<token>&name=PC%20Kantor&profile=default
```

Aplikasi juga menerima bentuk JSON (`{"url": "...", "token": "...", "name": "..."}`), URL dengan `?token=`, atau URL WebSocket `ws://IP:9319/api/ws?token=...`.

## Tab di aplikasi HP

| Tab | Isi |
|---|---|
| **Chat** | Daftar sesi di PC dan chat streaming dengan aktivitas alat. |
| **Tugas** | Papan Kanban PC. |
| **Setujui** | Permintaan persetujuan perintah, juga sebagai notifikasi Android. |
| **PC** | Status PC, ganti PC, atau lupakan PC. |

Di v1.4.0 HP juga bisa memantau Office, membuka vault Obsidian (hanya baca), mengikuti tema PC, dan menampilkan "Update tersedia". {{soon}}

## Mencabut akses

Tekan **Buat token baru** di PC. Semua HP yang sudah dipasangkan kehilangan akses dan harus memindai QR baru. Di HP, **Lupakan** menghapus alamat dan token PC itu.

## Real-time tanpa polling {{soon}}

Di v1.4.0 core mendorong setiap event (chat, alat, persetujuan, Office, Kanban, vault) lewat satu aliran berurutan dengan nomor `seq`. Bila koneksi putus, HP menyambung ulang dan meminta event yang terlewat (`?since=<seq>`), atau memuat ulang data bila tidak bisa diputar ulang. Target latensi di LAN di bawah 300 ms. Detail teknis ada di [API core](/docs/referensi/api-core/).

## Tailscale {{soon}}

Untuk mengakses PC dari luar rumah tanpa membuka port ke internet, pasang [Tailscale](https://tailscale.com) di PC dan HP. Di v1.4.0 QR pairing akan berisi alamat cadangan selain LAN: nama MagicDNS (`pc.tailXXXX.ts.net`) dan IP Tailscale (`100.x.y.z`), lewat parameter `alt=` yang bisa berulang:

```text
neovarch://pair?v=1&url=http%3A%2F%2F192.168.1.5%3A9319&alt=http%3A%2F%2Fpc.tail1234.ts.net%3A9319&alt=http%3A%2F%2F100.101.102.103%3A9319&token=...
```

HP mencoba alamat LAN dulu (sekitar 1,5 detik), lalu setiap alamat cadangan, dan mengingat alamat terakhir yang berhasil. Daftar alamat juga tersedia di `GET /api/network/addresses`.

Sampai fitur ini dirilis, kamu tetap bisa memakai Tailscale secara manual: isi alamat IP Tailscale PC (`100.x.y.z:9319`) dan token di HP.

## Keamanan

Token memberi kendali penuh atas agen di PC: alat, terminal, dan file. Di jaringan `http` biasa token bisa terlihat oleh orang lain di jaringan yang sama, jadi di Wi-Fi umum gunakan VPN. Alamat `https`/`wss` juga didukung bila kamu memasang reverse proxy dengan TLS.

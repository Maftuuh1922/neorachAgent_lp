# DEPLOY.md — Neorach Agent landing v2 (Hermes-faithful, red/white duotone)

## Kenapa v2
v1 ditolak Bos ("beda banget sama Hermes, artworknya juga beda") karena menebak
gaya tanpa melihat situs aslinya. v2 dibangun setelah mempelajari 8 screenshot
situs Hermes Agent asli (`~/workspace/user/media_library/browser_screenshots/`;
ringkasan riset: `/tmp/hermes-ref.md`) — meniru SETIA bahasa visualnya, dengan
duotone MERAH-ELEKTRIK + putih (bukan biru-putih).

## Bahasa visual (adopsi dari Hermes)
- Duotone ketat: merah elektrik `#EE1C1C` + putih/off-white `#F4F2ED`. NOL biru
  (scan otomatis kode: bersih; artwork di-generate dengan larangan biru).
- Frame tebal merah gelap `#8F0A0A` mengelilingi seluruh viewport (elemen paling
  khas Hermes) + grain film halus di atas halaman.
- Tipografi: serif Didone high-contrast untuk headline (stack sistem:
  "Playfair Display", Didot, "Bodoni MT", Georgia, serif — next/font/google
  gagal download saat build/offline, jadi fallback sistem), monospace uppercase
  untuk nav/label/nomor/tombol, sans kecil untuk body.
- Tombol selalu pill; watermark teks outline raksasa ("NEORACH").

## Struktur (urutan Hermes, isi milik Bos)
1. Ticker strip teks berjalan (mono, di atas strip merah gelap).
2. Nav sticky: link monospace kiri/kanan, wordmark serif "NEORACH / AGENT"
   tengah + ikon GitHub/X, pill putih "INSTALL".
3. Hero 2 kolom di atas merah elektrik: kiri headline serif raksasa uppercase
   "THE WORKFORCE THAT NEVER *sleeps.*", subcopy, 2 pill (putih solid + outline),
   panel terminal gelap dengan tab OS (macOS/Linux/Windows) + perintah install
   + tombol copy. Kanan: ukiran klasik figur titan bersayap 6 lengan
   (tiap tangan: globe, kunci, tongkat, scroll, gear, lentera) — komposisi
   original, bukan jiplak Hermes.
4. Concept: "ONE PHONE. A THOUSAND HANDS." + ilustrasi ukiran berbingkai merah
   (tangan raksasa dari awan memerintah pekerja) — JUJUR: caption menyebut ini
   ilustrasi, bukan screenshot.
5. Kartu OS: 3 kartu (MAC OS / WINDOWS / LINUX + label versi) dengan background
   tekstur ukiran abstrak duotone merah + tombol pill.
6. Features: panel off-white, 6 kartu bernomor gaya Hermes (`#1 SHIP`, `#2
   REMEMBER`, …) — tiap kartu: gambar ukiran klasik duotone merah-putih + judul
   serif italic + deskripsi. Fitur milik Bos (coding, memory, automation,
   mobile command, any model, open source).
7. Portal banner: ilustrasi lebar gaya manga duotone (gadis memegang globe,
   latar awan) + panel "FREE FOREVER — MIT OPEN SOURCE" (produk Bos gratis;
   TIDAK ada tier pricing palsu).
8. Footer CTA: panel putih, watermark "NEORACH" raksasa, tombol pill merah.
9. Footer: background merah elektrik, kepala patung marmer duotone + grain,
   watermark outline "NEORACH", kolom link monospace, "© 2026", "MIT LICENSE".

Copy 100% original (tidak copy-paste teks Hermes); label generik ("INSTALL") boleh.

## Artwork (12 file, `public/art/`, semua di-generate ulang untuk v2)
- `hero-engraving.png` — titan 6-lengan, linework putih di atas merah solid
- `feat-code.png`, `feat-memory.png`, `feat-automation.png`, `feat-remote.png`,
  `feat-models.png`, `feat-opensource.png` — ukiran merah di atas off-white
- `portal-banner.png` — banner manga lebar
- `footer-marble.png` — kepala patung marmer duotone
- `os-mac.png`, `os-windows.png`, `os-linux.png` — tekstur kartu OS
- File v1 yang dihapus: `hero-red.webp`, `feat-*.webp`, `og-red.webp`,
  `eva_office.webp`, `eva_pairing.webp`

## Verifikasi
- `npm run typecheck` + `npm run build` lolos → static export `out/`.
- Screenshot tiap section (desktop 1440: hero, concept, OS cards, features,
  portal, CTA, footer; mobile 390: hero) — semua render benar, mirip struktur
  Hermes, tidak ada gambar rusak/link mati internal, tidak ada overflow
  horizontal di mobile.
- Perbaikan saat verifikasi: fallback rect-based di `Reveal.tsx` (animasi tidak
  bergantung penuh pada IntersectionObserver); `min-width: 0` anti grid-blowout
  di mobile; ukuran headline hero disesuaikan agar tak overlap artwork.

## Deploy
File jadi di `~/workspace/neorachAgent_lp-redesign/` (build: `out/`).
```bash
cd ~/workspace/neorachAgent_lp-redesign
git add -A && git commit -m "v2: Hermes-faithful red/white rebuild" && git push
```
Vercel auto-deploy dari GitHub. Preview publik saat ini: server port 8091
menyajikan `out/` (rebuild otomatis tampil di URL tunnel).

## V4 (2026-10-08) — dibatalkan
Tema terang dengan aksen biru dari PR #1 dibatalkan atas koreksi Bos; lihat V5.

## V5 (2026-10-08) — kembali ke MERAH + artwork anime + perbaikan layout
- Palet (koreksi Bos): duotone merah/putih — merah elektrik `#EE1C1C`, off-white `#F4F2ED`, frame/ticker/footer merah gelap `#8F0A0A`, tinta near-black `#0A0A0A`, bone `#F2EDE4`. NOL biru di CSS/komponen/artwork (scan hex + scan piksel bersih). Tema ice-blue v4 dibatalkan.
- Artwork (koreksi Bos): BUKAN ukiran klasik. Gaya anime gouache cel 1990-an "seperti Evangelion": mecha bone-white ORIGINAL (kepala oval tanpa wajah, visor celah vertikal, otot & kabel merah terbuka, cincin halo), langit merah/hitam, maskot gadis bob pendek ber-halo; dirender duotone halftone merah/bone/near-black. Bukan unit/karakter EVA asli, tanpa teks. Referensi gaya: `eva_*.webp` (disimpan).
- 12 WebP di `public/art/` (< 300 KB) + `og.jpg` 1200x630 (judul ditambahkan via PIL, Playfair). Nama file lama dipertahankan (mis. `hero-engraving.webp`, `footer-marble.webp`) agar path tidak berubah.
- Playfair Display self-hosted via `next/font/google` (`--font-playfair`).
- Unduhan → rilis v1.2.1 (`lib/site.ts` → `RELEASE_URL`); macOS "Segera". Perintah instal asli: install.sh (Linux), install.ps1 (Windows), npm tgz.

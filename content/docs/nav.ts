// Sidebar order of the documentation. Each page's text lives in content/docs/<section>/<page>.md.

export type DocPage = { slug: string; title: string; description: string };
export type DocSection = { slug: string; title: string; pages: DocPage[] };

export const DOC_SECTIONS: DocSection[] = [
  {
    slug: "mulai",
    title: "Mulai",
    pages: [
      { slug: "pengenalan", title: "Pengenalan", description: "Apa itu Neovarch Agent, bagian-bagiannya, dan cara kerjanya." },
      { slug: "instalasi", title: "Instalasi", description: "Pasang di Windows, Linux, lewat npm, dan aplikasi Android." },
      { slug: "quickstart", title: "Quickstart", description: "Sesi pertama: pilih model, kirim perintah, setujui aksi." },
      { slug: "dukungan-platform", title: "Dukungan platform", description: "Sistem operasi, arsitektur, dan kebutuhan minimum." },
    ],
  },
  {
    slug: "panduan",
    title: "Panduan",
    pages: [
      { slug: "aplikasi-desktop", title: "Aplikasi desktop", description: "Tata letak aplikasi desktop: rail, sesi, panel kanan, dan pengaturan." },
      { slug: "android-pairing", title: "Android & pairing QR", description: "Memasangkan HP dengan PC lewat QR di jaringan lokal." },
      { slug: "provider-endpoint", title: "Provider & endpoint kustom", description: "Menambah model: preset, endpoint OpenAI-compatible HTTP/HTTPS, header, TLS." },
      { slug: "konfigurasi", title: "Konfigurasi", description: "Folder ~/.neovarch, config.yaml, .env, SOUL.md, dan profil." },
      { slug: "persetujuan-keamanan", title: "Persetujuan & keamanan", description: "Kapan agen meminta izin, pilihan jawaban, dan batas keamanan." },
    ],
  },
  {
    slug: "fitur",
    title: "Fitur",
    pages: [
      { slug: "kanban", title: "Kanban", description: "Papan tugas bersama untuk kamu dan agen, juga dari HP." },
      { slug: "office", title: "Office", description: "Agen sebagai pegawai: status, tugas, dan aktivitas langsung." },
      { slug: "skills", title: "Skills lokal", description: "Folder SKILL.md di ~/.neovarch/skills yang bisa dipakai agen." },
      { slug: "memori", title: "Memori", description: "Catatan memori jangka panjang di ~/.neovarch/memory." },
      { slug: "cron", title: "Cron & otomasi", description: "Tugas terjadwal: interval, harian, ekspresi cron, sekali jalan." },
      { slug: "obsidian", title: "Obsidian vault", description: "Vault Obsidian sebagai memori: cari, baca, tulis, backlink, graf." },
      { slug: "tema", title: "Tema & tampilan", description: "Warna aksen, mode gelap/terang, dan tema di HP." },
      { slug: "notifikasi-update", title: "Notifikasi update", description: "Cek rilis terbaru di GitHub dan banner 'Update tersedia'." },
      { slug: "laporan-riset", title: "Laporan riset & ekspor", description: "Laporan dengan referensi nyata, ekspor DOCX/PDF, dan pratinjau dokumen." },
    ],
  },
  {
    slug: "developer",
    title: "Developer",
    pages: [
      { slug: "arsitektur", title: "Arsitektur", description: "Core Python, gateway, aplikasi desktop, dan remote HP." },
      { slug: "tech-stack", title: "Tech stack", description: "Bahasa, framework, pustaka, dan alat build yang dipakai." },
      { slug: "struktur-repo", title: "Struktur repo", description: "Isi tiap folder di repo aplikasi." },
      { slug: "dari-source", title: "Menjalankan dari source", description: "Menjalankan core, desktop, dan aplikasi HP dari kode sumber." },
      { slug: "testing", title: "Testing", description: "pytest, typecheck, sweep desktop, dan flutter test." },
      { slug: "kontribusi", title: "Kontribusi", description: "Cara melaporkan masalah dan mengirim perubahan." },
    ],
  },
  {
    slug: "referensi",
    title: "Referensi",
    pages: [
      { slug: "api-core", title: "API core", description: "Endpoint REST, WebSocket JSON-RPC, dan SSE dari neovarch serve." },
      { slug: "cli", title: "CLI", description: "Perintah neovarch dan opsinya." },
      { slug: "faq", title: "FAQ & troubleshooting", description: "Pertanyaan umum dan solusi masalah yang sering muncul." },
      { slug: "changelog", title: "Changelog", description: "Perubahan v1.3.0 dan rencana v1.4.0." },
      { slug: "lisensi", title: "Lisensi", description: "Lisensi MIT dan atribusi." },
    ],
  },
];

export type FlatDoc = DocPage & { section: DocSection; href: string; file: string };

export const ALL_DOCS: FlatDoc[] = DOC_SECTIONS.flatMap((section) =>
  section.pages.map((p) => ({
    ...p,
    section,
    href: `/docs/${section.slug}/${p.slug}/`,
    file: `content/docs/${section.slug}/${p.slug}.md`,
  })),
);

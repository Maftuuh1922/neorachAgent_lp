import Shot from "./Shot";

type Item = {
  title: string;
  body: string;
  img: { src: string; alt: string; width: number; height: number; caption?: string };
};

const ITEMS: Item[] = [
  {
    title: "Chat yang menjalankan alat di PC",
    body:
      "Tulis tugas dalam bahasa biasa. Agen membaca dan menyunting file, menjalankan perintah terminal, dan menjelaskan langkahnya sebelum bertindak. Setiap sesi tersimpan di sidebar dan bisa dibuka lagi. Perintah yang berisiko menunggu persetujuanmu.",
    img: {
      src: "/shots/chat.webp",
      alt: "Tangkapan layar Neovarch Agent desktop: sesi chat bertema gelap dengan dua jawaban agen tentang struktur proyek",
      width: 1120,
      height: 700,
      caption: "Desktop v1.2.1, sesi chat",
    },
  },
  {
    title: "Dikendalikan dari HP",
    body:
      "Aktifkan Pengaturan ▸ Remote / Perangkat di PC, lalu pindai QR-nya dari aplikasi Android. HP tersambung ke port 9119 dengan token, lewat Wi‑Fi yang sama atau Tailscale/WireGuard. Aplikasi HP punya empat tab: Chat, Tugas (papan Kanban), Setujui (persetujuan perintah dengan notifikasi Android), dan PC.",
    img: {
      src: "/shots/pairing.webp",
      alt: "Tangkapan layar Pengaturan ▸ Remote / Perangkat: QR pairing, alamat LAN, dan token untuk HP",
      width: 1060,
      height: 704,
      caption: "Desktop v1.2.1, Pengaturan ▸ Remote / Perangkat",
    },
  },
  {
    title: "Memori, skill, dan tugas terjadwal",
    body:
      "Agen menyimpan catatan tentang kamu dan proyekmu, dan catatan itu dibawa ke sesi berikutnya. Skill adalah instruksi tersimpan yang bisa dibuat agen sendiri setelah tugas yang rumit, lalu dipakai ulang. Menu Scheduled jobs menjalankan prompt pada jadwal cron, misalnya merangkum folder kerja setiap pagi.",
    img: {
      src: "/art/feat-memory.webp",
      alt: "Ilustrasi dithering merah: kepala mecha berhalo di lorong gelap",
      width: 1000,
      height: 806,
    },
  },
  {
    title: "Model pilihanmu, kunci API milikmu",
    body:
      "Pilih penyedia dan model di Pengaturan ▸ Model: Nous Portal, OpenRouter, OpenAI, Anthropic, atau endpoint milikmu sendiri, misalnya server model lokal. Kunci API disimpan di PC kamu. Neovarch tidak punya server sendiri; percakapan hanya dikirim ke penyedia model yang kamu pilih.",
    img: {
      src: "/art/feat-models.webp",
      alt: "Ilustrasi dithering merah: deretan helm mecha di rak",
      width: 1000,
      height: 806,
    },
  },
];

export default function Features() {
  return (
    <section className="section" id="fitur" aria-labelledby="fitur-title">
      <div className="wrap">
        <p className="label">// Fitur</p>
        <h2 id="fitur-title" className="title title--lg">Apa yang dikerjakan</h2>
        <div className="feats">
          {ITEMS.map((it, i) => (
            <article key={it.title} className={`feat ${i % 2 ? "feat--right" : "feat--left"}`}>
              <div className="feat__text">
                <p className="feat__num">#{i + 1}</p>
                <h3 className="feat__title">{it.title}</h3>
                <p className="feat__body">{it.body}</p>
              </div>
              <div className="feat__img">
                <Shot {...it.img} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

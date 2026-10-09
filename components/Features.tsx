import type { Lang } from "@/lib/rootShell";
import Shot from "./Shot";

type Img = { src: string; width: number; height: number };
type Text = { title: string; body: string; alt: string; caption?: string };
type Item = { img: Img; id: Text; en: Text };

const ITEMS: Item[] = [
  {
    img: { src: "/shots/chat.webp", width: 1440, height: 900 },
    id: {
      title: "Chat yang menjalankan alat di PC",
      body:
        "Tulis tugas dalam bahasa biasa. Agen membaca dan menyunting file, menjalankan perintah terminal, dan menjelaskan langkahnya sebelum bertindak. Setiap sesi tersimpan di sidebar dan bisa dibuka lagi. Perintah yang berisiko menunggu persetujuanmu.",
      alt: "Tangkapan layar Neovarch Agent desktop: sesi chat bertema gelap, dengan laporan.md yang sedang disunting agen tampil langsung di panel kanan",
      caption: "Desktop, sesi chat dengan file yang sedang disunting di panel kanan",
    },
    en: {
      title: "Chat that runs tools on your PC",
      body:
        "Describe the task in plain language. The agent reads and edits files, runs terminal commands, and explains each step before it acts. Every session is saved in the sidebar so you can pick it up again, and risky commands wait for your approval.",
      alt: "Screenshot of Neovarch Agent desktop: a dark-themed chat session, with the laporan.md file the agent is editing shown live in the right panel",
      caption: "Desktop, chat session with the file being edited in the right panel",
    },
  },
  {
    img: { src: "/shots/pairing.webp", width: 1080, height: 852 },
    id: {
      title: "Dikendalikan dari HP",
      body:
        "Aktifkan Pengaturan ▸ Remote / Perangkat di PC, lalu pindai QR-nya dari aplikasi Android. HP tersambung ke port 9319 dengan token, lewat Wi‑Fi yang sama atau Tailscale/WireGuard. Aplikasi HP punya empat tab: Chat, Tugas (papan Kanban), Setujui (persetujuan perintah dengan notifikasi Android), dan PC.",
      alt: "Tangkapan layar Pengaturan ▸ Remote / Perangkat: QR pairing, alamat LAN, dan token untuk HP",
      caption: "Desktop v1.3.0, Pengaturan ▸ Remote / Perangkat, port 9319",
    },
    en: {
      title: "Controlled from your phone",
      body:
        "Turn on Settings ▸ Remote / Perangkat on your PC, then scan the QR code with the Android app. The phone connects to port 9319 with a token, over the same Wi‑Fi or through Tailscale/WireGuard. The phone app has four tabs: Chat, Tugas (a Kanban board), Setujui (command approvals with Android notifications), and PC.",
      alt: "Screenshot of Settings ▸ Remote / Perangkat: the pairing QR code, LAN address, and token for the phone",
      caption: "Desktop v1.3.0, Settings ▸ Remote / Perangkat, port 9319",
    },
  },
  {
    img: { src: "/photos/feat-memory.webp", width: 1254, height: 1254 },
    id: {
      title: "Memori dan skill",
      body:
        "Agen menyimpan catatan tentang kamu dan proyekmu, dan catatan itu dibawa ke sesi berikutnya. Skill adalah instruksi tersimpan yang bisa dibuat agen sendiri setelah tugas yang rumit, lalu dipakai ulang. Semuanya tersimpan di ~/.neovarch, terpisah dari instalasi agen lain di PC yang sama.",
      alt: "Ilustrasi merah: wajah dengan garis bidik di mata",
    },
    en: {
      title: "Memory and skills",
      body:
        "The agent keeps notes about you and your projects and carries them into the next session. Skills are saved instructions the agent can write for itself after a complex task, then reuse later. Everything lives in ~/.neovarch, kept apart from any other agent installed on the same PC.",
      alt: "Red illustration: a face with crosshair lines over the eye",
    },
  },
  {
    img: { src: "/photos/feat-models.webp", width: 1254, height: 1254 },
    id: {
      title: "Model pilihanmu, kunci API milikmu",
      body:
        "Pilih penyedia dan model di Pengaturan ▸ Model: penyedia apa pun yang kompatibel dengan API OpenAI, seperti OpenRouter atau OpenAI, atau endpoint milikmu sendiri, misalnya server model lokal. Kunci API disimpan di PC kamu. Neovarch tidak punya server sendiri; percakapan hanya dikirim ke penyedia model yang kamu pilih.",
      alt: "Ilustrasi merah: gadis memegang tablet di depan android dan PC",
    },
    en: {
      title: "Your choice of model, your own API key",
      body:
        "Pick a provider and model in Settings ▸ Model: any OpenAI-compatible provider, such as OpenRouter or OpenAI, or an endpoint of your own, like a local model server. Your API key stays on your PC. Neovarch runs no servers of its own; conversations go only to the model provider you choose.",
      alt: "Red illustration: a girl holding a tablet in front of an android and a PC",
    },
  },
];

export default function Features({ lang = "id" }: { lang?: Lang }) {
  const en = lang === "en";
  return (
    <section className="section" id="fitur" aria-labelledby="fitur-title">
      <div className="wrap">
        <p className="label">{en ? "// Features" : "// Fitur"}</p>
        <h2 id="fitur-title" className="title title--lg">{en ? "What it does" : "Apa yang dikerjakan"}</h2>
        <div className="feats">
          {ITEMS.map((it, i) => {
            const t = it[lang];
            return (
              <article key={it.img.src} className={`feat ${i % 2 ? "feat--right" : "feat--left"}`}>
                <div className="feat__text">
                  <p className="feat__num">#{i + 1}</p>
                  <h3 className="feat__title">{t.title}</h3>
                  <p className="feat__body">{t.body}</p>
                </div>
                <div className="feat__img">
                  <Shot {...it.img} alt={t.alt} caption={t.caption} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

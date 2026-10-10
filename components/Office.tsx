import type { Lang } from "@/lib/rootShell";
import Shot from "./Shot";

const COPY = {
  id: {
    label: "// Kantor",
    title: "Kantor: agen-agenmu sebagai satu tim",
    intro:
      "Halaman Kantor menampilkan setiap agen yang berjalan di PC sebagai pegawai di ruang kantor 3D. Tiap agen punya meja dan persona sendiri, dengan nama, jabatan, status langsung, dan tiket yang sedang dikerjakan.",
    points: [
      ["Meja dan persona", "Setiap agen duduk di mejanya dengan nama dan jabatan. Klik seorang agen untuk melihat tugasnya, mengganti model, membuka sesinya, atau memberi tugas baru."],
      ["Status langsung", "Bekerja, menunggu persetujuan, galat, atau santai terlihat dari warna di atas kepala agen. Aktivitas terbaru tampil di sampingnya."],
      ["Perusahaan", "Susun agen dalam bagan organisasi, tetapkan misi dan tujuan, lalu pecah jadi proyek dan tiket yang dikerjakan agen. Rekrutmen dan hasil kerja menunggu persetujuanmu, dan tiap pegawai punya batas anggaran."],
      ["Dari HP", "Di aplikasi Android, halaman Perusahaan memuat organisasi, tiket, persetujuan, biaya, dan rencana. Kamu bisa menyetujui hasil kerja, mengatur anggaran, atau merekrut pegawai baru dari mana saja."],
    ],
    desk: { alt: "Tangkapan layar Kantor 3D di desktop: empat agen bernama Sari, Budi, Citra, dan Eko di meja masing-masing, dengan status dan panel aktivitas", caption: "Desktop, Kantor 3D" },
    deskAgent: { alt: "Tangkapan layar Kantor 3D dengan kartu agen Budi terbuka: tugas, permintaan izin, pilihan model, dan kolom untuk memberi tugas", caption: "Kartu agen: tugas, model, dan kasih tugas" },
    phones: [
      ["organisasi", "Organisasi", "Bagan organisasi: CEO, CTO, dan engineer dengan status dan tiket masing-masing"],
      ["tiket", "Tiket", "Daftar tiket yang sedang dan akan dikerjakan"],
      ["setujui", "Setujui", "Persetujuan hasil kerja dengan tombol Tolak dan Setujui"],
      ["biaya", "Biaya", "Biaya token bulan ini dan batas anggaran per pegawai"],
      ["rencana", "Rencana", "Misi, tujuan, dan proyek perusahaan"],
      ["rekrut", "Rekrut", "Formulir rekrut pegawai: nama, jabatan, atasan, deskripsi, dan anggaran"],
    ],
    phoneCaption: "Android, halaman Perusahaan",
  },
  en: {
    label: "// Office",
    title: "Kantor: your agents as one team",
    intro:
      "The Kantor (Office) view shows every agent running on your PC as an employee in a 3D office. Each agent has its own desk and persona, with a name, a role, a live status, and the ticket it's working on.",
    points: [
      ["Desks and personas", "Every agent sits at its own desk with a name and a role. Click an agent to see its task, switch its model, open its session, or hand it a new task."],
      ["Live status", "Working, waiting for approval, error, or idle shows as a color above each agent's head, with the latest activity alongside."],
      ["Perusahaan (Company)", "Arrange agents in an org chart, set a mission and goals, then break them into projects and tickets for agents to work through. Hires and finished work wait for your approval, and every employee has a budget cap."],
      ["From your phone", "In the Android app, the Perusahaan screen holds the org chart, tickets, approvals, costs, and plans. Approve work, adjust budgets, or hire a new employee from anywhere."],
    ],
    desk: { alt: "Screenshot of the 3D Kantor on desktop: four agents named Sari, Budi, Citra, and Eko at their desks, with statuses and an activity panel", caption: "Desktop, 3D Kantor" },
    deskAgent: { alt: "Screenshot of the 3D Kantor with Budi's agent card open: the task, a permission request, the model picker, and a field for assigning work", caption: "Agent card: task, model, and assign work" },
    phones: [
      ["organisasi", "Organization", "Org chart: a CEO, a CTO, and an engineer with their statuses and tickets"],
      ["tiket", "Tickets", "Tickets in progress and up next"],
      ["setujui", "Approve", "Approving finished work with Reject and Approve buttons"],
      ["biaya", "Costs", "This month's token spend and each employee's budget cap"],
      ["rencana", "Plan", "The company's mission, goals, and projects"],
      ["rekrut", "Hire", "Hiring form: name, role, manager, description, and budget"],
    ],
    phoneCaption: "Android, Perusahaan screen",
  },
} as const;

export default function Office({ lang = "id" }: { lang?: Lang }) {
  const t = COPY[lang];
  return (
    <section className="section office" id="kantor" aria-labelledby="kantor-title">
      <div className="wrap">
        <p className="label">{t.label}</p>
        <h2 id="kantor-title" className="title title--lg">{t.title}</h2>
        <p className="section__intro">{t.intro}</p>
        <div className="office__desk">
          <Shot src="/shots/kantor-3d.webp" width={1440} height={900} alt={t.desk.alt} caption={t.desk.caption} />
        </div>
        <div className="office__grid">
          <ol className="office__points">
            {t.points.map(([title, body], i) => (
              <li key={title} className="office__point reveal">
                <p className="feat__num">#{i + 1}</p>
                <h3 className="feat__title">{title}</h3>
                <p className="feat__body">{body}</p>
              </li>
            ))}
          </ol>
          <div className="office__agent">
            <Shot src="/shots/kantor-3d-agent.webp" width={1440} height={900} alt={t.deskAgent.alt} caption={t.deskAgent.caption} />
          </div>
        </div>
        <div className="office__phones" role="list" aria-label={t.phoneCaption}>
          {t.phones.map(([key, name, alt]) => (
            <div key={key} className="office__phone" role="listitem">
              <Shot src={`/shots/perusahaan-${key}.webp`} width={390} height={844} alt={alt} caption={name} />
            </div>
          ))}
        </div>
        <p className="office__caption">{t.phoneCaption}</p>
      </div>
    </section>
  );
}

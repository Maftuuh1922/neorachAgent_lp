import { FILES, INSTALL_COMMANDS, RELEASE_URL, RELEASE_VERSION, type ReleaseFile } from "@/lib/site";
import Shot from "./Shot";

type Platform = {
  os: string;
  arch: string;
  primary: ReleaseFile;
  alt?: ReleaseFile;
  note: string;
  cmd?: string;
  img: { src: string; alt: string; width: number; height: number; caption: string };
};

const PLATFORMS: Platform[] = [
  {
    os: "Windows",
    arch: "x64",
    primary: FILES.winSetup,
    alt: FILES.winZip,
    note: "Installer per pengguna, tanpa hak admin. Memasang ke %LOCALAPPDATA%\\Programs\\NeovarchAgent dan membuat perintah neovarch.",
    cmd: INSTALL_COMMANDS.Windows,
    img: {
      src: "/shots/home.webp",
      alt: "Tangkapan layar layar awal Neovarch Agent desktop",
      width: 1200,
      height: 750,
      caption: "Layar awal desktop",
    },
  },
  {
    os: "Linux",
    arch: "x64",
    primary: FILES.appImage,
    alt: FILES.deb,
    note: "Butuh GTK 3, NSS, ALSA, dan libsecret. Installer satu baris memasang ke ~/.local/share/neovarch-agent dan menambah entri menu aplikasi.",
    cmd: INSTALL_COMMANDS.Linux,
    img: {
      src: "/shots/chat-full.webp",
      alt: "Tangkapan layar sesi chat Neovarch Agent desktop",
      width: 1200,
      height: 750,
      caption: "Sesi chat desktop",
    },
  },
  {
    os: "Android",
    arch: "arm64",
    primary: FILES.apkArm64,
    alt: FILES.apkUniversal,
    note: "Remote untuk PC, tidak menjalankan agen sendiri. Pasang lewat sideload, lalu pindai QR dari Pengaturan ▸ Remote / Perangkat di PC.",
    img: {
      src: "/shots/pairing-qr.webp",
      alt: "Tangkapan layar QR pairing dan alamat LAN di aplikasi desktop",
      width: 1040,
      height: 310,
      caption: "QR yang dipindai dari HP",
    },
  },
];

export default function GettingStarted() {
  return (
    <section className="section section--alt" id="mulai" aria-labelledby="mulai-title">
      <div className="wrap">
        <p className="label">// Unduh</p>
        <h2 id="mulai-title" className="title title--lg">Mulai pakai</h2>
        <p className="section__intro">
          Semua file berasal dari rilis{" "}
          <a href={RELEASE_URL} target="_blank" rel="noopener noreferrer">{RELEASE_VERSION} di GitHub</a>. Pasang
          aplikasi desktop dulu, lalu aplikasi HP bila ingin mengendalikannya dari jauh.
        </p>
        <div className="dl">
          {PLATFORMS.map((p) => (
            <div key={p.os} className="dl__col">
              <p className="dl__arch">{p.arch}</p>
              <h3 className="dl__os">{p.os}</h3>
              <Shot {...p.img} />
              <p className="dl__file">
                <span>{p.primary.name}</span>
                <span className="dl__size">{p.primary.size}</span>
              </p>
              <p className="dl__note">{p.note}</p>
              {p.cmd ? (
                <code className="dl__cmd">{p.cmd}</code>
              ) : null}
              <div className="actions">
                <a className="btn btn--solid" href={p.primary.url}>
                  Unduh {p.os === "Android" ? "APK" : p.primary.name.split(".").pop()}
                </a>
                {p.alt ? (
                  <a className="textlink" href={p.alt.url}>
                    {p.alt.name.replace("neovarch-agent-", "")} · {p.alt.size}
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <p className="dl__soon">
          <span className="dl__soon-os">macOS</span> segera. Linux ARM64 dan iOS belum dirilis.
        </p>
      </div>
    </section>
  );
}

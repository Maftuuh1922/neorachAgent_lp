import { FILES, INSTALL_COMMANDS, RELEASE_URL, RELEASE_VERSION, type ReleaseFile } from "@/lib/site";
import type { Lang } from "@/lib/rootShell";
import Shot from "./Shot";

type Text = { note: string; alt: string; caption: string };
type Platform = {
  os: string;
  arch: string;
  primary: ReleaseFile;
  alt?: ReleaseFile;
  cmd?: string;
  img: { src: string; width: number; height: number };
  id: Text;
  en: Text;
};

const PLATFORMS: Platform[] = [
  {
    os: "Windows",
    arch: "x64",
    primary: FILES.winSetup,
    alt: FILES.winZip,
    cmd: INSTALL_COMMANDS.Windows,
    img: { src: "/shots/home.webp", width: 1440, height: 900 },
    id: {
      note: "Installer per pengguna, tanpa hak admin. Memasang ke %LOCALAPPDATA%\\Programs\\NeovarchAgent dan membuat perintah neovarch.",
      alt: "Tangkapan layar Neovarch Agent desktop bertema gelap: sesi chat dengan panel model dan kartu mini Kantor",
      caption: "Desktop, tema gelap",
    },
    en: {
      note: "Per-user installer, no admin rights needed. Installs to %LOCALAPPDATA%\\Programs\\NeovarchAgent and adds the neovarch command.",
      alt: "Screenshot of Neovarch Agent desktop in the dark theme: a chat session with the model panel and the mini Kantor card",
      caption: "Desktop, dark theme",
    },
  },
  {
    os: "Linux",
    arch: "x64",
    primary: FILES.appImage,
    alt: FILES.deb,
    cmd: INSTALL_COMMANDS.Linux,
    img: { src: "/shots/chat-full.webp", width: 1440, height: 900 },
    id: {
      note: "Butuh GTK 3, NSS, ALSA, dan libsecret. Installer satu baris memasang ke ~/.local/share/neovarch-agent dan menambah entri menu aplikasi.",
      alt: "Tangkapan layar Neovarch Agent desktop bertema terang: sesi chat dengan file yang sedang disunting",
      caption: "Desktop, tema terang",
    },
    en: {
      note: "Requires GTK 3, NSS, ALSA, and libsecret. The one-line installer puts it in ~/.local/share/neovarch-agent and adds an app menu entry.",
      alt: "Screenshot of Neovarch Agent desktop in the light theme: a chat session with a file being edited",
      caption: "Desktop, light theme",
    },
  },
  {
    os: "Android",
    arch: "universal",
    primary: FILES.apkUniversal,
    img: { src: "/shots/pairing-qr.webp", width: 1040, height: 310 },
    id: {
      note: "Remote untuk PC, tidak menjalankan agen sendiri. Pasang lewat sideload, lalu pindai QR dari Pengaturan ▸ Remote / Perangkat di PC.",
      alt: "Tangkapan layar QR pairing dan alamat LAN di aplikasi desktop",
      caption: "QR yang dipindai dari HP",
    },
    en: {
      note: "A remote for your PC; it doesn't run an agent of its own. Sideload it, then scan the QR code from Settings ▸ Remote / Perangkat on your PC.",
      alt: "Screenshot of the pairing QR code and LAN address in the desktop app",
      caption: "The QR code you scan from your phone",
    },
  },
];

export default function GettingStarted({ lang = "id" }: { lang?: Lang }) {
  const en = lang === "en";
  return (
    <section className="section section--alt" id="mulai" aria-labelledby="mulai-title">
      <div className="wrap">
        <p className="label">{en ? "// Download" : "// Unduh"}</p>
        <h2 id="mulai-title" className="title title--lg">{en ? "Get started" : "Mulai pakai"}</h2>
        {en ? (
          <p className="section__intro">
            Every file comes from the{" "}
            <a href={RELEASE_URL} target="_blank" rel="noopener noreferrer">{RELEASE_VERSION} release on GitHub</a>. Install
            the desktop app first, then the phone app if you want to control it remotely.
          </p>
        ) : (
          <p className="section__intro">
            Semua file berasal dari rilis{" "}
            <a href={RELEASE_URL} target="_blank" rel="noopener noreferrer">{RELEASE_VERSION} di GitHub</a>. Pasang
            aplikasi desktop dulu, lalu aplikasi HP bila ingin mengendalikannya dari jauh.
          </p>
        )}
        <div className="dl">
          {PLATFORMS.map((p) => {
            const t = p[lang];
            return (
              <div key={p.os} className="dl__col">
                <p className="dl__arch">{p.arch}</p>
                <h3 className="dl__os">{p.os}</h3>
                <Shot {...p.img} alt={t.alt} caption={t.caption} />
                <p className="dl__file">
                  <span>{p.primary.name}</span>
                  <span className="dl__size">{p.primary.size}</span>
                </p>
                <p className="dl__note">{t.note}</p>
                {p.cmd ? <code className="dl__cmd">{p.cmd}</code> : null}
                <div className="actions">
                  <a className="btn btn--solid" href={p.primary.url}>
                    {en ? "Download" : "Unduh"} {p.os === "Android" ? "APK" : p.primary.name.split(".").pop()}
                  </a>
                  {p.alt ? (
                    <a className="textlink" href={p.alt.url}>
                      {p.alt.name.replace("neovarch-agent-", "")} · {p.alt.size}
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
        {en ? (
          <p className="dl__soon">
            <span className="dl__soon-os">macOS</span> is coming soon. Linux ARM64 and iOS aren&apos;t released yet.
          </p>
        ) : (
          <p className="dl__soon">
            <span className="dl__soon-os">macOS</span> segera. Linux ARM64 dan iOS belum dirilis.
          </p>
        )}
      </div>
    </section>
  );
}

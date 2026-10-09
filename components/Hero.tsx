import { GITHUB_URL, RELEASE_URL, RELEASE_VERSION, asset } from "@/lib/site";
import type { Lang } from "@/lib/rootShell";
import Terminal from "./Terminal";

export default function Hero({ lang = "id" }: { lang?: Lang }) {
  const en = lang === "en";
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <p className="label">// Overview</p>
          <h1 id="hero-title" className="title title--xl">
            {en ? <>An AI agent on your PC, controlled from your&nbsp;phone</> : <>Agen AI di PC kamu, dikendalikan dari&nbsp;HP</>}
          </h1>
          {en ? (
            <p className="lede">
              Neovarch Agent is a desktop app for Windows and Linux with its own agent core that runs right on your PC,
              keeping its data separately in <code>~/.neovarch</code>. The Android app pairs with your PC over a QR code
              on your local network, so you can chat, approve commands, and check the task board from your phone. All of
              the code is open on GitHub.
            </p>
          ) : (
            <p className="lede">
              Neovarch Agent adalah aplikasi desktop untuk Windows dan Linux dengan core agen sendiri yang berjalan
              langsung di PC kamu, dengan data terpisah di <code>~/.neovarch</code>. Aplikasi Android-nya dipasangkan ke PC
              lewat QR di jaringan lokal, lalu dipakai untuk chat, menyetujui perintah, dan melihat papan tugas. Semua
              kodenya terbuka di GitHub.
            </p>
          )}
          <div className="actions">
            <a className="btn btn--solid" href={RELEASE_URL} target="_blank" rel="noopener noreferrer">
              Download {RELEASE_VERSION}
            </a>
            <a className="textlink" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <p className="meta">{en ? "Windows x64 · Linux x64 · Android · macOS coming soon" : "Windows x64 · Linux x64 · Android · macOS segera"}</p>
          <p className="meta meta--label">{en ? "Or install from the terminal" : "Atau pasang lewat terminal"}</p>
          <Terminal lang={lang} />
        </div>
        <div className="hero__ascii hero__dots" aria-hidden="true">
          <img src={asset("/art/hero-dots.webp")} alt="" width={1080} height={1446} />
        </div>
      </div>
    </section>
  );
}

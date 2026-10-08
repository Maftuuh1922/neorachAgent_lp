import { GITHUB_URL, RELEASE_URL, RELEASE_VERSION, asset } from "@/lib/site";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <p className="label">// Overview</p>
          <h1 id="hero-title" className="title title--xl">
            Agen AI di PC kamu, dikendalikan dari&nbsp;HP
          </h1>
          <p className="lede">
            Neovarch Agent adalah aplikasi desktop untuk Windows dan Linux dengan core agen sendiri yang berjalan
            langsung di PC kamu, dengan data terpisah di <code>~/.neovarch</code>. Aplikasi Android-nya dipasangkan ke PC
            lewat QR di jaringan lokal, lalu dipakai untuk chat, menyetujui perintah, dan melihat papan tugas. Semua
            kodenya terbuka di GitHub.
          </p>
          <div className="actions">
            <a className="btn btn--solid" href={RELEASE_URL} target="_blank" rel="noopener noreferrer">
              Download {RELEASE_VERSION}
            </a>
            <a className="textlink" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <p className="meta">Windows x64 · Linux x64 · Android · macOS segera</p>
          <p className="meta meta--label">Atau pasang lewat terminal</p>
          <Terminal />
        </div>
        <div className="hero__ascii" aria-hidden="true">
          <span className="hero__lines" />
          <img src={asset("/art/hero-globe.webp")} alt="" width={1100} height={1100} />
        </div>
      </div>
    </section>
  );
}

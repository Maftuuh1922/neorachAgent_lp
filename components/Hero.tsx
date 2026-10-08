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
      </div>
      <div className="wrap">
        <div className="hcard">
          <div
            className="hero__bg"
            role="img"
            aria-label="Animasi maskot Neovarch: perempuan berambut bob dengan halo, memegang HP yang tersambung ke mecha di depan PC"
          >
            <video
              className="hero__vid"
              aria-hidden="true"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate noremoteplayback"
              poster={asset("/art/hero-live.webp")}
            >
              <source src={asset("/art/hero-loop.webm")} type="video/webm" />
              <source src={asset("/art/hero-loop.mp4")} type="video/mp4" />
            </video>
            <span className="shot__shield" aria-hidden="true" />
          </div>
          <div className="hcard__stat">
            <p className="hcard__big">QR</p>
            <p className="hcard__small">Pasangkan HP ke PC
              <br />di jaringan lokal</p>
          </div>
          <div className="hcard__note">
            <p className="hcard__h">Data tetap di PC</p>
            <p className="hcard__small">Core agen berjalan lokal, semua
              <br />tersimpan di <code>~/.neovarch</code>.</p>
          </div>
          <div className="hcard__tab" aria-label="Platform">
            <span>Windows</span><span>Linux</span><span>Android</span><span className="is-soon">macOS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

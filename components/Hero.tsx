import { GITHUB_URL, RELEASE_URL, RELEASE_VERSION, asset } from "@/lib/site";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
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
        <span className="hero__scan" aria-hidden="true" />
        <span className="hero__particles" aria-hidden="true">
          <i className="hero__p" style={{ left: "6%", animationDelay: "-2s", animationDuration: "14s" }} /><i className="hero__p" style={{ left: "14%", animationDelay: "-9s", animationDuration: "18s" }} /><i className="hero__p" style={{ left: "22%", animationDelay: "-4s", animationDuration: "12s" }} /><i className="hero__p" style={{ left: "31%", animationDelay: "-12s", animationDuration: "16s" }} /><i className="hero__p" style={{ left: "39%", animationDelay: "-1s", animationDuration: "20s" }} /><i className="hero__p" style={{ left: "47%", animationDelay: "-7s", animationDuration: "13s" }} /><i className="hero__p" style={{ left: "55%", animationDelay: "-14s", animationDuration: "17s" }} /><i className="hero__p" style={{ left: "63%", animationDelay: "-5s", animationDuration: "15s" }} /><i className="hero__p" style={{ left: "71%", animationDelay: "-10s", animationDuration: "19s" }} /><i className="hero__p" style={{ left: "79%", animationDelay: "-3s", animationDuration: "12s" }} /><i className="hero__p" style={{ left: "86%", animationDelay: "-8s", animationDuration: "16s" }} /><i className="hero__p" style={{ left: "93%", animationDelay: "-11s", animationDuration: "14s" }} /><i className="hero__p" style={{ left: "18%", animationDelay: "-15s", animationDuration: "21s" }} /><i className="hero__p" style={{ left: "58%", animationDelay: "-6s", animationDuration: "18s" }} /><i className="hero__p" style={{ left: "88%", animationDelay: "-13s", animationDuration: "13s" }} />
        </span>
        <span className="shot__shield" aria-hidden="true" />
      </div>
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
    </section>
  );
}

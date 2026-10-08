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
        <div className="tix" aria-hidden="true">
          <div className="tix__card tix__card--orb">
            <div className="tix__bar"><span>NEOVARCH AGENT</span><span>OPEN SOURCE</span></div>
            <div className="tix__lines" />
            <p className="tix__mark"><small>AGEN AI</small>NEOVARCH<small>{RELEASE_VERSION}</small></p>
            <img className="tix__orb" src={asset("/art/hero-orb.webp")} alt="" />
            <p className="tix__big">WINDOWS · LINUX<br /><span>ANDROID</span> PAIRING QR</p>
            <p className="tix__fine">Core agen berjalan langsung di PC kamu. Data terpisah di ~/.neovarch. HP cukup jadi remote untuk chat dan persetujuan.</p>
            <div className="tix__foot"><span>NEOVARCH</span><span className="tix__star">✳</span><span>GITHUB</span></div>
          </div>
          <div className="tix__card tix__card--art">
            <img className="tix__art" src={asset("/art/hero-ticket.webp")} alt="" />
            <div className="tix__bar"><span>NEOVARCH AGENT</span><span>{RELEASE_VERSION}</span></div>
            <p className="tix__mark"><small>AGEN AI</small>NEOVARCH<small>PC + HP</small></p>
            <div className="tix__spacer" />
            <p className="tix__big">DARI HP <span>KE PC</span><br />JARINGAN LOKAL</p>
            <p className="tix__fine">Pasangkan lewat QR, setujui perintah, pantau papan tugas.</p>
            <div className="tix__foot tix__foot--code"><span className="tix__barcode" /><span>{RELEASE_VERSION}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

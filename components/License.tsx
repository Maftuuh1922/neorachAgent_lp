import { GITHUB_URL, HERMES_URL, LICENSE_URL, NOTICE_URL } from "@/lib/site";

export default function License() {
  return (
    <section className="section" id="lisensi" aria-labelledby="lisensi-title">
      <div className="wrap license">
        <div>
          <p className="label">// Lisensi</p>
          <h2 id="lisensi-title" className="title title--md">Kode terbuka, lisensi MIT</h2>
        </div>
        <div className="license__text">
          <p>
            Aplikasi desktop Neovarch Agent diturunkan dari Hermes Desktop dan{" "}
            <a href={HERMES_URL} target="_blank" rel="noopener noreferrer">Hermes Agent</a> karya Nous Research,
            berlisensi MIT. Rincian atribusinya ada di{" "}
            <a href={NOTICE_URL} target="_blank" rel="noopener noreferrer">desktop/NOTICE</a> dan{" "}
            <a href={LICENSE_URL} target="_blank" rel="noopener noreferrer">desktop/LICENSE</a>.
          </p>
          <p>
            Aplikasi HP ditulis dengan Flutter dan ada di folder <code>lib/</code> pada{" "}
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">repo yang sama</a>. Rilis dibangun oleh
            GitHub Actions dari tag versi.
          </p>
        </div>
      </div>
    </section>
  );
}

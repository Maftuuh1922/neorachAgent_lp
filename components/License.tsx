import { GITHUB_URL, LICENSE_URL, NOTICE_URL } from "@/lib/site";
import type { Lang } from "@/lib/rootShell";

export default function License({ lang = "id" }: { lang?: Lang }) {
  const en = lang === "en";
  const notice = <a href={NOTICE_URL} target="_blank" rel="noopener noreferrer">desktop/NOTICE</a>;
  const license = <a href={LICENSE_URL} target="_blank" rel="noopener noreferrer">desktop/LICENSE</a>;
  return (
    <section className="section" id="lisensi" aria-labelledby="lisensi-title">
      <div className="wrap license">
        <div>
          <p className="label">{en ? "// License" : "// Lisensi"}</p>
          <h2 id="lisensi-title" className="title title--md">{en ? "Open source, MIT licensed" : "Kode terbuka, lisensi MIT"}</h2>
        </div>
        {en ? (
          <div className="license__text">
            <p>
              Neovarch Agent is open-source software under the MIT license, built on an agent core written from scratch.
              License and attribution details are in {notice} and {license}.
            </p>
            <p>
              The phone app is written in Flutter and lives in the <code>lib/</code> folder of the{" "}
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">same repo</a>. Releases are built by GitHub
              Actions from version tags.
            </p>
          </div>
        ) : (
          <div className="license__text">
            <p>
              Neovarch Agent adalah perangkat lunak terbuka berlisensi MIT, dengan core agen yang ditulis sendiri.
              Rincian lisensi dan atribusi ada di {notice} dan {license}.
            </p>
            <p>
              Aplikasi HP ditulis dengan Flutter dan ada di folder <code>lib/</code> pada{" "}
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">repo yang sama</a>. Rilis dibangun oleh
              GitHub Actions dari tag versi.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

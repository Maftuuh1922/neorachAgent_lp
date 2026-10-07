import SectionHead from "./SectionHead";
import styles from "./Comparison.module.css";

type Row = { label: string; hermes: string; neovarch: string; accent?: boolean };

const ROWS: Row[] = [
  { label: "Color", hermes: "Blue", neovarch: "Red", accent: true },
  {
    label: "Focus",
    hermes: "Desktop-first",
    neovarch: "Mobile-first office remote, built for two humans working together",
  },
];

export default function Comparison() {
  return (
    <section className="section" id="identity" aria-labelledby="identity-title">
      <SectionHead
        id="identity-title"
        eyebrow="06 · Identity"
        title="Hermes is blue."
        emphasis="We're red."
      />
      <div className="prose">
        <p>
          Neovarch Agent shares DNA with Hermes Agent—same agent reasoning, same tool ecosystem, same
          persistent memory—but diverges in identity and execution philosophy.
        </p>
        <p>
          Where Hermes emphasizes breadth and flexibility, Neovarch emphasizes control and craft.
          Built for technical professionals who want an AI workforce they can direct, debug, and
          deploy without compromise.
        </p>
        <p>Open-source core. MIT license. Community-driven roadmap.</p>
      </div>
      <div className={`${styles.compare} card-surface`}>
        <table className={styles.table}>
          <caption className={styles.srOnlyCaption}>Hermes Agent compared with Neovarch Agent</caption>
          <thead>
            <tr>
              <td className={styles.srOnly} />
              <th scope="col">
                Hermes Agent <small>Nous Research</small>
              </th>
              <th scope="col">
                Neovarch Agent <small>Neovarchlabs</small>
                <span className="chip">Us</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label}>
                <th scope="row" className={styles.srOnly}>
                  {row.label}
                </th>
                <td data-label={row.label}>{row.hermes}</td>
                <td data-label={row.label} className={row.accent ? `${styles.num} x-red` : undefined}>
                  {row.neovarch}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

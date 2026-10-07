import CtaLinks from "./CtaLinks";
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
    <section className="section" id="merah">
      <SectionHead
        eyebrow="05 · Hermes is blue. We're red."
        title="Same inspiration."
        emphasis="Different direction."
      />
      <div className={`${styles.compare} card-surface`}>
        <table className={styles.table}>
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
      <aside className={styles.callout} aria-label="Get started">
        <p className={`${styles.calloutHead} x-mono`}>Get started</p>
        <p className={styles.calloutLead}>
          <strong>Open the repo. Install on your PC. Pair your phone.</strong> The Android APK lives
          in the same repo.
        </p>
        <CtaLinks />
      </aside>
    </section>
  );
}

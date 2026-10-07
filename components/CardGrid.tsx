import type { ReactNode } from "react";
import styles from "./CardGrid.module.css";

export type Card = {
  /** Mono crimson label above the heading, e.g. "WORK". */
  label: string;
  title: string;
  items: ReactNode[];
  /** Optional closing line under the list. */
  note?: string;
};

/** Grid of bone-white cards: label + heading + hairline-separated list. */
export default function CardGrid({ cards }: { cards: Card[] }) {
  const cls = cards.length === 4 ? `${styles.cards} ${styles.four}` : styles.cards;
  return (
    <div className={cls}>
      {cards.map((card) => (
        <article key={card.label} className={`${styles.card} card-surface`}>
          <h3 className={styles.title}>
            <span className={`${styles.label} x-mono`}>{card.label}</span>
            {card.title}
          </h3>
          <ul className={styles.list}>
            {card.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          {card.note ? <p className={styles.note}>{card.note}</p> : null}
        </article>
      ))}
    </div>
  );
}

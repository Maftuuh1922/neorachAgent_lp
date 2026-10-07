import styles from "./CardGrid.module.css";

export type Card = {
  /** Mono crimson label above the heading, e.g. "Work". */
  label: string;
  title: string;
  items: string[];
};

/** Grid of bone-white cards: label + heading + hairline-separated list. */
export default function CardGrid({ cards }: { cards: Card[] }) {
  const cls = cards.length === 4 ? `${styles.cards} ${styles.four}` : styles.cards;
  return (
    <div className={cls}>
      {cards.map((card) => (
        <div key={card.title} className={`${styles.card} card-surface`}>
          <h3 className={styles.title}>
            <span className={`${styles.label} x-mono`}>{card.label}</span>
            {card.title}
          </h3>
          <ul className={styles.list}>
            {card.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

import type { ReactNode } from "react";

type Props = {
  /** Id for the h2, so the section can reference it via aria-labelledby. */
  id?: string;
  /** Mono crimson eyebrow, e.g. "01 · The Concept". */
  eyebrow: string;
  /** Serif display title; the plain part. */
  title: string;
  /** Italic continuation of the title. */
  emphasis: string;
  /** Optional right-aligned supporting line. */
  sub?: ReactNode;
};

export default function SectionHead({ id, eyebrow, title, emphasis, sub }: Props) {
  return (
    <div className="head">
      <p className="head__eyebrow x-mono x-red">{eyebrow}</p>
      <h2 className="head__title" id={id}>
        {title} <em>{emphasis}</em>
      </h2>
      {sub ? <p className="head__sub">{sub}</p> : null}
    </div>
  );
}

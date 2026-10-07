import type { ReactNode } from "react";

type Props = {
  /** Mono crimson eyebrow, e.g. "01 · What it is". */
  eyebrow: string;
  /** Serif display title; the plain part. */
  title: string;
  /** Italic crimson continuation of the title. */
  emphasis: string;
  /** Optional right-aligned supporting line. */
  sub?: ReactNode;
};

export default function SectionHead({ eyebrow, title, emphasis, sub }: Props) {
  return (
    <div className="head">
      <p className="head__eyebrow x-mono x-red">{eyebrow}</p>
      <h2 className="head__title">
        {title} <em>{emphasis}</em>
      </h2>
      {sub ? <p className="head__sub">{sub}</p> : null}
    </div>
  );
}

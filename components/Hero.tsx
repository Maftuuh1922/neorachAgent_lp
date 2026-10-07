import Image from "next/image";
import CtaLinks from "./CtaLinks";
import { asset } from "@/lib/site";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        className={styles.img}
        src={asset("/art/eva_hero.jpg")}
        alt="Painted 90s-anime mecha with a halo bursting from bone-white armor against a crimson sky"
        fill
        sizes="(max-width: 1120px) 100vw, 1056px"
        loading="eager"
        fetchPriority="high"
      />
      <div className={styles.copy}>
        <p className={styles.eyebrow}>by NEOVARCHLABS · Android &amp; iOS</p>
        <h1 className={styles.wordmark} aria-label="Neovarch Agent">
          <span>Neovarch</span>
          <span>Agent</span>
        </h1>
        <span className={styles.rule} aria-hidden="true" />
        <p className={styles.sub}>One office. Many agents. You&apos;re the boss.</p>
        <p className={styles.meta}>
          Your personal AI office: agent “employees” that code, research and write posts. Run it all
          from your phone.
        </p>
        <CtaLinks />
      </div>
      <p className={styles.credit}>FIG.00 — Neovarch</p>
    </section>
  );
}

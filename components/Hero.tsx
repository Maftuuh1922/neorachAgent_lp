import Image from "next/image";
import CtaLinks from "./CtaLinks";
import { asset } from "@/lib/site";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.copy}>
        <h1 id="hero-title" className={styles.wordmark} aria-label="Neovarch Agent">
          <span>Neovarch</span>
          <span>Agent</span>
        </h1>
        <span className={styles.rule} aria-hidden="true" />
        <p className={styles.sub}>The office runs itself. You just give orders.</p>
        <p className={styles.meta}>
          Your personal AI workforce: agents that code, research, and ship—all controlled from your
          phone. The brain lives on your PC. The remote lives in your pocket.
        </p>
        <CtaLinks />
      </div>
      <figure className={styles.art}>
        <div className={styles.frame}>
          <Image
            className={styles.img}
            src={asset("/art/eva_hero.jpg")}
            alt="Painted 90s-anime mecha with a halo bursting from bone-white armor against a crimson sky"
            fill
            sizes="(max-width: 760px) 100vw, 560px"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <figcaption className={styles.credit}>FIG.00 — Architecture: PC brain, mobile remote</figcaption>
      </figure>
    </section>
  );
}

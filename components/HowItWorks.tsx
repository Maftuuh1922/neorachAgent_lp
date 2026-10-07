import type { ReactNode } from "react";
import SectionHead from "./SectionHead";
import ArtFigure from "./ArtFigure";
import styles from "./HowItWorks.module.css";

type Step = { num: string; eyebrow: string; title: string; body: ReactNode };

const STEPS: Step[] = [
  {
    num: "01",
    eyebrow: "On your PC",
    title: "Run Neovarch on your PC",
    body: "Windows or Linux. This is where the agent core does its work.",
  },
  {
    num: "02",
    eyebrow: "Once",
    title: "Scan a QR to pair your phone",
    body: "Do it once. Your phone is wired into your office.",
  },
  {
    num: "03",
    eyebrow: "From your phone",
    title: "Give orders from anywhere",
    body: "Tell your agents to code, research or write posts.",
  },
  {
    num: "04",
    eyebrow: "Automatic",
    title: "Results saved and synced",
    body: (
      <>
        Cloud sync via Supabase or Google Drive. <span className="chip">Soon</span>
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="cara">
      <SectionHead
        eyebrow="03 · How it works"
        title="Four steps."
        emphasis="Then you just give orders."
      />
      <ArtFigure
        src="/art/eva_remote.jpg"
        alt="A girl with a halo on a rooftop, her phone cabled to the PC core of a kneeling mecha"
        width={1024}
        height={1024}
        fig="FIG.02 — The remote"
        note="PC brain · phone remote"
      />
      <div className={styles.steps}>
        {STEPS.map((step) => (
          <article key={step.num} className={`${styles.step} card-surface`}>
            <div className={styles.intro}>
              <p className={styles.num}>{step.num}</p>
              <p className={`${styles.eyebrow} x-mono`}>{step.eyebrow}</p>
            </div>
            <div>
              <h3 className={styles.title}>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

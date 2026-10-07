import type { ReactNode } from "react";
import SectionHead from "./SectionHead";
import ArtFigure from "./ArtFigure";
import styles from "./HowItWorks.module.css";

type Step = { num: string; eyebrow: string; title: string; body: ReactNode };

const STEPS: Step[] = [
  {
    num: "01",
    eyebrow: "Install",
    title: "Run Neovarch on your PC",
    body: (
      <p>
        Windows, Linux, or macOS. This is where the agent core executes: file operations, terminal
        access, web research, code generation.
      </p>
    ),
  },
  {
    num: "02",
    eyebrow: "Pair",
    title: "Scan QR to pair your phone",
    body: (
      <p>
        One-time setup. Your phone becomes the remote control. Secure pairing, encrypted
        communication.
      </p>
    ),
  },
  {
    num: "03",
    eyebrow: "Command",
    title: "Give orders from anywhere",
    body: (
      <>
        <ul className={styles.orders} aria-label="Example orders">
          <li>&ldquo;Deploy the staging branch.&rdquo;</li>
          <li>&ldquo;Research competitors and draft a comparison doc.&rdquo;</li>
          <li>&ldquo;Write a blog post about the latest release.&rdquo;</li>
        </ul>
        <p>Your agents parse intent, break it into tasks, and execute autonomously.</p>
      </>
    ),
  },
  {
    num: "04",
    eyebrow: "Results",
    title: "Results saved and synced",
    body: (
      <>
        <p>
          All artifacts—code, documents, research—saved locally. Optional cloud sync via Supabase
          or Google Drive.
        </p>
        <p className={styles.soon}>
          Coming soon: real-time multi-device sync.
        </p>
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="workflow" aria-labelledby="workflow-title">
      <SectionHead
        id="workflow-title"
        eyebrow="04 · Workflow"
        title="Four steps."
        emphasis="Then you just give orders."
      />
      <ArtFigure
        src="/art/eva_remote.jpg"
        alt="A girl with a halo on a rooftop, her phone cabled to the PC core of a kneeling mecha"
        width={1024}
        height={1024}
        caption="FIG.02 — Workflow: Install → Pair → Command → Results"
      />
      <ol className={styles.steps}>
        {STEPS.map((step) => (
          <li key={step.num} className={`${styles.step} card-surface`}>
            <div className={styles.intro} aria-hidden="true">
              <p className={styles.num}>{step.num}</p>
              <p className={`${styles.eyebrow} x-mono`}>{step.eyebrow}</p>
            </div>
            <div className={styles.body}>
              <h3 className={styles.title}>{step.title}</h3>
              {step.body}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

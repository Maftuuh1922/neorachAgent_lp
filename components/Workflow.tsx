import { Num, Plate, RunHead } from "./Section";

const STEPS = [
  {
    n: "01",
    tag: "INSTALL",
    title: "Run Neovarch on your PC",
    body: "Windows, Linux, or macOS. This is where the agent core executes: file operations, terminal access, web research, code generation.",
  },
  {
    n: "02",
    tag: "PAIR",
    title: "Scan QR to pair your phone",
    body: "One-time setup. Your phone becomes the remote control. Secure pairing, encrypted communication.",
  },
  {
    n: "03",
    tag: "COMMAND",
    title: "Give orders from anywhere",
    body: "Your agents parse intent, break it into tasks, and execute autonomously.",
  },
  {
    n: "04",
    tag: "RESULTS",
    title: "Results saved and synced",
    body: "All artifacts—code, documents, research—saved locally. Optional cloud sync via Supabase or Google Drive.",
    note: "Coming soon: real-time multi-device sync.",
  },
];

const ORDERS = [
  "Deploy the staging branch.",
  "Research competitors and draft a comparison doc.",
  "Write a blog post about the latest release.",
];

export default function Workflow() {
  return (
    <section id="workflow" className="sec sec--workflow" aria-labelledby="workflow-title">
      <RunHead num="04" name="WORKFLOW" fig="FIG.02" />
      <div className="container g wf__head">
        <Num n="04" className="wf__num" />
        <h2 id="workflow-title" className="wf__title" data-reveal>
          Four steps. <span className="red">Then you just give orders.</span>
        </h2>
      </div>
      <Plate
        className="wf__banner"
        src="/art/eva_remote.webp"
        alt="Four-step workflow diagram with numbered icons showing Install, Pair, Command, Results process"
        caption="FIG.02 — Workflow: Install → Pair → Command → Results"
        sizes="100vw"
      />
      <div className="container">
        <ol className="wf__steps" aria-label="Workflow steps">
          {STEPS.map((s) => (
            <li className="wf__step" key={s.n} data-reveal>
              <span className="wf__n" aria-hidden="true">
                {s.n}
              </span>
              <p className="wf__tag mono">{s.tag}</p>
              <h3 className="wf__stitle">{s.title}</h3>
              <p className="wf__body">{s.body}</p>
              {s.note && <p className="wf__note mono">{s.note}</p>}
            </li>
          ))}
        </ol>
        <div className="term" role="group" aria-label="Example orders" data-reveal>
          <p className="term__bar mono" aria-hidden="true">
            <span>03 / COMMAND</span>
            <span>EXAMPLE ORDERS</span>
          </p>
          <div className="term__body mono">
            {ORDERS.map((o) => (
              <p key={o}>
                <span className="term__p" aria-hidden="true">
                  &gt;
                </span>{" "}
                &quot;{o}&quot;
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

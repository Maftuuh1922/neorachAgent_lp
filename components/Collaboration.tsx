import { Num, Plate, RunHead } from "./Section";

export default function Collaboration() {
  return (
    <section id="collaboration" className="sec sec--band" aria-labelledby="collaboration-title">
      <RunHead num="05" name="COLLABORATION" fig="FIG.03" />
      <div className="container g band">
        <div className="band__head">
          <h2 id="collaboration-title" className="band__title" data-reveal>
            One office. Two bosses.
          </h2>
          <p className="band__sub" data-reveal>
            Shared workspace. Zero conflicts.
          </p>
        </div>
        <Num n="05" className="band__num" />
        <div className="band__artwrap">
          <p className="stamp mono">COMING SOON</p>
          <Plate
            className="band__art"
            src="/art/eva_pairing.webp"
            alt="Collaboration network diagram showing two users connected to shared task queue and branching GitHub workflows"
            caption="FIG.03 — Pairing: Two users, one office, one GitHub repo"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
        <article className="band__col" data-reveal>
          <p className="band__tag mono">A / JOIN</p>
          <h3 className="band__ctitle">Bring a partner into the office</h3>
          <ul className="band__list">
            <li>Add by ID or QR scan</li>
            <li>They accept the invite</li>
            <li>You share one workspace, one agent pool, one task queue</li>
          </ul>
          <p className="band__foot">Linked to a single GitHub repository. Every commit traceable.</p>
        </article>
        <article className="band__col" data-reveal>
          <p className="band__tag mono">B / WORK</p>
          <h3 className="band__ctitle">Parallel execution, zero collisions</h3>
          <ul className="band__list">
            <li>Unified task queue visible to both users</li>
            <li>Every task logs the originating user</li>
            <li>
              Code changes branch by user: <code>user-a/feature-x</code>, <code>user-b/fix-y</code>
            </li>
            <li>Automatic conflict detection before merge</li>
          </ul>
          <p className="band__foot">No overwriting. No confusion. Just clean, collaborative execution.</p>
        </article>
      </div>
    </section>
  );
}

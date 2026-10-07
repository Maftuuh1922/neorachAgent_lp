import SectionHead from "./SectionHead";
import ArtFigure from "./ArtFigure";

export default function Setup() {
  return (
    <section className="section" id="setup" aria-labelledby="setup-title">
      <SectionHead
        id="setup-title"
        eyebrow="02 · The Setup"
        title="The brain lives on your PC."
        emphasis="The remote lives in your pocket."
      />
      <div className="prose">
        <p className="lead">Install once. Control from anywhere.</p>
        <p>
          Neovarch runs locally—your tasks, your data, your hardware. Pair your phone via QR code,
          and the office is wired. Give orders from the street, the office, or another country.
          Your agents keep working.
        </p>
        <p>
          Open-source core. Extensible architecture. Built for professionals who demand control.
        </p>
      </div>
      <ArtFigure
        src="/art/eva_office.jpg"
        alt="A command-center office with desks and screens, a giant mecha standing behind the glass"
        width={1024}
        height={1024}
        caption="FIG.01 — The office: Desktop control panel + mobile command interface"
      />
    </section>
  );
}

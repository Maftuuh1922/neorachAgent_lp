import { Num, Plate, RunHead } from "./Section";

export default function Setup() {
  return (
    <section id="setup" className="sec sec--setup" aria-labelledby="setup-title">
      <RunHead num="02" name="SETUP" fig="FIG.01" />
      <div className="setup">
        <Plate
          className="setup__art"
          src="/art/eva_office.webp"
          alt="Split view office interface showing desktop task board and mobile command screen, duotone red and black"
          caption="FIG.01 — The office: Desktop control panel + mobile command interface"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
        <div className="setup__text">
          <Num n="02" />
          <h2 id="setup-title" className="setup__title" data-reveal>
            The brain lives on your PC. <span className="red">The remote lives in your pocket.</span>
          </h2>
          <p className="setup__lead" data-reveal>
            Install once. Control from anywhere.
          </p>
          <div className="setup__body">
            <p data-reveal>
              Neovarch runs locally—your tasks, your data, your hardware. Pair your phone via QR code, and the office is
              wired.
            </p>
            <p data-reveal>Give orders from the street, the office, or another country. Your agents keep working.</p>
            <p className="mono setup__note" data-reveal>
              Open-source core. Extensible architecture. Built for professionals who demand control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

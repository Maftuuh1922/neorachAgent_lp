import SectionHead from "./SectionHead";
import ArtFigure from "./ArtFigure";

export default function WhatItIs() {
  return (
    <section className="section" id="apa">
      <SectionHead
        eyebrow="01 · What it is"
        title="The brain lives on your PC."
        emphasis="The remote lives in your pocket."
      />
      <div className="prose">
        <p>
          Neovarch Agent is an open-source agent client inspired by Nous Research&apos;s Hermes Agent,
          rebuilt with an identity of its own.
        </p>
        <p>
          The agent core runs on your PC (Windows/Linux). Your phone is the remote. You give the
          orders; your agents do the work.
        </p>
      </div>
      <ArtFigure
        src="/art/eva_office.jpg"
        alt="A command-center office with a giant mecha standing behind the glass"
        width={1024}
        height={1024}
        fig="FIG.01 — The office"
        note="Neovarch Agent"
      />
    </section>
  );
}

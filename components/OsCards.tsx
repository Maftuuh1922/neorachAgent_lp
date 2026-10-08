import Image from "next/image";
import { asset, INSTALL_URL } from "@/lib/site";

const CARDS = [
  {
    os: "Mac OS",
    ver: "macOS 12+",
    title: "For the Mac faithful.",
    img: "/art/os-mac.webp",
    alt: "Ice-blue abstract light-ray texture on dark background",
  },
  {
    os: "Windows",
    ver: "Windows 10/11",
    title: "For the PC majority.",
    img: "/art/os-windows.webp",
    alt: "Ice-blue topographic wave texture on dark background",
  },
  {
    os: "Linux",
    ver: "Any distro",
    title: "For the tinkerers.",
    img: "/art/os-linux.webp",
    alt: "Ice-blue swirling cloud texture on dark background",
  },
];

export default function OsCards() {
  return (
    <section className="section--paper" aria-labelledby="os-title" style={{ borderTop: "1px solid var(--line-ice)" }}>
      <div className="wrap sec-head">
        <span className="mono kicker" data-reveal>
          — Get started
        </span>
        <h2 id="os-title" className="display" data-reveal>
          Runs where <em>you run.</em>
        </h2>
      </div>
      <div className="wrap">
        <div className="oscards">
          {CARDS.map((c) => (
            <a
              key={c.os}
              className="oscard"
              href={INSTALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
            >
              <span className="oscard__bg" aria-hidden="true">
                <Image src={asset(c.img)} alt="" width={1200} height={750} sizes="(max-width: 680px) 100vw, 33vw" loading="lazy" />
              </span>
              <span className="oscard__name">{c.os}</span>
              <span className="mono oscard__ver">{c.ver}</span>
              <span className="serif-it oscard__title">{c.title}</span>
              <span className="pill pill--white">Install for {c.os}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

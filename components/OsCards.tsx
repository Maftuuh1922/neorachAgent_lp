import Image from "next/image";
import { asset, RELEASE_URL, RELEASE_VERSION } from "@/lib/site";

type Card = {
  os: string;
  ver: string;
  title: string;
  img: string;
  files: string;
  available: boolean;
};

const CARDS: Card[] = [
  {
    os: "Mac OS",
    ver: "macOS",
    title: "For the Mac faithful.",
    img: "/art/os-mac.webp",
    files: "",
    available: false,
  },
  {
    os: "Windows",
    ver: "Windows 10/11 · x64",
    title: "For the PC majority.",
    img: "/art/os-windows.webp",
    files: "setup.exe · zip",
    available: true,
  },
  {
    os: "Linux",
    ver: "x64 · any distro",
    title: "For the tinkerers.",
    img: "/art/os-linux.webp",
    files: "AppImage · deb · tar.gz",
    available: true,
  },
];

export default function OsCards() {
  return (
    <section className="section--paper section--ruled" id="download" aria-labelledby="os-title">
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
          {CARDS.map((c) => {
            const inner = (
              <>
                <span className="oscard__bg" aria-hidden="true">
                  <Image src={asset(c.img)} alt="" width={1200} height={746} sizes="(max-width: 680px) 92vw, 33vw" />
                </span>
                <span className="mono oscard__name">{c.os}</span>
                <span className="mono oscard__ver">{c.ver}</span>
                <span className="serif-it oscard__title">{c.title}</span>
                <span className="mono oscard__files">
                  {c.available ? `${RELEASE_VERSION} · ${c.files}` : "Not in this release"}
                </span>
                {c.available ? (
                  <span className="pill pill--white">Install for {c.os}</span>
                ) : (
                  <span className="pill pill--soon">Segera</span>
                )}
              </>
            );
            return c.available ? (
              <a
                key={c.os}
                className="oscard"
                href={RELEASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
              >
                {inner}
              </a>
            ) : (
              <div key={c.os} className="oscard oscard--soon" aria-disabled="true" data-reveal>
                {inner}
              </div>
            );
          })}
        </div>
        <p className="mono osnote" data-reveal>
          Phone remote: Android APK on the{" "}
          <a href={RELEASE_URL} target="_blank" rel="noopener noreferrer">
            {RELEASE_VERSION} release
          </a>
        </p>
      </div>
    </section>
  );
}

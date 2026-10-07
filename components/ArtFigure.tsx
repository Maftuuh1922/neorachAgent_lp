import Image from "next/image";
import { asset } from "@/lib/site";
import styles from "./ArtFigure.module.css";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Full mono caption, e.g. "FIG.01 — The office: …". */
  caption: string;
};

/** Big framed artwork panel with a mono FIG caption. */
export default function ArtFigure({ src, alt, width, height, caption }: Props) {
  return (
    <figure className={styles.art}>
      <Image
        className={styles.img}
        src={asset(src)}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 1120px) 100vw, 1056px"
        loading="eager"
      />
      <figcaption className={`${styles.caption} x-mono`}>
        <b>{caption}</b>
      </figcaption>
    </figure>
  );
}

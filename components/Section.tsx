import Image from "next/image";
import { asset } from "@/lib/site";

/** Full-width hairline + running mono header, like the folio line of a printed page. Decorative. */
export function RunHead({ num, name, fig }: { num: string; name: string; fig: string }) {
  return (
    <div className="run" aria-hidden="true">
      <div className="run__inner container mono">
        <span>NEOVARCH AGENT</span>
        <span className="run__mid">
          {num} / {name}
        </span>
        <span>{fig}</span>
      </div>
    </div>
  );
}

/** Oversized section numeral set in the margin. Decorative. */
export function Num({ n, className }: { n: string; className?: string }) {
  return (
    <span className={`num ${className ?? ""}`} aria-hidden="true">
      {n}
    </span>
  );
}

type PlateProps = {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  sizes?: string;
};

/** Artwork printed as a plate: hard-edged image with a mono FIG caption under a hairline. */
export function Plate({ src, alt, caption, className, sizes = "100vw" }: PlateProps) {
  const [fig, ...rest] = caption.split(" — ");
  return (
    <figure className={`plate ${className ?? ""}`} data-reveal="clip">
      <div className="plate__img">
        <Image src={asset(src)} alt={alt} fill sizes={sizes} className="plate__pic" />
      </div>
      <figcaption className="plate__cap mono">
        <span className="plate__fig">{fig}</span>
        <span>{rest.join(" — ")}</span>
      </figcaption>
    </figure>
  );
}

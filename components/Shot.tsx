import { asset } from "@/lib/site";

/**
 * Artwork is painted as a CSS background under a blank shield, so there is no <img>
 * to drag, long-press or "Save image as".
 */
export default function Shot({
  src,
  alt,
  width,
  height,
  caption,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className="shot reveal">
      <div
        className={src.startsWith("/art/") ? "shot__art shot__art--dots" : "shot__art"}
        role="img"
        aria-label={alt}
        style={{ backgroundImage: `url(${asset(src)})`, aspectRatio: `${width} / ${height}` }}
      >
        <span className="shot__shield" aria-hidden="true" />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

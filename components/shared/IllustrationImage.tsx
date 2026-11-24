import Image from "next/image";
import type { SitePhoto } from "@/lib/images";

/**
 * Shows one of the site's original illustrations (lib/images.ts -> `illustrations`) with a visible
 * "Illustration" label, so nobody mistakes it for a photograph of Normlee work.
 * The parent controls the size (give it a height class); the image covers the box.
 */
export default function IllustrationImage({
  image,
  sizes,
  className = "",
  absolute = false,
}: {
  image: SitePhoto;
  sizes: string;
  className?: string;
  /** Sit in the top part of an absolutely-positioned card, leaving room for text below (used on the homepage cards). */
  absolute?: boolean;
}) {
  return (
    <div className={`${absolute ? "absolute inset-x-0 top-0 bottom-44" : "relative"} overflow-hidden bg-gray-200 ${className}`}>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        sizes={sizes}
        className="h-full w-full object-cover"
      />
      <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm">
        Illustration
      </span>
    </div>
  );
}

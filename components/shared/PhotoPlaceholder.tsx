import { ImageIcon } from "lucide-react";
import PavingPattern from "@/components/shared/PavingPattern";

interface PhotoPlaceholderProps {
  /** What the real photograph should show, e.g. "Completed residential driveway". */
  subject?: string;
  className?: string;
}

/**
 * Clearly-marked stand-in for a genuine Normlee photograph.
 *
 * It uses the site's dark/orange palette and a decorative block pattern so the
 * page looks finished, while the label makes it obvious that it is a
 * placeholder and not a real project photo.
 *
 * TODO(owner): replace each usage with a real photo (via next/image) once
 * supplied. See IMAGE_ASSET_GUIDE.md for the exact filenames. Never substitute
 * stock photography presented as Normlee work.
 */
export default function PhotoPlaceholder({
  subject = "Photo",
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${subject}. A real Normlee photograph will be added here.`}
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden bg-linear-to-br from-gray-800 via-gray-900 to-black p-4 text-center text-gray-200 ${className}`}
    >
      <PavingPattern />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-primary" />
      <ImageIcon aria-hidden="true" className="relative h-8 w-8 text-primary-light" />
      <span className="relative text-xs font-semibold uppercase tracking-widest text-primary-light">
        Photo coming soon
      </span>
      <span className="relative max-w-[16rem] text-sm text-gray-200">{subject}</span>
    </div>
  );
}

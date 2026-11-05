import { ImageIcon } from "lucide-react";

interface PhotoPlaceholderProps {
  /** What the real photograph should show, e.g. "Completed residential driveway". */
  subject?: string;
  className?: string;
}

/**
 * Clearly-marked stand-in for a genuine Normlee photograph.
 *
 * TODO(owner): replace each usage with a real photo (via next/image) once
 * supplied. Never substitute stock photography presented as Normlee work.
 */
export default function PhotoPlaceholder({
  subject = "Photo",
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${subject}. A real Normlee photograph will be added here.`}
      className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 bg-gray-100 p-4 text-center text-gray-600 ${className}`}
    >
      <ImageIcon aria-hidden="true" className="h-8 w-8" />
      <span className="text-xs font-semibold uppercase tracking-widest">Photo placeholder</span>
      <span className="max-w-[16rem] text-sm">{subject}</span>
    </div>
  );
}

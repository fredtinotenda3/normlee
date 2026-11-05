/**
 * Decorative interlocking-block pattern (pure CSS/SVG, no image file).
 *
 * This is DECORATIVE ARTWORK, not a photograph of any Normlee project. It is
 * used behind photo placeholders and dark banners so that sections without a
 * genuine photo still look finished and consistent.
 */
const pattern = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="white" stroke-width="1">
    <rect x="0.5" y="0.5" width="23" height="11"/>
    <rect x="24.5" y="0.5" width="23" height="11"/>
    <rect x="-11.5" y="12.5" width="23" height="11"/>
    <rect x="12.5" y="12.5" width="23" height="11"/>
    <rect x="36.5" y="12.5" width="23" height="11"/>
  </svg>`,
);

export default function PavingPattern({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-[0.07] ${className}`}
      style={{ backgroundImage: `url("data:image/svg+xml,${pattern}")`, backgroundSize: "48px 24px" }}
    />
  );
}

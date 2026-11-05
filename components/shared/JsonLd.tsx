/**
 * Renders a JSON-LD structured-data block.
 * Only pass verified facts. Never add ratings, reviews, awards or unconfirmed
 * business details (address, phone, opening hours) to structured data.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

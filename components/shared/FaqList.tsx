export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

/**
 * Visible questions and answers. Deliberately NO FAQPage structured data: Google limits FAQ rich results
 * to well-known government and health sites, so the markup would add nothing and must match the page.
 */
export default function FaqList({
  items,
  heading = "Frequently asked questions",
  headingId,
  headingTag: Heading = "h2",
}: {
  items: FaqItem[];
  heading?: string;
  headingId: string;
  headingTag?: "h2" | "h3";
}) {
  return (
    <section aria-labelledby={headingId}>
      <Heading id={headingId} className="mb-6 text-2xl font-heading font-bold text-secondary">
        {heading}
      </Heading>
      <dl className="space-y-5">
        {items.map((item) => (
          <div key={item.question} className="rounded-xl border border-gray-200 bg-white p-5">
            <dt className="font-heading font-semibold text-secondary">{item.question}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-gray-700">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

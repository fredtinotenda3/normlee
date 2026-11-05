import type { Metadata } from "next";
import { MessageSquareQuote, MessageCircle } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import CtaBanner from "@/components/shared/CtaBanner";
import { testimonials } from "@/lib/testimonials";
import { whatsappMessages, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Customer Testimonials",
  description:
    "Customer feedback for Normlee Investments. Testimonials are published only when verified feedback and permission have been received.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Customer Testimonials | Normlee Investments",
    description: "Verified customer feedback for Normlee Investments.",
    url: "/testimonials",
    type: "website",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Customer feedback"
        icon={MessageSquareQuote}
        title="Testimonials"
        description="What our customers say about working with Normlee."
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {testimonials.length === 0 ? (
            <div className="mx-auto max-w-2xl rounded-2xl bg-white p-10 text-center shadow-md">
              <div
                aria-hidden="true"
                className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10"
              >
                <MessageSquareQuote className="h-7 w-7 text-primary-strong" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-secondary mb-3">
                Customer testimonials coming soon
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Customer testimonials will be published when verified feedback is available. We do not
                publish quotes, names or ratings that customers have not approved.
              </p>
              <a
                href={whatsappUrl(whatsappMessages.feedback)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-strong text-white px-6 py-3 rounded-lg font-heading font-bold hover:bg-primary-strong-hover transition-colors"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Share your feedback
                <span className="sr-only"> (opens WhatsApp in a new tab)</span>
              </a>
            </div>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <li key={`${t.name}-${t.quote.slice(0, 24)}`} className="rounded-2xl bg-white p-7 shadow-md">
                  <figure>
                    <blockquote className="text-gray-700 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</blockquote>
                    <figcaption className="text-sm">
                      <span className="block font-heading font-bold text-secondary">{t.name}</span>
                      {t.detail && <span className="block text-gray-600">{t.detail}</span>}
                      {t.service && <span className="block text-gray-600">{t.service}</span>}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CtaBanner
        title="Need materials or paving?"
        text="Request a quote and tell us about your project."
        message={whatsappMessages.general}
        whatsappLabel="Request a Quote"
      />
    </>
  );
}

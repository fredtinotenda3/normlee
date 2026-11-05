import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import CtaBanner from "@/components/shared/CtaBanner";
import { articles, formatArticleDate } from "@/lib/blog";
import { whatsappMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guides & Advice",
  description:
    "Plain-language guides from Normlee Investments on aggregate sizes, construction sand, crusher run, choosing materials, preparing a site for paving, estimating quantities and planning delivery.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Guides & Advice | Normlee Investments",
    description: "Plain-language guides on construction materials, paving preparation, estimating and delivery.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        icon={BookOpen}
        title="Guides & Advice"
        description="Practical, plain-language information about construction materials, paving preparation and ordering."
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <p className="max-w-3xl text-gray-700 leading-relaxed mb-12">
            These guides give general information to help you plan and ask the right questions. They are not
            engineering or design advice. For structural work or specific requirements, follow your designer,
            engineer or contractor.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <li key={article.slug}>
                <article className="group relative flex h-full flex-col rounded-2xl bg-white p-7 shadow-md hover:shadow-xl transition-shadow">
                  <p className="flex items-center gap-3 text-xs text-gray-600 mb-3">
                    <time dateTime={article.published}>{formatArticleDate(article.published)}</time>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} aria-hidden="true" />
                      {article.readingMinutes} min read
                    </span>
                  </p>
                  <h2 className="text-xl font-heading font-bold text-secondary mb-3">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="hover:text-primary-strong transition-colors after:absolute after:inset-0"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{article.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-primary-strong font-semibold text-sm group-hover:gap-3 transition-all">
                    Read guide <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Not sure what you need?"
        text="Describe your project and we will help you work out what to ask for."
        message={whatsappMessages.materials}
        whatsappLabel="Ask on WhatsApp"
      />
    </>
  );
}

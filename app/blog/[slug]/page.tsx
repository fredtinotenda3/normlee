import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import CtaBanner from "@/components/shared/CtaBanner";
import JsonLd from "@/components/shared/JsonLd";
import { articles, formatArticleDate, getArticle } from "@/lib/blog";
import { getProduct } from "@/lib/pricing";
import { site, whatsappMessages } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `/blog/${article.slug}`,
      type: "article",
      publishedTime: article.published,
      authors: [site.name],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const index = articles.findIndex((a) => a.slug === article.slug);
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const related = article.relatedProductIds
    .map((id) => getProduct(id))
    .filter((p): p is NonNullable<ReturnType<typeof getProduct>> => p !== undefined);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    datePublished: article.published,
    mainEntityOfPage: `${site.url}/blog/${article.slug}`,
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en",
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${site.url}/blog/${article.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <section className="relative overflow-hidden bg-gray-900 pt-20 pb-12">
        <div className="absolute inset-0 bg-linear-to-br from-gray-800 via-gray-900 to-black" aria-hidden="true" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" aria-hidden="true" />
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-gray-300">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-primary-light">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-primary-light">Blog</Link>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">{article.title}</h1>
          <p className="flex items-center gap-3 text-sm text-gray-300">
            <time dateTime={article.published}>{formatArticleDate(article.published)}</time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={14} aria-hidden="true" />
              {article.readingMinutes} min read
            </span>
          </p>
        </div>
      </section>

      <article className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-gray-700 leading-relaxed mb-10">{article.summary}</p>

          {article.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">{section.heading}</h2>
              {section.paragraphs.map((para) => (
                <p key={para} className="text-gray-700 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
              {section.list && (
                <ul className="list-disc space-y-2 pl-6 text-gray-700 marker:text-primary-strong">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {related.length > 0 && (
            <aside aria-labelledby="related-products" className="mb-10 rounded-2xl bg-gray-50 p-6">
              <h2 id="related-products" className="font-heading font-bold text-secondary mb-3">
                Related products
              </h2>
              <ul className="flex flex-wrap gap-2">
                {related.map((p) => (
                  <li key={p.id} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700">
                    {p.item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                <Link href="/products" className="font-semibold text-primary-strong hover:underline">
                  See current prices and availability on the products page
                </Link>
                . Prices and availability are confirmed when you enquire.
              </p>
            </aside>
          )}

          <p className="rounded-xl border border-primary/20 bg-primary/10 p-4 text-sm text-secondary leading-relaxed">
            This guide gives general information only. It is not engineering or design advice, and it does not
            state a specification for any Normlee product. Follow the advice of your designer, engineer or
            contractor for your project.
          </p>

          <nav aria-label="Article navigation" className="mt-10 flex flex-wrap justify-between gap-4 text-sm font-semibold">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary-strong hover:underline">
              <ArrowLeft size={16} aria-hidden="true" /> All guides
            </Link>
            {index < articles.length - 1 && (
              <Link
                href={`/blog/${articles[index + 1].slug}`}
                className="inline-flex items-center gap-2 text-primary-strong hover:underline"
              >
                Next: {articles[index + 1].title} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            )}
          </nav>
        </div>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-heading font-bold text-secondary mb-6">More guides</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((a) => (
              <li key={a.slug} className="rounded-2xl bg-white p-6 shadow-md">
                <h3 className="font-heading font-bold text-secondary mb-2">
                  <Link href={`/blog/${a.slug}`} className="hover:text-primary-strong">
                    {a.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-600">{a.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Questions about your order?"
        text="Ask us about materials, delivery and quantities for your project."
        message={whatsappMessages.materials}
        whatsappLabel="Ask on WhatsApp"
      />
    </>
  );
}

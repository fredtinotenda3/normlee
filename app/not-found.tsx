import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappMessages, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products & Prices", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <p className="text-primary-strong font-heading font-extrabold text-6xl mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-secondary mb-4">Page not found</h1>
        <p className="text-gray-600 mb-10">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Try one of these instead:
        </p>
        <ul className="flex flex-wrap justify-center gap-3 mb-10">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-block rounded-lg border border-gray-300 bg-white px-5 py-2.5 font-heading text-sm font-semibold text-secondary hover:border-primary-strong hover:text-primary-strong transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={whatsappUrl(whatsappMessages.question)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary-strong text-white px-6 py-3 rounded-lg font-heading font-bold hover:bg-primary-strong-hover transition-colors"
        >
          <MessageCircle size={18} aria-hidden="true" />
          Ask us on WhatsApp
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}

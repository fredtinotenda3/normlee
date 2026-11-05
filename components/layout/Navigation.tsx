"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { primaryPhone, telUrl, whatsappMessages, whatsappUrl } from "@/lib/site";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Paving Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  const whatsappHref = whatsappUrl(whatsappMessages.general);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      {/* Top orange micro-bar */}
      <div className="h-1 bg-primary w-full" aria-hidden="true" />

      <nav aria-label="Main" className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              aria-hidden="true"
              className="w-10 h-10 bg-primary-strong rounded-xl flex items-center justify-center shadow-md shadow-primary/30 group-hover:bg-primary-strong-hover transition-colors"
            >
              <span className="text-white font-heading font-extrabold text-lg">NL</span>
            </div>
            <div className="leading-none">
              <span className="font-heading font-extrabold text-xl text-secondary block">Normlee</span>
              <span className="font-heading font-medium text-xs text-primary-strong tracking-wider uppercase">
                Investments
              </span>
              <span className="sr-only"> home</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative font-heading font-semibold text-sm transition-colors pb-1 ${
                  isActive(item.href) ? "text-primary-strong" : "text-secondary hover:text-primary-strong"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-strong rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={telUrl(primaryPhone.e164)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-secondary rounded-lg hover:border-primary-strong hover:text-primary-strong transition-colors text-sm font-semibold"
            >
              <Phone size={16} aria-hidden="true" />
              <span className="sr-only">Call </span>
              {primaryPhone.display}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary-strong text-white px-4 py-2 rounded-lg hover:bg-primary-strong-hover transition-colors text-sm font-heading font-bold shadow-md shadow-primary/20"
            >
              <MessageCircle size={16} aria-hidden="true" />
              WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 bg-transparent text-secondary"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-5 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`flex items-center py-3 font-heading font-semibold text-sm border-b border-gray-100 last:border-0 ${
                  isActive(item.href) ? "text-primary-strong" : "text-secondary hover:text-primary-strong"
                }`}
              >
                {isActive(item.href) && (
                  <span aria-hidden="true" className="w-1 h-4 bg-primary-strong rounded-full mr-3 inline-block" />
                )}
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-5">
              <a
                href={telUrl(primaryPhone.e164)}
                className="flex items-center justify-center gap-2 py-3 border border-primary-strong text-primary-strong rounded-xl font-heading font-bold hover:bg-primary-strong hover:text-white transition-colors"
              >
                <Phone size={18} aria-hidden="true" />
                Call Now
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary-strong text-white py-3 rounded-xl font-heading font-bold hover:bg-primary-strong-hover transition-colors"
              >
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

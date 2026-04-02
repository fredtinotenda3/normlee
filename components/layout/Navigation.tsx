"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Catalog", href: "/catalog" },
  { name: "Paving Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      {/* Top orange micro-bar */}
      <div className="h-1 bg-primary w-full" />

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md shadow-primary/30 group-hover:bg-primary-hover transition-colors">
              <span className="text-white font-heading font-extrabold text-lg">NL</span>
            </div>
            <div className="leading-none">
              <span className="font-heading font-extrabold text-xl text-secondary block">
                Normlee
              </span>
              <span className="font-heading font-medium text-xs text-primary tracking-wider uppercase">
                Investments
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-heading font-semibold text-sm transition-colors pb-1 ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+263774130626"
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-secondary rounded-lg hover:border-primary hover:text-primary transition-colors text-sm font-semibold"
            >
              <Phone size={16} />
              0774 130 626
            </a>
            <a
              href="https://wa.me/263774130626?text=Hi%20Normlee%20Investments%2C%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors text-sm font-heading font-bold shadow-md shadow-primary/20"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 bg-transparent text-secondary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-5 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center py-3 font-heading font-semibold text-sm border-b border-gray-50 last:border-0 ${
                  isActive(item.href) ? "text-primary" : "text-secondary hover:text-primary"
                }`}
              >
                {isActive(item.href) && (
                  <span className="w-1 h-4 bg-primary rounded-full mr-3 inline-block" />
                )}
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-5">
              <a
                href="tel:+263774130626"
                className="flex items-center justify-center gap-2 py-3 border border-primary text-primary rounded-xl font-heading font-bold hover:bg-primary hover:text-white transition-colors"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href="https://wa.me/263774130626?text=Hi%20Normlee%20Investments%2C%20I%27m%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-heading font-bold hover:bg-primary-hover transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

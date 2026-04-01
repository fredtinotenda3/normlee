"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">NL</span>
            </div>
            <div>
              <span className="font-heading font-bold text-lg md:text-xl text-secondary">
                Normlee
              </span>
              <span className="font-heading font-medium text-sm md:text-base text-primary block leading-tight">
                Investments
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:+263774130626"
              className="flex items-center space-x-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/263774130626?text=Hi%20Normlee%20Investments%2C%20I%27m%20interested%20in%20your%20construction%20materials%20and%20paving%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 font-medium ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-4">
              <a
                href="tel:+263774130626"
                className="flex items-center justify-center space-x-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/263774130626?text=Hi%20Normlee%20Investments%2C%20I%27m%20interested%20in%20your%20construction%20materials%20and%20paving%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
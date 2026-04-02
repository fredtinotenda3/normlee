import { MapPin, Phone, Clock, Truck, HardHat, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=60')",
        }}
      />
      {/* Top orange bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

      <div className="container mx-auto px-6 relative z-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-white font-extrabold text-lg font-heading">NL</span>
              </div>
              <div>
                <p className="font-heading font-extrabold text-white text-lg leading-none">
                  Normlee
                </p>
                <p className="text-xs text-primary tracking-wider uppercase font-medium">
                  Investments
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Premium supplier of construction aggregates and specialist paving services in Harare.
              Fast delivery, competitive prices.
            </p>
            {/* Social-style WhatsApp CTA */}
            <a
              href="https://wa.me/263774130626"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 font-semibold transition-colors"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 uppercase text-xs tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Product Catalog", href: "/catalog" },
                { label: "Paving Services", href: "/services" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 uppercase text-xs tracking-widest">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400">610-11th Street, Hatcliffe, Borrowdale, Harare</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-primary shrink-0" />
                <a href="tel:+263774130626" className="text-gray-400 hover:text-primary transition-colors">
                  0774 130 626
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-primary shrink-0" />
                <a href="tel:+263714491705" className="text-gray-400 hover:text-primary transition-colors">
                  0714 491 705
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={15} className="text-primary shrink-0" />
                <span className="text-gray-400">Mon–Sat: 7:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Delivery */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 uppercase text-xs tracking-widest">
              Delivery Zones
            </h4>
            <div className="space-y-3 text-sm">
              {["Harare (all areas)", "Borrowdale", "Hatcliffe", "Surrounding areas"].map((zone) => (
                <div key={zone} className="flex items-center gap-2.5">
                  <Truck size={14} className="text-primary shrink-0" />
                  <span className="text-gray-400">{zone}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2.5">
              <HardHat size={15} className="text-primary" />
              <span className="text-gray-400 text-sm">Specialist paving services</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
          <p className="text-gray-500">
            &copy; {currentYear} Normlee Investments (Pvt) Ltd. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">Building with confidence since 2010</p>
        </div>
      </div>
    </footer>
  );
}

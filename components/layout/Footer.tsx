import { MapPin, Phone, Clock, Truck, HardHat, MessageCircle } from "lucide-react";
import Link from "next/link";
import { site, telUrl, whatsappUrl } from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Paving Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary overflow-hidden">
      {/* Top orange bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10 pt-16 pb-8">
        <h2 className="sr-only">Normlee Investments footer</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div aria-hidden="true" className="w-10 h-10 bg-primary-strong rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-white font-extrabold text-lg font-heading">NL</span>
              </div>
              <div>
                <p className="font-heading font-extrabold text-white text-lg leading-none">Normlee</p>
                <p className="text-xs text-primary-light tracking-wider uppercase font-medium">Investments</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Supplier of construction aggregates and specialist paving services in Zimbabwe.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 font-semibold transition-colors"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Chat on WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer">
            <h3 className="font-heading font-bold text-white mb-5 uppercase text-xs tracking-widest">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-white mb-5 uppercase text-xs tracking-widest">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} aria-hidden="true" className="text-primary-light shrink-0 mt-0.5" />
                <span className="text-gray-300">{site.address}</span>
              </li>
              {site.phones.map((phone) => (
                <li key={phone.e164} className="flex items-center gap-2.5">
                  <Phone size={15} aria-hidden="true" className="text-primary-light shrink-0" />
                  <a href={telUrl(phone.e164)} className="text-gray-300 hover:text-primary-light transition-colors">
                    {phone.display}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <Clock size={15} aria-hidden="true" className="text-primary-light shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  {site.hours[0].days}: {site.hours[0].time}
                </span>
              </li>
            </ul>
          </div>

          {/* Delivery */}
          <div>
            <h3 className="font-heading font-bold text-white mb-5 uppercase text-xs tracking-widest">Delivery</h3>
            <ul className="space-y-3 text-sm">
              {site.deliveryAreas.map((zone) => (
                <li key={zone} className="flex items-start gap-2.5">
                  <Truck size={14} aria-hidden="true" className="text-primary-light shrink-0 mt-0.5" />
                  <span className="text-gray-300">{zone}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-2.5">
              <HardHat size={15} aria-hidden="true" className="text-primary-light" />
              <span className="text-gray-300 text-sm">Specialist paving services</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
          <p className="text-gray-400">
            &copy; {currentYear} {site.legalName}. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs">Serving Zimbabwe since {site.foundedYear}</p>
        </div>
      </div>
    </footer>
  );
}

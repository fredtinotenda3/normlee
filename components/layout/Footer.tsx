import { MapPin, Phone, Mail, Clock, Truck, HardHat } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NL</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-white">Normlee Investments</h3>
                <p className="text-sm text-gray-400">Building with confidence</p>
              </div>
            </div>
            <p className="text-sm">
              Premium supplier of construction aggregates and specialist paving services in Harare.
              Fast delivery, competitive prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-primary transition-colors">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Paving Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-primary shrink-0 mt-1" />
                <span>610-11th Street, Hatcliffe, Borrowdale, Harare</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+263774130626" className="hover:text-primary">
                  0774 130 626
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+263714491705" className="hover:text-primary">
                  0714 491 705
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Clock size={16} className="text-primary" />
                <span>Mon-Sat: 7:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Delivery Info */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Delivery Zones</h4>
            <div className="flex items-center space-x-2 mb-3">
              <Truck size={18} className="text-primary" />
              <span className="text-sm">Fast delivery across Harare</span>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <HardHat size={18} className="text-primary" />
              <span className="text-sm">Specialist paving services</span>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Delivery zones: Harare, Borrowdale, Hatcliffe, and surrounding areas
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {currentYear} Normlee Investments (Pvt) Ltd. All rights reserved.</p>
          <p className="text-gray-500 mt-1">Building with confidence since 2010</p>
        </div>
      </div>
    </footer>
  );
}
import { MapPin, Phone, Clock, MessageCircle, Mail, Truck } from "lucide-react";

const phoneNumbers = [
  { number: "0774 130 626", href: "+263774130626" },
  { number: "0714 491 705", href: "+263714491705" },
  { number: "0733 835 798", href: "+263733835798" }
];

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get in touch with us for inquiries, quotes, or to place an order. We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-card p-8">
            <h2 className="text-2xl font-heading font-bold text-secondary mb-6">
              Get in Touch
            </h2>
            
            {/* Address */}
            <div className="mb-6">
              <div className="flex items-start space-x-3 mb-2">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">Address</h3>
                  <p className="text-gray-600">
                    610-11th Street, Hatcliffe, Borrowdale, Harare
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-2">
                <Phone className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-secondary">Phone Numbers</h3>
              </div>
              <div className="space-y-2 ml-8">
                {phoneNumbers.map((phone, index) => (
                  <div key={index}>
                    <a
                      href={`tel:${phone.href}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {phone.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-secondary">WhatsApp</h3>
              </div>
              <div className="ml-8">
                <a
                  href="https://wa.me/263774130626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-semibold"
                >
                  +263 774 130 626
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-2">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-secondary">Business Hours</h3>
              </div>
              <div className="ml-8 space-y-1">
                <p className="text-gray-600">Monday - Saturday: 7:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Sunday: Closed (Emergency calls only)</p>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-col space-y-3 mt-8">
              <a
                href="https://wa.me/263774130626?text=Hi%20Normlee%20Investments%2C%20I%20have%20a%20question%20about%20your%20products%20and%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:+263774130626"
                className="flex items-center justify-center space-x-2 border-2 border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Delivery & Map Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-card p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Truck className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-heading font-bold text-secondary">
                  Delivery Zones
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                We provide fast and reliable delivery across:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Harare (all areas)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Borrowdale</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Hatcliffe</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Surrounding areas (contact for details)</span>
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-card p-8">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                Location
              </h2>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                  <p>Map View</p>
                  <p className="text-sm">610-11th Street, Hatcliffe, Borrowdale</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Visit us at our location for in-person inquiries and material collection.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Note */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
            <p className="text-secondary">
              <strong className="font-semibold">Need immediate assistance?</strong> Our team is ready to help.
              Call or WhatsApp us for quick responses to your inquiries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
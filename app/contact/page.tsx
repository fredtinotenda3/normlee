import { MapPin, Phone, Clock, MessageCircle, Truck } from "lucide-react";

const phoneNumbers = [
  { number: "0774 130 626", href: "+263774130626" },
  { number: "0714 491 705", href: "+263714491705" },
  { number: "0733 835 798", href: "+263733835798" },
];

export default function ContactPage() {
  return (
    <>
      {/* Photo Hero */}
      <section className="relative h-64 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />
        <div className="container mx-auto px-6 relative z-10 pb-10">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-2">
            Contact Us
          </h1>
          <p className="text-gray-300">
            We&apos;re ready to help with your next project.
          </p>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              {/* Card top strip */}
              <div className="h-2 bg-primary" />
              <div className="p-8">
                <h2 className="text-2xl font-heading font-bold text-secondary mb-7">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary mb-0.5">Address</p>
                      <p className="text-gray-500 text-sm">
                        610-11th Street, Hatcliffe, Borrowdale, Harare
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary mb-1">Phone Numbers</p>
                      <div className="space-y-1">
                        {phoneNumbers.map((phone) => (
                          <a
                            key={phone.href}
                            href={`tel:${phone.href}`}
                            className="block text-gray-500 text-sm hover:text-primary transition-colors"
                          >
                            {phone.number}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary mb-0.5">WhatsApp</p>
                      <a
                        href="https://wa.me/263774130626"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-semibold text-sm"
                      >
                        +263 774 130 626
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary mb-0.5">Business Hours</p>
                      <p className="text-gray-500 text-sm">Monday – Saturday: 7:00 AM – 5:00 PM</p>
                      <p className="text-gray-400 text-sm">Sunday: Closed (Emergency calls only)</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 mt-8">
                  <a
                    href="https://wa.me/263774130626?text=Hi%20Normlee%20Investments%2C%20I%20have%20a%20question."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary text-white py-3.5 rounded-xl font-heading font-bold hover:bg-primary-hover transition-colors"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </a>
                  <a
                    href="tel:+263774130626"
                    className="flex items-center justify-center gap-2 border-2 border-primary text-primary py-3.5 rounded-xl font-heading font-bold hover:bg-primary hover:text-white transition-colors"
                  >
                    <Phone size={20} />
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* Right column: Map + Delivery */}
            <div className="space-y-8">
              {/* Google Maps embed */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="h-2 bg-primary" />
                <div className="p-6">
                  <h2 className="text-xl font-heading font-bold text-secondary mb-4">
                    Our Location
                  </h2>
                </div>
                <iframe
                  title="Normlee Investments Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800!2d31.0800!3d-17.7200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQzJzEyLjAiUyAzMcKwMDQnNDguMCJF!5e0!3m2!1sen!2szw!4v1680000000000!5m2!1sen!2szw"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500 text-center">
                    610-11th Street, Hatcliffe, Borrowdale, Harare
                  </p>
                </div>
              </div>

              {/* Delivery Zones */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="h-2 bg-primary" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Truck className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-heading font-bold text-secondary">
                      Delivery Zones
                    </h2>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">
                    We provide fast and reliable delivery across:
                  </p>
                  <ul className="space-y-2">
                    {["Harare (all areas)", "Borrowdale", "Hatcliffe", "Surrounding areas (contact for details)"].map((zone) => (
                      <li key={zone} className="flex items-center gap-2 text-gray-700 text-sm">
                        <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
                        {zone}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

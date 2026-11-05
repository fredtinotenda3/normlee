import type { Metadata } from "next";
import { MapPin, Phone, Clock, MessageCircle, Truck } from "lucide-react";
import { primaryPhone, site, telUrl, whatsappMessages, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Normlee Investments for construction aggregates, building materials and paving quotes in Zimbabwe. Call or message us on WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative flex items-end overflow-hidden bg-gray-900 pt-20 pb-10">
        <div className="absolute inset-0 bg-linear-to-br from-gray-800 via-gray-900 to-black" aria-hidden="true" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" aria-hidden="true" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-2">Contact Us</h1>
          <p className="text-gray-200">We&apos;re ready to help with your next project.</p>
        </div>
      </section>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="h-2 bg-primary" aria-hidden="true" />
              <div className="p-8">
                <h2 className="text-2xl font-heading font-bold text-secondary mb-7">Get in Touch</h2>

                <div className="space-y-6">
                  {/* Address — TODO(owner): confirm the verified business address (lib/site.ts). */}
                  <div className="flex items-start gap-4">
                    <div aria-hidden="true" className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary-strong" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-0.5">Address</h3>
                      <p className="text-gray-600 text-sm">{site.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div aria-hidden="true" className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary-strong" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Phone Numbers</h3>
                      <ul className="space-y-1">
                        {site.phones.map((phone) => (
                          <li key={phone.e164}>
                            <a
                              href={telUrl(phone.e164)}
                              className="block text-gray-700 text-sm underline-offset-2 hover:text-primary-strong hover:underline transition-colors"
                            >
                              {phone.display}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div aria-hidden="true" className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-green-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-0.5">WhatsApp</h3>
                      <a
                        href={whatsappUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-800 hover:text-green-900 font-semibold text-sm underline-offset-2 hover:underline"
                      >
                        {site.whatsapp.display}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </div>
                  </div>

                  {/* Hours — TODO(owner): confirm business hours (lib/site.ts). */}
                  <div className="flex items-start gap-4">
                    <div aria-hidden="true" className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary-strong" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-0.5">Business Hours</h3>
                      {site.hours.map((h) => (
                        <p key={h.days} className="text-gray-600 text-sm">
                          {h.days}: {h.time}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 mt-8">
                  <a
                    href={whatsappUrl(whatsappMessages.question)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary-strong text-white py-3.5 rounded-xl font-heading font-bold hover:bg-primary-strong-hover transition-colors"
                  >
                    <MessageCircle size={20} aria-hidden="true" />
                    Chat on WhatsApp
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <a
                    href={telUrl(primaryPhone.e164)}
                    className="flex items-center justify-center gap-2 border-2 border-primary-strong text-primary-strong py-3.5 rounded-xl font-heading font-bold hover:bg-primary-strong hover:text-white transition-colors"
                  >
                    <Phone size={20} aria-hidden="true" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* Right column: Map placeholder + Delivery */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="h-2 bg-primary" aria-hidden="true" />
                <div className="p-6">
                  <h2 className="text-xl font-heading font-bold text-secondary mb-4">Our Location</h2>
                  {/*
                    TODO(owner): the previous Google Maps embed pointed at an unverified
                    coordinate and has been removed. Supply the correct Google Maps location
                    (share link or place name) and an embed will be added here.
                  */}
                  <div
                    role="img"
                    aria-label="Placeholder: Google Map to be added once the business location is confirmed."
                    className="flex h-60 flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 bg-gray-100 p-4 text-center text-gray-600"
                  >
                    <MapPin aria-hidden="true" className="h-8 w-8" />
                    <span className="text-xs font-semibold uppercase tracking-widest">Map placeholder</span>
                    <span className="text-sm">Map will be added once the location is confirmed.</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 text-center">{site.address}</p>
                </div>
              </div>

              {/* Delivery */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="h-2 bg-primary" aria-hidden="true" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div aria-hidden="true" className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Truck className="w-5 h-5 text-primary-strong" />
                    </div>
                    <h2 className="text-xl font-heading font-bold text-secondary">Delivery</h2>
                  </div>
                  {/* TODO(owner): confirm delivery coverage (lib/site.ts deliveryAreas). */}
                  <p className="text-gray-600 text-sm mb-4">
                    Areas we serve include the following. Contact us to confirm delivery and charges for your
                    location:
                  </p>
                  <ul className="space-y-2">
                    {site.deliveryAreas.map((zone) => (
                      <li key={zone} className="flex items-center gap-2 text-gray-700 text-sm">
                        <span aria-hidden="true" className="w-2 h-2 bg-primary rounded-full shrink-0" />
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

import type { Metadata } from "next";
import { HardHat, Home, Building2, Leaf, CheckCircle2, Truck, Phone, MessageCircle } from "lucide-react";
import PhotoPlaceholder from "@/components/shared/PhotoPlaceholder";
import { primaryPhone, telUrl, whatsappMessages, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Paving Services",
  description:
    "Specialist paving services in Zimbabwe: residential driveways, industrial paving and decorative walkways. Request a quote from Normlee Investments.",
  alternates: { canonical: "/services" },
};

// TODO(owner): confirm each service and its feature list. Features that made guarantees
// ("Durability guaranteed") have been removed until verified.
const services = [
  {
    icon: Home,
    title: "Residential Driveways",
    description: "Driveways for homes, designed for everyday use.",
    features: ["Custom designs", "Multiple finish options", "Low maintenance"],
    photo: "Completed residential driveway",
  },
  {
    icon: Building2,
    title: "Industrial Paving",
    description: "Paving for industrial complexes, warehouses and commercial properties.",
    features: ["Suited to heavy use", "Industrial-grade materials", "Commercial and industrial sites"],
    photo: "Completed industrial or commercial paving",
  },
  {
    icon: Leaf,
    title: "Decorative Walkways",
    description: "Pathways and walkways that combine function with appearance.",
    features: ["Patterned designs", "Colour options", "Slip-resistant finish"],
    photo: "Completed decorative walkway",
  },
];

// TODO(owner): "Warranty on all paving work" removed until the warranty terms are confirmed.
const benefits = [
  "Installation by skilled professionals",
  "Quality materials",
  "Quotes tailored to your project",
  "Clean and professional workmanship",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-end overflow-hidden bg-gray-900 pt-32 pb-16">
        {/* TODO(owner): replace with a genuine Normlee paving photo. */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-800 via-gray-900 to-black" aria-hidden="true" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" aria-hidden="true" />

        <div className="container mx-auto px-6 relative z-10">
          <p className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase mb-5">
            <HardHat size={14} aria-hidden="true" />
            Paving Services
          </p>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white leading-tight mb-4">
            Specialist in Paving
          </h1>
          <p className="text-gray-200 text-lg max-w-xl">
            Paving for residential and industrial projects. Request a quote for your project.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-primary-strong font-semibold text-sm uppercase tracking-widest mb-2">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary">What We Do</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.title}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <PhotoPlaceholder subject={service.photo} className="h-52" />
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon aria-hidden="true" className="w-6 h-6 text-primary-strong" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={14} aria-hidden="true" className="text-primary-strong shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* TODO(owner): replace with a genuine photo of the Normlee paving team or work. */}
            <PhotoPlaceholder subject="Normlee paving team at work" className="h-[480px] rounded-2xl" />

            <div>
              <p className="text-primary-strong font-semibold text-sm uppercase tracking-widest mb-3">Our Approach</p>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary leading-tight mb-8">
                Why Choose Our
                <br />
                Paving Services?
              </h2>
              <ul className="space-y-4 mb-10">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div aria-hidden="true" className="w-6 h-6 bg-primary-strong rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl(whatsappMessages.paving)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-strong text-white px-8 py-4 rounded-lg font-heading font-bold hover:bg-primary-strong-hover transition-colors shadow-lg shadow-primary/20"
              >
                <Truck size={20} aria-hidden="true" />
                Request a Quote
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden bg-primary-strong">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white text-lg mb-10 max-w-xl mx-auto">
            Tell us about your paving project and request a quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl(whatsappMessages.paving)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-strong px-8 py-4 rounded-lg font-heading font-bold hover:bg-gray-100 transition-colors"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Request a Quote
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={telUrl(primaryPhone.e164)}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-heading font-bold hover:bg-white hover:text-primary-strong transition-colors"
            >
              <Phone size={20} aria-hidden="true" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

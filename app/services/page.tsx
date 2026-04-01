import { HardHat, Home, Building2, Leaf, CheckCircle2, Truck } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Home,
    title: "Residential Driveways",
    description: "Beautiful, durable driveways that enhance your home's curb appeal and provide long-lasting performance.",
    features: ["Custom designs", "Multiple finish options", "Weather-resistant", "Low maintenance"]
  },
  {
    icon: Building2,
    title: "Industrial Paving",
    description: "Heavy-duty paving solutions for industrial complexes, warehouses, and commercial properties.",
    features: ["High load capacity", "Industrial grade materials", "Quick installation", "Durability guaranteed"]
  },
  {
    icon: Leaf,
    title: "Decorative Walkways",
    description: "Aesthetic pathways and walkways that combine functionality with visual appeal.",
    features: ["Patterned designs", "Color options", "Slip-resistant finish", "Seamless integration"]
  }
];

const benefits = [
  "Expert installation by skilled professionals",
  "High-quality materials for long-lasting results",
  "Competitive pricing with transparent quotes",
  "Timely completion of projects",
  "Clean and professional workmanship",
  "Warranty on all paving work"
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-secondary to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <HardHat size={48} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Specialist in Paving
            </h1>
            <p className="text-lg text-gray-300">
              Professional paving services for residential and industrial projects.
              Quality craftsmanship that stands the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Our Paving Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive paving solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-card overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-500">
                        <CheckCircle2 size={14} className="text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
                Why Choose Our Paving Services?
              </h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle2 size={20} className="text-primary shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="https://wa.me/263774130626?text=Hi%20Normlee%20Investments%2C%20I'm%20interested%20in%20your%20paving%20services.%20Please%20provide%20a%20quote%20for%20my%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  <Truck size={20} />
                  <span>Request a Quote</span>
                </a>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <HardHat size={64} className="mx-auto mb-2 opacity-50" />
                <p>Work examples placeholder</p>
                <p className="text-sm">Contact us to see our portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your paving project today.
          </p>
          <a
            href="https://wa.me/263774130626?text=Hi%20Normlee%20Investments%2C%20I'm%20interested%20in%20your%20paving%20services.%20Please%20help%20me%20with%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <HardHat size={20} />
            <span>Get a Free Quote</span>
          </a>
        </div>
      </section>
    </>
  );
}
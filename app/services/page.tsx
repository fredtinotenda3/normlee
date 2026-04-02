import { HardHat, Home, Building2, Leaf, CheckCircle2, Truck, Phone, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Driveways",
    description: "Beautiful, durable driveways that enhance your home's curb appeal and provide long-lasting performance.",
    features: ["Custom designs", "Multiple finish options", "Weather-resistant", "Low maintenance"],
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80",
  },
  {
    icon: Building2,
    title: "Industrial Paving",
    description: "Heavy-duty paving solutions for industrial complexes, warehouses, and commercial properties.",
    features: ["High load capacity", "Industrial grade materials", "Quick installation", "Durability guaranteed"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    icon: Leaf,
    title: "Decorative Walkways",
    description: "Aesthetic pathways and walkways that combine functionality with visual appeal.",
    features: ["Patterned designs", "Color options", "Slip-resistant finish", "Seamless integration"],
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80",
  },
];

const benefits = [
  "Expert installation by skilled professionals",
  "High-quality materials for long-lasting results",
  "Competitive pricing with transparent quotes",
  "Timely completion of projects",
  "Clean and professional workmanship",
  "Warranty on all paving work",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section — full-bleed photo */}
      <section className="relative h-125 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1590496793929-36417d3117de?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/20" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />

        <div className="container mx-auto px-6 relative z-10 pb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase mb-5">
            <HardHat size={14} />
            Paving Services
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white leading-tight mb-4">
            Specialist in Paving
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Professional paving for residential and industrial projects.
            Quality craftsmanship that stands the test of time.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary">
              What We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                {/* Photo */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle2 size={14} className="text-primary shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits — split with photo */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
                alt="Normlee paving team at work"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-heading font-bold text-lg">
                  Professional. Reliable. Local.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Our Commitment
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary leading-tight mb-8">
                Why Choose Our
                <br />
                Paving Services?
              </h2>
              <ul className="space-y-4 mb-10">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/263774130626?text=Hi%20Normlee%20Investments%2C%20I'm%20interested%20in%20paving%20services.%20Please%20provide%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-heading font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
              >
                <Truck size={20} />
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/85 text-lg mb-10 max-w-xl mx-auto">
            Get a free consultation and quote for your paving project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263774130626?text=Hi%20Normlee%20Investments%2C%20I%27m%20interested%20in%20paving%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-heading font-bold hover:bg-gray-100 transition-colors"
            >
              <MessageCircle size={20} />
              Get a Free Quote
            </a>
            <a
              href="tel:+263774130626"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-heading font-bold hover:bg-white hover:text-primary transition-colors"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

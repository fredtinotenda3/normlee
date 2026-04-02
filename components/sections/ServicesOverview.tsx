import { Truck, HardHat, Box, Building2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Bulk Aggregates",
    description: "Premium stones, sand, and base materials delivered directly to your site.",
    items: ["3/4 & 7mm Stones", "River & Pit Sand", "Crusher Runner", "Quarry Dust"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    href: "/catalog",
  },
  {
    icon: HardHat,
    title: "Specialist Paving",
    description: "Expert paving services for residential and industrial projects.",
    items: ["Driveways", "Walkways", "Industrial Paving", "Decorative Surfaces"],
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80",
    href: "/services",
  },
  {
    icon: Box,
    title: "Building Materials",
    description: "Quality bricks and fill materials for all your construction needs.",
    items: ["Red Common Bricks", "Top Soil", "Gravel", "Coal & Brick Rubble"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    href: "/catalog",
  },
  {
    icon: Building2,
    title: "Fast Delivery",
    description: "Reliable transport across Harare, Borrowdale, and Hatcliffe.",
    items: ["Same-day delivery", "Flexible scheduling", "Large fleet", "Competitive rates"],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
    href: "/contact",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              What We Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary leading-tight">
              Everything You Need
              <br />
              <span className="text-gray-400 font-normal">to Build.</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm md:text-right">
            Comprehensive construction solutions with premium materials and expert services, all in one place.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 flex flex-col min-h-[380px] shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${service.image}')` }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 group-hover:from-black/95 transition-all duration-300" />

              {/* Orange top accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/90 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Item list - visible on hover */}
                <ul className="space-y-1 mb-5 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

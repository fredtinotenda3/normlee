import Link from "next/link";
import { Truck, HardHat, Box, Building2, ArrowRight } from "lucide-react";

// TODO(owner): add a genuine photo per card once supplied. Cards currently use a neutral dark background.
const services = [
  {
    icon: Truck,
    title: "Bulk Aggregates",
    description: "Stones, sand and base materials supplied in bulk. Contact us to arrange delivery.",
    items: ["3/4 & 7mm Stones", "River & Pit Sand", "Crusher Runner", "Quarry Dust"],
    href: "/products",
  },
  {
    icon: HardHat,
    title: "Specialist Paving",
    description: "Paving services for residential and industrial projects.",
    items: ["Driveways", "Walkways", "Industrial Paving", "Decorative Surfaces"],
    href: "/services",
  },
  {
    icon: Box,
    title: "Building Materials",
    description: "Bricks and fill materials for your construction needs.",
    items: ["Red Common Bricks", "Top Soil", "Gravel", "Coal & Brick Rubble"],
    href: "/products",
  },
  {
    icon: Building2,
    title: "Delivery",
    description: "Bulk materials delivered to site. Contact us to confirm availability and charges for your location.",
    items: ["Delivery to site", "Quoted per location", "Bulk orders"],
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
            <p className="text-primary-strong font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary leading-tight">
              Everything You Need
              <br />
              <span className="text-gray-600 font-normal">to Build.</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-sm md:text-right">
            Construction materials and paving services from one supplier.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 flex flex-col min-h-[380px] shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-black/90 via-gray-900/80 to-gray-700/60" />

              {/* Orange top accent bar on hover/focus */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-300 origin-left"
              />

              <div className="relative z-10 flex flex-col justify-end h-full p-6">
                <div className="w-12 h-12 bg-primary-strong rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <service.icon aria-hidden="true" className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-200 text-sm mb-4 leading-relaxed">{service.description}</p>

                {/* Always visible on touch/mobile; revealed on hover/focus from md up */}
                <ul className="space-y-1 mb-5 md:max-h-0 md:overflow-hidden md:group-hover:max-h-40 md:group-focus-visible:max-h-40 transition-all duration-300">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-200">
                      <span aria-hidden="true" className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

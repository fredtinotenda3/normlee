import { Truck, HardHat, Box, Building2 } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Bulk Aggregates",
    description: "Premium stones, sand, and base materials delivered directly to your site",
    items: ["3/4 & 7mm Stones", "River & Pit Sand", "Crusher Runner", "Quarry Dust"]
  },
  {
    icon: HardHat,
    title: "Specialist Paving",
    description: "Expert paving services for residential and industrial projects",
    items: ["Driveways", "Walkways", "Industrial Paving", "Decorative Surfaces"]
  },
  {
    icon: Box,
    title: "Building Materials",
    description: "Quality bricks and fill materials for your construction needs",
    items: ["Red Common Bricks", "Top Soil", "Gravel", "Coal & Brick Rubble"]
  },
  {
    icon: Building2,
    title: "Fast Delivery",
    description: "Reliable transportation across Harare, Borrowdale, and Hatcliffe",
    items: ["Same-day delivery", "Flexible scheduling", "Large fleet", "Competitive rates"]
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction solutions with quality materials and expert services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-card hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{service.description}</p>
              <ul className="space-y-1">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
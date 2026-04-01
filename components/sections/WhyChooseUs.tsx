import { CheckCircle2, Clock, ThumbsUp, Shield } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Quality Materials",
    description: "Premium-grade aggregates and bricks sourced from trusted suppliers"
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Efficient logistics ensuring materials arrive when you need them"
  },
  {
    icon: ThumbsUp,
    title: "Expert Service",
    description: "Experienced team dedicated to your construction success"
  },
  {
    icon: Shield,
    title: "Competitive Pricing",
    description: "Best value for money with transparent, upfront pricing"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            Why Choose Normlee?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Building trust through quality, reliability, and professional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-secondary mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
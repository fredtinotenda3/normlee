import { CheckCircle2, Clock, ThumbsUp, Shield, Award } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Quality Materials",
    description: "Premium-grade aggregates and bricks sourced from trusted suppliers.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Efficient logistics ensuring materials arrive exactly when you need them.",
  },
  {
    icon: ThumbsUp,
    title: "Expert Service",
    description: "Experienced team dedicated to your construction success, every project.",
  },
  {
    icon: Shield,
    title: "Competitive Pricing",
    description: "Best value for money with transparent, upfront pricing — no surprises.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24">
      {/* Background image with heavy overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80')",
        }}
      />

      {/* Diagonal orange accent */}
      <div
        className="absolute -right-24 top-0 bottom-0 w-72 bg-primary/10"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text + benefits */}
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Why Normlee
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
              Built on Trust,
              <br />
              <span className="text-primary">Delivered with Pride.</span>
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Over a decade of serving Zimbabwe&apos;s builders, contractors, and homeowners
              with the materials and expertise they depend on.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white mb-1">{b.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: paving photo card + award badge */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1590496793929-36417d3117de?w=700&q=80"
                alt="Professional paving work by Normlee Investments"
                className="w-full h-[460px] object-cover"
              />
              {/* Overlay info strip */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-heading font-bold text-lg">
                  Specialist Paving Services
                </p>
                <p className="text-gray-300 text-sm">Residential &amp; Industrial</p>
              </div>
            </div>

            {/* Floating award badge */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-primary rounded-2xl shadow-xl flex flex-col items-center justify-center rotate-3">
              <Award className="w-7 h-7 text-white mb-1" />
              <span className="text-white font-heading font-extrabold text-2xl leading-none">10+</span>
              <span className="text-white/80 text-xs text-center leading-tight">Years<br />Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

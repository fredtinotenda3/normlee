import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Clock, ThumbsUp, Shield, Award, ArrowRight } from "lucide-react";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

// Content audit (Phase 4): each statement below is limited to what is verified or directly visible on
// the site (founding year, the product range, published prices, delivery arranged on request).
// Removed unsupported claims: "Quality Materials", "Experienced Team", "Built on Trust, Delivered with Pride".
// TODO(owner): supply specifics (team size, qualifications, quality assurances) if you want stronger claims.
const benefits = [
  {
    icon: CheckCircle2,
    title: "Range of Materials",
    description: "Stones, sand, base materials, bricks and fill for residential, commercial and industrial projects.",
  },
  {
    icon: Clock,
    title: "Delivery on Request",
    description: "Bulk delivery to site can be arranged. Contact us to confirm availability and charges for your location.",
  },
  {
    icon: ThumbsUp,
    title: "Operating Since 2010",
    description: "Supplying builders, contractors and homeowners in Zimbabwe for over a decade.",
  },
  {
    icon: Shield,
    title: "Published Prices",
    description: "Prices for common materials are listed on the site, with quotes for larger orders.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24">
      {/* Diagonal orange accent */}
      <div
        aria-hidden="true"
        className="absolute -right-24 top-0 bottom-0 w-72 bg-primary/10"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text + benefits */}
          <div>
            <p className="text-primary-light font-semibold text-sm uppercase tracking-widest mb-3">Why Normlee</p>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
              Materials and Paving,
              <br />
              <span className="text-primary-light">One Supplier.</span>
            </h2>
            <p className="text-gray-300 mb-10 leading-relaxed">
              Serving Zimbabwe&apos;s builders, contractors and homeowners with construction materials and
              paving services since {site.foundedYear}.
            </p>
            <p className="mb-10 -mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary-light font-semibold hover:gap-3 transition-all"
              >
                About Normlee <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <b.icon aria-hidden="true" className="w-5 h-5 text-primary-light" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white mb-1">{b.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: genuine fleet photograph + badge */}
          <figure className="relative">
            <Image
              src={photos.fleetYard.src}
              width={photos.fleetYard.width}
              height={photos.fleetYard.height}
              alt={photos.fleetYard.alt}
              sizes="(min-width: 1024px) 560px, 90vw"
              className="h-auto w-full rounded-2xl shadow-2xl"
            />
            <figcaption className="mt-3 text-sm text-gray-300">Trucks parked in a yard at dusk.</figcaption>

            <div className="absolute -top-6 right-2 md:-right-6 w-28 h-28 bg-primary-strong rounded-2xl shadow-xl flex flex-col items-center justify-center rotate-3">
              <Award aria-hidden="true" className="w-7 h-7 text-white mb-1" />
              <span className="text-white text-xs text-center leading-tight">Serving Zimbabwe since</span>
              <span className="text-white font-heading font-extrabold text-2xl leading-none">{site.foundedYear}</span>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

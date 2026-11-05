import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Building, Package, Truck, HardHat, ArrowRight, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import PhotoPlaceholder from "@/components/shared/PhotoPlaceholder";
import CtaBanner from "@/components/shared/CtaBanner";
import { photos } from "@/lib/images";
import { site, whatsappMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${site.name}: a Zimbabwe supplier of construction aggregates, bricks and fill, with delivery and paving services, operating since ${site.foundedYear}.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Normlee Investments",
    description: `A Zimbabwe supplier of construction aggregates, bricks and fill, with delivery and paving services, operating since ${site.foundedYear}.`,
    url: "/about",
    type: "website",
  },
};

// Content audit: this page states only (a) the verified founding year, (b) the product and service range
// already listed on the site, and (c) how enquiries work. It names no founders, staff, management,
// achievements, certifications or client names, and makes no capacity, quality or coverage claims.
// TODO(owner): supply the company story, the owner/management names you want published, the team size,
// any certifications and the delivery coverage. Add them here only once confirmed.

const whatWeDo = [
  {
    icon: Package,
    title: "Material supply",
    text: "Stones, river and pit sand, crusher runner, quarry dust, bricks and fill materials, sold in bulk.",
    href: "/products",
    cta: "View products and prices",
  },
  {
    icon: Truck,
    title: "Delivery",
    text: "Bulk materials can be delivered to site. Availability and charges are confirmed per location.",
    href: "/services#delivery",
    cta: "About delivery",
  },
  {
    icon: HardHat,
    title: "Paving services",
    text: "Paving for residential driveways, industrial sites and decorative walkways, quoted per project.",
    href: "/services#paving",
    cta: "About paving services",
  },
];

const howWeWork = [
  "Prices for common materials are published on the products page.",
  "Larger or specific orders are quoted for your project.",
  "Delivery availability and charges are confirmed for your location before you commit.",
  "You can enquire by phone or WhatsApp. Contact details are on the contact page.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        icon={Building}
        title="About Normlee Investments"
        description={`A Zimbabwe supplier of construction materials, with delivery and paving services, operating since ${site.foundedYear}.`}
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-primary-strong font-semibold text-sm uppercase tracking-widest mb-3">Who we are</p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-secondary leading-tight mb-6">
              Construction materials for builders, contractors and homeowners
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {site.legalName} supplies construction aggregates, bricks and fill materials in Zimbabwe, and
              offers delivery and paving services. The company has been operating since {site.foundedYear}.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our customers include builders, contractors and homeowners who need materials for residential,
              commercial and industrial work.
            </p>
          </div>

          <figure className="mx-auto w-full max-w-[484px]">
            <Image
              src={photos.fleetYard.src}
              width={photos.fleetYard.width}
              height={photos.fleetYard.height}
              alt={photos.fleetYard.alt}
              sizes="(min-width: 1024px) 484px, 90vw"
              className="h-auto w-full rounded-2xl shadow-xl"
            />
            <figcaption className="mt-3 text-sm text-gray-600">Trucks parked in a yard at dusk.</figcaption>
          </figure>
        </div>
      </section>

      {/* Background */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-primary-strong font-semibold text-sm uppercase tracking-widest mb-3">Our background</p>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-secondary mb-6">
            Operating since {site.foundedYear}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Normlee Investments has operated since {site.foundedYear}. We will add more of the company&apos;s
            story here as it is confirmed and ready to publish.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary-strong font-semibold text-sm uppercase tracking-widest mb-2">What we do</p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-secondary">
              Products and services
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whatWeDo.map((item) => (
              <li key={item.title} className="flex flex-col rounded-2xl bg-gray-50 p-7 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon aria-hidden="true" className="w-6 h-6 text-primary-strong" />
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{item.text}</p>
                <Link
                  href={item.href}
                  className="mt-auto inline-flex items-center gap-2 text-primary-strong font-semibold text-sm hover:gap-3 transition-all"
                >
                  {item.cta} <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we work + team placeholder */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-primary-light font-semibold text-sm uppercase tracking-widest mb-3">How we work</p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white leading-tight mb-6">
              Our approach to enquiries
            </h2>
            <ul className="space-y-4">
              {howWeWork.map((line) => (
                <li key={line} className="flex items-start gap-3 text-gray-200">
                  <CheckCircle2 size={20} aria-hidden="true" className="text-primary-light shrink-0 mt-0.5" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* TODO(owner): replace with a genuine team photograph, with the team's consent (about-team-photo.md). */}
          <PhotoPlaceholder subject="Photograph of the Normlee team" className="h-72 rounded-2xl" />
        </div>
      </section>

      <CtaBanner
        title="Talk to us about your project"
        text="Tell us what you need and we will help with materials, delivery and paving enquiries."
        message={whatsappMessages.general}
        whatsappLabel="WhatsApp Us"
      />
    </>
  );
}

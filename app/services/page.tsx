import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HardHat, Home, Building2, Leaf, CheckCircle2, Truck, Package, MessageCircle, ArrowRight } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import PhotoPlaceholder from "@/components/shared/PhotoPlaceholder";
import CtaBanner from "@/components/shared/CtaBanner";
import { photos } from "@/lib/images";
import { whatsappMessages, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services: Material Supply, Delivery & Paving",
  description:
    "Normlee Investments services: bulk material supply, delivery to site (confirmed per location) and paving for residential driveways, industrial sites and decorative walkways.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services: Material Supply, Delivery & Paving | Normlee Investments",
    description: "Material supply, delivery to site and paving services. Request a quote.",
    url: "/services",
    type: "website",
  },
};

// Content audit (Phase 4). Removed unsupported claims: "Installation by skilled professionals",
// "Industrial-grade materials", "Slip-resistant finish", "Custom designs", "Multiple finish options",
// "Colour options", "Low maintenance", "Suited to heavy use", "Quality materials",
// "Clean and professional workmanship". Earlier phases already removed guarantees and warranties.
// TODO(owner): confirm which paving types you offer, the materials and finishes available, who carries out
// installation, and any workmanship terms. Add verified detail back here when confirmed.

const pavingTypes = [
  {
    icon: Home,
    title: "Residential driveways",
    description: "Paving for driveways at homes and other residential properties.",
    photo: "Completed residential driveway",
  },
  {
    icon: Building2,
    title: "Industrial and commercial paving",
    description: "Paving for industrial, warehouse and commercial properties.",
    photo: "Completed industrial or commercial paving",
  },
  {
    icon: Leaf,
    title: "Decorative walkways",
    description: "Pathways and walkways for gardens and properties.",
    photo: "Completed decorative walkway",
  },
];

const supplyBenefits = [
  "Stones, sand, base materials, bricks and fill in one place",
  "Published prices for common materials",
  "Product enquiries by WhatsApp or phone",
];

const deliveryBenefits = [
  "Bulk materials can be delivered to your site",
  "Availability and charges are confirmed for your location",
  "Delivery is arranged when you order",
];

const pavingBenefits = [
  "Quotes prepared for your project",
  "Enquiries for homes, commercial and industrial properties",
  "Site details are discussed when you request a quote",
];

function BenefitList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-gray-700">
          <CheckCircle2 size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-primary-strong" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        icon={HardHat}
        title="Services"
        description="Material supply, delivery and paving are separate services. Here is what each one covers."
      />

      {/* At a glance */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="sr-only">Services at a glance</h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              { href: "#supply", label: "Material supply", text: "We sell bulk materials.", icon: Package },
              { href: "#delivery", label: "Delivery", text: "We can bring materials to your site.", icon: Truck },
              { href: "#paving", label: "Paving installation", text: "Paving work quoted per project.", icon: HardHat },
            ].map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="flex h-full items-start gap-4 rounded-xl border border-gray-200 p-5 hover:border-primary-strong transition-colors"
                >
                  <s.icon aria-hidden="true" className="h-6 w-6 shrink-0 text-primary-strong" />
                  <span>
                    <span className="block font-heading font-bold text-secondary">{s.label}</span>
                    <span className="block text-sm text-gray-600">{s.text}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Material supply */}
      <section id="supply" className="scroll-mt-24 bg-gray-50 py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-primary-strong font-semibold text-sm uppercase tracking-widest mb-3">Service 1</p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-secondary mb-4">Material supply</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We sell stones, river and pit sand, crusher runner, quarry dust, bricks and fill materials. Supply
              means the material itself. Delivery and paving installation are separate services, described
              below.
            </p>
            <BenefitList items={supplyBenefits} />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-primary-strong text-white px-6 py-3 rounded-lg font-heading font-bold hover:bg-primary-strong-hover transition-colors"
              >
                View products and prices <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                href={whatsappUrl(whatsappMessages.materials)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary-strong text-primary-strong px-6 py-3 rounded-lg font-heading font-bold hover:bg-primary-strong hover:text-white transition-colors"
              >
                <MessageCircle size={16} aria-hidden="true" />
                Enquire about materials
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
          <PhotoPlaceholder subject="Materials supplied by Normlee" className="h-72 rounded-2xl" />
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="scroll-mt-24 bg-white py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Genuine photograph of a block delivery. It shows delivery, not installation. */}
          <figure className="mx-auto w-full max-w-[368px] lg:mx-0 lg:justify-self-center">
            <Image
              src={photos.pavingDeliveryCrane.src}
              width={photos.pavingDeliveryCrane.width}
              height={photos.pavingDeliveryCrane.height}
              alt={photos.pavingDeliveryCrane.alt}
              sizes="(min-width: 1024px) 368px, 90vw"
              className="h-auto w-full rounded-2xl object-cover shadow-xl"
            />
            <figcaption className="mt-3 text-sm text-gray-600">
              A delivery of stacked blocks. This photograph shows a delivery, not a paving installation.
            </figcaption>
          </figure>
          <div>
            <p className="text-primary-strong font-semibold text-sm uppercase tracking-widest mb-3">Service 2</p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-secondary mb-4">Delivery</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Delivery means bringing materials to your site. Whether we can deliver to your location, and the
              charge, is confirmed when you enquire. We do not state a delivery area or time frame on this page
              until it is confirmed with you.
            </p>
            <BenefitList items={deliveryBenefits} />
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappUrl(whatsappMessages.delivery)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-strong text-white px-6 py-3 rounded-lg font-heading font-bold hover:bg-primary-strong-hover transition-colors"
              >
                <Truck size={16} aria-hidden="true" />
                Ask about delivery
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-primary-strong text-primary-strong px-6 py-3 rounded-lg font-heading font-bold hover:bg-primary-strong hover:text-white transition-colors"
              >
                Contact details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Paving installation */}
      <section id="paving" className="scroll-mt-24 bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-primary-strong font-semibold text-sm uppercase tracking-widest mb-3">Service 3</p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-secondary mb-4">
              Paving installation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Paving installation means laying a paved surface at your site. It is quoted per project. Request a
              quote and tell us what you need.
            </p>
            <BenefitList items={pavingBenefits} />
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pavingTypes.map((type) => (
              <li key={type.title}>
                <article className="h-full overflow-hidden rounded-2xl bg-white shadow-md">
                  <PhotoPlaceholder subject={type.photo} className="h-52" />
                  <div className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <type.icon aria-hidden="true" className="h-6 w-6 text-primary-strong" />
                    </div>
                    <h3 className="mb-2 text-xl font-heading font-bold text-secondary">{type.title}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-gray-600">{type.description}</p>
                    <a
                      href={whatsappUrl(
                        `Hi Normlee Investments, I would like a quote for paving: ${type.title.toLowerCase()}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-strong hover:underline"
                    >
                      <MessageCircle size={14} aria-hidden="true" />
                      Request a quote
                      <span className="sr-only"> for {type.title.toLowerCase()} (opens in a new tab)</span>
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-600">
            Photographs of completed paving will be added when verified. See also our{" "}
            <Link href="/projects" className="font-semibold text-primary-strong underline">
              projects page
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBanner
        title="Ready to request a quote?"
        text="Tell us whether you need materials, delivery, paving or a combination."
        message={whatsappMessages.paving}
        whatsappLabel="Request a Quote"
      />
    </>
  );
}

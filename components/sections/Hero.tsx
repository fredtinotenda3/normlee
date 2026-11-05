import Image from "next/image";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import PavingPattern from "@/components/shared/PavingPattern";
import { photos } from "@/lib/images";
import { primaryPhone, site, telUrl, whatsappMessages, whatsappUrl } from "@/lib/site";

// Factual strip: only verified information (founding year) and what the business sells.
const highlights = [
  { value: String(site.foundedYear), label: "Year Established" },
  { value: "Stones, Sand & Bricks", label: "Bulk Aggregates" },
  { value: "Paving", label: "Services" },
];

export default function Hero() {
  return (
    <section className="relative min-h-svh flex items-center overflow-hidden bg-gray-900">
      {/* TODO(owner): supply a high-resolution landscape photo (see IMAGE_ASSET_GUIDE.md) for a full-bleed hero background. The supplied clips are too low-resolution for that, so a framed photo is used instead. */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-800 via-gray-900 to-black" aria-hidden="true" />
      <PavingPattern />

      {/* Orange left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary z-10" aria-hidden="true" />

      {/* Diagonal decorative shape */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-1/2 h-full bg-primary/10 z-0"
        style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      <div className="container mx-auto px-6 relative z-10 py-28 md:py-36 grid lg:grid-cols-[minmax(0,1fr)_auto] gap-16 items-center">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase mb-7">
            <span aria-hidden="true" className="w-2 h-2 bg-primary rounded-full inline-block animate-pulse" />
            Serving Zimbabwe since {site.foundedYear}
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05] mb-6">
            Build With
            <br />
            <span className="text-primary">Confidence.</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
            Bulk construction aggregates, bricks and paving services. Contact us for a quote and to ask about
            delivery to your site.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href={whatsappUrl(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-strong text-white px-8 py-4 rounded-lg font-heading font-bold text-base hover:bg-primary-strong-hover transition-colors shadow-lg shadow-primary/30"
            >
              <MessageCircle size={20} aria-hidden="true" />
              WhatsApp for Quote
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={telUrl(primaryPhone.e164)}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white px-8 py-4 rounded-lg font-heading font-bold text-base hover:bg-white hover:text-secondary transition-colors"
            >
              <Phone size={20} aria-hidden="true" />
              Call Now
            </a>
          </div>

          {/* Verified facts strip */}
          <dl className="flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-8">
            {highlights.map((item) => (
              <div key={item.label} className="flex flex-col-reverse">
                <dt className="text-xs text-gray-300 uppercase tracking-widest mt-0.5">{item.label}</dt>
                <dd className="text-2xl md:text-3xl font-heading font-extrabold text-primary">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Genuine site photograph at its native size so it stays sharp. Hidden on small screens to keep the CTAs above the fold. */}
        <figure className="hidden lg:block relative w-[368px] shrink-0">
          <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-primary/60" />
          <Image
            src={photos.heroLoading.src}
            width={photos.heroLoading.width}
            height={photos.heroLoading.height}
            alt={photos.heroLoading.alt}
            preload
            sizes="368px"
            className="relative h-auto w-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
          />
        </figure>
      </div>

      {/* Scroll cue (decorative) */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-white/60 text-xs tracking-widest uppercase animate-bounce z-10"
      >
        <span>Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}

"use client";

import { Phone, MessageCircle, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed construction site background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80')",
        }}
      />

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />

      {/* Orange left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary z-10" />

      {/* Diagonal decorative shape bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-1/2 h-full bg-primary/10 z-0"
        style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      <div className="container mx-auto px-6 relative z-10 py-28 md:py-36">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase mb-7">
            <span className="w-2 h-2 bg-primary rounded-full inline-block animate-pulse" />
            Harare&apos;s Trusted Supplier Since 2010
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05] mb-6">
            Build With
            <br />
            <span className="text-primary">Confidence.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
            Premium bulk construction aggregates, specialist paving, and fast delivery
            across Harare, Borrowdale &amp; Hatcliffe.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="https://wa.me/263774130626?text=Hi%20Normlee%20Investments%2C%20I'm%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-heading font-bold text-base hover:bg-primary-hover transition-all transform hover:scale-105 shadow-lg shadow-primary/30"
            >
              <MessageCircle size={20} />
              WhatsApp for Quote
            </a>
            <a
              href="tel:+263774130626"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white px-8 py-4 rounded-lg font-heading font-bold text-base hover:bg-white hover:text-secondary transition-all"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-8">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "Same Day", label: "Delivery Available" },
              { value: "3", label: "Contact Lines" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-heading font-extrabold text-primary">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-widest mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs tracking-widest uppercase animate-bounce z-10">
        <span>Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}

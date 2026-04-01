"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-secondary to-gray-800 text-white py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Build With Confidence.
            <span className="text-primary block mt-2">Specialist in Paving.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Premium bulk construction aggregates and expert paving services in Harare, Borrowdale, and Hatcliffe.
            Fast delivery, competitive pricing, and professional service you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263774130626?text=Hi%20Normlee%20Investments%2C%20I'm%20interested%20in%20your%20construction%20materials%20and%20paving%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all transform hover:scale-105"
            >
              <MessageCircle size={20} />
              <span>WhatsApp for Quote</span>
            </a>
            <a
              href="tel:+263774130626"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-secondary transition-all"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Competitive Prices</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Professional Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Phone, MessageCircle } from "lucide-react";
import { primaryPhone, telUrl, whatsappUrl } from "@/lib/site";

interface CtaBannerProps {
  title: string;
  text: string;
  /** Pre-filled WhatsApp message. */
  message: string;
  whatsappLabel?: string;
}

/** Call-to-action strip shared by the inner pages. */
export default function CtaBanner({ title, text, message, whatsappLabel = "WhatsApp Us" }: CtaBannerProps) {
  return (
    <section className="relative py-20 overflow-hidden bg-primary-strong">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">{title}</h2>
        <p className="text-white text-lg mb-9 max-w-xl mx-auto">{text}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-strong px-8 py-4 rounded-lg font-heading font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            <MessageCircle size={20} aria-hidden="true" />
            {whatsappLabel}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={telUrl(primaryPhone.e164)}
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-heading font-bold hover:bg-white hover:text-primary-strong transition-colors"
          >
            <Phone size={20} aria-hidden="true" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

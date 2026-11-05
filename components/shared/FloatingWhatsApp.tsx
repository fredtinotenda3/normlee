"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappMessages, whatsappUrl } from "@/lib/site";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide near the bottom of the page to avoid overlapping the footer.
      const nearBottom =
        window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 150;
      setIsVisible(!nearBottom);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Quick contact"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href={whatsappUrl(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={isVisible ? 0 : -1}
        aria-hidden={isVisible ? undefined : true}
        aria-label="Chat with Normlee on WhatsApp (opens in a new tab)"
        className="group relative flex items-center justify-center w-14 h-14 bg-green-700 rounded-full shadow-lg hover:bg-green-800 transition-all hover:scale-110"
      >
        <MessageCircle size={28} aria-hidden="true" className="text-white" />
        <span
          aria-hidden="true"
          className="absolute right-16 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
        >
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
}

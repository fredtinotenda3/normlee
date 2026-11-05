/**
 * Single source of truth for business details used across the site.
 *
 * IMPORTANT: Everything below was carried over from the original website and
 * has NOT yet been independently verified by the owner. Items marked
 * TODO(owner) must be confirmed before launch. Do not add new details here
 * without confirmation.
 */

export const site = {
  name: "Normlee Investments",
  legalName: "Normlee Investments (Pvt) Ltd",
  url: "https://www.normlee.net",
  /** Verified by the owner: the company has operated since 2010. */
  foundedYear: 2010,

  /** TODO(owner): confirm all three numbers are active and which is primary. */
  phones: [
    { display: "0774 130 626", e164: "+263774130626" },
    { display: "0714 491 705", e164: "+263714491705" },
    { display: "0733 835 798", e164: "+263733835798" },
  ],

  /** TODO(owner): confirm this is the WhatsApp-enabled number. */
  whatsapp: { number: "263774130626", display: "+263 774 130 626" },

  /** TODO(owner): confirm the verified business address. */
  address: "610-11th Street, Hatcliffe, Borrowdale, Zimbabwe",

  /** TODO(owner): confirm business hours. */
  hours: [
    { days: "Monday – Saturday", time: "7:00 AM – 5:00 PM" },
    { days: "Sunday", time: "Closed (emergency calls only)" },
  ],

  /**
   * TODO(owner): confirm delivery coverage. The original site claimed
   * "Zimbabwe (all areas)"; that claim has been removed until verified.
   */
  deliveryAreas: ["Borrowdale", "Hatcliffe", "Surrounding areas (contact us for details)"],
} as const;

export const primaryPhone = site.phones[0];

export function telUrl(e164: string): string {
  return `tel:${e164}`;
}

/** Build a WhatsApp click-to-chat URL with an optional pre-filled message. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${site.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Pre-filled WhatsApp messages, kept together so wording stays consistent. */
export const whatsappMessages = {
  general: "Hi Normlee Investments, I'm interested in your services. Please help me with a quote.",
  paving: "Hi Normlee Investments, I'm interested in paving services. Please provide a quote.",
  materials: "Hi Normlee Investments, I need help choosing materials for my project.",
  question: "Hi Normlee Investments, I have a question.",
} as const;

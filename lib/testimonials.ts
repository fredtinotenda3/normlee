/**
 * Customer testimonials.
 *
 * IMPORTANT: this list is intentionally EMPTY. Do not invent customers, quotes,
 * ratings or endorsements. Add an entry only when a real customer has given
 * written permission for their words (and name, if shown) to be published.
 *
 * TODO(owner): collect genuine feedback, then add entries here. Never add
 * ratings to structured data unless they come from a verifiable review source.
 */
export interface Testimonial {
  quote: string;
  /** Name exactly as the customer approved it. */
  name: string;
  /** Optional: customer's role or company, only if they approved showing it. */
  detail?: string;
  /** What the feedback relates to, e.g. "Material supply". */
  service?: string;
  /** ISO date the feedback was received. */
  date?: string;
}

export const testimonials: Testimonial[] = [];

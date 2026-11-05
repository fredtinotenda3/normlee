/**
 * Primary site navigation. Shared by the header, the footer and the sitemap so
 * every public route is linked from one place and none can be orphaned.
 */
export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

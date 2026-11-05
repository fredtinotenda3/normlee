import Link from "next/link";
import { ArrowRight, Building, FolderOpen, BookOpen } from "lucide-react";

const links = [
  {
    icon: Building,
    title: "About Normlee",
    text: "Who we are, what we supply and how an enquiry works.",
    href: "/about",
  },
  {
    icon: FolderOpen,
    title: "Projects",
    text: "Our project gallery, published as verified photographs become available.",
    href: "/projects",
  },
  {
    icon: BookOpen,
    title: "Guides & Advice",
    text: "Plain-language guides on aggregates, sand, crusher run, estimating and delivery.",
    href: "/blog",
  },
];

/** Internal links from the homepage to the new corporate pages. */
export default function ExploreLinks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary-strong font-semibold text-sm uppercase tracking-widest mb-2">Learn More</p>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-secondary">Get to Know Normlee</h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon aria-hidden="true" className="w-6 h-6 text-primary-strong" />
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{item.text}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-primary-strong font-semibold text-sm group-hover:gap-3 transition-all">
                  Read more <ArrowRight size={16} aria-hidden="true" />
                  <span className="sr-only"> about {item.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import type { LucideIcon } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import type { Crumb } from "@/lib/structuredData";
import PavingPattern from "@/components/shared/PavingPattern";

interface PageHeaderProps {
  eyebrow: string;
  icon?: LucideIcon;
  title: string;
  description?: string;
  /** Breadcrumb trail after "Home"; the last item is this page. */
  crumbs?: Crumb[];
}

/** Dark page banner used at the top of the inner pages. Renders the page's single h1. */
export default function PageHeader({ eyebrow, icon: Icon, title, description, crumbs }: PageHeaderProps) {
  return (
    <section className="relative flex items-end overflow-hidden bg-gray-900 pt-20 pb-12">
      <div className="absolute inset-0 bg-linear-to-br from-gray-800 via-gray-900 to-black" aria-hidden="true" />
      <PavingPattern />
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" aria-hidden="true" />
      <div className="container mx-auto px-6 relative z-10">
        {crumbs && <Breadcrumbs crumbs={crumbs} />}
        <p className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase mb-4">
          {Icon && <Icon size={14} aria-hidden="true" />}
          {eyebrow}
        </p>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-3">{title}</h1>
        {description && <p className="text-gray-200 text-lg max-w-2xl">{description}</p>}
      </div>
    </section>
  );
}

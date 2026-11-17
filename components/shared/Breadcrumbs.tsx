import Link from "next/link";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbJsonLd, type Crumb } from "@/lib/structuredData";

/**
 * Visible breadcrumb trail plus matching BreadcrumbList JSON-LD (the markup always mirrors what is
 * on screen). `crumbs` lists the trail AFTER "Home"; the last item is the current page.
 */
export default function Breadcrumbs({ crumbs, className = "mb-4" }: { crumbs: Crumb[]; className?: string }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <nav aria-label="Breadcrumb" className={`${className} text-sm text-gray-300`}>
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-primary-light">
              Home
            </Link>
          </li>
          {crumbs.map((crumb, i) => {
            const last = i === crumbs.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                {last ? (
                  <span aria-current="page">{crumb.name}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-primary-light">
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; href: string };

/**
 * Breadcrumb trail with BreadcrumbList schema. "Home" is added automatically;
 * pass the remaining crumbs, ending with the current page. Not used on Home.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-white">
      <JsonLd data={buildBreadcrumbSchema(trail)} />
      <ol className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-1 px-4 py-3 text-base text-ink-muted sm:px-6">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1">
              {isLast ? (
                <span aria-current="page" className="font-semibold text-ink">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link href={crumb.href} className="text-primary hover:underline">
                    {crumb.name}
                  </Link>
                  <ChevronRight aria-hidden className="size-4" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

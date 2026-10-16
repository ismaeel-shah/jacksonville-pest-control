import { MapPin } from "lucide-react";
import Link from "next/link";
import { Section, SectionHeading, type SectionTone } from "@/components/ui/Section";
import type { AreaContent } from "@/content/types";
import { STATIC_ROUTES, areaHref } from "@/lib/routes";

/**
 * "Service areas" on service pages, "Nearby areas" on area pages.
 * Each area can carry its own short line; pass only published areas.
 */
export function RelatedAreas({
  title,
  intro,
  areas,
  tone = "surface",
  id = "related-areas",
}: {
  title: string;
  intro?: string;
  areas: (Pick<AreaContent, "slug" | "name"> & { note?: string })[];
  tone?: SectionTone;
  id?: string;
}) {
  if (areas.length === 0) return null;

  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      <SectionHeading id={`${id}-heading`} title={title} intro={intro} tone={tone} />
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {areas.map((area) => (
          <li key={area.slug}>
            <Link
              href={areaHref(area.slug)}
              className="flex h-full items-start gap-3 rounded-xl border border-line bg-white p-4 hover:border-primary"
            >
              <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-primary" />
              <span>
                <span className="block font-bold text-secondary">Pest control in {area.name}</span>
                {area.note && <span className="mt-1 block text-base text-ink-muted">{area.note}</span>}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-6">
        <Link href={STATIC_ROUTES.serviceAreas} className="font-bold text-primary hover:underline">
          View all service areas →
        </Link>
      </p>
    </Section>
  );
}

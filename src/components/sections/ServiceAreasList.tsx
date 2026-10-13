import { MapPin } from "lucide-react";
import Link from "next/link";
import { Section, SectionHeading, type SectionTone } from "@/components/ui/Section";
import type { AreaContent } from "@/content/types";
import { STATIC_ROUTES, areaHref } from "@/lib/routes";

type AreaLink = Pick<AreaContent, "slug" | "name">;

/** Published areas as link chips, plus a link to the Service Areas hub. */
export function ServiceAreasList({
  title,
  intro,
  areas,
  tone = "white",
  id = "service-areas",
}: {
  title: string;
  intro?: string;
  areas: AreaLink[];
  tone?: SectionTone;
  id?: string;
}) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      <SectionHeading id={`${id}-heading`} title={title} intro={intro} tone={tone} />
      {areas.length > 0 && (
        <ul className="flex flex-wrap gap-3">
          {areas.map((area) => (
            <li key={area.slug}>
              <Link
                href={areaHref(area.slug)}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-white px-5 font-semibold text-secondary hover:border-primary hover:text-primary"
              >
                <MapPin aria-hidden className="size-4 text-primary" />
                {area.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-8">
        <Link href={STATIC_ROUTES.serviceAreas} className="font-bold text-primary hover:underline">
          See all the areas we serve →
        </Link>
      </p>
    </Section>
  );
}

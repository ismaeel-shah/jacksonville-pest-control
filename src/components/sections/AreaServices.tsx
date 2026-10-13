import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section, SectionHeading, type SectionTone } from "@/components/ui/Section";
import { ICONS } from "@/lib/icons";
import { getService } from "@/lib/content";
import { serviceHref } from "@/lib/routes";

/** Services popular in one area, each with an area-specific reason. Unpublished services are skipped. */
export function AreaServices({
  title,
  items,
  tone = "white",
  id = "popular-services",
}: {
  title: string;
  items: { slug: string; reason: string }[];
  tone?: SectionTone;
  id?: string;
}) {
  const rows = items
    .map((item) => ({ ...item, service: getService(item.slug) }))
    .filter((row) => row.service !== undefined);
  if (rows.length === 0) return null;

  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      <SectionHeading id={`${id}-heading`} title={title} tone={tone} />
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {rows.map(({ slug, reason, service }) => {
          const Icon = ICONS[service!.icon];
          return (
            <li key={slug}>
              <Link
                href={serviceHref(slug)}
                className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-sm hover:shadow-md"
              >
                <Icon aria-hidden className="size-7 text-primary" />
                <h3 className="mt-3 text-xl font-bold text-secondary group-hover:text-primary">{service!.name}</h3>
                <p className="mt-2 flex-1 text-base text-ink-muted">{reason}</p>
                <span className="mt-4 flex items-center gap-1 font-semibold text-primary">
                  Learn more <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

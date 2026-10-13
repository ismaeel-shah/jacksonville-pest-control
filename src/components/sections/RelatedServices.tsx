import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section, SectionHeading, type SectionTone } from "@/components/ui/Section";
import { ICONS } from "@/lib/icons";
import { serviceHref } from "@/lib/routes";
import type { ServiceCard } from "./ServicesGrid";

/** 2-3 related service links at the end of a page. Pass only published services. */
export function RelatedServices({
  title = "Related Services",
  services,
  tone = "white",
  id = "related-services",
}: {
  title?: string;
  services: ServiceCard[];
  tone?: SectionTone;
  id?: string;
}) {
  if (services.length === 0) return null;

  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      <SectionHeading id={`${id}-heading`} title={title} tone={tone} />
      <ul className="grid gap-4 md:grid-cols-3">
        {services.map((service) => {
          const Icon = ICONS[service.icon];
          return (
            <li key={service.slug}>
              <Link
                href={serviceHref(service.slug)}
                className="group flex h-full items-start gap-4 rounded-xl border border-line bg-white p-5 hover:border-primary"
              >
                <Icon aria-hidden className="mt-1 size-6 shrink-0 text-primary" />
                <span>
                  <span className="flex items-center gap-1 text-lg font-bold text-secondary group-hover:text-primary">
                    {service.name}
                    <ArrowRight aria-hidden className="size-4" />
                  </span>
                  <span className="mt-1 block text-base text-ink-muted">{service.cardDescription}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

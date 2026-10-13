import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section, SectionHeading, type SectionTone } from "@/components/ui/Section";
import type { ServiceContent } from "@/content/types";
import { ICONS } from "@/lib/icons";
import { serviceHref } from "@/lib/routes";

export type ServiceCard = Pick<ServiceContent, "slug" | "name" | "cardDescription" | "icon">;

/** Grid of service cards: icon, name, one-sentence description, link. Pass only published services. */
export function ServicesGrid({
  title,
  intro,
  services,
  footerLinks = [],
  tone = "white",
  id = "services",
}: {
  title: string;
  intro?: string;
  services: ServiceCard[];
  footerLinks?: { label: string; href: string }[];
  tone?: SectionTone;
  id?: string;
}) {
  if (services.length === 0) return null;

  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      <SectionHeading id={`${id}-heading`} title={title} intro={intro} tone={tone} />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = ICONS[service.icon];
          return (
            <li key={service.slug}>
              <Link
                href={serviceHref(service.slug)}
                className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary-soft text-primary">
                  <Icon aria-hidden className="size-6" />
                </span>
                <h3 className="text-xl font-bold text-secondary group-hover:text-primary">{service.name}</h3>
                <p className="mt-2 flex-1 text-base text-ink-muted">{service.cardDescription}</p>
                <span className="mt-4 flex items-center gap-1 font-semibold text-primary">
                  Learn more <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      {footerLinks.length > 0 && (
        <p className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-bold text-primary hover:underline">
              {link.label} →
            </Link>
          ))}
        </p>
      )}
    </Section>
  );
}

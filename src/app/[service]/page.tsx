import { Building2, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Hero } from "@/components/sections/Hero";
import { PestSigns } from "@/components/sections/PestSigns";
import { PreventionTips } from "@/components/sections/PreventionTips";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceAreasList } from "@/components/sections/ServiceAreasList";
import { TextSection } from "@/components/sections/TextSection";
import { TreatmentOptions } from "@/components/sections/TreatmentOptions";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { getPublishedAreas, getPublishedIndustries, getPublishedServices, getService, getServicesBySlugs } from "@/lib/content";
import { formatDate } from "@/lib/format";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES, industryHref, serviceHref } from "@/lib/routes";
import { buildServiceSchema } from "@/lib/schema";

// Only slugs from src/content/services are valid. Any other "/{slug}" calls notFound()
// below, because Cache Components replaces `dynamicParams = false`.
export function generateStaticParams() {
  return getPublishedServices().map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[service]">) {
  const service = getService((await params).service);
  if (!service) return {};
  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: serviceHref(service.slug),
  });
}

export default async function ServicePage({ params }: PageProps<"/[service]">) {
  const service = getService((await params).service);
  if (!service) notFound();

  const path = serviceHref(service.slug);
  const areas = getPublishedAreas();
  const related = getServicesBySlugs(service.relatedServices);
  const industries = getPublishedIndustries().filter((industry) => industry.relatedServices.includes(service.slug));
  const category = service.audience.includes("residential")
    ? { label: "residential pest control services", href: STATIC_ROUTES.residential }
    : { label: "commercial pest control services", href: STATIC_ROUTES.commercial };

  return (
    <>
      <Breadcrumbs items={[{ name: service.name, href: path }]} />
      <JsonLd
        data={buildServiceSchema({
          serviceType: service.name,
          description: service.seo.description,
          path,
          areaNames: ["Jacksonville", ...areas.map((area) => area.name)],
        })}
      />

      <Hero h1={service.hero.h1} subheadline={service.hero.subheadline} image={service.hero.image} />

      <section aria-label="Overview" className="py-12 md:py-16">
        <Container className="max-w-3xl">
          <Prose paragraphs={service.intro} className="text-xl" />
          <div className="mt-8 flex items-center gap-3 rounded-lg border border-line bg-surface p-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
              <CalendarCheck aria-hidden className="size-5" />
            </span>
            <p className="text-sm text-ink-muted">
              Updated <time dateTime={service.lastUpdated}>{formatDate(service.lastUpdated)}</time>
            </p>
          </div>
        </Container>
      </section>

      <TextSection id="local-problem" tone="surface" title={service.localProblem.heading} paragraphs={service.localProblem.body} />

      <PestSigns title={service.signs.heading} intro={service.signs.intro} signs={service.signs.items} />

      <ProcessSteps id="process" tone="surface" title={service.process.heading} intro={service.process.intro} steps={service.process.steps} />

      <TreatmentOptions
        title={service.treatmentOptions.heading}
        intro={service.treatmentOptions.intro}
        options={service.treatmentOptions.options}
      />

      <TextSection id="safety" tone="surface" title={service.safety.heading} paragraphs={service.safety.body} />

      <PreventionTips title={service.prevention.heading} tips={service.prevention.tips} tone="white" />

      {service.forBusinesses && (
        <section aria-labelledby="for-businesses-heading" className="py-12 md:py-14">
          <Container>
            <div className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6 shadow-sm md:flex-row md:items-start md:p-8">
              <Building2 aria-hidden className="size-10 shrink-0 text-primary" />
              <div>
                <h2 id="for-businesses-heading" className="text-2xl font-bold text-secondary">
                  {service.name} for Businesses
                </h2>
                <Prose paragraphs={service.forBusinesses} className="mt-3 text-ink-muted" />
                {industries.length > 0 && (
                  <p className="mt-4 text-base">
                    <span className="font-semibold text-ink">Industries covered: </span>
                    {industries.map((industry, i) => (
                      <span key={industry.slug}>
                        {i > 0 && ", "}
                        <Link href={industryHref(industry.slug)} className="font-semibold text-primary underline-offset-2 hover:underline">
                          {industry.name}
                        </Link>
                      </span>
                    ))}
                  </p>
                )}
                <Link href={STATIC_ROUTES.commercial} className="mt-4 inline-block font-bold text-primary hover:underline">
                  Explore commercial pest control →
                </Link>
              </div>
            </div>
          </Container>
        </section>
      )}

      <FAQSection title={`${service.name} FAQ`} faqs={service.faqs} tone="surface" />

      <RelatedServices services={related} />
      <p className="-mt-8 pb-12 text-center">
        <Link href={category.href} className="font-bold text-primary hover:underline">
          See all {category.label} →
        </Link>
      </p>

      <ServiceAreasList
        id="related-areas"
        tone="surface"
        title={`${service.name} Across Northeast Florida`}
        intro={`Call to reach a local pro for ${service.name.toLowerCase()} in Jacksonville and these nearby communities.`}
        areas={areas}
      />

      <CTASection title={`Get Help With ${service.name} Today`} />
    </>
  );
}

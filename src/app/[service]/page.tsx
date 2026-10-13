import { BadgeCheck, Building2, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CostFactors } from "@/components/sections/CostFactors";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Hero } from "@/components/sections/Hero";
import { PestSigns } from "@/components/sections/PestSigns";
import { PreventionTips } from "@/components/sections/PreventionTips";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServiceAreasList } from "@/components/sections/ServiceAreasList";
import { TextSection } from "@/components/sections/TextSection";
import { TreatmentOptions } from "@/components/sections/TreatmentOptions";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { siteConfig } from "@/config/site";
import { reviews } from "@/content/reviews";
import { previewable } from "@/lib/config";
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
  const serviceReviews = reviews.filter((review) => review.service === service.slug);
  const industries = getPublishedIndustries().filter((industry) => industry.relatedServices.includes(service.slug));
  const reviewer = previewable(siteConfig.contentReviewer.name);
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
          <div className="mt-8 flex items-start gap-3 rounded-lg border border-line bg-surface p-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
              {reviewer ? <BadgeCheck aria-hidden className="size-5" /> : <CalendarCheck aria-hidden className="size-5" />}
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              {reviewer && (
                <p className="leading-snug">
                  <span className="block text-sm text-ink-muted">Reviewed by</span>
                  <span className="block font-semibold text-ink">{reviewer}</span>
                  <span className="block text-sm text-ink-muted">{siteConfig.contentReviewer.role}</span>
                </p>
              )}
              <p
                className={`flex items-center gap-1.5 text-sm text-ink-muted ${reviewer ? "border-t border-line pt-2 sm:border-0 sm:pt-0" : ""}`}
              >
                {reviewer && <CalendarCheck aria-hidden className="size-4 shrink-0" />}
                <span>
                  Updated <time dateTime={service.lastUpdated}>{formatDate(service.lastUpdated)}</time>
                </span>
              </p>
            </div>
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

      <CostFactors serviceName={service.name} factors={service.costFactors} tone="white" />

      <PreventionTips title={service.prevention.heading} tips={service.prevention.tips} />

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
                    <span className="font-semibold text-ink">Industries we serve: </span>
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

      <ReviewsSection title={`What Customers Say About Our ${service.name}`} reviews={serviceReviews} hideWhenEmpty />

      <FAQSection title={`${service.name} FAQ`} faqs={service.faqs} tone="surface" />

      <RelatedServices services={related} />
      <p className="-mt-8 pb-12 text-center">
        <Link href={category.href} className="font-bold text-primary hover:underline">
          See all our {category.label} →
        </Link>
      </p>

      <ServiceAreasList
        id="related-areas"
        tone="surface"
        title={`${service.name} Across Northeast Florida`}
        intro={`We provide ${service.name.toLowerCase()} in Jacksonville and these nearby communities.`}
        areas={areas}
      />

      <CTASection title={`Get Help With ${service.name} Today`} />
    </>
  );
}

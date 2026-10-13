import { MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AreaPests } from "@/components/sections/AreaPests";
import { AreaServices } from "@/components/sections/AreaServices";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Hero } from "@/components/sections/Hero";
import { RelatedAreas } from "@/components/sections/RelatedAreas";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { TextSection } from "@/components/sections/TextSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { Section, SectionHeading } from "@/components/ui/Section";
import { reviews } from "@/content/reviews";
import { getArea, getAreasBySlugs, getPublishedAreas } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES, areaHref } from "@/lib/routes";
import { buildServiceSchema } from "@/lib/schema";

// Only slugs from src/content/areas are valid; anything else calls notFound() below.
export function generateStaticParams() {
  return getPublishedAreas().map((area) => ({ area: area.slug }));
}

export async function generateMetadata({ params }: PageProps<"/service-areas/[area]">) {
  const area = getArea((await params).area);
  if (!area) return {};
  return buildMetadata({ title: area.seo.title, description: area.seo.description, path: areaHref(area.slug) });
}

export default async function AreaPage({ params }: PageProps<"/service-areas/[area]">) {
  const area = getArea((await params).area);
  if (!area) notFound();

  const path = areaHref(area.slug);
  const nearby = getAreasBySlugs(area.nearbyAreas);
  const areaReviews = reviews.filter((review) => review.area === area.slug || review.area === area.name);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Service Areas", href: STATIC_ROUTES.serviceAreas },
          { name: area.name, href: path },
        ]}
      />
      <JsonLd
        data={buildServiceSchema({
          serviceType: "Pest Control",
          description: area.seo.description,
          path,
          areaNames: [area.name],
        })}
      />

      <Hero h1={area.hero.h1} subheadline={area.hero.subheadline} image={area.hero.image} />

      <section aria-label={`About pest control in ${area.name}`} className="py-12 md:py-16">
        <Container className="max-w-3xl">
          <Prose paragraphs={area.intro} className="text-xl" />
        </Container>
      </section>

      <AreaPests title={area.commonPests.heading} intro={area.commonPests.intro} pests={area.commonPests.pests} />

      <TextSection id="homes" title={area.homes.heading} paragraphs={area.homes.body} />

      <AreaServices title={`Popular Pest Control Services in ${area.name}`} items={area.popularServices} tone="surface" />

      {/* OWNER: verify every neighborhood name and ZIP code before launch */}
      <Section id="neighborhoods" labelledBy="neighborhoods-heading">
        <SectionHeading id="neighborhoods-heading" title={`Neighborhoods & ZIP Codes We Serve in ${area.name}`} />
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-secondary">Neighborhoods</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {area.neighborhoods.map((name) => (
                <li key={name} className="flex items-center gap-2">
                  <MapPin aria-hidden className="size-4 shrink-0 text-primary" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-secondary">ZIP codes</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {area.zipCodes.map((zip) => (
                <li key={zip} className="rounded-full border border-line bg-surface px-4 py-1 font-semibold">
                  {zip}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 text-ink-muted">
          Live nearby but don&apos;t see your neighborhood? Call us with your ZIP code and we&apos;ll confirm we cover it.
        </p>
      </Section>

      <ReviewsSection title={`Reviews From ${area.name} Customers`} reviews={areaReviews} hideWhenEmpty />

      <FAQSection title={`Pest Control in ${area.name}: Common Questions`} faqs={area.faqs} tone="surface" />

      <RelatedAreas
        title="Nearby Areas We Serve"
        areas={nearby}
        tone="white"
      />

      <CTASection title={`Schedule Your Free Inspection in ${area.name}`} />
    </>
  );
}

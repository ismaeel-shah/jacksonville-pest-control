import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Hero } from "@/components/sections/Hero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { TextSection } from "@/components/sections/TextSection";
import { TreatmentOptions } from "@/components/sections/TreatmentOptions";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { getIndustry, getPublishedAreas, getPublishedIndustries, getServicesBySlugs } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES, industryHref } from "@/lib/routes";
import { buildServiceSchema } from "@/lib/schema";

// Only slugs from src/content/industries are valid; anything else calls notFound() below.
export function generateStaticParams() {
  return getPublishedIndustries().map((industry) => ({ industry: industry.slug }));
}

export async function generateMetadata({ params }: PageProps<"/commercial/[industry]">) {
  const industry = getIndustry((await params).industry);
  if (!industry) return {};
  return buildMetadata({
    title: industry.seo.title,
    description: industry.seo.description,
    path: industryHref(industry.slug),
  });
}

export default async function IndustryPage({ params }: PageProps<"/commercial/[industry]">) {
  const industry = getIndustry((await params).industry);
  if (!industry) notFound();

  const path = industryHref(industry.slug);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Commercial Pest Control", href: STATIC_ROUTES.commercial },
          { name: industry.name, href: path },
        ]}
      />
      <JsonLd
        data={buildServiceSchema({
          serviceType: `Commercial Pest Control for ${industry.name}`,
          description: industry.seo.description,
          path,
          areaNames: ["Jacksonville", ...getPublishedAreas().map((area) => area.name)],
        })}
      />

      <Hero h1={industry.hero.h1} subheadline={industry.hero.subheadline} image={industry.hero.image} />

      <section aria-label="Overview" className="py-12 md:py-16">
        <Container className="max-w-3xl">
          <Prose paragraphs={industry.intro} className="text-xl" />
        </Container>
      </section>

      <TreatmentOptions id="common-pests" title={industry.commonPests.heading} options={industry.commonPests.items} />

      {industry.sections.map((section, index) => (
        <TextSection
          key={section.heading}
          id={`section-${index + 1}`}
          tone={index % 2 === 0 ? "surface" : "white"}
          title={section.heading}
          paragraphs={section.body ?? []}
          bullets={section.bullets}
        />
      ))}

      <ProcessSteps
        id="process"
        tone={industry.sections.length % 2 === 0 ? "surface" : "white"}
        title={industry.process.heading}
        steps={industry.process.steps}
      />

      <FAQSection title={`${industry.name} Pest Control FAQ`} faqs={industry.faqs} tone="surface" />

      <RelatedServices title="Services We Provide for Your Business" services={getServicesBySlugs(industry.relatedServices)} />

      <CTASection
        title="Request a Free Commercial Inspection"
        text="Tell us about your business and we'll schedule a site inspection at a time that works around your hours. You'll get a written plan and an upfront quote."
        defaultPropertyType="commercial"
      />
    </>
  );
}

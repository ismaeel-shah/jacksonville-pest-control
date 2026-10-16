import { ArrowRight, Briefcase, Building2, UtensilsCrossed, Warehouse } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Hero } from "@/components/sections/Hero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TextSection } from "@/components/sections/TextSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { InlineProse } from "@/components/ui/Prose";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartLink } from "@/components/ui/SmartLink";
import type { FAQ } from "@/content/types";
import { getPublishedServices } from "@/lib/content";
import { isLinkable } from "@/lib/links";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES, industryHref } from "@/lib/routes";
import { buildServiceSchema } from "@/lib/schema";

const DESCRIPTION =
  "Commercial pest control in Jacksonville, FL for restaurants, apartments, warehouses, and offices. Call to talk with a local commercial pest control pro today.";

export const metadata = buildMetadata({
  title: "Commercial Pest Control in Jacksonville, FL",
  description: DESCRIPTION,
  path: STATIC_ROUTES.commercial,
});

/** Industry cards link only once each industry page is published. */
const INDUSTRIES = [
  {
    slug: "restaurants",
    icon: UtensilsCrossed,
    title: "Restaurants & Food Businesses",
    text: "Roach, rodent, and fly control for kitchens, prep areas, and dining rooms, plus the service records health inspections ask for.",
  },
  {
    slug: "property-management",
    icon: Building2,
    title: "Property Management & Apartments",
    text: "Scheduled programs across units and common areas, unit turnover treatments, and a plan for handling tenant reports.",
  },
  {
    slug: "warehouses",
    icon: Warehouse,
    title: "Warehouses",
    text: "Perimeter rodent programs, stored-product pest monitoring, and loading dock protection, with documentation for audits.",
  },
  {
    slug: "offices",
    icon: Briefcase,
    title: "Offices",
    text: "After-hours service for break rooms, restrooms, and shared spaces, so pest control doesn't interrupt the workday.",
  },
];

const COMMERCIAL_FAQS: FAQ[] = [
  {
    question: "Can pest control be done after business hours?",
    answer:
      "Often, yes. Many commercial pest control providers offer early-morning, evening, or weekend visits so treatments happen when customers and employees aren't around. When you call, mention your operating hours and ask the provider what scheduling options they have for your business.",
  },
  {
    question: "Will I get documentation for health inspections and audits?",
    answer:
      "Most commercial providers leave a service report after each visit that shows what was inspected, what was found, what was applied, and where. Product labels and safety data sheets are usually available on request. Ask the provider you speak with what records they provide, since many restaurants, food warehouses, and property managers keep these on file for inspectors and auditors.",
  },
  {
    question: "What is Integrated Pest Management (IPM)?",
    answer:
      "IPM is a prevention-first approach. Instead of spraying on a schedule no matter what, the provider inspects, monitors pest activity, addresses the conditions that attract pests, seals entry points, and uses targeted treatments only where needed. It's the standard many food safety programs and commercial property managers expect.",
  },
  {
    question: "How often should a commercial property be serviced?",
    answer:
      "It depends on the business. Restaurants and food handlers usually need monthly or more frequent service because of constant food and moisture. Offices and retail spaces often do well with monthly or quarterly visits. Warehouses vary with their contents and size. A provider can recommend a schedule after looking at your property.",
  },
  {
    question: "What if my business has several locations?",
    answer:
      "If you manage several properties or locations around Jacksonville, ask the provider whether they can set up one coordinated program with a single point of contact and reports organized by location. That makes it easier to keep every property on the same plan and every record in one place.",
  },
];

export default function CommercialPage() {
  const services = getPublishedServices().filter((service) => service.audience.includes("commercial"));

  return (
    <>
      <Breadcrumbs items={[{ name: "Commercial Pest Control", href: STATIC_ROUTES.commercial }]} />
      <JsonLd
        data={buildServiceSchema({
          serviceType: "Commercial Pest Control",
          description: DESCRIPTION,
          path: STATIC_ROUTES.commercial,
          areaNames: ["Jacksonville"],
        })}
      />

      <Hero
        h1="Commercial Pest Control in Jacksonville, FL"
        subheadline="Discreet, documented pest control that protects your customers, your staff, and your reputation. One call connects you with a local commercial pro."
        image={{ file: "technician-commercial-kitchen-inspection.webp", alt: "Technician inspecting under equipment in a commercial kitchen" }}
      />

      <TextSection
        id="intro"
        title="Pest Control Built Around Your Business"
        paragraphs={[
          "One roach on a dining room wall or a rat by the loading dock can do real damage to a business. It can mean a failed health inspection, unhappy customers, or lost inventory. For businesses, pest control isn't just about getting rid of bugs. It's about protecting the reputation you've worked hard to build.",
          "Local commercial pest control providers work with restaurants, apartment communities, warehouses, offices, and retail spaces across Jacksonville. A good commercial program starts with a close look at your property and a conversation about how your business runs, so the plan fits your hours, your building, and your industry's rules.",
        ]}
      />

      <TextSection
        id="scheduling"
        tone="surface"
        title="Discreet Scheduling That Works Around You"
        paragraphs={[
          "Your customers should never see a pest, and they shouldn't see a pest control technician spraying next to their table either. Many commercial providers can schedule service before opening, after closing, or on weekends so treatments happen when your space is empty.",
          "When you call, tell the provider your hours and any areas that need extra care, like kitchens, stockrooms, or tenant units. If an urgent problem comes up during business hours, ask about the least disruptive way to handle it.",
        ]}
      />

      <TextSection
        id="documentation"
        title="Documentation for Health Inspections and Audits"
        image={{ file: "technician-service-report-tablet.webp", alt: "Technician reviewing a digital service report with a business manager" }}
        paragraphs={[
          "Health inspectors, food safety auditors, and corporate managers all want proof that pests are under control. Commercial providers typically leave a service report after each visit that shows what was inspected, what was found, any products applied, and their recommendations.",
          "Over time, those reports become a record of your pest control program. They show trends, highlight problem areas, and demonstrate to inspectors that you're taking prevention seriously.",
        ]}
        bullets={[
          "Service reports after every visit",
          "Notes on pest activity and recommended fixes",
          "Product labels and safety data sheets on request",
          "Trap and monitoring device maps for larger facilities",
        ]}
      />

      <TextSection
        id="ipm"
        tone="surface"
        title="Integrated Pest Management (IPM)"
        paragraphs={[
          "Integrated Pest Management is the prevention-first approach many food safety programs and commercial property managers expect. Rather than spraying on a fixed schedule whether there's a problem or not, an IPM program inspects, monitors, and fixes the conditions that let pests in.",
          "That means looking at sanitation, storage, door seals, drains, and landscaping, along with treatment. When products are needed, IPM favors targeted options like baits, insect growth regulators, and crack-and-crevice treatments. The result is better control with fewer products, which is better for your staff, customers, and property. Ask the provider you speak with how they use IPM at properties like yours.",
        ]}
      />

      <Section id="industries" labelledBy="industries-heading">
        <SectionHeading
          id="industries-heading"
          title="Industries Covered"
          intro="Every industry has different pests, risks, and rules, so commercial programs are tailored to each one."
        />
        <ul className="grid gap-5 md:grid-cols-2">
          {INDUSTRIES.map(({ slug, icon: Icon, title, text }) => (
            <li key={slug} className="rounded-xl border border-line bg-white p-6 shadow-sm">
              <Icon aria-hidden className="size-8 text-primary" />
              <h3 className="mt-3 text-xl font-bold text-secondary">
                <SmartLink href={industryHref(slug)} className="hover:text-primary hover:underline">
                  {title}
                </SmartLink>
              </h3>
              <p className="mt-2 text-ink-muted">{text}</p>
              {isLinkable(industryHref(slug)) && (
                <Link href={industryHref(slug)} className="mt-4 inline-flex items-center gap-1 font-semibold text-primary">
                  Learn more about {title.toLowerCase()} <ArrowRight aria-hidden className="size-4" />
                </Link>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-ink-muted">
          <InlineProse text="Commercial pest control also covers retail stores, medical and dental offices, churches, schools, and HOA common areas. If you have a commercial property, [call to talk with a local pro about a custom program](/contact)." />
        </p>
      </Section>

      <ProcessSteps
        id="commercial-process"
        tone="surface"
        title="How a Commercial Program Is Set Up"
        steps={[
          { title: "Site inspection", description: "The provider inspects your property, asks about past pest issues, and learns how your business operates." },
          { title: "Written plan", description: "You get a clear plan with service frequency, treatment methods, and what will be monitored." },
          { title: "Scheduled service", description: "Service happens on a schedule that fits your hours, with every visit documented." },
          { title: "Ongoing adjustments", description: "Activity is tracked over time and the plan is adjusted as conditions change." },
        ]}
      />

      <ServicesGrid
        id="commercial-services"
        title="Commercial Pest Control Services"
        intro="These services are available for businesses of every size."
        services={services}
      />

      <FAQSection title="Commercial Pest Control FAQ" faqs={COMMERCIAL_FAQS} />

      <CTASection
        title="Talk With a Local Commercial Pest Control Pro"
        text="One call connects you with a local provider who handles commercial properties. Describe your business, your hours, and the pests you're seeing, and ask about setting up a program."
      />
    </>
  );
}

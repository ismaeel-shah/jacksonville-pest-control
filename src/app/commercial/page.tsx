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
  "Commercial pest control in Jacksonville, FL for restaurants, apartments, warehouses, and offices. Discreet scheduling and service records for inspections.";

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
    text: "Roach, rodent, and fly control for kitchens, prep areas, and dining rooms, with records ready for your health inspection.",
  },
  {
    slug: "property-management",
    icon: Building2,
    title: "Property Management & Apartments",
    text: "Scheduled programs across units and common areas, unit turnover treatments, and fast response to tenant reports.",
  },
  {
    slug: "warehouses",
    icon: Warehouse,
    title: "Warehouses",
    text: "Perimeter rodent programs, stored-product pest monitoring, and loading dock protection with audit-ready documentation.",
  },
  {
    slug: "offices",
    icon: Briefcase,
    title: "Offices",
    text: "Quiet, after-hours service for break rooms, restrooms, and shared spaces, so your team never notices we were there.",
  },
];

const COMMERCIAL_FAQS: FAQ[] = [
  {
    question: "Can you service our business after hours?",
    answer:
      "Yes. We regularly schedule early-morning, evening, and weekend visits so treatments happen when customers and employees aren't around. Tell us your operating hours and we'll build a schedule that keeps your business running normally. For urgent problems, we'll work with you to find the least disruptive time.", // OWNER: confirm after-hours availability
  },
  {
    question: "Do you provide documentation for health inspections and audits?",
    answer:
      "Yes. After every visit you receive a service report showing what we inspected, what we found, what we applied, and where. Product labels and safety data sheets are available on request. Many restaurants, food warehouses, and property managers keep these records in a binder or digital file for inspectors and auditors.",
  },
  {
    question: "What is Integrated Pest Management (IPM)?",
    answer:
      "IPM is a prevention-first approach. Instead of spraying on a schedule no matter what, we inspect, monitor pest activity, fix the conditions that attract pests, seal entry points, and use targeted treatments only where needed. It's the standard many food safety programs and commercial property managers expect.",
  },
  {
    question: "How often should a commercial property be serviced?",
    answer:
      "It depends on the business. Restaurants and food handlers usually need monthly or more frequent service because of constant food and moisture. Offices and retail spaces often do well with monthly or quarterly visits. Warehouses vary with their contents and size. We'll recommend a schedule after inspecting your property.",
  },
  {
    question: "Do you work with businesses that have several locations?",
    answer:
      "Yes. If you manage several properties or locations around Jacksonville, we can set up one coordinated program with a single point of contact, consistent service across sites, and reports organized by location. That makes it easier to keep every property protected and every record in one place.",
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
        subheadline="Discreet, documented pest control that protects your customers, your staff, and your reputation."
        image={{ file: "technician-commercial-kitchen-inspection.webp", alt: "Technician inspecting under equipment in a commercial kitchen" }}
      />

      <TextSection
        id="intro"
        title="Pest Control Built Around Your Business"
        paragraphs={[
          "One roach on a dining room wall or a rat by the loading dock can cost you far more than a pest control visit. It can mean a failed inspection, a bad online review, or lost inventory. For businesses, pest control isn't just about getting rid of bugs. It's about protecting the reputation you've worked hard to build.",
          "We work with restaurants, apartment communities, warehouses, offices, and retail spaces across Jacksonville. Every commercial program starts with a detailed inspection of your property and a conversation about how your business runs, so the plan fits your hours, your building, and your industry's rules.",
        ]}
      />

      <TextSection
        id="scheduling"
        tone="surface"
        title="Discreet Scheduling That Works Around You"
        paragraphs={[
          "Your customers should never see a pest, and they shouldn't see a pest control technician spraying next to their table either. We schedule service before opening, after closing, or on weekends so treatments happen when your space is empty.", // OWNER: confirm after-hours availability
          "Our technicians arrive in uniform, work quietly, and respect your space and your staff's time. If an urgent problem comes up during business hours, we'll work with you on the least disruptive way to handle it.",
        ]}
      />

      <TextSection
        id="documentation"
        title="Documentation for Health Inspections and Audits"
        image={{ file: "technician-service-report-tablet.webp", alt: "Technician reviewing a digital service report with a business manager" }}
        paragraphs={[
          "Health inspectors, food safety auditors, and corporate managers all want proof that pests are under control. After every visit, you'll get a clear service report that shows what we inspected, what we found, any products applied, and our recommendations.",
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
          "We use Integrated Pest Management, the prevention-first approach many food safety programs and commercial property managers expect. Rather than spraying on a fixed schedule whether there's a problem or not, we inspect, monitor, and fix the conditions that let pests in.",
          "That means looking at sanitation, storage, door seals, drains, and landscaping, along with treatment. When products are needed, we choose targeted options like baits, insect growth regulators, and crack-and-crevice treatments. The result is better control with fewer products, which is better for your staff, customers, and property.",
        ]}
      />

      <Section id="industries" labelledBy="industries-heading">
        <SectionHeading
          id="industries-heading"
          title="Industries We Serve"
          intro="Every industry has different pests, risks, and rules. Our programs are tailored to each one."
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
          <InlineProse text="We also serve retail stores, medical and dental offices, churches, schools, and HOA common areas. If you have a commercial property, [ask us about a custom program](/contact)." />
        </p>
      </Section>

      <ProcessSteps
        id="commercial-process"
        tone="surface"
        title="How We Set Up Your Commercial Program"
        steps={[
          { title: "Site inspection", description: "We inspect your property, review any past pest issues, and learn how your business operates." },
          { title: "Written plan", description: "You get a clear plan with service frequency, treatment methods, and what we'll monitor." },
          { title: "Scheduled service", description: "We service on a schedule that fits your hours and document every visit." },
          { title: "Ongoing review", description: "We track activity over time and adjust the plan so problems stay solved." },
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
        title="Request a Commercial Pest Control Quote"
        text="Tell us about your business and we'll schedule a free site inspection. You'll get a written plan and an upfront quote with no obligation."
        defaultPropertyType="commercial"
      />
    </>
  );
}

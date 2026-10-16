import { ArrowRight, Building2, House } from "lucide-react";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Hero } from "@/components/sections/Hero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceAreasList } from "@/components/sections/ServiceAreasList";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TextSection } from "@/components/sections/TextSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { callBenefits, serviceProcess } from "@/content/promises";
import type { FAQ } from "@/content/types";
import { getPublishedAreas, getServicesBySlugs } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Pest Control Jacksonville FL | Call a Local Pro",
  description:
    "Pest control help in Jacksonville, FL for termites, roaches, rodents, mosquitoes and more. One call connects you with a local pest control pro. Call today.",
  path: STATIC_ROUTES.home,
});

/** The most requested services, in the order shown on the home page. */
const FEATURED_SERVICES = [
  "general-pest-control",
  "termite-control",
  "termite-inspection",
  "rodent-control",
  "mosquito-control",
  "cockroach-control",
  "ant-control",
  "bed-bug-treatment",
  "wildlife-removal",
];

const HOME_FAQS: FAQ[] = [
  {
    question: "What happens when I call?",
    answer:
      "Your call connects you with an independent pest control provider who serves your part of Northeast Florida. Describe what you're seeing, where, and for how long, and ask any questions you have. If you'd like help, the provider can set up a time to inspect your home or business and explain the treatment options.",
  },
  {
    question: "Why do I keep seeing bugs even in winter?",
    answer:
      "Jacksonville rarely gets cold enough for long enough to stop pests. Termites keep feeding all year, roaches and ants stay active indoors, and roof rats move into attics when nights cool off. That's why many homeowners choose year-round protection instead of a single spray when they first notice a problem.",
  },
  {
    question: "Is a palmetto bug the same as a cockroach?",
    answer:
      "Yes. \"Palmetto bug\" is the local name for large outdoor roaches, mostly the American cockroach. They live in mulch, trees, and storm drains and often wander inside during heavy rain or extreme heat. They're different from the small German cockroach, which breeds indoors. Learn more on the [cockroach and palmetto bug control](/cockroach-control) page.",
  },
  {
    question: "Are pest control treatments safe for kids and pets?",
    answer:
      "Products registered for home use are applied according to their labels, which is what keeps them safe. The technician should tell you how long to keep kids and pets off treated areas, usually until a spray has dried. If you have a newborn, a pet with health problems, or a fish tank, mention it so the treatment plan can be adjusted.",
  },
  {
    question: "Is this site a pest control company?",
    answer:
      "No. This site is a referral service that connects callers with independent local pest control providers. The provider you speak with is responsible for the inspection, treatment, scheduling, and any agreement you make. Ask them about anything that matters to you before you decide, such as products, re-entry times, and follow-up visits.",
  },
  {
    question: "Which areas around Jacksonville can I get help in?",
    answer:
      "Calls are connected with providers who serve Jacksonville neighborhoods, the Beaches, and nearby communities in St. Johns, Clay, and Nassau counties. See the full list on the [service areas page](/service-areas), or call and share your ZIP code to find out who serves your address.",
  },
];

export default function HomePage() {
  const featured = getServicesBySlugs(FEATURED_SERVICES);
  const areas = getPublishedAreas();

  return (
    <>
      <Hero
        h1="Pest Control in Jacksonville, FL"
        subheadline="One call connects you with a local pest control pro who can find the source of the problem and explain how to treat it."
        image={{
          file: "pest-control-technician-truck-jacksonville.webp",
          alt: "Pest control technician in uniform next to a service truck outside a Jacksonville home",
        }}
      />

      <TrustBar />

      <ServicesGrid
        title="Pest Control Services for Northeast Florida Homes and Businesses"
        intro="From termites in the walls to roof rats in the attic, these are the pests Jacksonville homeowners call about most. Learn how each one is treated, then call to talk with a local pro."
        services={featured}
        footerLinks={[
          { label: "View all residential services", href: STATIC_ROUTES.residential },
          { label: "View all commercial services", href: STATIC_ROUTES.commercial },
        ]}
      />

      <Section id="audience" tone="surface" labelledBy="audience-heading">
        <SectionHeading id="audience-heading" title="Help for Your Home or Your Business" tone="surface" />
        <div className="grid gap-6 md:grid-cols-2">
          <AudienceCard
            href={STATIC_ROUTES.residential}
            icon={House}
            title="Residential Pest Control"
            text="Year-round protection, termite defense, and help with roaches, ants, rodents, and mosquitoes. Ask about options for homes with kids and pets."
            cta="Explore home services"
          />
          <AudienceCard
            href={STATIC_ROUTES.commercial}
            icon={Building2}
            title="Commercial Pest Control"
            text="Scheduled service for restaurants, apartment communities, warehouses, and offices, including the service records many inspections and audits ask for."
            cta="Explore business services"
          />
        </div>
      </Section>

      <WhyChooseUs
        title="Why Call Instead of Searching Around"
        intro="Finding pest control help shouldn't take an afternoon of phone calls."
        tone="white"
        points={callBenefits}
      />

      <TextSection
        id="local"
        tone="surface"
        title="Why Pests Are a Year-Round Problem in Jacksonville"
        image={{
          file: "jacksonville-home-humid-yard.webp",
          alt: "Shaded backyard of a Jacksonville home with oak trees and dense landscaping",
        }}
        paragraphs={[
          "Northeast Florida's warm, humid climate is great for people and even better for insects. Winters here are short and mild, so pests never get a real break. Instead of dying off in the cold, many simply slow down for a few weeks and then pick up right where they left off.",
          "Spring brings **termite swarm season**, when winged termites leave their colonies to start new ones. Swarmers inside your home are often the first sign of an infestation that has been quietly feeding for a while. Long, rainy summers then fill every low spot with standing water, which keeps mosquitoes breeding from spring well into fall.",
          "Heavy rain also pushes **palmetto bugs** and fire ants out of the ground and toward your house. Large live oaks and thick landscaping, common across Jacksonville neighborhoods, give roof rats and squirrels an easy path to the roofline. And the moisture that keeps local yards so green can soften wood and attract termites to crawl spaces and slabs.",
          "The good news: most of these problems can be prevented with regular inspections, a protective barrier around the home, and a few simple habits like fixing leaks and trimming branches away from the roof.",
        ]}
      />

      <ProcessSteps
        title="How It Works"
        intro="Whether it's a single wasp nest or a full termite treatment, getting help follows the same simple steps."
        steps={serviceProcess}
      />

      <ServiceAreasList
        title="Pest Control Help Across Jacksonville and Nearby Communities"
        intro="Calls are connected with providers serving Jacksonville neighborhoods, the Beaches, and nearby towns in St. Johns, Clay, and Nassau counties."
        areas={areas}
      />

      <FAQSection title="Common Questions About Pest Control in Jacksonville" faqs={HOME_FAQS} tone="surface" />

      <CTASection />
    </>
  );
}

function AudienceCard({
  href,
  icon: Icon,
  title,
  text,
  cta,
}: {
  href: string;
  icon: typeof House;
  title: string;
  text: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-xl border border-line bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
    >
      <Icon aria-hidden className="size-10 text-primary" />
      <h3 className="mt-4 text-2xl font-bold text-secondary group-hover:text-primary">{title}</h3>
      <p className="mt-3 flex-1 text-ink-muted">{text}</p>
      <span className="mt-6 flex items-center gap-2 font-bold text-primary">
        {cta} <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

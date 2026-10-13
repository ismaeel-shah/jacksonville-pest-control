import { ArrowRight, Building2, CalendarClock, ClipboardCheck, House, PawPrint, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Hero } from "@/components/sections/Hero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServiceAreasList } from "@/components/sections/ServiceAreasList";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TextSection } from "@/components/sections/TextSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { reviews } from "@/content/reviews";
import type { FAQ } from "@/content/types";
import { getPublishedAreas, getServicesBySlugs } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Pest Control Jacksonville FL | Free Inspection",
  description:
    "Licensed pest control in Jacksonville, FL for termites, roaches, rodents, mosquitoes and more. Free inspections and an upfront quote. Call today.",
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
    question: "Do you offer free pest inspections in Jacksonville?",
    answer:
      "Yes. We inspect your home or business for free, show you what we find, and explain your options before you decide anything. You get an upfront quote with no obligation. Most inspections take less than an hour, and you're welcome to walk the property with your technician and ask questions along the way.",
  },
  {
    question: "Why do I keep seeing bugs even in winter?",
    answer:
      "Jacksonville rarely gets cold enough for long enough to stop pests. Termites keep feeding all year, roaches and ants stay active indoors, and roof rats move into attics when nights cool off. That's why we recommend year-round protection instead of a single spray when you first notice a problem.",
  },
  {
    question: "Is a palmetto bug the same as a cockroach?",
    answer:
      "Yes. \"Palmetto bug\" is the local name for large outdoor roaches, mostly the American cockroach. They live in mulch, trees, and storm drains and often wander inside during heavy rain or extreme heat. They're different from the small German cockroach, which breeds indoors. Learn more on our [cockroach and palmetto bug control](/cockroach-control) page.",
  },
  {
    question: "Are your treatments safe for my kids and pets?",
    answer:
      "We use products registered for home use and apply them according to their labels, which is what keeps them safe. Your technician will tell you how long to keep kids and pets off treated areas, usually until a spray has dried. If you have a newborn, a pet with health problems, or a fish tank, let us know so we can adjust the plan.",
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "No long-term contract is required for our recurring plans. We'd rather earn your business with every visit. If you choose a protection plan, we'll explain how scheduling and cancellation work before your first service, so there are no surprises later.", // OWNER: confirm no-contract policy
  },
  {
    question: "Which areas around Jacksonville do you serve?",
    answer:
      "We serve Jacksonville neighborhoods, the Beaches, and nearby communities in St. Johns, Clay, and Nassau counties. See the full list on our [service areas page](/service-areas), or call us with your ZIP code and we'll confirm right away. If you're just outside our usual area, ask anyway.",
  },
];

export default function HomePage() {
  const featured = getServicesBySlugs(FEATURED_SERVICES);
  const areas = getPublishedAreas();

  return (
    <>
      <Hero
        h1="Trusted Pest Control in Jacksonville, FL"
        subheadline="Licensed local technicians who find the source of the problem, treat it the right way, and stand behind the work."
        image={{
          file: "pest-control-technician-truck-jacksonville.webp",
          alt: "Pest control technician in uniform next to a service truck outside a Jacksonville home",
        }}
      />

      <TrustBar />

      <ServicesGrid
        title="Pest Control Services for Northeast Florida Homes and Businesses"
        intro="From termites in the walls to roof rats in the attic, we handle the pests Jacksonville homeowners call about most. Every job starts with a free inspection."
        services={featured}
        footerLinks={[
          { label: "View all residential services", href: STATIC_ROUTES.residential },
          { label: "View all commercial services", href: STATIC_ROUTES.commercial },
        ]}
      />

      <Section id="audience" tone="surface" labelledBy="audience-heading">
        <SectionHeading id="audience-heading" title="Protection for Your Home or Your Business" tone="surface" />
        <div className="grid gap-6 md:grid-cols-2">
          <AudienceCard
            href={STATIC_ROUTES.residential}
            icon={House}
            title="Residential Pest Control"
            text="Year-round protection plans, termite defense, and fast help with roaches, ants, rodents, and mosquitoes. Options for homes with kids and pets."
            cta="Explore home services"
          />
          <AudienceCard
            href={STATIC_ROUTES.commercial}
            icon={Building2}
            title="Commercial Pest Control"
            text="Discreet, scheduled service for restaurants, apartment communities, warehouses, and offices, with service records ready for inspections and audits."
            cta="Explore business services"
          />
        </div>
      </Section>

      <WhyChooseUs
        title="Why Jacksonville Homeowners Choose Us"
        intro="We keep things simple: show up when we say we will, explain what we find, and fix the problem."
        tone="white"
        points={[
          {
            // OWNER: confirm same-day availability before launch
            title: "Fast response when you need it",
            description:
              "Pest problems don't wait for a convenient week. We offer same-day or next-day visits when our schedule allows, and we'll always tell you honestly when we can be there.",
            icon: CalendarClock,
          },
          {
            title: "An upfront quote before any work",
            description:
              "After your free inspection, you'll know exactly what we recommend and what it costs before we start. No hidden fees and no pressure to add services you don't need.",
            icon: ClipboardCheck,
          },
          {
            // OWNER: confirm pet- and family-friendly options are offered
            title: "Family- and pet-friendly options",
            description:
              "We focus treatments where pests live, use baits and targeted products where they make sense, and explain re-entry times so your family and pets stay safe.",
            icon: PawPrint,
          },
          {
            title: "We come back if pests do",
            description: siteConfig.guarantee,
            icon: ShieldCheck,
          },
        ]}
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
          "Northeast Florida's warm, humid climate is great for people and even better for insects. Our winters are short and mild, so pests never get a real break. Instead of dying off in the cold, many simply slow down for a few weeks and then pick up right where they left off.",
          "Spring brings **termite swarm season**, when winged termites leave their colonies to start new ones. Swarmers inside your home are often the first sign of an infestation that has been quietly feeding for a while. Our long, rainy summers then fill every low spot with standing water, which keeps mosquitoes breeding from spring well into fall.",
          "Heavy rain also pushes **palmetto bugs** and fire ants out of the ground and toward your house. Large live oaks and thick landscaping, common across Jacksonville neighborhoods, give roof rats and squirrels an easy path to the roofline. And the moisture that makes our yards so green can soften wood and attract termites to crawl spaces and slabs.",
          "The good news: most of these problems can be prevented with regular inspections, a protective barrier around the home, and a few simple habits like fixing leaks and trimming branches away from the roof.",
        ]}
      />

      <ProcessSteps
        title="How Our Pest Control Works"
        intro="Every visit follows the same simple process, whether it's a single wasp nest or a full termite treatment."
        steps={[
          {
            title: "Free Inspection",
            description:
              "Your technician inspects inside and out, finds where pests are living and getting in, and shows you what they found.",
          },
          {
            title: "Custom Treatment",
            description:
              "We build a plan around your home and the pest, treat the source, and explain exactly what we applied and where.",
          },
          {
            title: "Follow-Up & Prevention",
            description:
              "We check that the treatment worked, seal up entry points where possible, and help you keep pests from coming back.",
          },
        ]}
      />

      <ReviewsSection
        title="What Our Customers Say"
        intro="Real feedback from homeowners and businesses we've helped."
        reviews={reviews.slice(0, 6)}
      />

      <ServiceAreasList
        title="Serving Jacksonville and the Surrounding Communities"
        intro="We cover Jacksonville neighborhoods, the Beaches, and nearby towns in St. Johns, Clay, and Nassau counties."
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

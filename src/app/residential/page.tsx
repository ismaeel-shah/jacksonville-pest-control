import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Hero } from "@/components/sections/Hero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TextSection } from "@/components/sections/TextSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { reviews } from "@/content/reviews";
import type { FAQ } from "@/content/types";
import { getPublishedServices } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES } from "@/lib/routes";
import { buildServiceSchema } from "@/lib/schema";

const DESCRIPTION =
  "Residential pest control in Jacksonville, FL with year-round protection plans, termite defense, and family- and pet-friendly options. Free home inspection.";

export const metadata = buildMetadata({
  title: "Residential Pest Control in Jacksonville, FL",
  description: DESCRIPTION,
  path: STATIC_ROUTES.residential,
});

const SEASONS = [
  {
    season: "Spring",
    months: "March – May",
    pests: "Termite swarms, ants, early mosquitoes, wasps building nests",
    tip: "Watch for winged termites or discarded wings near windows. Schedule a termite inspection if you see them.",
  },
  {
    season: "Summer",
    months: "June – August",
    pests: "Mosquitoes, palmetto bugs, fire ants, chinch bugs in St. Augustine lawns",
    tip: "Empty standing water after every storm and keep mulch pulled a few inches back from the foundation.",
  },
  {
    season: "Fall",
    months: "September – November",
    pests: "Roof rats and mice moving indoors, spiders, lingering mosquitoes",
    tip: "Trim tree limbs away from the roof and check soffits and vents for gaps before nights get cooler.",
  },
  {
    season: "Winter",
    months: "December – February",
    pests: "Rodents in attics, German cockroaches indoors, termites still feeding",
    tip: "Listen for scratching in the attic at night and keep firewood stacked away from the house.",
  },
];

const RESIDENTIAL_FAQS: FAQ[] = [
  {
    question: "What does a residential pest control plan include?",
    answer:
      "A typical plan includes a full inspection, an exterior barrier treatment around your foundation, entry points, and eaves, and interior treatment wherever you're seeing activity. We also clear spider webs and wasp nests we can safely reach. Specialty problems like termites, bed bugs, and wildlife are handled separately. See [general pest control](/general-pest-control) for details.",
  },
  {
    question: "Do you treat inside my home every visit?",
    answer:
      "Not always, and that's on purpose. Most pests come from outside, so a strong exterior barrier does most of the work. We treat indoors on the first visit and any time you're seeing pests inside. Just let us know before your service, and your technician will take care of the problem areas.",
  },
  {
    question: "Will pest control damage my lawn or plants?",
    answer:
      "No. We apply products carefully around foundations, mulch beds, and entry points, following label directions that protect plants. If you're worried about a vegetable garden, a koi pond, or specific landscaping, point it out and your technician will avoid it or use a different method nearby.",
  },
  {
    question: "Can you help if I just moved into a new home?",
    answer:
      "Yes, and it's a great time to start. A move-in inspection catches problems the previous owners may have missed, like termite activity, rodent entry points, or roach activity in kitchens and garages. It also sets a baseline so we can protect your new home from day one.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most homeowners notice a big drop in activity within a week or two. You may see more pests for a few days right after treatment as they're pushed out of hiding, which is normal. Baits for ants and roaches take a little longer because the pests carry them back to the colony.",
  },
];

export default function ResidentialPage() {
  const services = getPublishedServices().filter((service) => service.audience.includes("residential"));

  return (
    <>
      <Breadcrumbs items={[{ name: "Residential Pest Control", href: STATIC_ROUTES.residential }]} />
      <JsonLd
        data={buildServiceSchema({
          serviceType: "Residential Pest Control",
          description: DESCRIPTION,
          path: STATIC_ROUTES.residential,
          areaNames: ["Jacksonville"],
        })}
      />

      <Hero
        h1="Residential Pest Control in Jacksonville, FL"
        subheadline="Year-round protection for your home and family, from a local team that explains every step."
        image={{ file: "technician-treating-home-perimeter.webp", alt: "Technician applying a barrier treatment along the foundation of a Florida home" }}
      />

      <TextSection
        id="intro"
        title="Keep Your Home Comfortable, Safe, and Pest-Free"
        paragraphs={[
          "Your home is where your kids play on the floor, your pets nap in the sun, and you finally get to relax. Finding roaches in the kitchen or hearing scratching in the attic changes all of that. Our residential pest control is built to give you that peace of mind back.",
          "In Jacksonville, pests are a twelve-month problem. Our warm, wet climate means ants, palmetto bugs, and termites never fully go away. The best approach is steady prevention: an inspection to find out why pests are getting in, a protective barrier around the outside of your home, and quick follow-up whenever something new shows up.",
        ]}
      />

      <TextSection
        id="family-safety"
        tone="surface"
        title="Treatment Options That Respect Your Family and Pets"
        image={{ file: "family-dog-in-treated-yard.webp", alt: "Family dog relaxing in a green Jacksonville backyard" }}
        paragraphs={[
          "We know you care about what goes into your home. That's why we use products registered for residential use, apply them exactly as their labels direct, and focus treatments where pests actually live: cracks, voids, foundations, and entry points rather than open floors.",
          "Where they work well, we use baits and gels that pests find but people and pets don't touch. Your technician will always tell you what was applied and how long to keep kids and pets away from treated areas, usually just until sprays dry. If you'd like the lowest-impact approach possible, ask about our [eco-friendly pest control](/eco-friendly-pest-control) options.",
        ]}
      />

      <TextSection
        id="home-value"
        title="Protecting the Value of Your Home"
        paragraphs={[
          "Some pests cost more than peace of mind. Termites can damage framing, floors, and trim for years before anyone notices, and Florida homeowner's insurance policies often don't cover that damage. Roof rats chew wiring and tear up attic insulation. Moisture problems under the house invite both.",
          "Regular inspections are the cheapest insurance you can buy. We look for early warning signs like mud tubes, droppings, and soft wood so small problems get fixed before they turn into expensive repairs. When it's time to sell, a clean [WDO inspection report](/termite-inspection) also helps the sale go smoothly.",
        ]}
      />

      <TextSection
        id="plans"
        tone="surface"
        title="Recurring Protection Plans"
        paragraphs={[
          "Most Jacksonville homeowners choose a recurring plan rather than calling us after every problem. A plan keeps a protective barrier in place all year and puts you on our regular schedule. If pests show up between visits, we come back and re-treat at no extra cost.",
          "We'll recommend a schedule based on your home after the inspection. Quarterly service works for most houses, while homes near water or heavy tree cover sometimes start with more frequent visits. No long-term contract is required.", // OWNER: confirm plan options and no-contract policy
        ]}
        bullets={[
          "Full inspection of the inside and outside of your home",
          "Exterior barrier around the foundation, doors, windows, and eaves",
          "Interior treatment wherever you've seen activity",
          "Web and wasp nest removal from reachable eaves",
          "Free re-treatment if covered pests return between visits",
        ]}
      />

      <ProcessSteps
        id="visit"
        title="What a Typical Visit Looks Like"
        intro="Your first visit takes a little longer because we're getting to know your home. Regular visits are quicker."
        steps={[
          { title: "Walk-through", description: "We talk with you about what you've seen and where, then inspect the inside and outside of the home." },
          { title: "Exterior treatment", description: "We treat the foundation, entry points, and eaves to stop pests before they get inside." },
          { title: "Interior as needed", description: "We treat kitchens, baths, garages, and other problem areas with targeted products and baits." },
          { title: "Report and tips", description: "We tell you what we found and treated, and share a few simple steps to help keep pests out." },
        ]}
      />

      <Section id="seasons" tone="surface" labelledBy="seasons-heading">
        <SectionHeading
          id="seasons-heading"
          title="Northeast Florida Seasonal Pest Calendar"
          intro="Pests change with the seasons here, even if the weather barely does. Here's what to watch for through the year."
          tone="surface"
        />
        <div className="rounded-xl border border-line bg-white">
          {/* Below md the table reflows into stacked cards so nothing scrolls sideways. */}
          <table className="w-full text-left">
            <caption className="sr-only">Common pests in Northeast Florida by season, with a prevention tip for each</caption>
            <thead className="bg-secondary text-white max-md:sr-only">
              <tr>
                <th scope="col" className="px-5 py-3">Season</th>
                <th scope="col" className="px-5 py-3">Common pests</th>
                <th scope="col" className="px-5 py-3">What you can do</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {SEASONS.map((row) => (
                <tr key={row.season} className="align-top max-md:block max-md:p-5">
                  <th scope="row" className="px-5 py-4 font-bold text-secondary max-md:block max-md:p-0">
                    {row.season}
                    <span className="block text-sm font-normal text-ink-muted">{row.months}</span>
                  </th>
                  <td className="px-5 py-4 max-md:block max-md:px-0 max-md:pb-0 max-md:pt-2">{row.pests}</td>
                  <td className="px-5 py-4 text-ink-muted max-md:block max-md:px-0 max-md:pb-0 max-md:pt-2">
                    <span className="font-semibold text-ink md:hidden">What you can do: </span>
                    {row.tip}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <ServicesGrid
        id="residential-services"
        title="Home Pest Control Services"
        intro="Every service starts with a free inspection and an upfront quote."
        services={services}
      />

      <ReviewsSection title="What Homeowners Say" reviews={reviews.slice(0, 6)} hideWhenEmpty />

      <FAQSection title="Residential Pest Control FAQ" faqs={RESIDENTIAL_FAQS} tone="surface" />

      <CTASection title="Get Your Free Home Inspection" defaultPropertyType="residential" />
    </>
  );
}

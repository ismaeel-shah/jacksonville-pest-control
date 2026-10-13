import type { IndustryContent } from "../types";

export const restaurants: IndustryContent = {
  slug: "restaurants",
  published: true,
  name: "Restaurants & Food Businesses",
  icon: "restaurant",
  cardDescription: "Roach, rodent, and fly control for kitchens and dining rooms, with records ready for your next health inspection.",
  seo: {
    title: "Restaurant Pest Control in Jacksonville, FL",
    description:
      "Restaurant pest control in Jacksonville, FL. After-hours service, roach and rodent control, and service records for health inspections. Free site visit.",
    primaryKeyword: "restaurant pest control Jacksonville",
    secondaryKeywords: ["commercial kitchen pest control", "health inspection pest control", "cockroach control for restaurants", "food business pest control"],
  },
  hero: {
    h1: "Restaurant Pest Control in Jacksonville, FL",
    subheadline: "Keep your kitchen inspection-ready and your dining room pest-free, without slowing down service.",
    image: {
      file: "restaurant-kitchen-pest-inspection-jacksonville.webp",
      alt: "Technician inspecting under stainless steel prep tables in a restaurant kitchen",
    },
  },
  intro: [
    "In a restaurant, one roach crossing the dining room floor can undo years of good reviews. Kitchens give pests everything they want: warmth, water, food scraps, and hundreds of hiding spots behind equipment. Add Jacksonville's heat and humidity, and keeping pests out takes steady, careful work.",
    "We help restaurants, cafés, bars, food trucks with commissary kitchens, and other food businesses across Jacksonville stay ahead of problems. Our programs focus on prevention, are scheduled around your hours, and leave you with clear records for the health inspector.",
  ],
  commonPests: {
    heading: "Pests That Target Restaurants and Commercial Kitchens",
    items: [
      {
        title: "German cockroaches",
        description: "The most common restaurant pest. They breed fast in warm spots behind ovens, dish machines, and soda lines, and hitch rides in on deliveries.",
      },
      {
        title: "Roof rats and mice",
        description: "Drawn by dumpsters, grease, and dry goods. They chew through packaging and slip in through gaps around doors, pipes, and roof vents.",
      },
      {
        title: "Drain flies and house flies",
        description: "Floor drains, grease traps, and dumpster areas give flies places to breed. Back doors propped open during a rush let in even more.",
      },
      {
        title: "Ants and stored-product pests",
        description: "Ghost ants trail toward sugar and syrup stations, while pantry beetles and moths can turn up in flour, rice, and spices.",
      },
    ],
  },
  sections: [
    {
      heading: "Ready for Your Next Health Inspection",
      body: [
        "Florida restaurants are inspected by the state, and pest activity is one of the things inspectors look for. Signs like droppings, live roaches, or flies near food prep areas can lead to violations or worse.",
        "After every visit, we leave a service report that shows what we inspected, any activity we found, what we applied and where, and what we recommend. Keep those reports with your food safety records so you can show inspectors that pest control is handled on a regular schedule.",
      ],
      bullets: [
        "Service reports after every visit",
        "Notes on sanitation or repair issues that attract pests",
        "Product labels and safety data sheets available on request",
        "Extra visits when activity spikes or before a scheduled audit",
      ],
    },
    {
      heading: "Focused on Kitchens, Drains, and Back-of-House",
      body: [
        "Most restaurant pest problems start where customers never look. We pay close attention to the areas behind and under cooking lines, dish stations, walk-in coolers, ice machines, bar wells, floor drains, grease traps, and the dumpster pad.",
        "In food areas we rely on targeted methods like gel baits placed in cracks and hinges, insect growth regulators, and sealed rodent stations outside, instead of broad spraying. That protects your food, your equipment, and your staff while still getting to the source.",
      ],
    },
    {
      heading: "Service That Fits Around Your Hours",
      body: [
        "Your dining room should never see a technician with a sprayer during lunch. We schedule visits before you open, after you close, or on your slowest days, and our technicians work quietly so your team can keep prepping.", // OWNER: confirm after-hours availability
        "If something urgent comes up, like a rodent sighting before a busy weekend, call us and we'll work out the fastest, least disruptive time to come in.",
      ],
    },
  ],
  process: {
    heading: "How Our Restaurant Pest Program Works",
    steps: [
      { title: "Site inspection", description: "We walk your kitchen, storage, dining room, and exterior to find activity, entry points, and conditions that attract pests." },
      { title: "Written plan", description: "You get a clear plan with service frequency, treatment methods, and any sanitation or repair recommendations." },
      { title: "Scheduled service", description: "We service on a regular schedule, usually monthly or more often for busy kitchens, and document every visit." },
      { title: "Review and adjust", description: "We track activity over time and change the plan when the seasons, your menu, or your space changes." },
    ],
  },
  faqs: [
    {
      question: "How often should a restaurant have pest control service?",
      answer:
        "Most restaurants need service at least once a month, and busy kitchens with heavy food prep, bars, or outdoor seating often need more. Constant food, water, and warmth mean pests can rebuild quickly between visits. We'll recommend a schedule after inspecting your space and adjust it if activity changes.",
    },
    {
      question: "Will treatments contaminate food or prep surfaces?",
      answer:
        "No, not when they're applied correctly. In food areas we use baits and targeted treatments placed in cracks, voids, and equipment hinges, away from food and prep surfaces, following every label direction. We'll also tell you if anything needs to be covered or moved before a visit.",
    },
    {
      question: "What should we do between visits to help?",
      answer:
        "Small daily habits make a big difference. Clean under equipment and around drains at closing, keep back doors shut, rinse and break down boxes before they stack up, store dry goods in sealed containers, and keep dumpster lids closed. Let us know right away about any sightings so we can respond quickly.",
    },
    {
      question: "Do you work with food trucks and small cafés?",
      answer:
        "Yes. Food trucks with commissary kitchens, coffee shops, bakeries, and small cafés all benefit from regular pest control. The plan is scaled to your space and how you operate, with the same service reports a larger restaurant gets. Tell us about your setup and we'll suggest a schedule that makes sense.",
    },
  ],
  relatedServices: ["cockroach-control", "rodent-control", "general-pest-control"],
  lastUpdated: "2026-10-12",
};

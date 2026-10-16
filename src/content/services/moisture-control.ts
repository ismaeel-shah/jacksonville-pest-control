import type { ServiceContent } from "../types";

// OWNER: confirm local providers offer this service before launch (set published: false if not)
export const moistureControl: ServiceContent = {
  slug: "moisture-control",
  published: true,
  name: "Moisture Control & Crawl Space Services",
  navLabel: "Moisture Control",
  icon: "moisture",
  audience: ["residential"],
  cardDescription: "Crawl space moisture checks, vapor barriers, and ventilation fixes that make your home less inviting to termites, roaches, and silverfish.",
  seo: {
    title: "Moisture Control in Jacksonville, FL | Crawl Spaces",
    description:
      "Moisture control and crawl space services in Jacksonville, FL. Vapor barriers and ventilation fixes that lower termite risk. Call to speak with a local pro.",
    primaryKeyword: "moisture control Jacksonville FL",
    secondaryKeywords: ["crawl space moisture", "vapor barrier installation", "crawl space ventilation", "humidity and termites"],
  },
  hero: {
    h1: "Moisture Control & Crawl Space Services in Jacksonville, FL",
    subheadline: "A drier crawl space means fewer pests, healthier wood, and one less reason for termites to choose your home.",
    image: {
      file: "moisture-control-jacksonville-crawl-space-vapor-barrier.webp",
      alt: "Plastic vapor barrier covering the ground in the crawl space of a Jacksonville home",
    },
  },
  intro: [
    "Damp air and wet soil under your house do more than cause a musty smell. Moisture softens wood, feeds mold, and draws in termites, palmetto bugs, and silverfish looking for water.",
    "Moisture control looks at your home the way pests do. A local pest control pro checks your crawl space for standing water, wet soil, damp wood, and poor airflow, then finds out where the water is coming from. From there, the technician recommends practical fixes, such as installing a vapor barrier, improving ventilation, or pointing you to leaks that need repair. The goal is simple: a drier home that's harder for pests to live in.",
  ],
  localProblem: {
    heading: "Why Moisture Is a Big Deal in Jacksonville Homes",
    body: [
      "Northeast Florida is humid most of the year, and summer brings frequent heavy afternoon storms. Many older Jacksonville homes sit on raised foundations with crawl spaces, where damp soil and still air can keep wood wet for months.",
      "That moisture matters because so many local pests depend on it. Subterranean termites need moisture to survive and are drawn to damp wood near the soil. American cockroaches, the big ones locals call palmetto bugs, shelter in humid crawl spaces. Silverfish thrive in damp, dark corners.",
      "Wet wood can also develop decay fungi, which shows up on real estate inspections and weakens framing over time. Cutting moisture is one of the most useful things you can do alongside [termite protection](/termite-control).",
    ],
  },
  signs: {
    heading: "Signs of a Moisture Problem",
    intro: "You don't have to crawl under the house to notice some of these clues.",
    items: [
      { title: "Musty smell indoors", description: "A damp, earthy odor that's strongest near floors or closets often starts below the house." },
      { title: "Standing water or wet soil", description: "Puddles in the crawl space after rain, or soil that stays dark and damp." },
      { title: "Mold or mildew on wood", description: "White, green, or black growth on floor joists, beams, or the underside of the subfloor." },
      { title: "Soft or sagging floors", description: "Floors that feel spongy or uneven can mean moisture is damaging the wood below." },
      { title: "Lots of roaches or silverfish", description: "Frequent sightings in bathrooms and lower rooms suggest a humid spot nearby." },
      { title: "Condensation on ducts and pipes", description: "Dripping AC ducts or sweating pipes in the crawl space keep the area wet." },
    ],
  },
  process: {
    heading: "How Moisture Control Works",
    steps: [
      { title: "Crawl space inspection", description: "The technician checks the soil, wood, vents, ducts, and plumbing, and takes moisture readings on framing." },
      { title: "Find the water source", description: "Gutters, grading, AC drain lines, and plumbing are checked to learn where the moisture comes from." },
      { title: "Recommend the right fixes", description: "The technician explains what was found and which fixes make sense for your crawl space." },
      { title: "Install and correct", description: "Debris is cleared, a vapor barrier is installed, and ventilation is adjusted as needed." },
      { title: "Check back", description: "A follow-up visit confirms the space is staying drier, especially after a rainy stretch." },
    ],
  },
  treatmentOptions: {
    heading: "Moisture Control Options",
    intro: ["Every crawl space is different. These are the most common ways to dry one out."],
    options: [
      {
        title: "Vapor barriers",
        description: "Heavy plastic sheeting laid over the soil keeps ground moisture from rising into the crawl space and the wood above it.",
      },
      {
        title: "Ventilation improvements",
        description:
          "Clearing blocked vents or adjusting airflow. In Northeast Florida's climate, more outside air isn't always better, since summer air can be wetter than the air under your home.",
      },
      {
        title: "Crawl space sealing and dehumidifiers",
        description: "For persistent problems, closing off vents and controlling humidity with a dehumidifier can keep the space consistently dry. Ask the provider whether this is part of their service.",
      },
    ],
  },
  safety: {
    heading: "Is Moisture Control Safe for Kids and Pets?",
    body: [
      "Yes. Most of this work is physical: laying a vapor barrier, clearing debris, and fixing vents and gaps. It usually involves no pesticides at all. If the technician also treats for pests during the visit, products should be used as the label directs, and you'll be told when treated areas are safe to use again.",
      "Keep the crawl space access door closed so kids and pets can't wander in. If the technician finds heavy mold growth, you may need a mold specialist.",
    ],
  },
  prevention: {
    heading: "How to Keep Moisture Away From Your Home",
    tips: [
      "Clean gutters and extend downspouts so rainwater lands well away from the foundation.",
      "Make sure soil slopes away from the house, not toward it.",
      "Check that your AC drain line empties away from the foundation, not under the home.",
      "Look under sinks and around the water heater for slow drips.",
      "Run bathroom fans during and after showers to cut indoor humidity.",
      "Peek into the crawl space after heavy storms for standing water.",
    ],
  },
  faqs: [
    {
      question: "What is a vapor barrier, and do I need one?",
      answer:
        "A vapor barrier is a layer of heavy plastic that covers the soil in a crawl space and stops ground moisture from rising into the wood above. Most Jacksonville homes with crawl spaces benefit from one, especially if the soil stays damp. If you already have one, a technician can check it for tears, gaps, or sections that have shifted.",
    },
    {
      question: "Should my crawl space vents be open or closed?",
      answer:
        "It depends on your home. Open vents let air move, but during humid Jacksonville summers they can also pull wet air into the crawl space. Some homes do well with vents open and clear, while others stay drier when the space is sealed and a dehumidifier controls humidity. A crawl space inspection shows which approach fits your home.",
    },
    {
      question: "How does moisture make termite problems worse?",
      answer:
        "Moisture makes termite problems worse because subterranean termites need it to survive. Damp soil lets them stay near the surface, and wet wood is easier for them to chew. A leaking pipe or wet crawl space can attract a colony and help it grow. Drying things out works best paired with a regular [termite inspection](/termite-inspection).",
    },
    {
      question: "Does moisture control include fixing plumbing leaks and drainage problems?",
      answer:
        "Usually not the major repairs. A technician can find leaks and drainage problems and show you exactly where they are, but plumbing repairs and regrading are best handled by a plumber or contractor. Small fixes, like redirecting an AC drain line or sealing gaps, may be part of the visit. Once the water source is fixed, the crawl space can be dried and protected.",
    },
  ],
  relatedServices: ["termite-control", "termite-inspection", "cockroach-control"],
  lastUpdated: "2026-10-16",
};

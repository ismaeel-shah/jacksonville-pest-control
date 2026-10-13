import type { AreaContent } from "../types";

export const neptuneBeach: AreaContent = {
  slug: "neptune-beach",
  published: true,
  name: "Neptune Beach",
  region: "beaches",
  hubBlurb: "A small, walkable beach town where homes sit close together and Town Center shops share alleys, so ants, rodents, and moisture pests travel easily.",
  seo: {
    title: "Pest Control in Neptune Beach, FL | Homes & Shops",
    description:
      "Neptune Beach, FL pest control for bungalows, duplexes and Town Center businesses. We stop ants, rodents, silverfish and termites. Call today for a free quote.",
    primaryKeyword: "pest control Neptune Beach FL",
    secondaryKeywords: ["exterminator Neptune Beach", "Beaches Town Center pest control", "ant control Neptune Beach", "32266 pest control"],
  },
  hero: {
    h1: "Pest Control in Neptune Beach, FL",
    subheadline: "Friendly, local pest service for close-knit Neptune Beach streets and the shops and restaurants of Beaches Town Center.",
    image: {
      file: "neptune-beach-bungalow-tree-lined-street.webp",
      alt: "Single-story bungalow with a front porch on a tree-lined street a few blocks from the ocean in Neptune Beach",
    },
  },
  intro: [
    "Neptune Beach is the smallest of the Jacksonville Beaches towns, and you can walk or bike almost anywhere in it. The town even got its name from a little train stop called Neptune back in the 1920s. Today it's a neighborhood of porches, bikes, and short walks to the sand.",
    "Small lots have a downside when it comes to pests. With houses just a few feet apart, ant colonies and rodents move from one yard to the next. The ocean air keeps humidity high most of the year, so bathrooms, crawl spaces, and attics stay damp enough for silverfish and roaches. At the north end of town, Beaches Town Center packs restaurants and shops into a few busy blocks along the border with Atlantic Beach. We treat homes and businesses here with that close-quarters reality in mind.",
  ],
  commonPests: {
    heading: "Pests That Move Between Neptune Beach Homes",
    pests: [
      {
        name: "Ghost ants and other sugar ants",
        why: "Sandy soil and tightly spaced homes let colonies split and spread along fence lines and driveways. They often trail into kitchens and bathrooms looking for water.",
      },
      {
        name: "Rats",
        why: "Restaurant dumpsters and alleys near Town Center offer food, and nearby homes offer shelter. Rats travel along utility lines and fences between the two.",
      },
      {
        name: "Silverfish",
        why: "Constant coastal humidity keeps closets, bathrooms, and attics damp. Silverfish feed on paper, glue, and fabric in those damp spots, especially in older homes.",
      },
      {
        name: "Subterranean termites",
        why: "Older bungalows with wood near the ground sit on moist, sandy soil. Watch for winged swarmers indoors during spring termite swarm season.",
      },
      {
        name: "Palmetto bugs",
        why: "Storm drains and shady planting beds near the beach stay cool and wet. These big roaches come inside after heavy rain or through gaps under doors.",
      },
    ],
  },
  homes: {
    heading: "Neptune Beach Homes and Close Neighbors",
    body: [
      "Much of Neptune Beach is single-story bungalows and ranch homes on small lots, mixed with duplexes and newer two-story rebuilds. In a duplex, pests in one half usually reach the other, so treating both sides at the same time gives the best results.",
      "Moisture is the main thing we watch in older homes here. Leaky AC drain lines, poor attic airflow, and damp crawl spaces draw silverfish, roaches, and termites. Our [moisture control](/moisture-control) service can help dry those areas out so treatments last longer.",
      "Town Center businesses face a different challenge. Shops and restaurants share walls, alleys, and trash areas, and one neighbor's problem soon becomes yours. Our [commercial pest control](/commercial) plans keep regular, written records and can be timed before opening or after closing.",
    ],
  },
  popularServices: [
    { slug: "ant-control", reason: "Ant colonies spread fast between Neptune Beach yards when homes are only a few feet apart." },
    { slug: "rodent-control", reason: "Rats move between Town Center alleys and nearby homes along fences and utility lines." },
    { slug: "termite-inspection", reason: "Older bungalows near the beach benefit from a yearly check for termite damage and moisture." },
    { slug: "general-pest-control", reason: "Quarterly service keeps roaches and silverfish in check despite the year-round coastal humidity." },
  ],
  // OWNER: verify neighborhood names and ZIP codes before launch
  neighborhoods: ["Beaches Town Center area", "Neptune Grove", "Neptune By The Sea", "Oceanview", "Penman Terrace"],
  zipCodes: ["32266"],
  faqs: [
    {
      question: "My neighbor has ants. Will treating just my house help?",
      answer:
        "It helps, but results are better when nearby yards are treated too. On small Neptune Beach lots, ant colonies often stretch across property lines. We treat your foundation, yard edges, and entry points to create a barrier. If several neighbors sign up around the same time, we can coordinate visits so colonies have fewer places to move.",
    },
    {
      question: "Do you service restaurants and shops at Beaches Town Center?",
      answer:
        "Yes. We work with restaurants, shops, and offices and schedule visits before opening or after closing so customers are not disturbed. Service includes inspection, targeted treatment, and written reports you can show a health inspector. We also look at shared alleys and trash areas, since many pest problems start there.",
    },
    {
      question: "Why do I keep finding silverfish in my bathroom and closets?",
      answer:
        "Silverfish need damp places, and the ocean air in Neptune Beach keeps humidity high most of the year. Bathrooms without good exhaust fans and closets on outside walls are common hiding spots. Running a dehumidifier, fixing leaks, and sealing gaps help a lot. If they keep coming back, we can treat the areas where they hide and breed.",
    },
  ],
  nearbyAreas: ["atlantic-beach", "jacksonville-beach", "ponte-vedra-beach"],
  lastUpdated: "2026-10-12",
};

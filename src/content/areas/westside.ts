import type { AreaContent } from "../types";

export const westside: AreaContent = {
  slug: "westside",
  published: true,
  name: "Westside",
  region: "jacksonville",
  hubBlurb: "Postwar block homes in Cedar Hills, newer subdivisions out west, and big distribution warehouses at Cecil, with rodents and roaches leading the list.",
  seo: {
    title: "Pest Control in Westside, FL | Homes and Warehouses",
    description:
      "Westside Jacksonville pest control for homes, apartments, and warehouses. Rodents, roaches, termites, and fire ants. Call to speak with a local pest pro today.",
    primaryKeyword: "pest control Westside FL",
    secondaryKeywords: [
      "pest control Westside Jacksonville",
      "warehouse pest control Cecil Commerce Center",
      "rodent control Westside Jacksonville",
      "32210 pest control",
    ],
  },
  hero: {
    h1: "Pest Control in Westside, FL",
    subheadline: "Pest control for Westside families and businesses, from Cedar Hills ranch homes to the warehouses at Cecil Commerce Center.",
    image: {
      file: "westside-jacksonville-block-ranch-home.webp",
      alt: "Single-story concrete block ranch home with a carport on a quiet street in Cedar Hills, Jacksonville",
    },
  },
  intro: [
    "The Westside covers a huge stretch of Jacksonville, and it's hard to sum up in one sentence. Close in, you'll find Cedar Hills and Confederate Point, with their postwar ranch homes and shady streets. Farther west, newer subdivisions around Argyle Forest and Chimney Lakes give way to open land. Out past that, the old Cecil Field naval air station has become Cecil Commerce Center, a hub for some of the largest warehouses in the region.",
    "Because the area is so varied, a one-size plan doesn't work here. Older block homes need sealing and termite checks. Newer yards need fire ant and lawn pest care. Warehouses and shops need rodent programs that hold up to busy loading docks. Many Westside families also have ties to NAS Jacksonville, so move-in inspections are a common request.",
  ],
  commonPests: {
    heading: "Westside's Biggest Pest Problems",
    intro: ["Each part of the Westside has its own weak spots, but these pests come up again and again."],
    pests: [
      {
        name: "Norway rats and roof rats",
        why: "Warehouses, rail lines, and shopping centers give rats food and cover, and they spread into nearby neighborhoods. Older homes with gaps around utility lines make easy targets.",
      },
      {
        name: "German cockroaches",
        why: "Older apartment complexes, restaurants, and convenience stores along the main roads are common sources. Roaches hitch rides in boxes and grocery bags into homes.",
      },
      {
        name: "Subterranean termites",
        why: "Cedar Hills alone has thousands of homes from the 1940s and 1950s. Block walls resist termites, but wood roof framing, door frames, and trim are still at risk.",
      },
      {
        name: "Fire ants",
        why: "Big yards and open lots in the newer western subdivisions give fire ants plenty of space, and mounds return quickly after summer storms.",
      },
    ],
  },
  homes: {
    heading: "Block Homes, New Subdivisions, and Warehouses",
    body: [
      "Cedar Hills and the streets around the Cedar River filled in after World War II with rows of brick and concrete block ranch homes. These houses are sturdy, but after many decades they often have cracked mortar, worn weatherstripping, and gaps around pipes and wires. Sealing those gaps and checking rooflines and wood trim are key parts of pest service here.",
      "Farther out, neighborhoods like Argyle Forest and Chimney Lakes have younger homes on larger lots. Here the focus shifts to yards: fire ants, chinch bugs in St. Augustine grass, and mosquitoes around retention ponds. A [lawn pest program](/lawn-pest-control) keeps those problems from spreading to the house.",
      "The Westside is also one of Jacksonville's main industrial areas. Distribution centers at Cecil Commerce Center and warehouses along major corridors need scheduled rodent monitoring and clear records. [Commercial and industrial pest control](/commercial) is built for those sites.",
    ],
  },
  popularServices: [
    { slug: "rodent-control", reason: "Rats from warehouses, rail lines, and shopping centers often move into nearby Westside homes." },
    { slug: "cockroach-control", reason: "Older apartments and busy food businesses keep German roaches circulating on the Westside." },
    { slug: "termite-inspection", reason: "Thousands of postwar homes in Cedar Hills and nearby neighborhoods benefit from yearly termite checks." },
    { slug: "lawn-pest-control", reason: "Larger yards in newer western subdivisions attract fire ants and chinch bugs." },
    { slug: "general-pest-control", reason: "Ongoing service keeps palmetto bugs, spiders, and ants out of Westside homes year-round." },
  ],
  neighborhoods: ["Cedar Hills", "Confederate Point", "Wesconnett", "Normandy Village", "Marietta", "Herlong", "Argyle Forest", "Chimney Lakes"], // OWNER: verify neighborhood names and ZIP codes before launch
  zipCodes: ["32210", "32221", "32244"],
  faqs: [
    {
      question: "Can termites damage a concrete block home in Cedar Hills?",
      answer:
        "Yes. The block walls themselves aren't food for termites, but the roof framing, door and window frames, cabinets, and trim are all wood. Termites can travel through tiny cracks in the slab or mortar joints to reach them. That's why regular termite inspections still make sense for Westside block homes, especially those built in the 1940s and 1950s.",
    },
    {
      question: "Is pest control available for warehouses at Cecil Commerce Center?",
      answer:
        "Yes. Large buildings like the ones at Cecil come with long perimeters, many dock doors, and constant truck traffic, so rodent control starts outside. A commercial technician places and checks monitoring stations around the building, looks for gaps at dock seals, and keeps a log that's ready when an auditor or customer asks. Plans are sized to your facility.",
    },
    {
      question: "I'm moving to the Westside for a job at NAS Jacksonville. Can the home be inspected before I move in?",
      answer:
        "Yes. A move-in inspection is a smart step, especially in an older home or a rental. A technician checks for roaches, rodents, termites, and other pests before your furniture arrives, when it's easiest to treat. If there's a problem, they can explain it clearly and set up a plan that fits your move date.",
    },
  ],
  nearbyAreas: ["riverside-avondale", "orange-park", "middleburg", "northside-oceanway"],
  lastUpdated: "2026-10-16",
};

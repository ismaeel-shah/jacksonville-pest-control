import type { AreaContent } from "../types";

export const jacksonvilleBeach: AreaContent = {
  slug: "jacksonville-beach",
  published: true,
  name: "Jacksonville Beach",
  region: "beaches",
  hubBlurb: "The busiest of the Beaches, where condos, vacation rentals, and oceanfront restaurants keep bed bugs, roaches, and no-see-ums on our radar.",
  seo: {
    title: "Pest Control in Jacksonville Beach, FL | Local Techs",
    description:
      "Pest control in Jacksonville Beach, FL for condos, cottages, rentals and restaurants. Bed bugs, roaches, no-see-ums and termites handled. Call for a free quote.",
    primaryKeyword: "pest control Jacksonville Beach FL",
    secondaryKeywords: ["exterminator Jacksonville Beach", "bed bug treatment Jacksonville Beach", "vacation rental pest control Jax Beach", "32250 pest control"],
  },
  hero: {
    h1: "Pest Control in Jacksonville Beach, FL",
    subheadline: "Pest service built for oceanfront condos, older beach cottages, and busy rentals near the pier.",
    image: {
      file: "jacksonville-beach-oceanfront-condos-dunes.webp",
      alt: "Oceanfront condo buildings behind sea oats and dunes in Jacksonville Beach",
    },
  },
  intro: [
    "Jacksonville Beach has been a beach town since the days it was called Pablo Beach, and today it is the most crowded stretch of sand in the area. Condos rise along the oceanfront, small cottages fill the side streets, and the blocks near the pier and Seawalk Pavilion stay full of visitors most of the year.",
    "All that coming and going changes the pest picture. Suitcases carry bed bugs from one rental to the next. Shared walls in condo buildings let roaches and ants travel between units. Salt air and steady humidity keep wood damp and soft, which termites love. On the west side of town, the marsh along the Intracoastal Waterway is prime ground for no-see-ums. We work with full-time residents, second-home owners, and rental managers, and we plan service around guest check-ins so nobody's stay gets interrupted.",
  ],
  commonPests: {
    heading: "Pests Jacksonville Beach Residents Call Us About",
    pests: [
      {
        name: "Bed bugs",
        why: "Vacation rentals and hotels see new guests every few days. Bed bugs ride in on luggage and hide in headboards and couch seams, then spread quickly when rooms turn over fast.",
      },
      {
        name: "German cockroaches",
        why: "Oceanfront condo towers and restaurant kitchens share plumbing and wall voids. These small roaches move through those gaps from one unit or business to the next.",
      },
      {
        name: "No-see-ums",
        why: "These tiny biting midges breed in the salt marsh near the Intracoastal. They're worst at dawn and dusk on calm days, and they slip right through standard window screens.",
      },
      {
        name: "Drywood and subterranean termites",
        why: "Older beach cottages have wood that has soaked up years of salty, humid air. Drywood termites can live inside trim and furniture, while subterranean termites come up from the sandy soil.",
      },
    ],
  },
  homes: {
    heading: "Condos, Cottages, and Rentals in Jacksonville Beach",
    body: [
      "Condos make up a big share of homes near the ocean. In a building, one unit's problem rarely stays put, so we look at shared walls, trash rooms, and plumbing chases, not just your kitchen. When the HOA or property manager is on board, treating several units at once works best.",
      "Side streets in areas like South Pablo Beach still have small, older cottages with raised floors or tight crawl spaces. Salt air rusts screens and vents over time, and gaps open up around old window frames. Neighborhoods like Ocean Terrace near South Beach Park have midsize homes from the 1980s, where we focus on slab cracks, irrigation, and landscaping close to the walls.",
      "Restaurants and bars along First Street and near the pier need regular, documented service to stay ready for health inspections. Our [commercial pest control](/commercial) plans are scheduled around your busiest hours.",
    ],
  },
  popularServices: [
    { slug: "bed-bug-treatment", reason: "Quick guest turnover in Jax Beach rentals makes fast, thorough bed bug treatment a priority." },
    { slug: "cockroach-control", reason: "Shared walls in oceanfront condos let German roaches spread from unit to unit." },
    { slug: "mosquito-control", reason: "Yard treatments help cut down biting insects for homes near the Intracoastal marsh." },
    { slug: "termite-inspection", reason: "Older cottages and condos change hands often, and buyers need a WDO report before closing." },
    { slug: "general-pest-control", reason: "Regular service between guest stays keeps ants and palmetto bugs from greeting your renters." },
  ],
  // OWNER: verify neighborhood names and ZIP codes before launch
  neighborhoods: ["Downtown and pier area", "South Pablo Beach", "Ocean Terrace", "Pablo Surfside", "Pablo Park", "South Beach Park area"],
  zipCodes: ["32250"],
  faqs: [
    {
      question: "Can you treat a vacation rental between guest stays?",
      answer:
        "Yes. We schedule around your booking calendar and can often treat on a checkout day. For bed bugs, we inspect beds, couches, and baseboards first, then explain how long the unit needs before the next guest arrives. Regular service between seasons also helps you catch problems before a guest finds them and leaves a bad review.",
    },
    {
      question: "Why do I still get bitten by no-see-ums with my screens closed?",
      answer:
        "No-see-ums are small enough to pass through most standard window and porch screens. They breed in the wet marsh soil near the Intracoastal and bite most at dawn and dusk on still days. Finer mesh screens, ceiling fans on porches, and yard treatments around resting spots can all help reduce bites.",
    },
    {
      question: "My condo has roaches, but I keep it clean. Where are they coming from?",
      answer:
        "In most Jacksonville Beach condo buildings, roaches travel through shared walls, plumbing lines, and trash chutes. A clean unit can still get visitors from next door. We treat the entry points in your unit and, when possible, work with your HOA or manager so nearby units and common areas get treated too.",
    },
  ],
  nearbyAreas: ["neptune-beach", "atlantic-beach", "ponte-vedra-beach", "nocatee"],
  lastUpdated: "2026-10-12",
};

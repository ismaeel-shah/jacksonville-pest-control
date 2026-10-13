import type { AreaContent } from "../types";

export const fernandinaBeach: AreaContent = {
  slug: "fernandina-beach",
  published: true,
  name: "Fernandina Beach",
  region: "nassau-county",
  hubBlurb: "Salt marsh, sea air, and Victorian-era buildings on Amelia Island make no-see-ums, mosquitoes, and drywood termites the big concerns.",
  seo: {
    title: "Pest Control in Fernandina Beach, FL | Amelia Island",
    description:
      "Pest control in Fernandina Beach on Amelia Island for no-see-ums, mosquitoes, and termites. Service for homes, rentals, and shops. Call for a free inspection.",
    primaryKeyword: "pest control Fernandina Beach FL",
    secondaryKeywords: ["no-see-ums Fernandina Beach", "Amelia Island pest control", "termite inspection Fernandina Beach", "32034 exterminator"],
  },
  hero: {
    h1: "Pest Control in Fernandina Beach, FL",
    subheadline: "Island-wise pest control for Amelia Island homes, vacation rentals, and historic downtown businesses, from the marsh side to the beach.",
    image: {
      file: "fernandina-beach-fl-victorian-home-amelia-island.webp",
      alt: "Restored Victorian home with a wraparound porch in the Fernandina Beach historic district",
    },
  },
  intro: [
    "Life on Amelia Island comes with salt air, sunsets over the marsh, and a historic downtown that people travel a long way to see. It also comes with some of the toughest biting insects in Northeast Florida. The salt marshes along the Amelia River and Egans Creek are prime breeding ground for no-see-ums and mosquitoes, and they're never far from any Fernandina Beach home.",
    "Coastal humidity adds another layer. Moist, salty air is hard on wood, paint, and screens, and it helps termites and moisture-loving pests settle in. We handle pest control in Fernandina Beach, FL whether you live here year-round, visit a second home a few times a year, or manage a rental for guests. If you're only on the island part of the year, we can keep your home protected while you're away and send you an update after each visit.", // OWNER: confirm you send service updates to absentee owners
  ],
  commonPests: {
    heading: "Amelia Island's Most Common Pests",
    pests: [
      {
        name: "No-see-ums",
        why: "Amelia Island's marshes along Egans Creek and the Amelia River raise huge numbers of these biting gnats. Homes on the marsh side feel them most on still mornings and evenings, and ordinary screens won't stop them.",
      },
      {
        name: "Mosquitoes",
        why: "Tidal marsh, the Egans Creek Greenway, and rain-filled low spots give salt marsh and backyard mosquitoes plenty of places to breed.",
      },
      {
        name: "Drywood termites",
        why: "Coastal Florida is drywood termite country. Older wood in historic homes and beach houses gives them places to colonize without ever touching the soil.",
      },
      {
        name: "Palmetto bugs",
        why: "Warm, damp nights push these big roaches out of palm trees, mulch, and storm drains and into homes and restaurant kitchens.",
      },
      {
        name: "Ghost ants",
        why: "Sandy coastal soil and dense landscaping suit these tiny ants, which often show up in rental kitchens between guests.",
      },
    ],
  },
  homes: {
    heading: "Historic Homes, Beach Houses, and Rentals",
    body: [
      "The historic district around Centre Street and the neighborhoods nearby are full of Victorian-era homes with wood siding, deep porches, and detailed trim. Old Town, north of downtown near the river, is older still. Homes like these need regular termite inspections and careful repairs, since original wood is hard to replace. We look closely at porches, attics, and window frames, where drywood termites like to hide.",
      "Closer to the ocean along Fletcher Avenue, salt spray wears down screens, seals, and siding faster than inland, opening small gaps for pests. Newer neighborhoods like Amelia Park have tighter construction but plenty of landscaping, irrigation, and mosquitoes from nearby wetlands.",
      "Vacation rentals and downtown shops have their own needs. A single bad review about roaches or ants can hurt bookings, so many owners set up regular visits timed around guest turnover. Restaurants and retail businesses downtown can learn more on our [commercial pest control](/commercial) page.",
    ],
  },
  popularServices: [
    { slug: "mosquito-control", reason: "Salt marsh along the Amelia River and Egans Creek keeps mosquitoes and no-see-ums active near most island homes." },
    { slug: "termite-inspection", reason: "Historic wood homes and beach houses benefit from regular checks for drywood and subterranean termites." },
    { slug: "termite-control", reason: "Drywood termites are common in older coastal homes and can live inside trim, framing, and furniture." },
    { slug: "cockroach-control", reason: "Palmetto bugs move indoors on humid nights, and rental kitchens need to stay roach-free for guests." },
    { slug: "general-pest-control", reason: "Regular service between guest stays keeps ants and roaches out of vacation rentals." },
  ],
  neighborhoods: ["Historic Downtown", "Old Town", "Amelia Park", "South Fletcher", "North Fletcher", "Egans Creek area"], // OWNER: verify neighborhood names and ZIP codes before launch
  zipCodes: ["32034"],
  faqs: [
    {
      question: "Can you get rid of no-see-ums in Fernandina Beach?",
      answer:
        "We can reduce them, but no one can wipe them out on Amelia Island. No-see-ums breed in salt marsh mud that stretches far beyond your yard. What helps is treating the plants and shady areas where they rest, adding fine-mesh screens to porches, and running fans outdoors, since these tiny midges struggle in moving air.",
    },
    {
      question: "Do you service vacation rentals in Fernandina Beach?",
      answer:
        "Yes. We work with owners and property managers to schedule visits between guest stays so nobody's vacation is interrupted. Regular perimeter service helps keep palmetto bugs and ants out of kitchens and bathrooms. If a guest reports a problem, call us and we'll do our best to get there quickly.", // OWNER: confirm response times for rental calls
    },
    {
      question: "Are drywood termites a problem in historic Fernandina homes?",
      answer:
        "They can be. Drywood termites live inside dry wood rather than in the soil, so they can infest old trim, attic framing, and even antique furniture. A common sign is small piles of pellets that look like sand or coffee grounds near windowsills or baseboards. An inspection will tell you which termites you have and the right way to treat them.",
    },
  ],
  nearbyAreas: ["yulee", "northside-oceanway", "atlantic-beach"],
  lastUpdated: "2026-10-12",
};

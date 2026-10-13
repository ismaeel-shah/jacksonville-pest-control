import type { AreaContent } from "../types";

export const middleburg: AreaContent = {
  slug: "middleburg",
  published: true,
  name: "Middleburg",
  region: "clay-county",
  hubBlurb: "Acreage, pine woods, and Black Creek bring ticks, fire ants, and wildlife right up to the porch in semi-rural Middleburg.",
  seo: {
    title: "Pest Control in Middleburg, FL | Rural & Acreage",
    description:
      "Middleburg, FL pest control for wooded lots and acreage. Help with ticks, fire ants, wildlife, and rodents in homes, sheds, and barns. Call for a free quote.",
    primaryKeyword: "pest control Middleburg FL",
    secondaryKeywords: ["tick control Middleburg", "fire ants Middleburg FL", "wildlife removal Clay County", "32068 pest control"],
  },
  hero: {
    h1: "Pest Control in Middleburg, FL",
    subheadline: "Yard, home, and outbuilding protection for Middleburg properties set among pine woods and the forks of Black Creek.",
    image: {
      file: "middleburg-fl-home-on-wooded-acreage.webp",
      alt: "Middleburg home on a large wooded lot with a metal shed and tall pine trees",
    },
  },
  intro: [
    "Middleburg still feels like the country, and that's why a lot of people live here. You get room to breathe, tall pines, and the north and south forks of Black Creek winding through the area. Jennings State Forest is close by, too.",
    "The trade-off is that you share your land with a lot of wildlife and insects. When your yard backs up to woods instead of another fence, ticks, fire ants, raccoons, and rodents don't have far to travel. Pest control in Middleburg, FL works best when it covers the whole property, not just the inside of the house.",
    "We treat homes, detached garages, sheds, and barns. Whether you have a newer house off Blanding Boulevard or a few acres down a dirt road, we'll walk your land with you and point out what's drawing pests in.",
  ],
  commonPests: {
    heading: "What Middleburg Properties Deal With",
    pests: [
      {
        name: "Ticks",
        why: "Tall grass, brush lines, and deer moving between wooded tracts carry ticks right to the edge of your mowed yard, where pets and kids pick them up.",
      },
      {
        name: "Fire ants",
        why: "Open pastures and large sunny lawns are perfect for big mounds. After Black Creek floods, fire ants can float in clumps and resettle on higher ground near homes.",
      },
      {
        name: "Raccoons, opossums, and armadillos",
        why: "Woods and creek bottoms give these animals cover. They raid trash and feed bins, dig up lawns, and sometimes den under porches or mobile homes.",
      },
      {
        name: "Rats and mice",
        why: "Feed rooms, chicken coops, woodpiles, and cluttered sheds give rodents food and shelter, and they move into the house when the weather turns cool.",
      },
    ],
  },
  homes: {
    heading: "Middleburg Homes, Land, and Pest Control",
    body: [
      "Housing in Middleburg covers a wide range. Some older homes sit near the historic district by the creek. Established subdivisions like Breckenridge date back to the 1990s, and newer builder communities keep going up along the main roads. Then there are manufactured homes and site-built houses on acreage, many with wells, septic systems, and several outbuildings.",
      "More land means more places for pests to hide. We pay close attention to skirting on manufactured homes, gaps under barn doors, and the edges where your lawn meets the woods. A strong perimeter barrier, plus [flea and tick treatment](/flea-tick-control) along the tree line, does more for a rural property than spraying inside alone.",
      "Homes along Black Creek have one more concern. When the creek rises after big storms, soggy ground and debris push rodents, ants, and other pests toward drier spots, including your house. We recommend a check after any serious flood.",
    ],
  },
  popularServices: [
    { slug: "flea-tick-control", reason: "Wooded edges and tall grass make ticks a real concern for Middleburg families and pets." },
    { slug: "ant-control", reason: "Fire ant mounds pop up fast in large open lawns and pastures, especially after heavy rain." },
    { slug: "wildlife-removal", reason: "Raccoons, opossums, and armadillos wander in from nearby woods and the creek bottoms." },
    { slug: "rodent-control", reason: "Sheds, barns, and feed storage on acreage attract rats and mice." },
    { slug: "general-pest-control", reason: "A full-property perimeter service fits Middleburg's bigger lots better than indoor-only treatment." },
  ],
  neighborhoods: ["Middleburg Historic District", "Hill Top", "Breckenridge", "The Glades", "Pine Ridge", "Black Creek Shores"], // OWNER: verify neighborhood names and ZIP codes before launch
  zipCodes: ["32068"],
  faqs: [
    {
      question: "Can you treat my whole Middleburg property, not just the house?",
      answer:
        "Yes. On larger lots we treat the home's perimeter and also target the areas pests use to get close, like tree lines, fence rows, sheds, and barns. Coverage depends on your acreage and what you need protected, so we walk the property first. Then we explain exactly which areas we'll treat and why.",
    },
    {
      question: "How do I keep ticks out of my yard in Middleburg?",
      answer:
        "Start by keeping grass short and creating a clear buffer between your lawn and the woods. Ticks wait on tall grass and brush for a host to brush past. We can treat that border zone and shady spots where ticks rest. Keep your pets on a vet-recommended tick preventive too, since treatment works best alongside it.",
    },
    {
      question: "Do you handle snakes on rural Middleburg lots?",
      answer:
        "We can help make your property less inviting to snakes. Most snakes show up because there are rodents to eat and clutter to hide in. Controlling rats and mice, clearing brush and woodpiles near the house, and sealing gaps under porches all help. Florida wildlife rules protect some species, so please don't try to handle a snake yourself.", // OWNER: confirm whether you offer snake removal
    },
  ],
  nearbyAreas: ["orange-park", "fleming-island", "green-cove-springs", "westside"],
  lastUpdated: "2026-10-12",
};

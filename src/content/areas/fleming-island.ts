import type { AreaContent } from "../types";

export const flemingIsland: AreaContent = {
  slug: "fleming-island",
  published: true,
  name: "Fleming Island",
  region: "clay-county",
  hubBlurb: "Water on nearly every side and big HOA lawns mean mosquitoes, chinch bugs, and fire ants are the main event in Fleming Island.",
  seo: {
    title: "Pest Control in Fleming Island, FL | Lawn & Home Pests",
    description:
      "Fleming Island pest control for HOA homes near Doctors Lake and the St. Johns River. Mosquitoes, lawn pests, ants, and termites. Call to reach a local pro.",
    primaryKeyword: "pest control Fleming Island FL",
    secondaryKeywords: ["mosquito control Fleming Island", "chinch bugs Fleming Island", "Eagle Harbor pest control", "32003 exterminator"],
  },
  hero: {
    h1: "Pest Control in Fleming Island, FL",
    subheadline: "Call to reach a local pro for yard and home pest protection in Fleming Island neighborhoods surrounded by Doctors Lake, Black Creek, and the St. Johns River.",
    image: {
      file: "fleming-island-fl-hoa-home-pond-view.webp",
      alt: "Two-story Fleming Island home with a green St. Augustine lawn facing a neighborhood pond",
    },
  },
  intro: [
    "Fleming Island isn't a true island, but it sure acts like one. The St. Johns River runs along the east side, Doctors Lake sits to the north, Black Creek wraps around the south, and Swimming Pen Creek marks the west. Add the ponds and golf course water inside neighborhoods like Eagle Harbor, and you have a community where mosquitoes rarely take a break.",
    "Most homes here are in master-planned, HOA communities built after the old Navy airfield runways gave way to houses. That means well-kept St. Augustine lawns, irrigated flower beds, and HOA rules about how your yard should look. For pest control in Fleming Island, FL, the yard matters as much as the house. A good local pest pro focuses on keeping your lawn healthy, your patio usable, and your home sealed.",
  ],
  commonPests: {
    heading: "Top Pests on Fleming Island",
    intro: ["Fleming Island's pest problems mostly start outdoors, in the lawn and around the water."],
    pests: [
      {
        name: "Mosquitoes",
        why: "With water on almost every border, plus stormwater ponds and golf course lakes inside neighborhoods, breeding spots are never far from your yard.",
      },
      {
        name: "Chinch bugs",
        why: "These tiny insects feed on St. Augustine grass, the most common lawn here. Damage shows up as yellow, dry patches in sunny spots, often in the hottest months.",
      },
      {
        name: "Fire ants",
        why: "Irrigated lawns, common areas, and playground edges give fire ants soft soil to build mounds, often right where kids and pets play.",
      },
      {
        name: "No-see-ums",
        why: "Homes close to the river and the marshy edges of Black Creek can get swarms of these biting midges around dawn and dusk.",
      },
      {
        name: "Ghost ants",
        why: "These tiny pale ants nest in mulch and landscape beds, then trail inside along door frames and kitchen counters looking for sweets.",
      },
    ],
  },
  homes: {
    heading: "Fleming Island Homes and What They Need",
    body: [
      "A lot of Fleming Island's homes went up from the late 1990s on, in communities like Eagle Harbor, Fleming Island Plantation, and Pace Island. They're built tighter than older homes, so indoor pest problems are usually lighter. Even so, termite protection on a newer home doesn't last forever, and homeowners often forget when the builder's original treatment was done. It's worth checking your paperwork and planning [termite protection](/termite-control) before it lapses.", // OWNER: confirm wording on builder termite coverage
      "The bigger job is usually the yard. HOA lawns get regular irrigation, which is great for grass and also great for chinch bugs, mole crickets, and fire ants. Lawn pest treatments timed to the season help keep your yard within HOA standards. Homes that back up to ponds or the golf course also need extra attention for mosquitoes and the ants that move in along the water's edge.",
    ],
  },
  popularServices: [
    { slug: "mosquito-control", reason: "Ponds, golf course lakes, and river frontage keep mosquitoes near most Fleming Island yards." },
    { slug: "lawn-pest-control", reason: "Chinch bugs and mole crickets damage the St. Augustine lawns that HOAs here expect you to keep green." },
    { slug: "ant-control", reason: "Fire ants and ghost ants thrive in irrigated lawns, mulch beds, and shared common areas." },
    { slug: "termite-control", reason: "Many homes from the late 1990s and 2000s are reaching the point where original termite protection should be checked." },
    { slug: "general-pest-control", reason: "A regular perimeter service keeps outdoor pests from following the irrigation lines inside." },
  ],
  neighborhoods: ["Eagle Harbor", "Fleming Island Plantation", "Pace Island", "Holmes Landing", "Hibernia"], // OWNER: verify neighborhood names and ZIP codes before launch
  zipCodes: ["32003"],
  faqs: [
    {
      question: "Can pest service work around my HOA's lawn rules in Fleming Island?",
      answer:
        "Yes. Many Fleming Island homes are in HOA communities, and a local pro can plan service with that in mind. Treating lawn pests before they leave brown patches helps you avoid a violation letter, and you can ask your technician for a record of what was applied if your board asks. If your HOA has its own landscape contractor, service can be coordinated around their mowing and irrigation schedule.",
    },
    {
      question: "Why does my St. Augustine lawn have dead patches?",
      answer:
        "Chinch bugs are one of the most likely causes in Fleming Island, especially in sunny spots near driveways and sidewalks during hot weather. Disease, drought stress, and irrigation problems can look similar, though. A technician should check the grass up close for insects before treating, so you aren't treating a problem you don't have.",
    },
    {
      question: "Does mosquito service help if I live on a golf course pond?",
      answer:
        "For most pond and golf course homes, yes. Water that sits still near your yard gives mosquitoes a steady place to breed, and shady shrubs give adults a place to rest. Regular treatments of those resting spots can make your patio far more comfortable. Technicians keep products away from the water as labels require.",
    },
    {
      question: "Can no-see-ums be treated on Fleming Island?",
      answer:
        "They can be reduced, but it's important to be honest: no-see-ums breed in wet, marshy ground that often isn't on your property. Treating shrubs and screened areas can lower the number biting you. Fine-mesh screens and ceiling fans on porches also help a lot, since these tiny midges are weak fliers.",
    },
  ],
  nearbyAreas: ["orange-park", "green-cove-springs", "middleburg", "mandarin"],
  lastUpdated: "2026-10-16",
};

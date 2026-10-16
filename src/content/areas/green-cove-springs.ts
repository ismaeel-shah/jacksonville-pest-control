import type { AreaContent } from "../types";

export const greenCoveSprings: AreaContent = {
  slug: "green-cove-springs",
  published: true,
  name: "Green Cove Springs",
  region: "clay-county",
  hubBlurb: "Clay County's riverside seat, where old wood homes near downtown need termite care and new subdivisions need protection from day one.",
  seo: {
    title: "Pest Control in Green Cove Springs, FL | Local Pros",
    description:
      "Green Cove Springs pest control for historic homes and new builds. Termite inspections, pre-construction treatment, and mosquitoes. Call to reach a local pro.",
    primaryKeyword: "pest control Green Cove Springs FL",
    secondaryKeywords: ["termite inspection Green Cove Springs", "exterminator Green Cove Springs", "Clay County termite treatment", "32043 pest control"],
  },
  hero: {
    h1: "Pest Control in Green Cove Springs, FL",
    subheadline: "From century-old homes near Spring Park to brand-new streets west of town, call to reach a local pro who protects Green Cove Springs properties on the St. Johns River.",
    image: {
      file: "green-cove-springs-fl-historic-wood-home.webp",
      alt: "Historic two-story wood-frame home with a front porch on a shady street in Green Cove Springs",
    },
  },
  intro: [
    "Green Cove Springs is the county seat of Clay County and one of the oldest towns in the area. Its namesake spring rises near the west bank of the St. Johns River, flows through the city pool at Spring Park, and runs on into the river. It's a lovely spot, and a reminder of how much water shapes life here.",
    "Today the city is a mix of old and new. Near downtown and the historic courthouse, you'll find wood-frame homes that have stood for generations. A few miles out, new subdivisions are filling in land that was woods and pasture not long ago. Pest control in Green Cove Springs, FL has to handle both. Older homes need careful termite work, and new homes need a solid start. One call connects you with a local pest control pro who can treat each kind of home the right way.",
  ],
  commonPests: {
    heading: "Common Pests in Green Cove Springs",
    intro: ["Age of the home and closeness to the river decide most of the pest problems here."],
    pests: [
      {
        name: "Subterranean termites",
        why: "Older homes near downtown often have wood porches, steps, and crawl spaces close to damp, sandy soil, which gives termites an easy way in.",
      },
      {
        name: "Drywood termites",
        why: "Unlike their underground cousins, these live right inside dry wood. Old trim, attic framing, and antique furniture in historic homes can hide colonies for years.",
      },
      {
        name: "Mosquitoes",
        why: "The St. Johns River, the spring run, and drainage ditches around town keep mosquito numbers high in warm months.",
      },
      {
        name: "Carpenter ants",
        why: "Wood softened by moisture from leaky gutters or old window frames attracts carpenter ants, which hollow it out to build nests.",
      },
    ],
  },
  homes: {
    heading: "Old Homes, New Homes, and What Each Needs",
    body: [
      "The Green Cove Springs Historic District and the blocks around it have many older wood homes, some raised on piers with crawl spaces. Those crawl spaces can trap moisture, and moisture invites termites, carpenter ants, and wood rot. A thorough inspection covers the space under the house, the porch supports, and the attic, and the right treatments respect older materials.",
      "New construction tells a different story. As the First Coast Expressway extends past the west and south sides of town, neighborhoods like Rolling Hills and Cross Creek keep growing. The ideal time to protect a new home from termites is before the slab is poured. Builders can call to arrange [pre-construction termite treatment](/pre-construction-termite-treatment) with a local pro, and new owners can set up ongoing protection once they move in.",
    ],
  },
  popularServices: [
    { slug: "termite-inspection", reason: "Older wood homes near downtown benefit from yearly checks, and buyers need a WDO report before closing." },
    { slug: "pre-construction-termite-treatment", reason: "New subdivisions going up around the city need termite protection before the slab is poured." },
    { slug: "termite-control", reason: "Both subterranean and drywood termites target the aged wood in historic homes." },
    { slug: "mosquito-control", reason: "The river and spring run keep mosquitoes active in yards on the east side of town." },
    { slug: "moisture-control", reason: "Damp crawl spaces under older homes invite termites, carpenter ants, and rot." },
  ],
  neighborhoods: ["Green Cove Springs Historic District", "Magnolia Point", "Rolling Hills", "Cross Creek", "Asbury Lake area"], // OWNER: verify neighborhood names and ZIP codes before launch
  zipCodes: ["32043"],
  faqs: [
    {
      question: "How are termites treated in a historic Green Cove Springs home?",
      answer:
        "Treatment starts with a careful inspection to find out which type of termite you have, because subterranean and drywood termites need different treatments. For older homes, a technician should choose methods that protect original wood and finishes as much as possible. Sometimes that means a targeted treatment instead of a whole-house approach. Ask your technician to explain the options and trade-offs before any work starts.",
    },
    {
      question: "My new home in Green Cove Springs was pre-treated. Do I still need termite protection?",
      answer:
        "Usually, yes, in time. A pre-construction treatment protects the soil around your foundation when the home is built, but it wears down over the years. Check your closing papers for the builder's termite coverage and its end date. Before it runs out, a local pro can inspect the home and set up ongoing protection so there's no gap.",
    },
    {
      question: "Why do I get so many mosquitoes near the river?",
      answer:
        "Slow water along the riverbank, the spring run, and roadside ditches all give mosquitoes calm places to lay eggs. Shady live oaks and thick shrubs then give adults a cool place to rest during the day. Treating those resting spots and dumping standing water in your yard can cut down the bites a lot.",
    },
  ],
  nearbyAreas: ["fleming-island", "middleburg", "orange-park", "st-johns"],
  lastUpdated: "2026-10-16",
};

import type { AreaContent } from "../types";

export const mandarin: AreaContent = {
  slug: "mandarin",
  published: true,
  name: "Mandarin",
  region: "jacksonville",
  hubBlurb: "Riverfront neighborhoods under huge live oaks, where roof rats, squirrels, and termites in aging homes top the list.",
  seo: {
    title: "Pest Control in Mandarin, FL | Free Inspection",
    description:
      "Pest control in Mandarin, Jacksonville for roof rats, termites, mosquitoes and more. Local technicians who know riverfront homes. Free inspection.",
    primaryKeyword: "pest control Mandarin FL",
    secondaryKeywords: ["roof rats Mandarin", "termite control Mandarin", "exterminator Mandarin Jacksonville", "32223 pest control"],
  },
  hero: {
    h1: "Pest Control in Mandarin, FL",
    subheadline: "Protection for Mandarin homes tucked under old oaks and along the St. Johns River, from the attic to the foundation.",
    image: {
      file: "mandarin-jacksonville-home-live-oaks.webp",
      alt: "Brick ranch home in Mandarin shaded by large live oaks with Spanish moss",
    },
  },
  intro: [
    "Mandarin is one of the prettiest parts of Jacksonville, and one of the busiest for pest control. The same things that make it special, the moss-draped live oaks, the long stretch of St. Johns River shoreline, and the creeks that wind through its neighborhoods, also give pests plenty of food, water, and shelter.",
    "Most of the calls we get from Mandarin homeowners start in one of two places: the attic or the foundation. Overhanging limbs act like highways for roof rats and squirrels, while decades-old wood trim and slab joints give termites a way in. We know these homes, from ranch houses off San Jose Boulevard to the newer streets near Julington Creek, and we tailor every treatment to how they're built.",
  ],
  commonPests: {
    heading: "Common Pest Problems in Mandarin",
    intro: ["Here's what we see most often across Mandarin, and why these pests feel so at home here."],
    pests: [
      {
        name: "Roof rats",
        why: "Mandarin's mature oaks often grow right over rooftops. Roof rats climb the trunks, run along the limbs, and slip into soffits and gable vents, then nest in attic insulation.",
      },
      {
        name: "Squirrels",
        why: "Gray squirrels thrive in the same tree canopy. They chew through fascia boards and roof vents to reach warm attics, especially in late winter when they're looking for nesting spots.",
      },
      {
        name: "Subterranean termites",
        why: "Many Mandarin homes have decades-old wood framing and trim, plus sandy, moist soil near the river and creeks. That combination makes termite inspections a must here.",
      },
      {
        name: "Mosquitoes",
        why: "Julington Creek, Goodby's Creek, retention ponds, and shady yards hold water after summer storms, giving mosquitoes ideal breeding spots close to your patio.",
      },
      {
        name: "Palmetto bugs",
        why: "Thick leaf litter and mulch under the oaks keep the ground cool and damp, perfect for large outdoor roaches that wander indoors when it rains.",
      },
    ],
  },
  homes: {
    heading: "Mandarin Homes and What They Mean for Pest Control",
    body: [
      "Much of Mandarin grew from former citrus groves and farmland into neighborhoods during the late 20th century, so many homes are now several decades old. Older wood siding, trim, and door frames can soften over time, and settling slabs develop small cracks. Those are exactly the openings termites look for, which is why we recommend a [termite inspection](/termite-inspection) every year for homes of this age.",
      "Large, wooded lots are another Mandarin trademark. They're beautiful, but limbs touching the roof and heavy shade over the house make rodent and wildlife problems more likely. During every inspection we look up as well as down, checking rooflines, vents, and soffits for gaps. Riverfront and creekside homes also get extra attention around docks, seawalls, and boathouses, where moisture and debris attract pests.",
      "Newer subdivisions closer to Julington Creek have different needs. Younger homes usually have fewer entry points, but irrigated lawns and retention ponds bring fire ants, mosquitoes, and lawn pests.",
    ],
  },
  popularServices: [
    { slug: "rodent-control", reason: "Roof rats using oak limbs to reach attics are one of the most common calls we get from Mandarin." },
    { slug: "termite-control", reason: "Decades-old wood and moist soil near the river put many Mandarin homes at higher termite risk." },
    { slug: "wildlife-removal", reason: "Squirrels and raccoons nest in attics under Mandarin's heavy tree canopy." },
    { slug: "termite-inspection", reason: "Mandarin homes change hands often, and buyers need a WDO report before closing." },
    { slug: "mosquito-control", reason: "Creeks, ponds, and shady yards keep mosquitoes active well into fall." },
    { slug: "general-pest-control", reason: "Year-round protection keeps palmetto bugs and ants from moving in from the leaf litter." },
  ],
  // OWNER: verify neighborhood names and ZIP codes before launch
  neighborhoods: ["Historic Mandarin", "Mandarin Point", "Beauclerc", "Loretto", "Julington Creek area", "Goodby's Creek area"],
  zipCodes: ["32223", "32257", "32258"],
  faqs: [
    {
      question: "Why do so many Mandarin homes get roof rats?",
      answer:
        "Mandarin's large live oaks often hang directly over roofs, giving roof rats an easy path from the trees to soffits, vents, and attic gaps. Once inside, they nest in insulation and come out at night. Trimming limbs back from the roofline and sealing entry points are the two best ways to keep them out for good.",
    },
    {
      question: "How often should a Mandarin home have a termite inspection?",
      answer:
        "Once a year is a good rule for most Mandarin homes. Many houses here have wood framing and trim that has been in place for decades, and the sandy, moist soil near the river suits subterranean termites. A yearly inspection catches activity early, before it turns into expensive structural repairs.",
    },
    {
      question: "Can you treat my yard for mosquitoes if I live on a creek?",
      answer:
        "Yes. Creekside and riverfront yards are some of the places mosquito treatments help most. We treat the shady plants where adult mosquitoes rest and target standing water on your property. We keep products away from the water's edge as their labels require, so the creek and its wildlife are protected.",
    },
  ],
  nearbyAreas: ["st-johns", "san-marco", "baymeadows-deerwood", "orange-park"],
  lastUpdated: "2026-10-12",
};

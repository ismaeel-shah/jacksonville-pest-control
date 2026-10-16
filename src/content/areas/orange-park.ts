import type { AreaContent } from "../types";

export const orangePark: AreaContent = {
  slug: "orange-park",
  published: true,
  name: "Orange Park",
  region: "clay-county",
  hubBlurb: "Military moves, home sales, and waterfront living along Doctors Lake and the St. Johns River keep move-in inspections, termite checks, and mosquito service busy here.",
  seo: {
    title: "Pest Control in Orange Park, FL | Move-In Inspections",
    description:
      "Pest control in Orange Park, FL for new arrivals and longtime residents. Move-in inspections, WDO reports, termite and mosquito service. Call a local pro today.",
    primaryKeyword: "pest control Orange Park FL",
    secondaryKeywords: ["WDO inspection Orange Park", "exterminator Orange Park", "mosquito control Doctors Lake", "32073 pest control"],
  },
  hero: {
    h1: "Pest Control in Orange Park, FL",
    subheadline: "Whether you just got orders to NAS Jacksonville or you've lived by Doctors Lake for years, one call connects you with a local pro who can help you start clean and stay that way.",
    image: {
      file: "orange-park-fl-home-near-doctors-lake.webp",
      alt: "Single-story Orange Park home with a screened porch and a view toward Doctors Lake",
    },
  },
  intro: [
    "Pest control in Orange Park, FL often starts with a moving truck. NAS Jacksonville sits only a few miles north of town, so a lot of families arrive, settle in for a tour, and then sell or rent out their homes when new orders come. Every one of those moves is a chance for pests to ride in, or for a problem the last owner ignored to show up.",
    "Water is the other big factor. Orange Park sits right on the St. Johns River, and Doctors Lake curves along its south side. That means humid air, damp soil, and plenty of mosquitoes from spring through fall.",
    "Local pest control pros work all over the area, from older streets near River Road to the newer homes out toward Oakleaf. If you're buying, selling, or simply settling in, call to speak with one who can tell you what's living in your home and make a plan that fits how long you'll be there.",
  ],
  commonPests: {
    heading: "Pests Orange Park Homeowners Deal With Most",
    pests: [
      {
        name: "German cockroaches",
        why: "These small roaches hitch rides in moving boxes, used appliances, and furniture. With so many households coming and going, they often turn up in homes and rentals right after a move.",
      },
      {
        name: "Mosquitoes",
        why: "The river shoreline, Doctors Lake, and the low spots that fill up after summer storms give mosquitoes plenty of places to breed close to your back porch.",
      },
      {
        name: "Subterranean termites",
        why: "Damp, sandy soil near the water suits them, and many established homes here have wood that has been in contact with that soil for decades. Spring swarms are common.",
      },
      {
        name: "Bed bugs",
        why: "Bed bugs travel in luggage and secondhand mattresses. Frequent moves and short-term rentals near the base make early checks worth it.",
      },
    ],
  },
  homes: {
    heading: "Housing in Orange Park and How It Affects Pest Control",
    body: [
      "Orange Park has two very different kinds of neighborhoods. Near the river and close to town you'll find older homes, including the River Road Historic District and mid-century streets like Bellair and Meadowbrook that grew up around the base. Older homes tend to have more gaps around doors, plumbing, and rooflines, plus wood that has seen years of Florida humidity.",
      "Farther west, places like Oakleaf Plantation are mostly newer construction with HOA lawns and retention ponds. Those homes are tighter, but fire ants and mosquitoes move in fast around new landscaping and standing water.",
      "Because so many Orange Park homes change hands, [WDO inspections](/termite-inspection) for buyers, sellers, and agents are a common need here. If you're renting out your home when you PCS, a regular service plan helps keep it pest-free between tenants.",
    ],
  },
  popularServices: [
    { slug: "termite-inspection", reason: "Frequent home sales tied to military orders mean many Orange Park buyers need a WDO report before closing." },
    { slug: "cockroach-control", reason: "German roaches often arrive with moving boxes and used appliances during a move." },
    { slug: "mosquito-control", reason: "Yards near Doctors Lake and the St. Johns River can stay buggy from spring well into fall." },
    { slug: "termite-control", reason: "Older homes near the river sit on damp, sandy soil that subterranean termites like." },
    { slug: "bed-bug-treatment", reason: "Bed bugs can travel with luggage and secondhand furniture when families move in." },
  ],
  neighborhoods: ["River Road Historic District", "Bellair-Meadowbrook Terrace", "Lakeside", "Holly Point", "Ridgewood", "Oakleaf Plantation"], // OWNER: verify neighborhood names and ZIP codes before launch
  zipCodes: ["32073", "32065"],
  faqs: [
    {
      question: "Should I get a pest inspection when I move to Orange Park on military orders?",
      answer:
        "Yes, it's a smart first step. A move-in inspection shows you whether the last occupants left behind roaches, ants, or signs of termites before your furniture fills the rooms. It's also much easier to treat an empty house. If you're renting, check your lease first, since some landlords handle pest service and some leave it to the tenant.",
    },
    {
      question: "Can I get a WDO inspection for an Orange Park home sale?",
      answer:
        "Yes. A WDO inspection checks for termites and other wood-destroying organisms and produces the report lenders and buyers ask for. Many Orange Park sales move on tight timelines because of new orders, so mention your closing date when you call and ask about scheduling. Setting it up early in the sale helps make sure the report is ready before closing.",
    },
    {
      question: "Why are mosquitoes so bad near Doctors Lake?",
      answer:
        "Calm, shallow edges along the lake and the river, plus thick shade from waterfront trees, give mosquitoes ideal places to breed and rest. Rain makes it worse by filling low spots in yards. A technician can treat the shrubs and shady areas where adults hide and point out standing water you can dump, while keeping products away from the water's edge.",
    },
  ],
  nearbyAreas: ["fleming-island", "middleburg", "westside", "mandarin"],
  lastUpdated: "2026-10-16",
};

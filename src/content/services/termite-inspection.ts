import type { ServiceContent } from "../types";

export const termiteInspection: ServiceContent = {
  slug: "termite-inspection",
  published: true,
  name: "Termite Inspection & WDO Reports",
  navLabel: "Termite Inspection",
  icon: "inspection",
  audience: ["residential", "commercial"],
  cardDescription: "Thorough termite inspections and official Florida WDO reports for home buyers, sellers, lenders, and real estate agents.",
  seo: {
    title: "Termite Inspection in Jacksonville, FL | WDO Reports",
    description:
      "Termite inspection and Florida WDO reports in Jacksonville for buyers, sellers, and agents. Clear findings explained in plain English. Schedule yours today.",
    primaryKeyword: "termite inspection Jacksonville FL",
    secondaryKeywords: ["WDO inspection", "wood-destroying organism report", "real estate termite inspection", "termite letter", "FDACS WDO form"],
  },
  hero: {
    h1: "Termite Inspection & WDO Reports in Jacksonville, FL",
    subheadline: "Know exactly what's going on inside the walls before you buy, sell, or renew your protection.",
    image: {
      file: "termite-inspection-jacksonville-inspector-flashlight.webp",
      alt: "Inspector using a flashlight to check the foundation and baseboards of a Jacksonville home for termite signs",
    },
  },
  intro: [
    "A termite inspection tells you whether termites or other wood-destroying organisms are active in a home, whether they've left damage behind, and whether the home has been treated before. In Florida, it's one of the most common checks in a real estate sale.",
    "Our licensed inspectors look over the accessible areas of the home inside and out, then record the findings on the official Florida Wood-Destroying Organism (WDO) inspection report. We go over the results with you in plain language. If we do find a problem, you'll know what it means and what your options are, with no pressure to buy anything that day.",
  ],
  localProblem: {
    heading: "Why Termite Inspections Matter So Much in Jacksonville",
    body: [
      "Northeast Florida's heat, humidity, and sandy soil make it a hard place for any home to stay termite-free. Subterranean termites are active here all year, and Formosan termites have moved into parts of the region. Damage often stays hidden behind drywall and under flooring.",
      "Moisture adds to the risk. Wood-decay fungi and wood-boring beetles also count as wood-destroying organisms, and both do well in our damp climate, especially in crawl spaces and older homes.",
      "That's why buyers, lenders, and homeowners here rely on an inspection instead of guessing. It's a small step that can save you from expensive surprises after closing.",
    ],
  },
  signs: {
    heading: "When You Need a WDO Inspection",
    intro: "You don't have to see termites to need an inspection. These are the most common reasons people call us.",
    items: [
      { title: "You're buying a home", description: "Buyers usually order a WDO inspection during the inspection period of the contract." },
      { title: "Your lender requires one", description: "Depending on the loan type, many lenders ask for a clean WDO report before closing." },
      { title: "You're selling and want no surprises", description: "A pre-listing inspection lets you fix issues before a buyer's inspector finds them." },
      { title: "You found mud tubes or wings", description: "Signs of activity call for a closer look by a trained inspector." },
      { title: "It's time for your yearly check", description: "Annual inspections are part of most termite protection plans and catch new activity early." },
      { title: "You're renovating or adding on", description: "Opening walls or floors is a good time to confirm there's no hidden damage." },
    ],
  },
  process: {
    heading: "What Our Inspector Checks",
    intro: "A WDO inspection is a visual check of the readily accessible areas of the home.",
    steps: [
      { title: "Exterior and foundation", description: "We walk the perimeter looking for mud tubes, damaged siding and trim, wood-to-soil contact, and moisture problems." },
      { title: "Interior rooms", description: "We check baseboards, door and window frames, bathrooms, and kitchens for damaged wood, frass, and discarded wings." },
      { title: "Garage, attic, and crawl space", description: "Where they can be safely reached, we look at framing, sill plates, and roof sheathing for activity or old damage." },
      { title: "Signs of past treatment", description: "We note any drill holes, bait stations, or treatment stickers that show the home was treated before." },
      { title: "Report and walkthrough", description: "We complete the official Florida WDO form and explain each finding and any areas we couldn't access." },
    ],
  },
  treatmentOptions: {
    heading: "Inspection Types We Offer",
    intro: [
      "Not every inspection is for a real estate deal. Here's how they differ.",
    ],
    options: [
      {
        title: "Real estate WDO inspection",
        description: "A full inspection documented on the official Florida WDO report, ready to share with your agent, lender, and the other party.",
      },
      {
        title: "Homeowner termite inspection",
        description: "A check for peace of mind, after spotting signs, or before you choose a treatment. We explain what we find and what it means.",
      },
      {
        title: "Annual protection plan inspection",
        description: "A yearly visit for customers on a termite plan to confirm protection is working and catch any new activity early.",
      },
    ],
  },
  safety: {
    heading: "Is a Termite Inspection Safe for Kids and Pets?",
    body: [
      "Yes. An inspection is a visual check. We use flashlights, moisture meters, and probing tools, and we don't apply any products during a standard WDO inspection.", // OWNER: confirm tools used (e.g. moisture meters)
      "We do need clear access to the garage, attic hatch, under sinks, and any crawl space, so please move stored items and secure pets before we arrive. If treatment is needed later, we'll explain safety steps for that service separately.",
    ],
  },
  costFactors: [
    { title: "Purpose of the inspection", description: "A real estate WDO report involves official paperwork that a quick homeowner check may not." },
    { title: "Size of the home", description: "More square footage means more rooms, walls, and foundation to look over." },
    { title: "Crawl space or slab", description: "Homes with crawl spaces take longer, since the inspector needs to check under the floor." },
    { title: "Outbuildings", description: "Detached garages, sheds, and guest houses can be added to the inspection if you need them covered." },
    { title: "Scheduling needs", description: "Tight closing dates may affect how we schedule your visit." }, // OWNER: confirm whether rush scheduling is offered
  ],
  prevention: {
    heading: "How to Prepare for Your Termite Inspection",
    tips: [
      "Clear a path to the attic hatch and any crawl space entrance.",
      "Move boxes and storage a few inches away from garage walls.",
      "Empty the space under kitchen and bathroom sinks if you can.",
      "Unlock gates, sheds, and any outbuildings that need to be checked.",
      "Have past termite treatment paperwork ready if you have it.",
      "Let us know about pets so we can plan around them.",
    ],
  },
  forBusinesses: [
    "We also inspect apartment buildings, offices, and other commercial properties for owners, buyers, and property managers. See our [commercial pest control](/commercial) services for ongoing programs.",
  ],
  faqs: [
    {
      question: "How long does it take to get the WDO report?",
      answer:
        "In most cases, you'll get the completed WDO report within one business day of the inspection. Your inspector will explain the main findings before leaving the property, so you're not left waiting to hear if there's a problem. If your closing date is close, tell us when you schedule and we'll do our best to work with your timeline.", // OWNER: confirm report turnaround time
    },
    {
      question: "What happens if the inspection finds termites?",
      answer:
        "If we find active termites, the report will say so, along with where we found them and any visible damage. We'll walk you through your options, from a liquid barrier to bait stations. You can learn more on our [termite treatment page](/termite-control). In a sale, buyers and sellers usually negotiate who handles treatment and repairs.",
    },
    {
      question: "I'm a real estate agent. Can you work with my clients' timelines?",
      answer:
        "Yes, we work with Jacksonville agents regularly and understand that inspection periods are short. You can schedule for your client, and we can send the report to you, the buyer, and the lender with permission. We'll give clear notes on any findings so you can keep the deal moving without confusion.", // OWNER: confirm agent scheduling and report delivery process
    },
    {
      question: "Does a WDO report check for hidden damage inside walls?",
      answer:
        "No, a WDO inspection is a visual check of the areas we can safely reach. Inspectors don't remove drywall, pull up flooring, or move heavy furniture. The report lists any areas that were blocked or not accessible. If something looks suspicious, we may recommend a closer look by a contractor.",
    },
  ],
  relatedServices: ["termite-control", "moisture-control", "pre-construction-termite-treatment"],
  lastUpdated: "2026-10-12",
};

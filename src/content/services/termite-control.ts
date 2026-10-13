import type { ServiceContent } from "../types";

export const termiteControl: ServiceContent = {
  slug: "termite-control",
  published: true,
  name: "Termite Control",
  navLabel: "Termite Control",
  icon: "termite",
  audience: ["residential", "commercial"],
  cardDescription: "Treatment and ongoing protection from subterranean and Formosan termites, the species that cause the most damage here.",
  seo: {
    title: "Termite Control in Jacksonville, FL | Free Inspection",
    description:
      "Termite control in Jacksonville, FL for subterranean and Formosan termites. Liquid and bait treatments with ongoing protection. Free termite inspection.",
    primaryKeyword: "termite control Jacksonville FL",
    secondaryKeywords: ["termite treatment", "Formosan termites", "subterranean termites", "termite bait stations", "termite swarm season"],
  },
  hero: {
    h1: "Termite Control in Jacksonville, FL",
    subheadline: "Stop termites before they cost you thousands, with proven treatments and protection you can renew year after year.",
    image: {
      file: "termite-control-jacksonville-foundation-treatment.webp",
      alt: "Technician treating soil along the foundation of a Jacksonville home for termites",
    },
  },
  intro: [
    "Termites are the pest Jacksonville homeowners can't afford to ignore. They feed quietly inside walls, floors, and framing, often for years before anyone notices, and most homeowner's insurance policies won't pay for the damage.",
    "Our termite control starts with a careful inspection to find out whether termites are active, which species you're dealing with, and how they're getting in. Then we recommend the treatment that fits your home, whether that's a liquid soil barrier, a bait and monitoring system, or a combination. After treatment, an ongoing protection plan keeps your home covered with regular checks, so a new colony never gets the chance to settle in unnoticed.",
  ],
  localProblem: {
    heading: "Why Termites Are Such a Problem in Jacksonville",
    body: [
      "Northeast Florida sits in one of the most active termite regions in the country. Our warm temperatures, sandy soil, frequent rain, and high humidity give termites everything they need to thrive all year.",
      "Two species do most of the damage here. **Eastern subterranean termites** live in the soil and build mud tubes to reach the wood in your home. **Formosan termites**, an invasive subterranean species now established in parts of Northeast Florida, form much larger colonies and can do serious damage faster. Both can slip through cracks in a slab, expansion joints, and plumbing gaps.",
      "Every spring, during **termite swarm season**, mature colonies send out winged swarmers. Subterranean termites usually swarm on warm days after rain, while Formosan termites swarm on humid evenings around porch lights. Swarmers indoors usually mean a colony is already feeding nearby.",
    ],
  },
  signs: {
    heading: "Signs You Have Termites",
    intro: "Termites stay hidden, so the signs are easy to miss. Watch for these, especially in spring.",
    items: [
      { title: "Mud tubes on foundation walls", description: "Pencil-wide soil tunnels running up the slab, piers, or garage walls." },
      { title: "Swarmers or discarded wings", description: "Winged insects inside, or small piles of identical wings on windowsills and near doors, especially after a spring rain." },
      { title: "Hollow-sounding or soft wood", description: "Baseboards, door frames, or trim that sound papery when tapped or that a screwdriver pushes into easily." },
      { title: "Bubbling or uneven paint", description: "Blistered paint or sagging wallpaper can mean termite moisture behind the surface." },
      { title: "Doors and windows that start sticking", description: "Termite damage and moisture can warp frames so they no longer close smoothly." },
      { title: "Small holes with fine debris", description: "Pin-sized holes in drywall or wood, sometimes with packed soil or tiny pellets nearby." },
    ],
  },
  process: {
    heading: "Our Termite Treatment Process",
    intro: "Every termite job follows the same careful steps, so nothing is missed.",
    steps: [
      { title: "Detailed termite inspection", description: "We check the foundation, garage, bathrooms, attic access, and exterior for activity and damage." },
      { title: "Identify the species", description: "Subterranean, Formosan, and drywood termites need different approaches, so we confirm what we're dealing with first." },
      { title: "Recommend a treatment plan", description: "We explain your options and our recommendation, with an upfront quote." },
      { title: "Treat your home", description: "We apply the treatment carefully, following label directions and protecting your landscaping." },
      { title: "Monitor and protect", description: "Regular follow-up inspections confirm the colony is gone and keep your home protected going forward." },
    ],
  },
  treatmentOptions: {
    heading: "Termite Treatment Options",
    intro: [
      "There's no single best termite treatment for every home. The right choice depends on the species, your home's construction, and your preferences. Here's an honest look at the main options.",
    ],
    options: [
      {
        title: "Liquid soil treatment",
        description:
          "A termiticide applied to the soil around the foundation creates a treated zone termites can't safely cross. It works quickly and suits active infestations.",
      },
      {
        title: "Bait and monitoring stations",
        description:
          "In-ground stations around the home are checked on a schedule. Termites share the bait with their colony, eliminating it over time with little disruption to your yard.",
      },
      {
        title: "Spot and wood treatments",
        description:
          "Targeted treatments applied directly into damaged or at-risk wood. Useful for small, localized problems or alongside a full treatment.",
      },
      {
        title: "Tent fumigation for drywood termites",
        description:
          "Drywood termites live inside the wood, not the soil. They're less common here, but a widespread drywood infestation may need whole-structure fumigation.", // OWNER: confirm whether fumigation is offered directly or referred out
      },
    ],
  },
  safety: {
    heading: "Is Termite Treatment Safe for Kids and Pets?",
    body: [
      "Yes, when it's done correctly. Termite treatments go where termites travel: into the soil around the foundation, inside bait stations, or directly into wood. They're not sprayed across your living space, so your family has very little contact with them.",
      "We use products registered for termite control and apply them exactly as their labels require. Keep kids and pets away from the work area until we're finished, and tell us about wells, ponds, or vegetable gardens near the foundation so we can plan around them.",
    ],
  },
  costFactors: [
    { title: "Size of your home", description: "Liquid treatments are measured along the foundation, so a larger footprint takes more product and labor." },
    { title: "Type of termite", description: "Subterranean, Formosan, and drywood termites each need different treatment methods and equipment." },
    { title: "Extent of the infestation", description: "A small, localized problem takes less work than activity in several areas of the home." },
    { title: "Treatment method", description: "Liquid barriers, bait systems, and fumigation each involve different materials and follow-up schedules." },
    { title: "Construction and access", description: "Slab type, crawl spaces, additions, patios, and landscaping against the house all affect the work involved." },
    { title: "Ongoing protection plan", description: "Annual renewal of your protection, with yearly inspections, is a separate choice after the first treatment." },
  ],
  prevention: {
    heading: "How to Help Prevent Termites",
    tips: [
      "Fix leaky faucets, AC drain lines, and gutters so water doesn't pool near your foundation.",
      "Keep mulch, soil, and pine straw a few inches below your siding and away from wood.",
      "Store firewood, lumber, and cardboard off the ground and away from the house.",
      "Trim shrubs so air can flow between plants and your exterior walls.",
      "Don't let wood siding, fences, or trellises touch the soil.",
      "Schedule a yearly [termite inspection](/termite-inspection), even if you haven't seen any signs.",
    ],
  },
  forBusinesses: [
    "Termites don't only target homes. We protect apartment buildings, retail spaces, and other commercial properties with inspections, treatments, and documented monitoring programs. Building something new? Ask about [pre-construction termite treatment](/pre-construction-termite-treatment).",
  ],
  faqs: [
    {
      question: "How long does termite treatment take?",
      answer:
        "Most liquid termite treatments for a typical Jacksonville home take several hours to a full day, depending on the size of the foundation and how much drilling through concrete is needed. Bait station installation is usually faster. Your technician will give you a time estimate during the inspection so you can plan your day.",
    },
    {
      question: "Do I need to leave my home during termite treatment?",
      answer:
        "No. For liquid soil treatments and bait systems, you can stay home. We'll ask you to keep kids and pets away from the work area while we treat. The only termite treatment that requires leaving is tent fumigation for drywood termites, which involves vacating the home for a set period.",
    },
    {
      question: "How long does termite protection last?",
      answer:
        "That depends on the method and the product. Liquid treatments protect the soil for years, while bait systems keep working as long as they're monitored and maintained. Because no treatment lasts forever, we recommend an ongoing protection plan with a yearly inspection so any new activity is caught early.",
    },
    {
      question: "Does homeowner's insurance cover termite damage?",
      answer:
        "Usually not. Most homeowner's insurance policies treat termite damage as a preventable maintenance issue and exclude it. That's why regular inspections and a protection plan matter so much in Florida. Check your own policy to be sure, and keep your termite inspection records in case questions come up later.",
    },
  ],
  relatedServices: ["termite-inspection", "pre-construction-termite-treatment", "moisture-control"],
  lastUpdated: "2026-10-12",
};

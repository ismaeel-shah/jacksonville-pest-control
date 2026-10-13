import type { ServiceContent } from "../types";

export const generalPestControl: ServiceContent = {
  slug: "general-pest-control",
  published: true,
  name: "General Pest Control",
  navLabel: "General Pest Control",
  icon: "bug",
  audience: ["residential", "commercial"],
  cardDescription: "Recurring service plans that keep ants, roaches, spiders, and other everyday insects outside where they belong.",
  seo: {
    title: "General Pest Control in Jacksonville, FL | Plans",
    description:
      "General pest control in Jacksonville, FL with quarterly, bi-monthly, or monthly plans for ants, roaches, and spiders. Call today for a free inspection.",
    primaryKeyword: "general pest control Jacksonville FL",
    secondaryKeywords: ["quarterly pest control", "pest control plans", "palmetto bugs", "exterior pest barrier", "home pest service"],
  },
  hero: {
    h1: "General Pest Control in Jacksonville, FL",
    subheadline: "Year-round protection from the everyday bugs that Florida weather sends your way, on a schedule that fits your home.",
    image: {
      file: "general-pest-control-jacksonville-exterior-barrier.webp",
      alt: "Pest control technician spraying an exterior barrier along the base of a Jacksonville home",
    },
  },
  intro: [
    "In Jacksonville, bugs don't take the winter off. Ants march across counters, palmetto bugs show up in the bathroom at night, and spiders spin webs in every corner of the porch. One spray won't stop them for long.",
    "Our general pest control works on a recurring plan. We treat the outside of your home to build a barrier that stops most pests before they get in, and we treat inside only where it's needed. Between visits, your technician keeps an eye on trouble spots and adjusts the plan as the seasons change. If pests show up between scheduled visits, just call us.", // OWNER: confirm free re-service between visits
  ],
  localProblem: {
    heading: "Why Jacksonville Homes Need Regular Pest Control",
    body: [
      "Our long, hot summers and mild winters let insects breed nearly all year. Afternoon storms soak the ground, and many pests head for the dry, cool space inside your walls when it floods or gets too hot outside.",
      "Thick landscaping, live oaks, pine straw beds, and nearby marshes and rivers give pests plenty of places to live right up against your house. Homes near the St. Johns River, the Intracoastal, or retention ponds often see more activity.",
      "Because pressure from outside never really stops, a single treatment fades within weeks. Regular service keeps a fresh barrier in place so new pests are stopped at the edge of your property.",
    ],
  },
  signs: {
    heading: "Signs It's Time for a Pest Control Plan",
    intro: "Most people call us after one of these starts happening more than once.",
    items: [
      { title: "Ant trails in the kitchen or bathroom", description: "Lines of tiny ants heading to sweets, pet food, or the sink, often after a heavy rain." },
      { title: "Palmetto bugs at night", description: "Large brown roaches running across the floor when you turn on a light, or flying in from the garage." },
      { title: "Webs around eaves and windows", description: "New spider webs that keep coming back on the porch, lanai, or garage corners." },
      { title: "Silverfish in damp areas", description: "Small, silver, fast-moving insects in bathtubs, closets, or boxes of old papers." },
      { title: "Earwigs and crickets by the doors", description: "Bugs gathering near door thresholds, sliders, and the garage after it rains." },
      { title: "Droppings or shed skins", description: "Tiny dark specks in drawers or behind appliances can point to a roach problem." },
    ],
  },
  process: {
    heading: "How Our General Pest Control Service Works",
    steps: [
      { title: "Initial inspection", description: "We walk the inside and outside of your home to find what pests are present and how they're getting in." },
      { title: "First full treatment", description: "Your first visit includes a thorough exterior treatment and interior treatment in problem areas like kitchens, baths, and the garage." },
      { title: "Exterior barrier", description: "We treat the foundation, entry points, eaves, and window and door frames, and knock down webs and wasp starts we can reach." },
      { title: "Interior as needed", description: "On regular visits, we treat inside only if you're seeing activity, so you don't get more product than you need." },
      { title: "Recurring visits and notes", description: "We come back on your schedule, note what we found, and adjust treatment for the season." },
    ],
  },
  treatmentOptions: {
    heading: "Service Plan Options",
    intro: [
      "The right schedule depends on how much pest pressure your home gets. Here's how our plans compare.", // OWNER: confirm plan frequencies offered
    ],
    options: [
      {
        title: "Quarterly plan",
        description: "Service every three months. This fits most single-family homes with normal activity and keeps a steady barrier in place.",
      },
      {
        title: "Bi-monthly plan",
        description: "Service every two months. A good choice for homes near water or woods, or homes with heavy landscaping against the walls.",
      },
      {
        title: "Monthly plan",
        description: "Service every month. Best for severe problems or properties with constant pressure, and common for restaurants and other businesses.",
      },
    ],
  },
  safety: {
    heading: "Is General Pest Control Safe for Kids and Pets?",
    body: [
      "We take care to keep it that way. Most of the work happens outside, along the foundation and around entry points. Inside, we use targeted applications like baits and crack-and-crevice treatments instead of spraying open floors.",
      "Every product we use is registered for the job and applied according to its label. Your technician will tell you how long to keep kids and pets away from treated areas, which is usually until surfaces are dry. Let us know about fish tanks, birds, or anyone with sensitivities before we start.",
    ],
  },
  costFactors: [
    { title: "Service frequency", description: "Quarterly, bi-monthly, and monthly plans involve a different number of visits over the year." },
    { title: "Home and lot size", description: "A bigger home and yard means more foundation, eaves, and landscaping to treat." },
    { title: "Current pest activity", description: "A home with an active roach or ant problem may need extra work on the first visit." },
    { title: "Pests included", description: "Everyday insects are covered, while termites, bed bugs, and rodents are separate specialty services." },
    { title: "Landscaping and surroundings", description: "Dense plants, woods, or water nearby can raise pest pressure and the time each visit takes." },
    { title: "Add-on services", description: "Extras like lawn pest treatments or mosquito service can be added to your plan." },
  ],
  prevention: {
    heading: "Simple Ways to Keep Pests Out Between Visits",
    tips: [
      "Wipe counters and sweep up crumbs every night, and don't leave pet food out overnight.",
      "Store pantry food in sealed plastic or glass containers.",
      "Replace worn door sweeps and weatherstripping, especially on garage and back doors.",
      "Keep pine straw and mulch pulled back a few inches from the foundation.",
      "Fix dripping faucets and AC condensate leaks, since many bugs need water to survive.",
      "Swap cardboard boxes in the garage for sealed plastic bins.",
    ],
  },
  forBusinesses: [
    "Offices, retail stores, and rental properties need dependable service too. We set up recurring plans with service records for your files. Learn more about [pest control for businesses](/commercial).",
  ],
  faqs: [
    {
      question: "What pests are covered by a general pest control plan?",
      answer:
        "Our plans cover the common crawling insects found around Jacksonville homes, including ants, cockroaches and palmetto bugs, spiders, silverfish, earwigs, and crickets. Fire ant mounds near the house are usually covered too. Termites, bed bugs, rodents, and wildlife need their own treatment methods, so they are handled as separate services. Your technician will explain exactly what's included.", // OWNER: confirm pests included in plans
    },
    {
      question: "Why do I still see bugs after a treatment?",
      answer:
        "Seeing a few bugs for a week or two after service is normal. Products along the foundation and in cracks cause hiding pests to come out, where they die off. Activity should drop steadily after that. If you're still seeing a lot of pests after two weeks, call us and we'll take another look.",
    },
    {
      question: "Do you treat the inside of my home on every visit?",
      answer:
        "Not unless you need it. The first visit includes an interior treatment, but after that we focus on the exterior barrier, which stops most pests before they get in. If you are seeing bugs inside, tell your technician and we'll treat the affected rooms during that visit. This keeps product use inside your home low.",
    },
    {
      question: "Can I switch plan frequency later?",
      answer:
        "Yes, you can usually change your schedule as your needs change. Many homeowners start with more frequent visits to get a heavy problem under control, then move to a quarterly plan once things settle down. Just talk with your technician or call our office, and we'll help you pick the schedule that makes sense.", // OWNER: confirm plan change policy
    },
  ],
  relatedServices: ["cockroach-control", "ant-control", "lawn-pest-control"],
  lastUpdated: "2026-10-12",
};

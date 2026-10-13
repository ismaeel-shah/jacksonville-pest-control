import type { IndustryContent } from "../types";

export const propertyManagement: IndustryContent = {
  slug: "property-management",
  published: true,
  name: "Property Management & Apartments",
  icon: "building",
  cardDescription: "Scheduled pest programs for apartment communities, with unit turnover treatments, bed bug response, and clean common areas.",
  seo: {
    title: "Apartment Pest Control in Jacksonville, FL",
    description:
      "Apartment pest control in Jacksonville, FL for property managers. Turnover treatments, bed bug help, and common area service. Request a free site visit.",
    primaryKeyword: "apartment pest control Jacksonville",
    secondaryKeywords: ["property management pest control", "multi-family pest control", "unit turnover pest treatment", "HOA pest control"],
  },
  hero: {
    h1: "Property Management & Apartment Pest Control in Jacksonville, FL",
    subheadline: "Fewer tenant complaints, faster turnovers, and one pest program that covers every building you manage.",
    image: {
      file: "apartment-complex-pest-control-technician-jacksonville.webp",
      alt: "Technician treating the exterior foundation of a two-story apartment building",
    },
  },
  intro: [
    "Apartment pest control in Jacksonville is a different job than treating a single house. Units share walls, plumbing, and attics, so a problem in one apartment rarely stays there. And every pest call is also a tenant relations call that lands on your desk.",
    "We work with property managers, apartment communities, condo boards, and HOAs across Jacksonville to keep buildings clean and residents happy. You get a steady program for units and common areas, quick help when a resident reports something, and records that make your job easier.",
  ],
  commonPests: {
    heading: "Pests That Show Up in Apartment Communities",
    items: [
      {
        title: "German cockroaches",
        description: "They move between units through wall voids and pipe chases, and they often arrive with a new tenant's boxes or used furniture.",
      },
      {
        title: "Bed bugs",
        description: "They spread through shared walls and hallways and travel on luggage and mattresses. Early action keeps one unit from turning into five.",
      },
      {
        title: "Rats and mice",
        description: "Trash rooms, compactors, and overflowing dumpsters feed them. Roof rats also climb trees and power lines to reach attics.",
      },
      {
        title: "Ants and palmetto bugs",
        description: "Ghost ants trail into kitchens after summer rains, while big palmetto bugs wander in from mulch beds, pool decks, and drains.",
      },
    ],
  },
  sections: [
    {
      heading: "Unit Turnover Treatments and Bed Bug Response",
      body: [
        "The best time to treat a unit is when it's empty. During turnover, we inspect behind appliances, under sinks, and along baseboards, treat any activity, and seal small gaps before the next resident moves in. That way new tenants start with a clean slate.",
        "Bed bugs need a fast, careful plan in multi-unit buildings. When a resident reports bites, we inspect the unit and the ones beside, above, and below it. Then we recommend [bed bug treatment](/bed-bug-treatment) that fits the situation and follow up until the problem is gone.",
      ],
      bullets: [
        "Move-out inspections and treatments between tenants",
        "Adjoining-unit checks for bed bugs and roaches",
        "Follow-up visits to confirm results",
        "Clear prep sheets you can hand to residents",
      ],
    },
    {
      heading: "Common Areas That Need Regular Attention",
      body: [
        "Shared spaces are where pests find food and shelter, and where residents notice them first. We service laundry rooms, mail rooms, trash rooms and compactor areas, leasing offices, clubhouses, fitness rooms, and pool areas on a regular schedule.",
        "Outside, we treat building perimeters, check dumpster pads, and place tamper-resistant rodent stations where they make sense. We'll also flag overgrown shrubs, broken door sweeps, or drainage issues your maintenance team can fix.",
      ],
    },
    {
      heading: "Tenant Communication and Multi-Property Programs",
      body: [
        "Residents want to know what's happening in their home. We can provide simple notices to post before a service day and answer questions on site. If a tenant needs to prepare a unit, we tell you exactly what they should do.",
        "If you manage several communities around Jacksonville, we can schedule service across all of them with consistent reports organized by property and unit number. You'll always know what was treated, where we found activity, and what still needs attention.",
      ],
    },
  ],
  process: {
    heading: "How Our Apartment Pest Program Works",
    steps: [
      { title: "Property walkthrough", description: "We tour units, common areas, and grounds with your manager or maintenance lead to spot problem areas and entry points." },
      { title: "Custom service plan", description: "We set a schedule for exterior, common area, and unit service, plus a process for turnovers and resident requests." },
      { title: "Routine and on-call visits", description: "We handle scheduled service and respond to work orders, documenting every unit we enter." },
      { title: "Reports and review", description: "You get reports by unit and building, and we adjust the plan as seasons and occupancy change." },
    ],
  },
  faqs: [
    {
      question: "Should we treat every unit or only the ones with complaints?",
      answer:
        "Usually a mix of both works best. Treating only reported units can miss roaches or bed bugs hiding next door, but treating every unit every month is rarely needed. We often service the exterior and common areas on a schedule, handle units by request or rotation, and check neighboring units when we find activity.",
    },
    {
      question: "How quickly can you respond to a resident's pest complaint?",
      answer:
        "We aim to respond to resident complaints quickly, often within a few business days, and sooner for urgent problems like bed bugs or rodents. Send us the unit number and a short description, and we'll schedule a visit and coordinate entry with your office. Fast response keeps small problems from spreading through the building.", // OWNER: confirm typical response time
    },
    {
      question: "Do residents need to leave during treatment?",
      answer:
        "Sometimes, for a short time. For many routine treatments, residents can stay or only need to step out briefly. For bed bug or heavy roach treatments, we usually ask them to leave for a set period. Your technician will explain re-entry times based on the product label and give residents a clear prep list.",
    },
    {
      question: "Do you work with condo associations and HOAs?",
      answer:
        "Yes. We service condo buildings, townhome communities, and HOA common areas such as clubhouses, pools, gates, and shared landscaping. We'll work with your board or community manager to set a schedule and provide reports for meetings. Individual owners can also call us about their own units.",
    },
  ],
  relatedServices: ["bed-bug-treatment", "cockroach-control", "rodent-control"],
  lastUpdated: "2026-10-12",
};

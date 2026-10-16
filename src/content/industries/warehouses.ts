import type { IndustryContent } from "../types";

export const warehouses: IndustryContent = {
  slug: "warehouses",
  published: true,
  name: "Warehouses",
  icon: "warehouse",
  cardDescription: "Perimeter rodent programs, stored-product pest monitoring, and dock door protection for warehouses and distribution centers.",
  seo: {
    title: "Warehouse Pest Control in Jacksonville, FL",
    description:
      "Warehouse pest control in Jacksonville, FL. Rodent stations, stored-product pest monitoring, and dock door protection. Call to speak with a local pro today.",
    primaryKeyword: "warehouse pest control Jacksonville",
    secondaryKeywords: ["distribution center pest control", "loading dock pest control", "stored product pest control", "industrial pest control"],
  },
  hero: {
    h1: "Warehouse Pest Control in Jacksonville, FL",
    subheadline: "Protect your inventory, your dock doors, and your audit scores with a program built for big buildings.",
    image: {
      file: "warehouse-loading-dock-rodent-station-jacksonville.webp",
      alt: "Technician checking a rodent bait station beside a warehouse loading dock door",
    },
  },
  intro: [
    "Warehouse pest control in Jacksonville means covering a lot of ground. Big buildings have long walls, high racks, and dock doors that open dozens of times a day. Every pallet, trailer, and shipment that comes through is a chance for a mouse or beetle to ride in.",
    "Jacksonville is a busy logistics hub, with port traffic, rail lines, and distribution centers all around the area. Local commercial pest control pros help warehouse and facility managers keep pests out of stored goods, prepare for third-party food safety and customer audits, and avoid damaged or rejected product.",
  ],
  commonPests: {
    heading: "Pests That Threaten Warehouses and Stored Goods",
    items: [
      {
        title: "Norway rats, roof rats, and mice",
        description: "They chew through cartons and shrink wrap, nest in quiet corners of the racking, and leave droppings that can ruin whole pallets.",
      },
      {
        title: "Stored-product pests",
        description: "Beetles and moths infest grain, flour, pet food, seed, and dried goods. They often arrive in a single shipment and spread to nearby stock.",
      },
      {
        title: "Birds",
        description: "Pigeons and sparrows roost in rafters and over dock doors, and their droppings can damage products, equipment, and walkways.", // OWNER: confirm bird control is offered
      },
      {
        title: "Cockroaches and crickets",
        description: "They come in through gaps under dock doors and hide in break rooms, restrooms, and floor drains, especially during wet summer weather.",
      },
    ],
  },
  sections: [
    {
      heading: "Large Perimeters and Loading Docks",
      body: [
        "Most warehouse pests come from outside. A typical program sets up a ring of tamper-resistant rodent stations along the outside walls, checked on every visit. Inside, the technician places traps and monitors along walls and near doors to catch activity early, before it reaches your stock.",
        "Loading docks need extra attention. The technician should look at dock seals, door sweeps, levelers, and trailer gaps, and point out where light shows through. Simple fixes like new brush seals and closed doors go a long way, along with [professional rodent control](/rodent-control) where rats are already active.",
      ],
      bullets: [
        "Exterior rodent stations on a numbered map",
        "Interior traps and insect monitors along walls",
        "Dock door, seal, and leveler inspections",
        "Recommendations for lighting, drainage, and vegetation",
      ],
    },
    {
      heading: "Monitoring for Stored-Product Pests",
      body: [
        "Beetles and moths can hide in a pallet for weeks before anyone notices. Technicians use pheromone traps and regular checks to spot them early, then track which aisles or product lines show activity so you can find the source.",
        "When an infested load turns up, the provider can help you decide what to isolate or remove and treat the surrounding area. A good technician also looks at stock rotation, spills, and cleaning under racks, since those habits affect how fast these pests spread.",
      ],
    },
    {
      heading: "Records That Hold Up in an Audit",
      body: [
        "Third-party food safety and customer audits look closely at pest control. Auditors usually want a site map of devices, service reports, trend data, and proof that problems were fixed. Ask any provider you talk with how they organize these records so you're not scrambling when the auditor arrives.",
        "Commercial providers typically leave a report after each visit showing what was checked, what was found, and what the technician recommends. Share any specific auditor or customer requirements up front so the program can be set up to match.",
      ],
    },
  ],
  process: {
    heading: "How Warehouse Pest Control Service Works",
    steps: [
      { title: "Facility survey", description: "The technician walks the perimeter, docks, racking, break rooms, and storage areas to find entry points and risk zones." },
      { title: "Device map and plan", description: "Every station and monitor is mapped, and the provider writes a plan with service frequency and audit needs." },
      { title: "Scheduled service", description: "The technician checks every device, records activity, and treats or adjusts as needed, working around shipping schedules." },
      { title: "Trend tracking", description: "Activity is tracked over time with you, and the plan is updated before small issues become audit findings." },
    ],
  },
  faqs: [
    {
      question: "How often should a warehouse have pest control service?",
      answer:
        "Most warehouses do well with monthly service, though facilities that store food, grain, or pet food may need more frequent visits. Your audit program or customers may also set a minimum. The provider will suggest a schedule after surveying your building and can add visits during busy seasons or after an issue.",
    },
    {
      question: "Can pest control service work around shipping and receiving?",
      answer:
        "Yes. Trucks can't wait, and warehouse service should plan around that. Visits are scheduled around your busiest dock hours, done aisle by aisle, and coordinated with your staff before servicing areas near active forklift traffic. Most routine checks don't require stopping operations, and the technician should tell you ahead of time if an area needs to be cleared.",
    },
    {
      question: "What happens if pests are found in a shipment?",
      answer:
        "The goal is to contain it quickly. The technician identifies the pest, checks nearby stock to see if it has spread, and recommends whether to isolate, return, or dispose of the product. Then the area is treated and monitoring is increased for a while. Ask for everything to be documented so you have a record for your supplier.",
    },
    {
      question: "Is pest control available for cold storage and food distribution warehouses?",
      answer:
        "Yes. Food and cold storage facilities have their own challenges, like condensation, spilled product, and strict audit rules. Technicians use targeted methods suited to food areas, follow every product label, and keep treatments away from exposed food. Call to tell a local pro what you store so the plan fits your facility.",
    },
  ],
  relatedServices: ["rodent-control", "cockroach-control", "general-pest-control"],
  lastUpdated: "2026-10-16",
};

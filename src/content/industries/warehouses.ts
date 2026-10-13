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
      "Warehouse pest control in Jacksonville, FL. Rodent stations, stored-product pest monitoring, and audit-ready service records. Schedule a free site visit.",
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
    "Jacksonville is a busy logistics hub, with port traffic, rail lines, and distribution centers all around the area. We help warehouse and facility managers keep pests out of stored goods, pass third-party food safety and customer audits, and avoid the cost of damaged or rejected product.",
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
        "Most warehouse pests come from outside. We set up a ring of tamper-resistant rodent stations along the outside walls and check them on every visit. Inside, we place traps and monitors along walls and near doors so we catch activity early, before it reaches your stock.",
        "Loading docks need extra attention. We look at dock seals, door sweeps, levelers, and trailer gaps, and we tell you where light shows through. Simple fixes like new brush seals and closed doors go a long way, along with [professional rodent control](/rodent-control) where rats are already active.",
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
        "Beetles and moths can hide in a pallet for weeks before anyone notices. We use pheromone traps and regular checks to spot them early, then track which aisles or product lines show activity so you can find the source.",
        "When we find an infested load, we help you decide what to isolate or remove and treat the surrounding area. We also review stock rotation, spills, and cleaning under racks, since those habits affect how fast these pests spread.",
      ],
    },
    {
      heading: "Records That Hold Up in an Audit",
      body: [
        "Third-party food safety and customer audits look closely at pest control. Auditors usually want a site map of devices, service reports, trend data, and proof that problems were fixed. We keep your records organized so you're not scrambling when the auditor arrives.",
        "After every visit, you get a report showing what we checked, what we found, and what we recommend. Share any specific auditor or customer requirements and we'll set up the program to match.",
      ],
    },
  ],
  process: {
    heading: "How Our Warehouse Pest Program Works",
    steps: [
      { title: "Facility survey", description: "We walk the perimeter, docks, racking, break rooms, and storage areas to find entry points and risk zones." },
      { title: "Device map and plan", description: "We map every station and monitor and write a plan with service frequency and audit needs." },
      { title: "Scheduled service", description: "We check every device, record activity, and treat or adjust as needed, working around shipping schedules." },
      { title: "Trend reviews", description: "We review activity over time with you and update the plan before small issues become audit findings." },
    ],
  },
  faqs: [
    {
      question: "How often should a warehouse have pest control service?",
      answer:
        "Most warehouses do well with monthly service, though facilities that store food, grain, or pet food may need more frequent visits. Your audit program or customers may also set a minimum. We'll suggest a schedule after surveying your building, and we can add visits during busy seasons or after an issue.",
    },
    {
      question: "Can you work around our shipping and receiving schedule?",
      answer:
        "Yes. We know trucks can't wait. We plan visits around your busiest dock hours, work aisle by aisle, and coordinate with your team before servicing areas near active forklift traffic. Most routine checks don't require stopping operations, and we'll let you know ahead of time if an area needs to be cleared.",
    },
    {
      question: "What happens if you find pests in a shipment?",
      answer:
        "We help you contain it quickly. We'll identify the pest, check nearby stock to see if it has spread, and recommend whether to isolate, return, or dispose of the product. Then we treat the area and increase monitoring for a while. We'll also document everything so you have a record for your supplier.",
    },
    {
      question: "Do you service cold storage and food distribution warehouses?",
      answer:
        "Yes. Food and cold storage facilities have their own challenges, like condensation, spilled product, and strict audit rules. We use targeted methods suited to food areas, follow every product label, and keep treatments away from exposed food. Tell us what you store and we'll plan around it.",
    },
  ],
  relatedServices: ["rodent-control", "cockroach-control", "general-pest-control"],
  lastUpdated: "2026-10-12",
};

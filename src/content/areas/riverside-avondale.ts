import type { AreaContent } from "../types";

export const riversideAvondale: AreaContent = {
  slug: "riverside-avondale",
  published: true,
  name: "Riverside / Avondale",
  region: "jacksonville",
  hubBlurb: "Historic bungalows and 1920s Mediterranean Revival homes that need gentle termite and moisture care, plus busy restaurants in Five Points and King Street.",
  seo: {
    title: "Pest Control in Riverside & Avondale, FL",
    description:
      "Careful pest control for historic Riverside and Avondale homes and businesses. Termites, moisture, rodents, and roaches handled. Call for a free inspection.",
    primaryKeyword: "pest control Riverside Avondale FL",
    secondaryKeywords: [
      "termite treatment historic homes Jacksonville",
      "pest control Five Points Jacksonville",
      "rodent control Riverside Jacksonville",
      "32205 pest control",
    ],
  },
  hero: {
    h1: "Pest Control in Riverside & Avondale, FL",
    subheadline: "Respectful, detail-minded pest and termite care for the historic homes, crawl spaces, and neighborhood restaurants of Riverside and Avondale.",
    image: {
      file: "riverside-avondale-historic-bungalow-jacksonville.webp",
      alt: "Historic craftsman bungalow with a deep front porch on a shaded street in Riverside, Jacksonville",
    },
  },
  intro: [
    "Few places in Florida have as many old homes on one map as Riverside and Avondale. Riverside's historic district holds thousands of historic buildings, including one of the largest collections of bungalows in the state, while Avondale's streets are lined with 1920s Mediterranean Revival homes. Living in a piece of history is a joy. It also means your house has had about a century to settle, soften, and open up small gaps.",
    "That's why pest control here leans heavily on prevention and gentle, targeted methods. Raised floors and crawl spaces hold moisture, old wood attracts termites, and big shade trees invite roof rats. On top of that, the restaurants, bars, and breweries in Five Points and the King Street District need steady, behind-the-scenes service. We treat these neighborhoods with the care they deserve.",
  ],
  commonPests: {
    heading: "Top Pest Concerns in Riverside and Avondale",
    intro: ["Older construction and a leafy, riverfront setting create a pest list that looks a little different from newer parts of town."],
    pests: [
      {
        name: "Subterranean and drywood termites",
        why: "Original heart pine floors, porch framing, and window trim from the early 1900s are exactly what termites seek out. Damp crawl spaces make it easier for subterranean colonies to reach that wood.",
      },
      {
        name: "Roof rats",
        why: "Huge live oaks shade nearly every block, and their limbs often touch old rooflines. Rats travel along them into attics, soffits, and detached garages.",
      },
      {
        name: "Palmetto bugs",
        why: "Crawl spaces, brick piers, and old drain lines stay cool and wet, giving large roaches a place to hide before they wander into kitchens and baths.",
      },
      {
        name: "Mosquitoes",
        why: "Willowbranch Creek, Fishweir Creek, and the riverfront along the St. Johns sit close to many homes, and shady courtyards hold water after summer storms.",
      },
    ],
  },
  homes: {
    heading: "Caring for Historic Homes",
    body: [
      "Many Riverside and Avondale houses sit on raised foundations with crawl spaces instead of concrete slabs. That design lets air move under the floor, but it also traps humidity, especially near the river. High moisture softens wood and draws termites and roaches. We check vents, vapor barriers, and plumbing under the house, and [crawl space moisture control](/moisture-control) helps bring humidity back down.",
      "We also know that original materials matter here. Where we can, we choose bait systems and targeted treatments that avoid drilling through historic tile, brick, or woodwork. If an entry point needs sealing on the outside of the house, we'll talk with you first, since exterior changes in a historic district may need city approval.", // OWNER: confirm historic district approval wording with the city before launch
      "Five Points, the Shoppes of Avondale, and the King Street District are full of restaurants and bars in older buildings. Shared walls and aging plumbing call for regular [commercial pest control](/commercial) that keeps roaches and rodents out of sight.",
    ],
  },
  popularServices: [
    { slug: "termite-inspection", reason: "Century-old wood and crawl spaces make yearly termite checks a must in Riverside and Avondale." },
    { slug: "termite-control", reason: "Targeted treatments protect original framing and floors without unnecessary damage to historic materials." },
    { slug: "moisture-control", reason: "Damp crawl spaces under raised homes invite termites, roaches, and wood rot." },
    { slug: "rodent-control", reason: "Roof rats use the neighborhood's giant oaks to get into older attics and garages." },
    { slug: "cockroach-control", reason: "Restaurants and older homes with shared walls need steady roach prevention." },
  ],
  neighborhoods: ["Riverside", "Avondale", "Five Points", "King Street District", "Shoppes of Avondale area", "Willowbranch Park area", "Fishweir Creek area"], // OWNER: verify neighborhood names and ZIP codes before launch
  zipCodes: ["32204", "32205"],
  faqs: [
    {
      question: "Can you treat termites without damaging my historic home?",
      answer:
        "In most cases, yes. First we pinpoint exactly where termites are active, then choose the least invasive method that will work, such as bait stations around the house or spot treatments in the crawl space. If drilling is ever needed, we explain where and why before we begin, and we work to keep original materials intact.",
    },
    {
      question: "Why does my Riverside crawl space smell musty?",
      answer:
        "A musty smell usually means moisture is building up under the house. Blocked vents, missing vapor barriers, leaking pipes, or poor drainage near the foundation are common causes in Riverside and Avondale. Damp crawl spaces attract termites, palmetto bugs, and wood rot, so it's worth having us take a look. We'll show you what we find and suggest fixes.",
    },
    {
      question: "Do you work with restaurants in Five Points and King Street?",
      answer:
        "Yes, and older buildings are a big part of that work. Many spaces in Five Points and along King Street are nearly a century old, with gaps behind baseboards and old pipe chases running between tenants. Sealing those openings matters as much as treatment. We pair that with steady monthly visits so roaches and rodents never get a foothold.",
    },
  ],
  nearbyAreas: ["san-marco", "westside", "orange-park"],
  lastUpdated: "2026-10-12",
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  intro: string;
  bullets: string[];
  accent: "teal" | "kraft" | "ink";
};

export const services: Service[] = [
  {
    slug: "corporate-gifting",
    number: "01",
    title: "Corporate Gifting",
    intro:
      "End-to-end gifting programs for the whole employee journey — onboarding, milestones, festivals, recognition, retirement.",
    accent: "teal",
    bullets: [
      "Welcome kits & onboarding hampers",
      "Anniversary & milestone gifts",
      "Festive bulk orders",
      "Client appreciation hampers",
      "Retirement & farewell gifts",
    ],
  },
  {
    slug: "custom-hampers",
    number: "02",
    title: "Custom Hampers",
    intro:
      "Bespoke gift curations — built from your brief, your brand and your budget per gift, with hand-tied finishing.",
    accent: "kraft",
    bullets: [
      "Curated by occasion & audience",
      "Brand-aligned colour palettes",
      "Hand-tied ribbons & cards",
      "Embossed leather, metal, wood",
      "From 10 units to 10,000",
    ],
  },
  {
    slug: "branding-packaging",
    number: "03",
    title: "Branding & Packaging",
    intro:
      "Where our manufacturing roots show — branded boxes, custom papers, embossing, message cards and brand signage.",
    accent: "ink",
    bullets: [
      "Custom-printed gift boxes",
      "Branded wrapping paper",
      "Foil-stamped & embossed cards",
      "Hand-tied ribbons in brand colours",
      "Eco-friendly material options",
    ],
  },
  {
    slug: "eco-manufacturing",
    number: "04",
    title: "Eco Manufacturing",
    intro:
      "The original Rivera business — biodegradable tissues, reusable napery and customisable eco-packaging at hotel & restaurant scale.",
    accent: "teal",
    bullets: [
      "Biodegradable tissues & napkins",
      "Reusable & recyclable packaging",
      "Custom-printed eco-paper",
      "Compostable food packaging",
      "Bulk supply to hospitality & F&B",
    ],
  },
  {
    slug: "event-gifting",
    number: "05",
    title: "Event Gifting",
    intro:
      "Conferences, summits, training graduations, possession days — large-scale gifting handled with the same care as a single hamper.",
    accent: "kraft",
    bullets: [
      "Speaker & VIP gifts",
      "Delegate welcome kits",
      "Training cohort mementos",
      "Property handover hampers",
      "Award-night & recognition gifts",
    ],
  },
  {
    slug: "logistics",
    number: "06",
    title: "Logistics & Delivery",
    intro:
      "Pan-India dispatch and hand-delivery in tier-1 cities — tracked end-to-end, on time, every time.",
    accent: "ink",
    bullets: [
      "Hand-delivered in tier-1 cities",
      "Pan-India tracked dispatch",
      "International shipping on request",
      "Single-address or split-ship",
      "Festive-season turnaround guarantee",
    ],
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
};

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Enquire",
    body: "Share the occasion, audience, scale and deadline. Five minutes is enough to get us started.",
  },
  {
    number: "02",
    title: "Curate",
    body: "We come back within 48 hours with a layered proposal — gift items, packaging, message cards, pricing per unit.",
  },
  {
    number: "03",
    title: "Customise",
    body: "Sign off on brand marks, ribbon colours, embossing details and card copy. We sample anything that needs sampling.",
  },
  {
    number: "04",
    title: "Deliver",
    body: "Hand-delivered in tier-1 cities, tracked dispatch elsewhere. You get one consolidated point of contact, end to end.",
  },
];

export type Delivery = {
  client: string;
  scope: string;
  outcome: string;
};

export const recentDeliveries: Delivery[] = [
  {
    client: "Fortune-500 IT services firm",
    scope: "Bengaluru · Onboarding cohort",
    outcome: "1,200 hand-tied welcome kits delivered in 21 days",
  },
  {
    client: "Boutique luxury hotel group",
    scope: "Pan-India · Quarterly amenities",
    outcome: "Eco-friendly room amenities, refreshed every season",
  },
  {
    client: "Real-estate developer",
    scope: "Hyderabad · Possession day",
    outcome: "500 brass-embossed handover hampers — same day",
  },
  {
    client: "Professional training institute",
    scope: "Mumbai · Graduation cohort",
    outcome: "8 cohorts × 80 personalised mementos, on schedule",
  },
];

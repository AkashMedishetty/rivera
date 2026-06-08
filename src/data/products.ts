import type { PhotoKey } from "./media";

export type ProductCategory = {
  slug: string;
  title: string;
  layer: string;
  intro: string;
  items: string[];
  accent: "teal" | "kraft" | "ink";
  photo: PhotoKey;
  photoAlt: string;
};

export const categories: ProductCategory[] = [
  {
    slug: "apparel",
    title: "Apparel & Wear",
    layer: "01 — Worn",
    intro: "Custom-fit garments that carry your brand with the people who represent it.",
    accent: "teal",
    photo: "apparel",
    photoAlt: "Two plain polo shirts in white and blue on a clean background",
    items: [
      "T-Shirts",
      "Shirts",
      "Sweatshirts",
      "Jackets",
      "Caps",
      "Apparel Accessories",
      "Personal Accessories",
      "Ladies Wear",
    ],
  },
  {
    slug: "drinkware",
    title: "Drinkware",
    layer: "02 — Held",
    intro: "Mugs, flasks and bottles — daily-use objects that earn a permanent place on the desk.",
    accent: "ink",
    photo: "drinkwareBottle",
    photoAlt: "Premium black thermos flask on a warm wooden surface",
    items: ["Mugs", "Sippers", "Water Bottles", "Hot & Cold Flasks"],
  },
  {
    slug: "luggage",
    title: "Luggage & Bags",
    layer: "03 — Carried",
    intro: "From boardroom totes to overnight rollers — built to travel as well as your team does.",
    accent: "kraft",
    photo: "luggageLeather",
    photoAlt: "A premium black leather tote bag",
    items: [
      "Backpacks",
      "Laptop Bags",
      "Overnighters & Rollers",
      "Duffle Bags",
      "Crossbody & Messenger Bags",
      "Sleeves & Slipcases",
      "Tote Bags & Hand Bags",
      "Travel Accessories",
    ],
  },
  {
    slug: "office",
    title: "Office & Desktop",
    layer: "04 — Used",
    intro: "Stationery, desk gifts and writing instruments — small objects, repeated impressions.",
    accent: "teal",
    photo: "officeStationery",
    photoAlt: "A fountain pen resting on a spiral notebook",
    items: [
      "Desktop Gifts",
      "Pens",
      "Office Supplies & Stationery",
      "Folders",
      "Lanyards",
      "Lapel Pins",
      "Personal Gifts",
      "Diary & Note Pads",
    ],
  },
  {
    slug: "electronics",
    title: "Tech & Electronics",
    layer: "05 — Plugged In",
    intro: "Modern, brandable tech that lands in pockets, on desks and on travel charging-mats.",
    accent: "ink",
    photo: "electronicsHeadphones",
    photoAlt: "A minimalist speaker on a clean studio surface",
    items: [
      "Power Banks",
      "Bluetooth Speakers",
      "Headphones",
      "Earphones",
      "Tech Accessories",
      "Gadgets",
      "Fitness Bands",
    ],
  },
  {
    slug: "eco",
    title: "Eco Gifts",
    layer: "06 — Returned",
    intro: "Where our story began — biodegradable, recycled and reusable gifting, end to end.",
    accent: "kraft",
    photo: "ecoBamboo",
    photoAlt: "Bamboo sticks in a ceramic bowl — sustainable composition",
    items: [
      "Eco Bags",
      "Eco Desktop",
      "Eco Drinkware",
      "Office Eco Products",
      "Eco Accessories",
      "Plants",
    ],
  },
  {
    slug: "hampers",
    title: "Festive & Hampers",
    layer: "07 — Unwrapped",
    intro: "Curated festive boxes, chocolates and dry fruits — the gift you hand-deliver in person.",
    accent: "teal",
    photo: "hamperChocolate",
    photoAlt: "An elegant box of chocolates on a wooden table",
    items: [
      "Chocolates",
      "Sweets & Dry Fruits",
      "Cookies & Cakes",
      "Aroma Candles",
      "Plants & Flowers",
      "Festive Gift Combos",
      "Home Decor",
      "Gift Bags",
      "Gift Packaging",
      "Food Hampers",
      "Gifts for Her",
    ],
  },
  {
    slug: "homeware",
    title: "Homeware",
    layer: "08 — Lived With",
    intro: "Candles, accessories and small objects that travel home and stay there.",
    accent: "ink",
    photo: "homewareCandle",
    photoAlt: "A white candle in a clear glass holder",
    items: ["Clocks", "Home Accessories", "Home Utilities", "Appliances"],
  },
  {
    slug: "awards",
    title: "Awards & Recognition",
    layer: "09 — Earned",
    intro: "Trophies, medals and momentos that make the moment land. For it, only the heavy stuff.",
    accent: "kraft",
    photo: "awardTrophy",
    photoAlt: "A golden trophy beside a colourful contemporary award",
    items: [
      "Crystal & Acrylic Trophies",
      "Wooden, Metal & Fibre Trophies",
      "Medals",
      "Premium Trophies",
    ],
  },
  {
    slug: "wellness",
    title: "Sports & Wellness",
    layer: "10 — Felt",
    intro: "Wellness kits and sports merch for healthier teams and happier guests.",
    accent: "teal",
    photo: "wellnessTowels",
    photoAlt: "Three folded towels with a teal towel draped on top",
    items: ["Wellness Products", "Fitness Accessories", "Yoga Essentials"],
  },
];

export type ServiceClient = { sector: string; blurb: string };

export const sectorsServed: ServiceClient[] = [
  { sector: "Real Estate", blurb: "Site-handover hampers, possession-day welcome kits and broker recognition gifts." },
  { sector: "Corporate Hubs", blurb: "Onboarding kits, milestone hampers, employee-appreciation drops and event swag." },
  { sector: "Hospitality & Hotels", blurb: "In-room welcome amenities, eco-certified disposables and seasonal guest gifts." },
  { sector: "Convention Centres", blurb: "Speaker gifts, delegate kits and large-scale branded merchandise for events." },
  { sector: "Professional Training", blurb: "Cohort welcome kits, certification mementos and graduation gifting at scale." },
  { sector: "F&B and Play Arenas", blurb: "Eco-friendly tissues, customisable packaging and brandable in-venue gifts." },
];

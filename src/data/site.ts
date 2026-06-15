export const site = {
  name: "Rivera Gifting",
  tagline: "From sustainable essentials to unforgettable experiences.",
  foundedYear: 2023,
  email: "vamshith@riveragifting.com",
  phone: "+91 90638 73370",
  location: "India",
  legalName: "Rivera Gifting by N3 industries",
  address: {
    line1: "Sy no 243/3, Khajiguda, Gundlapochampally",
    line2: "Medchal - Malkajgiri, Telangana, 500014",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ],
  sectors: [
    "Real Estate",
    "Corporate Hubs",
    "Hospitality",
    "Professional Training",
    "Convention Centres",
    "Luxury Hotels",
  ],
  stats: [
    { value: "2023", label: "Founded · Sustainable manufacturing" },
    { value: "10", label: "Gifting categories · all customisable" },
    { value: "6+", label: "Sectors served across India" },
    { value: "48h", label: "Proposal turnaround, festive or not" },
  ],
  promo: {
    text: "Festive 2026 enquiries now open",
    cta: "48-hour proposal turnaround",
  },
} as const;

export type NavItem = (typeof site.nav)[number];

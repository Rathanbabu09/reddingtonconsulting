// Single source of truth for company details used across header, footer, contact and SEO.
function resolveSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv && /^https?:\/\//.test(fromEnv)) return fromEnv.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel}`;
  return "https://www.reddingtonconsulting.com";
}

export const site = {
  name: "Reddington Consulting Inc.",
  shortName: "Reddington",
  tagline: "IT staffing & talent solutions that move your business forward.",
  description:
    "Reddington Consulting Inc. is a Texas-based IT staffing and consulting firm connecting growing companies with pre-vetted technology talent — contract, contract-to-hire and direct hire.",
  url: resolveSiteUrl(),
  email: "info@reddingtonconsulting.com",
  phone: "+1 469-898-4777",
  phoneHref: "tel:+14698984777",
  address: {
    street: "7214 Highway 78 Ste 12",
    city: "Sachse",
    region: "TX",
    postal: "75048",
    country: "USA",
  },
  hours: "Mon – Fri, 9:00 AM – 6:00 PM CST",
  mapQuery: "7214 Highway 78 Ste 12, Sachse, TX 75048",
  social: {
    linkedin: "https://www.linkedin.com/",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/clients", label: "Clients" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const addressLines = [
  `${site.address.street},`,
  `${site.address.city}, ${site.address.region} ${site.address.postal}, ${site.address.country}`,
];

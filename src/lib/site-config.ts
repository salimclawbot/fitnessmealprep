export const siteConfig = {
  name: "Cat Care Guides",
  tagline: "Expert Cat Care for Happy, Healthy Indoor Cats",
  description:
    "Expert cat care guides, product reviews, and health advice for indoor cats. Trusted by cat owners worldwide.",
  url: "https://catcareguides.com",
  author: "Dr. Sarah Mitchell, DVM, Feline Health Specialist",
  primaryColor: "#b45309",
  niche: "cat-care",
  email: "hello@catcareguides.com",
  privacyEmail: "privacy@catcareguides.com",
  editorialEmail: "editorial@catcareguides.com",
  contactEmail: "contact@catcareguides.com",
  ogImage: "/icon.svg",
  updatedLabel: "Updated March 2026",
} as const;

export const featuredGuides = [
  {
    slug: "best-cat-food-indoor-cats",
    title: "Best Cat Food for Indoor Cats: Vet-Reviewed Picks (2026)",
    description: "Compare balanced indoor formulas for weight control, digestion, and coat health.",
    image: "/icon.svg",
    category: "Product Guide",
  },
  {
    slug: "best-cat-litter-boxes",
    title: "Best Cat Litter Boxes: Cleaner Setups for Every Home",
    description: "Top open, covered, and self-cleaning litter boxes reviewed for odor control and ease of use.",
    image: "/icon.svg",
    category: "Buying Guide",
  },
  {
    slug: "how-to-keep-cat-healthy",
    title: "How to Keep Your Cat Healthy: Daily Care Habits That Matter",
    description: "A practical health guide covering nutrition, enrichment, litter habits, and routine vet care.",
    image: "/icon.svg",
    category: "Health Guide",
  },
] as const;

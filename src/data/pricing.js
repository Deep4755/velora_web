export const plans = [
  {
    id: 1,
    name: "Landing Page",
    price: "£150 – £300",
    description: "Perfect for campaigns and lead generation",
    features: [
      "1 page",
      "Fast delivery (3–5 days)",
      "Mobile responsive",
      "Contact form",
      "Basic SEO",
      "Free revisions (2 rounds)",
    ],
    popular: false,
    cta: "Choose Plan",
  },
  {
    id: 2,
    name: "Business Website",
    price: "£300 – £800",
    description: "Complete web presence for your business",
    features: [
      "3–5 pages",
      "Contact form",
      "SEO basics",
      "Mobile responsive",
      "Custom design",
      "Content management",
      "Free revisions (3 rounds)",
    ],
    popular: true,
    cta: "Choose Plan",
  },
  {
    id: 3,
    name: "Ecommerce Website",
    price: "£500 – £1500",
    description: "Full online store with payment processing",
    features: [
      "Store setup",
      "Payment integration",
      "Product pages",
      "Shopping cart",
      "Admin panel",
      "Inventory management",
      "Mobile responsive",
      "Free revisions (3 rounds)",
    ],
    popular: false,
    cta: "Choose Plan",
  },
];

export const addons = [
  { name: "Extra Page", description: "Additional page for your website", price: "£50" },
  { name: "SEO Monthly", description: "Ongoing SEO optimisation", price: "£100+" },
  { name: "Maintenance", description: "Monthly updates and support", price: "£50/mo" },
  { name: "Logo Design", description: "Custom logo for your brand", price: "£100" },
];

export const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "Landing pages: 3–5 days. Business websites: 1–2 weeks. Ecommerce: 2–4 weeks.",
  },
  {
    question: "What's included in the price?",
    answer:
      "All packages include design, development, mobile responsiveness, and basic SEO.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes! 2–3 rounds of revisions are included depending on your package.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer maintenance packages starting at £50/month for updates and support.",
  },
];

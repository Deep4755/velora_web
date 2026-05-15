import { Link } from "react-router-dom";
import AnimateIn, { StaggerContainer, StaggerItem } from "../components/AnimateIn";

const serviceDetails = [
  {
    id: 1,
    title: "Landing Pages",
    subtitle: "Convert visitors into customers",
    icon: "🚀",
    price: "Starting at £150",
    timeline: "3–5 days",
    description: "A landing page is a single, focused page built to turn visitors into leads or customers. Perfect for campaigns, product launches or lead generation. We build them fast, mobile-first and optimised to convert.",
    features: ["1 page custom design", "Mobile responsive layout", "Contact / lead capture form", "Basic on-page SEO", "Google Analytics setup", "Fast loading (under 3s)", "2 rounds of revisions", "Delivered in 3–5 days"],
    bestFor: ["Product launches", "Ad campaigns", "Lead generation", "Event promotions", "Service promotions"],
    gradient: "from-blue-50 to-indigo-100",
  },
  {
    id: 2,
    title: "Business Websites",
    subtitle: "Your full online presence",
    icon: "💼",
    price: "Starting at £300",
    timeline: "1–2 weeks",
    description: "A multi-page website that shows everything your business offers. We build professional sites that build trust, attract customers and represent your brand properly — with all the pages you need.",
    features: ["3–5 custom pages", "Home, About, Services, Contact", "Mobile responsive design", "Contact form with email notifications", "SEO on all pages", "Google Analytics & Search Console", "Social media links", "3 rounds of revisions"],
    bestFor: ["Local businesses", "Freelancers & consultants", "Restaurants & cafes", "Tradespeople", "Professional services"],
    gradient: "from-orange-50 to-amber-100",
  },
  {
    id: 3,
    title: "Ecommerce Stores",
    subtitle: "Sell online with confidence",
    icon: "🛒",
    price: "Starting at £500",
    timeline: "2–4 weeks",
    description: "A complete online store with everything you need to sell products. From product listings to checkout and payment processing — easy to manage and built to sell.",
    features: ["Full product catalogue", "Shopping cart & checkout", "Stripe & PayPal integration", "Admin dashboard", "Inventory management", "Order tracking & notifications", "Mobile responsive", "SEO optimised product pages"],
    bestFor: ["Retail businesses", "Clothing & fashion", "Food & drink", "Handmade goods", "Digital products"],
    gradient: "from-emerald-50 to-teal-100",
  },
  {
    id: 4,
    title: "Portfolio Websites",
    subtitle: "Show your work professionally",
    icon: "🖼️",
    price: "Starting at £200",
    timeline: "3–7 days",
    description: "A clean, visual website for creatives, freelancers and professionals. Show your work, tell your story and make it easy for clients to get in touch.",
    features: ["Custom portfolio layout", "Project gallery", "About & contact pages", "Mobile responsive", "Basic SEO", "Social media links", "2 rounds of revisions", "Delivered in 3–7 days"],
    bestFor: ["Photographers", "Designers", "Developers", "Writers", "Consultants"],
    gradient: "from-purple-50 to-violet-100",
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "Free 30-minute call to understand your business, goals and what you need from your website." },
  { step: "02", title: "Proposal & Quote", desc: "Within 24 hours you'll receive a detailed proposal with a fixed price — no surprises." },
  { step: "03", title: "Design & Build", desc: "We design and develop your site, keeping you updated throughout the process." },
  { step: "04", title: "Review & Revise", desc: "You review the site and we make adjustments until you're completely happy." },
  { step: "05", title: "Launch", desc: "We deploy your site, set up your domain and make sure everything runs perfectly." },
  { step: "06", title: "Ongoing Support", desc: "We're available after launch for updates, maintenance and any questions you have." },
];

const techStack = [
  { name: "React", desc: "Fast, modern frontends" },
  { name: "Next.js", desc: "SEO-friendly websites" },
  { name: "Tailwind CSS", desc: "Clean, responsive design" },
  { name: "Shopify", desc: "Ecommerce stores" },
  { name: "WordPress", desc: "Easy content management" },
  { name: "Stripe", desc: "Secure payments" },
  { name: "Vercel", desc: "Fast hosting & deployment" },
  { name: "Figma", desc: "UI/UX design" },
];

function Check() {
  return (
    <svg className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-4">What We Do</p>
          <h1 className="heading-xl mb-4">Our Services</h1>
          <div className="accent-line mx-auto mb-5" />
          <p className="body-lg !text-white/60 max-w-lg mx-auto mb-8">
            Professional web solutions for small businesses. We build websites that look great and actually work for your business.
          </p>
          <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
        </div>
      </section>

      {/* Service detail rows */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16 md:space-y-20">
          {serviceDetails.map((s, i) => (
            <AnimateIn key={s.id} delay={0.1}>
            <div className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 md:gap-12 items-center`}>
              {/* Visual placeholder */}
              <div className={`w-full lg:w-5/12 shrink-0 rounded-2xl bg-gradient-to-br ${s.gradient} h-72 flex flex-col items-center justify-center gap-3`}>
                <span className="text-7xl">{s.icon}</span>
                <span className="text-[#111111]/40 text-sm font-medium">Service Preview</span>
              </div>

              {/* Content */}
              <div className="w-full lg:w-7/12">
                <p className="section-label mb-2">{s.subtitle}</p>
                <h2 className="heading-md mb-2">{s.title}</h2>
                <div className="accent-line" />
                <p className="font-black text-xl text-[#111111] mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{s.price}</p>
                <p className="text-sm text-gray-400 mb-4">⏱ Typical timeline: {s.timeline}</p>
                <p className="body-lg mb-6">{s.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-[#111111] uppercase tracking-wider mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Features Include:</p>
                    <ul className="space-y-2">
                      {s.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2"><Check /><span className="body-md">{f}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111111] uppercase tracking-wider mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Best For:</p>
                    <ul className="space-y-2">
                      {s.bestFor.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2">
                          <span className="text-[#C9A84C] font-bold text-sm mt-0.5">→</span>
                          <span className="body-md">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link to="/contact" className="btn-primary">Get Started →</Link>
              </div>
            </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, #fafafa, #f0edff)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">How We Work</p>
            <h2 className="heading-lg mb-3">Our Process</h2>
            <div className="accent-line mx-auto" />
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((p, i) => (
              <StaggerItem key={i}>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 card-hover">
                <p className="font-black text-4xl mb-3" style={{ color: "#1B256320", fontFamily: "'Poppins', sans-serif" }}>{p.step}</p>
                <h3 className="heading-md !text-lg mb-2">{p.title}</h3>
                <p className="body-md">{p.desc}</p>
              </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tech stack */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">Technology</p>
            <h2 className="heading-lg mb-3">What We Build With</h2>
            <div className="accent-line mx-auto" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((t, i) => (
              <div key={i} className="rounded-xl p-5 text-center border border-gray-100 hover:border-[#4F46E5]/30 hover:shadow-sm transition-all"
                style={{ background: "linear-gradient(180deg, #fafafa, #f0edff)" }}>
                <p className="font-semibold text-base text-[#111111] mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{t.name}</p>
                <p className="body-md text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: "linear-gradient(135deg, #1B2563 0%, #4F46E5 60%, #C9A84C 100%)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="heading-lg !text-white mb-4">Ready to Get Started?</h2>
          <p className="body-lg !text-white/70 mb-8">Let's discuss your project and find the perfect solution for your business.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Contact Us</Link>
            <Link to="/pricing" className="btn-outline-white">View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}

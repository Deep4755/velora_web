import { useState } from "react";
import { Link } from "react-router-dom";
import { stats, testimonials } from "../data/portfolio";
import AnimateIn, { StaggerContainer, StaggerItem } from "../components/AnimateIn";

const filters = ["All", "Landing Pages", "Business Websites", "Ecommerce"];
const tagMap = { All: null, "Landing Pages": "landing", "Business Websites": "business", Ecommerce: "ecommerce" };

const allProjects = [
  { id: 1, title: "Fashion Boutique", category: "Ecommerce", tag: "ecommerce", gradient: "from-rose-50 to-pink-100" },
  { id: 2, title: "Restaurant Website", category: "Business Website", tag: "business", gradient: "from-amber-50 to-orange-100" },
  { id: 3, title: "SaaS Landing Page", category: "Landing Page", tag: "landing", gradient: "from-blue-50 to-indigo-100" },
  { id: 4, title: "Fitness Studio", category: "Business Website", tag: "business", gradient: "from-emerald-50 to-teal-100" },
  { id: 5, title: "Product Launch", category: "Landing Page", tag: "landing", gradient: "from-sky-50 to-cyan-100" },
  { id: 6, title: "Coffee Shop Store", category: "Ecommerce", tag: "ecommerce", gradient: "from-orange-50 to-amber-100" },
  { id: 7, title: "Yoga Studio", category: "Business Website", tag: "business", gradient: "from-purple-50 to-violet-100" },
  { id: 8, title: "Tech Startup", category: "Landing Page", tag: "landing", gradient: "from-cyan-50 to-sky-100" },
  { id: 9, title: "Jewellery Store", category: "Ecommerce", tag: "ecommerce", gradient: "from-pink-50 to-rose-100" },
  { id: 10, title: "Law Firm", category: "Business Website", tag: "business", gradient: "from-slate-50 to-gray-100" },
  { id: 11, title: "App Launch", category: "Landing Page", tag: "landing", gradient: "from-violet-50 to-purple-100" },
  { id: 12, title: "Pet Shop", category: "Ecommerce", tag: "ecommerce", gradient: "from-lime-50 to-green-100" },
];

const caseStudies = [
  {
    title: "Fashion Boutique — Ecommerce",
    result: "3x increase in online sales within 60 days of launch",
    challenge: "The client had no online presence and was losing customers to competitors with websites.",
    solution: "We built a full Shopify ecommerce store with custom design, product photography guidelines, and Stripe integration.",
    icon: "👗",
    gradient: "from-rose-50 to-pink-100",
  },
  {
    title: "Restaurant Website — Business Site",
    result: "40% increase in table bookings via the website",
    challenge: "An outdated website that wasn't mobile-friendly and had no online booking system.",
    solution: "Rebuilt the site from scratch with a modern design, online booking form, and menu showcase.",
    icon: "🍽️",
    gradient: "from-amber-50 to-orange-100",
  },
  {
    title: "SaaS Landing Page",
    result: "28% conversion rate on paid ad traffic",
    challenge: "The startup needed a high-converting landing page for their Google Ads campaign.",
    solution: "Designed a focused landing page with clear value proposition, social proof, and a strong CTA.",
    icon: "💻",
    gradient: "from-blue-50 to-indigo-100",
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = tagMap[activeFilter] === null
    ? allProjects
    : allProjects.filter(p => p.tag === tagMap[activeFilter]);

  return (
    <>
      {/* Hero */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Our Work</p>
          <h1 className="heading-xl mb-4">Our Portfolio</h1>
          <div className="accent-line mx-auto mb-5" />
          <p className="body-lg !text-white/60 max-w-lg mx-auto">
            Real projects delivered for real businesses. Every site is custom-built and designed to perform.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10" style={{ background: "linear-gradient(90deg, #0a1245, #1B2563, #2d3a8c)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} className="py-2">
                <p className="font-black text-4xl mb-1 text-gradient-gold" style={{ fontFamily: "'Poppins', sans-serif" }}>{s.value}</p>
                <p className="text-white/50 text-sm uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="heading-lg mb-3">All Projects</h2>
            <div className="accent-line mx-auto" />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="text-sm font-semibold px-5 py-2.5 rounded-xl border-2 transition-all"
                style={
                  activeFilter === f
                    ? { backgroundColor: "#1B2563", color: "white", borderColor: "#1B2563", fontFamily: "'Poppins', sans-serif" }
                    : { backgroundColor: "white", color: "#111111", borderColor: "#e5e7eb", fontFamily: "'Poppins', sans-serif" }
                }
                onMouseEnter={e => { if (activeFilter !== f) { e.currentTarget.style.borderColor = "#4F46E5"; e.currentTarget.style.color = "#4F46E5"; } }}
                onMouseLeave={e => { if (activeFilter !== f) { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.color = "#1B2563"; } }}
              >
                {f}
              </button>
            ))}
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(project => (
              <StaggerItem key={project.id}>
              <div className="rounded-2xl overflow-hidden border border-gray-100 card-hover bg-white shadow-sm">
                <div className={`h-52 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center gap-2`}>
                  <div className="w-12 h-12 rounded-xl bg-white/70 flex items-center justify-center shadow-sm">
                    <svg className="w-6 h-6 text-[#4F46E5]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-[#111111]/30 text-sm font-medium">Project Screenshot</span>
                </div>
                <div className="p-6">
                  <p className="text-[#C9A84C] text-xs font-bold mb-1.5 uppercase tracking-wider">{project.category}</p>
                  <h3 className="font-semibold text-base text-[#111111] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>{project.title}</h3>
                  <Link
                    to="/contact"
                    className="text-sm font-semibold border-2 border-[#1B2563] text-[#111111] hover:bg-[#1B2563] hover:text-white px-4 py-2 rounded-lg transition-colors inline-block"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    View Project →
                  </Link>
                </div>
              </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, #fafafa, #f0edff)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">Deep Dives</p>
            <h2 className="heading-lg mb-3">Case Studies</h2>
            <div className="accent-line mx-auto" />
          </div>
          <div className="space-y-6">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row">
                  <div className={`lg:w-44 bg-gradient-to-br ${cs.gradient} flex items-center justify-center p-8 text-6xl shrink-0`}>
                    {cs.icon}
                  </div>
                  <div className="p-7 flex-1">
                    <h3 className="font-semibold text-lg text-[#111111] mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{cs.title}</h3>
                    <span
                      className="inline-block text-[#111111] text-xs font-bold px-4 py-1.5 rounded-full mb-5"
                      style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
                    >
                      📈 {cs.result}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm font-semibold text-[#111111] uppercase tracking-wider mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>The Challenge</p>
                        <p className="body-md">{cs.challenge}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#111111] uppercase tracking-wider mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Our Solution</p>
                        <p className="body-md">{cs.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">Reviews</p>
            <h2 className="heading-lg mb-3">Client Testimonials</h2>
            <div className="accent-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.id} className="rounded-2xl p-7 border border-gray-100 card-hover shadow-sm"
                style={{ background: "linear-gradient(135deg, #fafafa, #f0edff)" }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-[#C9A84C] text-lg">★</span>)}
                </div>
                <p className="body-lg mb-6">"{t.quote}"</p>
                <div className="border-t border-gray-100 pt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ background: "linear-gradient(135deg, #4F46E5, #6366f1)" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-base text-[#111111]" style={{ fontFamily: "'Poppins', sans-serif" }}>{t.name}</p>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: "linear-gradient(135deg, #1B2563 0%, #4F46E5 60%, #C9A84C 100%)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="heading-lg !text-white mb-4">Want to Be Our Next Success Story?</h2>
          <p className="body-lg !text-white/70 mb-8">Let's build something great together. Get a free quote today.</p>
          <Link to="/contact" className="btn-primary">Start Your Project →</Link>
        </div>
      </section>
    </>
  );
}

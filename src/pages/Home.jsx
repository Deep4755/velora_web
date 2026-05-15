import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "../data/services";
import { stats, testimonials } from "../data/portfolio";
import FAQSection from "../components/FAQSection";
import AnimateIn, { StaggerContainer, StaggerItem } from "../components/AnimateIn";

/* ─── Section header ─── */
function SectionHeader({ label, title, subtitle, light = false }) {
  return (
    <div className="text-center mb-14">
      <span className="section-label">{label}</span>
      <h2 className={`heading-lg mb-3 ${light ? "!text-white" : ""}`}>{title}</h2>
      <div className="accent-line mx-auto" />
      {subtitle && (
        <p className={`body-lg max-w-xl mx-auto ${light ? "!text-white/60" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─── Hero contact form ─── */
function HeroForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl purple-glow">
      <div className="flex items-center gap-2.5 mb-1">
        <div className="w-2.5 h-2.5 rounded-full bg-[#C9A84C]" />
        <h3
          className="text-[#111111] font-bold text-xl"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          GET IN TOUCH
        </h3>
      </div>
      <p className="text-gray-500 text-sm mb-6 pl-5">We reply within 24 hours.</p>

      {sent ? (
        <div className="text-center py-10">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-5"
            style={{ background: "linear-gradient(135deg, #4F46E520, #C9A84C20)" }}
          >
            ✅
          </div>
          <p className="text-[#111111] font-bold text-lg mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Thank you!
          </p>
          <p className="text-gray-500 text-base">We will contact you soon.</p>
          <button
            onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
            className="mt-5 text-[#4F46E5] text-sm font-semibold hover:underline"
          >
            Send another →
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handle}
            placeholder="Your name"
            required
            className="input-field"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handle}
            placeholder="Email address"
            required
            className="input-field"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handle}
            placeholder="Tell us about your project..."
            rows={4}
            className="input-field resize-none"
          />
          <button type="submit" className="btn-primary w-full text-center">
            Send Message →
          </button>
          <p className="text-gray-400 text-sm text-center">
            No spam. We'll reply within 24 hours.
          </p>
          <p className="text-gray-400 text-xs text-center mt-1">
            By submitting this form, you agree that we may contact you about your enquiry. We never sell your details.
          </p>
        </form>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="hero-bg py-20 lg:py-28 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #4F46E5 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)", transform: "translate(-30%, 30%)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-7"
                style={{
                  backgroundColor: "rgba(201,168,76,0.15)",
                  color: "#C9A84C",
                  border: "1px solid rgba(201,168,76,0.3)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
                London Digital Agency
              </motion.div>

              <motion.h1
                className="heading-xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                We Build Simple Websites That{" "}
                <motion.span
                  className="text-gradient-gold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Grow Your Business
                </motion.span>
              </motion.h1>

              <motion.p
                className="body-lg !text-white/70 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Professional website design for small businesses, startups and local brands in London. We build fast, responsive and customer-friendly websites that help you stand out online.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mb-10"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Link to="/contact" className="btn-primary">Get Started</Link>
                <Link to="/portfolio" className="btn-outline-white">View Our Work</Link>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-x-7 gap-y-2.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                {["No hidden fees", "Mobile responsive", "Fast delivery", "Free revisions"].map((t) => (
                  <span key={t} className="flex items-center gap-2 text-white/50 text-sm">
                    <span className="text-[#C9A84C] font-bold text-base">✓</span> {t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <HeroForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════ */}
      <section
        className="py-10"
        style={{ background: "linear-gradient(90deg, #0a1245 0%, #1e2d6e 50%, #0f1d5a 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} className="py-2">
                <p
                  className="font-black text-4xl mb-1 text-gradient-gold"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {s.value}
                </p>
                <p className="text-white/50 text-sm uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT SECTION
      ══════════════════════════════════════ */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimateIn>
              <span className="section-label">About Our Agency</span>
              <h2 className="heading-lg mb-4">
                Affordable website design for local businesses, startups and personal brands.
              </h2>
              <div className="accent-line" />
              <p className="body-lg mb-4">
                We are a small web design agency in London focused on creating clean, modern and easy-to-use websites. Whether you need a landing page design, a professional business website or a small ecommerce store, we make the whole process simple — from planning to launch.
              </p>
              <p className="body-lg mb-8">
                Our responsive website design ensures your site works smoothly on mobile, tablet and desktop. We combine honest pricing with fast delivery so you can get online quickly without breaking the budget.
              </p>
              <Link to="/about" className="btn-primary">Learn More About Us</Link>
            </AnimateIn>

            <AnimateIn delay={0.2} direction="right">
              <div className="grid grid-cols-1 gap-5">
              {[
                { icon: "💬", title: "Clear Communication", desc: "We explain every step in simple language so you always know what is happening." },
                { icon: "🎨", title: "Modern Design", desc: "We create clean layouts, strong colours and responsive pages that look good on every device." },
                { icon: "🎯", title: "Business Focused", desc: "We design websites with your customers in mind, including clear calls-to-action and easy navigation." },
              ].map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 border border-gray-100 flex items-start gap-5 card-hover"
                  style={{
                    background:
                      i === 0
                        ? "linear-gradient(135deg, #faf8ff, #f0edff)"
                        : i === 1
                        ? "linear-gradient(135deg, #fffdf5, #fff8e6)"
                        : "linear-gradient(135deg, #f5f8ff, #edf2ff)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(79,70,229,0.12), rgba(201,168,76,0.12))" }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-base text-[#111111] mb-1.5"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {c.title}
                    </h3>
                    <p className="body-md">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES
      ══════════════════════════════════════ */}
      <section
        className="section-pad"
        style={{ background: "linear-gradient(180deg, #fafafa 0%, #f0edff 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="What We Do"
            title="Our Services"
            subtitle="Professional web solutions built for small businesses that want results."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: "🚀", title: "Landing Pages", desc: "Single-page sites built to convert visitors into leads. Fast to build, easy to update.", price: "From £150", color: "from-blue-50 to-indigo-50" },
              { icon: "💼", title: "Business Websites", desc: "Multi-page sites that showcase your services, build trust and attract new customers.", price: "From £300", color: "from-purple-50 to-violet-50" },
              { icon: "🛒", title: "Ecommerce Stores", desc: "Online stores with product pages, cart and payment processing ready to sell.", price: "From £500", color: "from-amber-50 to-yellow-50" },
              { icon: "🖼️", title: "Portfolio Websites", desc: "Clean, visual sites for creatives, freelancers and professionals to show their work.", price: "From £200", color: "from-emerald-50 to-teal-50" },
            ].map((s, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${s.color} rounded-2xl p-7 border border-white/80 card-hover group relative overflow-hidden`}
              >
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-20 -translate-y-8 translate-x-8"
                  style={{ background: "radial-gradient(circle, #4F46E5, transparent)" }}
                />
                <div
                  className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 relative group-hover:scale-110 transition-transform"
                  style={{ background: "linear-gradient(135deg, #1B2D63, #1B2563)" }}
                >
                  {s.icon}
                </div>
                <h3
                  className="font-semibold text-lg text-[#111111] mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="body-md mb-4">{s.desc}</p>
                <p
                  className="font-bold text-base mb-4"
                  style={{ color: "#1B2D63", fontFamily: "'Poppins', sans-serif" }}
                >
                  {s.price}
                </p>
                <Link
                  to="/services"
                  className="text-[#4F46E5] hover:text-[#C9A84C] text-sm font-semibold transition-colors flex items-center gap-1"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="btn-outline-navy">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PORTFOLIO PREVIEW
      ══════════════════════════════════════ */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Our Work"
            title="Recent Projects"
            subtitle="A snapshot of websites we have built for real businesses."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 mb-12">
            {[
              { title: "Local Business Website", category: "Business Website", gradient: "from-indigo-100 via-purple-50 to-violet-100" },
              { title: "Portfolio Website", category: "Portfolio", gradient: "from-amber-50 via-yellow-50 to-orange-50" },
              { title: "Ecommerce Store", category: "Ecommerce", gradient: "from-emerald-50 via-teal-50 to-cyan-50" },
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover shadow-sm">
                <div className={`h-52 bg-gradient-to-br ${p.gradient} flex flex-col items-center justify-center gap-3`}>
                  <div className="w-14 h-14 rounded-xl bg-white/70 flex items-center justify-center shadow-sm">
                    <svg className="w-7 h-7 text-[#4F46E5]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-[#111111]/30 text-sm font-medium">Project Screenshot</span>
                </div>
                <div className="p-6">
                  <p className="text-[#C9A84C] text-xs font-bold mb-1.5 uppercase tracking-wider">{p.category}</p>
                  <h3
                    className="font-semibold text-base text-[#111111] mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {p.title}
                  </h3>
                  <Link
                    to="/portfolio"
                    className="text-sm font-semibold text-[#4F46E5] border border-indigo-200 hover:bg-indigo-50 px-4 py-2 rounded-lg transition-colors inline-block"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio" className="btn-secondary">View All Projects →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRICING TEASER
      ══════════════════════════════════════ */}
      <section
        className="section-pad"
        style={{ background: "linear-gradient(180deg, #f0edff 0%, #fafafa 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Pricing"
            title="Simple, Honest Pricing"
            subtitle="No surprises. No hidden fees. Just clear pricing for quality work."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 max-w-4xl mx-auto mb-12">
            {[
              { name: "Starter Website", price: "Starting from £150", desc: "Landing page for campaigns and lead generation", popular: false },
              { name: "Business Website", price: "Starting from £300", desc: "Complete web presence for your business", popular: true },
              { name: "Ecommerce Starter", price: "Starting from £500", desc: "Full online store with payment processing", popular: false },
            ].map((p, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 text-center relative border-2 transition-all ${
                  p.popular ? "shadow-2xl scale-[1.04]" : "bg-white border-gray-100 hover:border-indigo-200"
                }`}
                style={p.popular ? { background: "linear-gradient(135deg, #1B2563, #1e2d6e)", borderColor: "#4F46E5" } : {}}
              >
                {p.popular && (
                  <span
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-5 py-1.5 rounded-full"
                    style={{ background: "linear-gradient(135deg, #4F46E5, #C9A84C)", fontFamily: "'Poppins', sans-serif" }}
                  >
                    POPULAR
                  </span>
                )}
                <p
                  className={`font-semibold text-base mb-2 ${p.popular ? "text-white/70" : "text-[#111111]"}`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {p.name}
                </p>
                <p
                  className={`font-black text-2xl mb-2 ${p.popular ? "text-gradient-gold" : ""}`}
                  style={!p.popular ? { color: "#1B2D63", fontFamily: "'Poppins', sans-serif" } : { fontFamily: "'Poppins', sans-serif" }}
                >
                  {p.price}
                </p>
                <p className={`text-sm mb-7 ${p.popular ? "text-white/50" : "text-gray-500"}`}>{p.desc}</p>
                <Link
                  to="/pricing"
                  className={`text-sm font-semibold px-6 py-2.5 rounded-lg border-2 transition-all inline-block ${
                    p.popular
                      ? "border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#111111]"
                      : "border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white"
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/pricing" className="btn-outline-navy">See Full Pricing →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Reviews"
            title="What Our Clients Say"
            subtitle="Real feedback from real businesses we have worked with."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl p-7 border border-gray-100 card-hover relative overflow-hidden shadow-sm"
                style={{ background: "linear-gradient(135deg, #fafafa, #f0edff)" }}
              >
                <div
                  className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-15 -translate-y-10 translate-x-10"
                  style={{ background: "radial-gradient(circle, #4F46E5, transparent)" }}
                />
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#C9A84C] text-lg">★</span>
                  ))}
                </div>
                <p className="body-lg mb-6">"{t.quote}"</p>
                <div className="border-t border-gray-100 pt-5 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ background: "linear-gradient(135deg, #4F46E5, #6366f1)" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-base text-[#111111]"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <FAQSection />
    </>
  );
}

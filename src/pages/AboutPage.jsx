import { Link } from "react-router-dom";
import { stats } from "../data/portfolio";
import AnimateIn, { StaggerContainer, StaggerItem } from "../components/AnimateIn";

const values = [
  { icon: "🎯", title: "Results Focused", desc: "We don't just build websites — we build websites that bring in customers and grow your business." },
  { icon: "🤝", title: "Honest & Transparent", desc: "Fixed prices, clear timelines, and no hidden fees. You always know exactly what you're getting." },
  { icon: "⚡", title: "Fast & Reliable", desc: "We deliver on time, every time. No excuses, no delays — just quality work delivered when promised." },
  { icon: "💬", title: "Great Communication", desc: "We keep you updated throughout the project. You'll never be left wondering what's happening." },
  { icon: "🔧", title: "Quality Craftsmanship", desc: "Every site is hand-coded and custom designed. No templates, no shortcuts — just quality work." },
  { icon: "🌱", title: "Long-Term Partnership", desc: "We're not just here for the build. We're your long-term digital partner for growth and support." },
];

const milestones = [
  { year: "2018", title: "Agency Founded", desc: "Started as a one-person freelance operation in London." },
  { year: "2019", title: "First 10 Clients", desc: "Grew to serve 10 small businesses across London and the South East." },
  { year: "2020", title: "Team Expansion", desc: "Brought on our first designer and SEO specialist to serve clients better." },
  { year: "2021", title: "Ecommerce Launch", desc: "Added ecommerce as a core service, helping retailers sell online." },
  { year: "2023", title: "50+ Projects", desc: "Delivered over 50 websites with a 98% client satisfaction rate." },
  { year: "2026", title: "Growing Strong", desc: "Now a full-service digital agency with a team of 4 specialists." },
];

const team = [
  { name: "James Carter", role: "Founder & Lead Developer", initials: "JC", bio: "10+ years building websites for small businesses across the UK." },
  { name: "Sarah Mitchell", role: "UI/UX Designer", initials: "SM", bio: "Passionate about clean, conversion-focused design that users love." },
  { name: "David Okafor", role: "SEO & Marketing", initials: "DO", bio: "Helping businesses rank higher and attract more customers online." },
  { name: "Priya Sharma", role: "Ecommerce Specialist", initials: "PS", bio: "Expert in Shopify and WooCommerce stores that actually sell." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">About Our Agency</p>
              <h1 className="heading-xl mb-4">
                London's Trusted Digital Agency for Small Businesses
              </h1>
              <div className="accent-line" />
              <p className="text-white/60 text-base leading-relaxed mb-4">
                We help small businesses build a professional online presence without making the process complicated.
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                We believe every small business deserves a professional website — not just the big companies with big budgets. That's why we offer transparent pricing, fast delivery, and genuine support throughout the process.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-gold">Work With Us</Link>
                <Link to="/portfolio" className="btn-outline-white">See Our Work</Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="rounded-xl p-6 text-center border border-white/10"
                  style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(155,81,224,0.1))" }}>
                  <p className="font-black text-4xl text-[#C9A84C] mb-2">{s.value}</p>
                  <p className="text-white/60 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #fafafa, #f5f3ff)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="section-label">About Our Agency</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2563] mb-3">
                We help small businesses build a professional online presence without making the process complicated.
              </h2>
              <div className="accent-line" />
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We are a small digital agency focused on creating clean, modern and easy-to-use websites for local businesses, startups and personal brands. Our aim is to make the whole process simple: clear planning, honest pricing, responsive design and a website that works smoothly on mobile, tablet and desktop.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Whether you need a landing page, a business website, a portfolio or a small ecommerce store, we build websites that look professional and help customers understand your services quickly.
              </p>
              <Link to="/services" className="btn-gold">Explore Our Services →</Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: "💬", title: "Clear Communication", desc: "We explain every step in simple language so you always know what is happening." },
                { icon: "🎨", title: "Modern Design", desc: "We create clean layouts, strong colours and responsive pages that look good on every device." },
                { icon: "🎯", title: "Business Focused", desc: "We design websites with your customers in mind, including clear calls-to-action and easy navigation." },
              ].map((c, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-4 card-hover">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                    style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}>
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#1B2563] mb-1">{c.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">What We Stand For</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2563] mb-3">Our Values</h2>
            <div className="accent-line mx-auto" />
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <StaggerItem key={i}>
              <div className="rounded-xl p-6 border border-gray-100 card-hover"
                style={{ background: "linear-gradient(180deg, #fafafa, #f5f3ff)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(155,81,224,0.15))" }}>
                  {v.icon}
                </div>
                <h3 className="font-bold text-sm text-[#1B2563] mb-2">{v.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #fafafa, #f5f3ff)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2563] mb-3">How We Got Here</h2>
            <div className="accent-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {milestones.map((m, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 card-hover">
                <p className="font-black text-2xl text-[#C9A84C] mb-2">{m.year}</p>
                <h3 className="font-bold text-sm text-[#1B2563] mb-2">{m.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">The People</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2563] mb-3">Meet the Team</h2>
            <div className="accent-line mx-auto" />
            <p className="text-gray-500 text-sm">Small team, big results</p>
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <StaggerItem key={i}>
              <div className="text-center rounded-xl p-6 border border-gray-100 card-hover"
                style={{ background: "linear-gradient(180deg, #fafafa, #f5f3ff)" }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-black text-xl mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #9b51e0, #6b3fa0)" }}>
                  {m.initials}
                </div>
                <h3 className="font-bold text-sm text-[#1B2563] mb-1">{m.name}</h3>
                <p className="text-[#C9A84C] text-xs font-bold mb-3">{m.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{m.bio}</p>
              </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #9b51e0 0%, #6b3fa0 50%, #C9A84C 100%)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-white/70 text-sm mb-8 leading-relaxed">
            Whether you need a landing page, a full business website, or an ecommerce store — we'd love to hear about your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold">Get a Free Quote</Link>
            <Link to="/services" className="btn-outline-white">Our Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}

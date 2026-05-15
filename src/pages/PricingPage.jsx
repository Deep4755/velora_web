import { Link } from "react-router-dom";
import { plans, addons } from "../data/pricing";
import FAQSection from "../components/FAQSection";
import AnimateIn, { StaggerContainer, StaggerItem } from "../components/AnimateIn";

const comparisons = [
  { feature: "Number of pages", landing: "1", business: "3–5", ecommerce: "Unlimited" },
  { feature: "Mobile responsive", landing: "✓", business: "✓", ecommerce: "✓" },
  { feature: "Contact form", landing: "✓", business: "✓", ecommerce: "✓" },
  { feature: "Basic SEO", landing: "✓", business: "✓", ecommerce: "✓" },
  { feature: "Custom design", landing: "✓", business: "✓", ecommerce: "✓" },
  { feature: "Content management", landing: "—", business: "✓", ecommerce: "✓" },
  { feature: "Product pages", landing: "—", business: "—", ecommerce: "✓" },
  { feature: "Shopping cart", landing: "—", business: "—", ecommerce: "✓" },
  { feature: "Payment integration", landing: "—", business: "—", ecommerce: "✓" },
  { feature: "Free revisions", landing: "2 rounds", business: "3 rounds", ecommerce: "3 rounds" },
  { feature: "Delivery time", landing: "3–5 days", business: "1–2 weeks", ecommerce: "2–4 weeks" },
];

function Check() {
  return (
    <svg className="w-4 h-4 shrink-0 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Transparent Pricing</p>
          <h1 className="heading-xl mb-4">Simple Pricing for Small Businesses</h1>
          <div className="accent-line mx-auto mb-5" />
          <p className="body-lg !text-white/60 max-w-lg mx-auto">No hidden fees. No surprises. Just clear, honest pricing for quality websites.</p>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start" stagger={0.15}>
            {plans.map((plan) => (
              <StaggerItem key={plan.id}>
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 border-2 transition-all ${
                  plan.popular
                    ? "shadow-2xl scale-[1.03]"
                    : "bg-white border-gray-100 hover:border-[#4F46E5]/40"
                }`}
                style={plan.popular ? { background: "linear-gradient(135deg, #1B2563, #2d3a8c)", borderColor: "#4F46E5" } : {}}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span
                      className="text-white text-xs font-bold px-5 py-1.5 rounded-full"
                      style={{ background: "linear-gradient(135deg, #4F46E5, #C9A84C)", fontFamily: "'Poppins', sans-serif" }}
                    >
                      POPULAR
                    </span>
                  </div>
                )}
                <h3
                  className={`font-semibold text-xl mb-2 ${plan.popular ? "text-white" : "text-[#111111]"}`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {plan.name}
                </h3>
                <p
                  className="font-black text-4xl mb-2"
                  style={{ color: plan.popular ? "#C9A84C" : "#1B2563", fontFamily: "'Poppins', sans-serif" }}
                >
                  {plan.price}
                </p>
                <p className={`text-sm mb-6 ${plan.popular ? "text-white/60" : "text-gray-500"}`}>{plan.description}</p>
                <p className={`text-xs font-bold mb-4 uppercase tracking-wider ${plan.popular ? "text-white/40" : "text-gray-400"}`}>Includes:</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check />
                      <span className={`text-sm ${plan.popular ? "text-white/70" : "text-gray-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center font-semibold text-base py-3 rounded-xl border-2 transition-all ${
                    plan.popular
                      ? "border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#111111]"
                      : "border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white"
                  }`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {plan.cta}
                </Link>
              </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, #fafafa, #f0edff)" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">Compare</p>
            <h2 className="heading-lg mb-3">Plan Comparison</h2>
            <div className="accent-line mx-auto" />
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="grid grid-cols-4" style={{ background: "linear-gradient(135deg, #1B2563, #2d3a8c)" }}>
              <div className="p-4 text-sm font-semibold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>Feature</div>
              <div className="p-4 text-sm font-semibold text-white text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>Landing Page</div>
              <div className="p-4 text-sm font-semibold text-center" style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)", color: "#111111", fontFamily: "'Poppins', sans-serif" }}>Business</div>
              <div className="p-4 text-sm font-semibold text-white text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>Ecommerce</div>
            </div>
            {comparisons.map((row, i) => (
              <div key={i} className={`grid grid-cols-4 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-indigo-50/20"}`}>
                <div className="p-4 text-sm text-[#111111] font-medium">{row.feature}</div>
                <div className="p-4 text-sm text-gray-500 text-center">{row.landing}</div>
                <div className="p-4 text-sm font-semibold text-[#111111] text-center bg-amber-50/30">{row.business}</div>
                <div className="p-4 text-sm text-gray-500 text-center">{row.ecommerce}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">Extras</p>
            <h2 className="heading-lg mb-3">Add-ons</h2>
            <div className="accent-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addons.map((a, i) => (
              <div key={i} className="rounded-2xl px-6 py-5 flex items-center justify-between border border-gray-100 hover:border-[#4F46E5]/30 transition-colors card-hover"
                style={{ background: "linear-gradient(180deg, #fafafa, #f0edff)" }}>
                <div>
                  <p className="font-semibold text-base text-[#111111] mb-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>{a.name}</p>
                  <p className="body-md text-sm">{a.description}</p>
                </div>
                <span className="font-black text-xl text-[#111111] ml-4 whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif" }}>{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, #f0edff, #fafafa)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">Process</p>
            <h2 className="heading-lg mb-3">How It Works</h2>
            <div className="accent-line mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "1", label: "Consultation", desc: "We discuss your needs and goals" },
              { num: "2", label: "Design", desc: "We create your custom website" },
              { num: "3", label: "Revisions", desc: "We refine based on your feedback" },
              { num: "4", label: "Launch", desc: "Your website goes live" },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center gap-3">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl shadow-lg text-[#111111]"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)", fontFamily: "'Poppins', sans-serif" }}
                >
                  {step.num}
                </div>
                <p className="font-semibold text-base text-[#111111]" style={{ fontFamily: "'Poppins', sans-serif" }}>{step.label}</p>
                <p className="body-md text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <section className="section-pad" style={{ background: "linear-gradient(135deg, #1B2563 0%, #4F46E5 60%, #C9A84C 100%)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="heading-lg !text-white mb-4">Get Your Free Quote</h2>
          <p className="body-lg !text-white/70 mb-8">No obligation. No hidden fees. Just honest pricing.</p>
          <Link to="/contact" className="btn-primary">Free Consultation →</Link>
        </div>
      </section>
    </>
  );
}

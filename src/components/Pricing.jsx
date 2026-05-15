import { useState } from "react";
import { plans, addons, faqs } from "../data/pricing";

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-mono text-emerald-500 text-sm font-semibold mb-2 tracking-widest uppercase">
            Transparent Pricing
          </p>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Simple Pricing for Small Businesses
          </h2>
          <p className="font-mono text-slate-500 text-sm">
            Transparent pricing with no hidden fees
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-7 border transition-all duration-300 ${
                plan.popular
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-200 scale-105"
                  : "bg-white border-slate-200 text-slate-900 hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full font-mono tracking-wider">
                    POPULAR
                  </span>
                </div>
              )}

              <h3
                className={`font-mono font-bold text-lg mb-2 ${
                  plan.popular ? "text-white" : "text-slate-900"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`font-mono font-bold text-3xl mb-2 ${
                  plan.popular ? "text-emerald-300" : "text-emerald-500"
                }`}
              >
                {plan.price}
              </p>
              <p
                className={`font-mono text-xs mb-6 ${
                  plan.popular ? "text-indigo-200" : "text-slate-500"
                }`}
              >
                {plan.description}
              </p>

              <p
                className={`font-mono text-xs font-semibold mb-3 uppercase tracking-wider ${
                  plan.popular ? "text-indigo-200" : "text-slate-400"
                }`}
              >
                Includes:
              </p>
              <ul className="space-y-2 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {plan.popular ? (
                      <svg className="w-4 h-4 text-emerald-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <CheckIcon />
                    )}
                    <span
                      className={`font-mono text-sm ${
                        plan.popular ? "text-indigo-100" : "text-slate-600"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center font-mono font-semibold text-sm py-2.5 rounded-lg border-2 transition-colors ${
                  plan.popular
                    ? "border-white text-white hover:bg-white hover:text-indigo-600"
                    : "border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-600"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mb-16">
          <h3 className="font-mono font-bold text-2xl text-slate-900 text-center mb-8">
            Add-ons
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addons.map((addon, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl px-5 py-4 flex items-center justify-between hover:shadow-sm transition-shadow"
              >
                <div>
                  <p className="font-mono font-semibold text-sm text-slate-900">
                    {addon.name}
                  </p>
                  <p className="font-mono text-xs text-slate-500 mt-0.5">
                    {addon.description}
                  </p>
                </div>
                <span className="font-mono font-bold text-emerald-500 text-sm ml-4 whitespace-nowrap">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="font-mono font-bold text-2xl text-slate-900 text-center mb-10">
            How It Works
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "1", label: "Consultation", desc: "We discuss your needs and goals", color: "bg-indigo-500" },
              { num: "2", label: "Design", desc: "We create your custom website", color: "bg-emerald-500" },
              { num: "3", label: "Revisions", desc: "We refine based on your feedback", color: "bg-teal-500" },
              { num: "4", label: "Launch", desc: "Your website goes live", color: "bg-amber-500" },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center gap-3">
                <div
                  className={`${step.color} w-14 h-14 rounded-full flex items-center justify-center text-white font-mono font-bold text-xl shadow-md`}
                >
                  {step.num}
                </div>
                <p className="font-mono font-semibold text-sm text-slate-900">
                  {step.label}
                </p>
                <p className="font-mono text-xs text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto mb-16">
          <h3 className="font-mono font-bold text-2xl text-slate-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full text-left px-5 py-4 font-mono font-semibold text-sm text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.question}
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 font-mono text-sm text-slate-500 border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl p-10 text-center text-white">
          <h3 className="font-mono font-bold text-2xl mb-2">
            Get Your Free Quote
          </h3>
          <p className="font-mono text-indigo-200 text-sm mb-6">
            No obligation. No hidden fees. Just honest pricing.
          </p>
          <a
            href="#contact"
            className="inline-block border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-mono font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors"
          >
            Free Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}

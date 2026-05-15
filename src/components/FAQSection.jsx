import { useState } from "react";

const defaultFaqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most small business websites are completed within 1 to 2 weeks depending on the project size and content.",
  },
  {
    q: "Do you create mobile responsive websites?",
    a: "Yes. Every website we build is fully responsive and works smoothly on mobile, tablet and desktop devices.",
  },
  {
    q: "Can I update my website later?",
    a: "Yes. We build websites that are easy to update and can also help with future changes if needed.",
  },
  {
    q: "Do you offer ecommerce websites?",
    a: "Yes. We can create small ecommerce stores with product pages, payment setup and a clean shopping experience.",
  },
  {
    q: "Do I need hosting and a domain?",
    a: "We can guide you through hosting and domain setup or help manage everything for you.",
  },
];

export default function FAQSection({ faqs = defaultFaqs, light = false }) {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className={`section-pad ${light ? "section-dark" : "bg-white"}`}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">FAQ</span>
          <h2 className={`heading-lg mb-3 ${light ? "!text-white" : ""}`}>
            Frequently Asked Questions
          </h2>
          <div className="accent-line mx-auto" />
          <p className={`body-md max-w-lg mx-auto ${light ? "!text-white/60" : ""}`}>
            Quick answers to common questions about our web design services.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                  light
                    ? isOpen
                      ? "border-[#C9A84C]/40 bg-white/5"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                    : isOpen
                    ? "border-[#4F46E5]/30 bg-indigo-50/40 shadow-sm"
                    : "border-gray-200 bg-white hover:border-[#4F46E5]/30"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold text-base leading-snug transition-colors ${
                      light
                        ? isOpen
                          ? "text-[#C9A84C]"
                          : "text-white group-hover:text-[#C9A84C]"
                        : isOpen
                        ? "text-[#4F46E5]"
                        : "text-[#1B2563] group-hover:text-[#4F46E5]"
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#C9A84C] rotate-180"
                        : light
                        ? "bg-white/10"
                        : "bg-gray-100"
                    }`}
                  >
                    <svg
                      className={`w-3.5 h-3.5 transition-colors ${isOpen ? "text-[#1B2563]" : light ? "text-white" : "text-gray-500"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Answer with CSS transition */}
                <div
                  className={`faq-answer ${isOpen ? "open" : ""}`}
                  style={isOpen ? { maxHeight: "300px", paddingBottom: "1.25rem" } : {}}
                >
                  <div className={`px-6 pb-1 body-md leading-relaxed ${light ? "!text-white/60" : ""}`}>
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

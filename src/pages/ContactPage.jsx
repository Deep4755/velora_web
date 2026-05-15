import { useState } from "react";
import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    projectType: "Landing Page", budget: "£150 - £300",
    timeline: "As soon as possible", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      {/* Hero */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="section-label mb-4">Get In Touch</span>
          <h1 className="heading-xl mb-4">Start Your Project</h1>
          <div className="accent-line mx-auto mb-5" />
          <p className="body-lg !text-white/60 max-w-lg mx-auto">
            Ready to build something great? Tell us about your project and we'll get back to you within 24 hours with a free quote.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, #fafafa, #f0edff)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-200 shadow-md">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-3xl mx-auto mb-5">✅</div>
                  <h3 className="heading-md mb-2">Message Sent!</h3>
                  <p className="body-lg mb-6">Thank you, we will contact you soon.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", company: "", projectType: "Landing Page", budget: "£150 - £300", timeline: "As soon as possible", message: "" }); }}
                    className="text-[#4F46E5] text-base font-semibold hover:underline"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="heading-md mb-7">Tell Us About Your Project</h3>
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-semibold text-[#111111] block mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          Name <span className="text-red-400">*</span>
                        </label>
                        <input type="text" name="name" value={form.name} onChange={handle} placeholder="Your full name" required className="input-field" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-[#111111] block mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input type="email" name="email" value={form.email} onChange={handle} placeholder="your@email.com" required className="input-field" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-semibold text-[#111111] block mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Phone</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handle} placeholder="+44 ..." className="input-field" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-[#111111] block mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Company</label>
                        <input type="text" name="company" value={form.company} onChange={handle} placeholder="Your company name" className="input-field" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111111] block mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Project Type <span className="text-red-400">*</span>
                      </label>
                      <select name="projectType" value={form.projectType} onChange={handle} className="input-field">
                        <option>Landing Page</option>
                        <option>Business Website</option>
                        <option>Ecommerce Store</option>
                        <option>Portfolio Website</option>
                        <option>Website Redesign</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-semibold text-[#111111] block mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Budget</label>
                        <select name="budget" value={form.budget} onChange={handle} className="input-field">
                          <option>£150 - £300</option>
                          <option>£300 - £800</option>
                          <option>£500 - £1500</option>
                          <option>£1500+</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-[#111111] block mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Timeline</label>
                        <select name="timeline" value={form.timeline} onChange={handle} className="input-field">
                          <option>As soon as possible</option>
                          <option>Within 2 weeks</option>
                          <option>Within a month</option>
                          <option>No rush</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111111] block mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handle}
                        placeholder="Tell us about your project, your business, and what you're looking for..."
                        rows={5}
                        required
                        className="input-field resize-none"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full text-center">Send Message →</button>
                    <p className="text-sm text-gray-400 text-center">We'll respond within 24 hours. No spam, ever.</p>
                    <p className="text-xs text-gray-400 text-center mt-1">By submitting this form, you agree that we may contact you about your enquiry. We never sell your details.</p>
                  </form>
                </>
              )}
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {[
                { icon: "✉️", label: "Email", value: "veloraweb00@gmail.com", sub: "We reply within 24 hours", href: "mailto:veloraweb00@gmail.com", gradient: "linear-gradient(135deg, #1B2D63, #1B2563)" },
                { icon: "📞", label: "Phone", value: "07345 102502", sub: "Mon–Fri 9am–6pm GMT", href: "tel:+447345102502", gradient: "linear-gradient(135deg, #C9A84C, #E8C96A)" },
                { icon: "📍", label: "Location", value: "London, United Kingdom", sub: "Remote & on-site meetings", href: null, gradient: "linear-gradient(135deg, #4F46E5, #6366f1)" },
              ].map((info, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 flex items-start gap-5 shadow-sm card-hover">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: info.gradient }}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-base text-[#111111] mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{info.label}</p>
                    {info.href
                      ? <a href={info.href} className="text-base font-medium text-[#4F46E5] hover:underline">{info.value}</a>
                      : <p className="text-base font-medium text-[#4F46E5]">{info.value}</p>
                    }
                    <p className="text-sm text-gray-400 mt-0.5">{info.sub}</p>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, #4F46E5, #6366f1)" }}>
                <p className="font-semibold text-base text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>⚡ Quick Response</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  We typically respond to all enquiries within 24 hours. Need faster? Call us directly for immediate assistance.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <p className="font-semibold text-base text-[#111111] mb-5" style={{ fontFamily: "'Poppins', sans-serif" }}>What Happens Next?</p>
                <ul className="space-y-4">
                  {["We review your project details", "We send you a free quote within 24h", "We schedule a discovery call", "We start building your website"].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="w-6 h-6 rounded-full text-[#111111] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
                      >
                        {i + 1}
                      </span>
                      <span className="body-md">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ above contact */}
      <FAQSection />

      {/* Not ready */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="heading-md mb-3">Not Ready to Start Yet?</h2>
          <p className="body-lg mb-8 max-w-md mx-auto">Browse our work and pricing first, or check out our services to find the right fit.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[{ label: "View Our Work", to: "/portfolio" }, { label: "See Pricing", to: "/pricing" }, { label: "Our Services", to: "/services" }].map(btn => (
              <Link key={btn.label} to={btn.to} className="btn-outline-navy">{btn.label}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

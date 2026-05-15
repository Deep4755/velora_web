import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "Landing Page",
    budget: "£150 - £300",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", projectType: "Landing Page", budget: "£150 - £300", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-mono text-emerald-500 text-sm font-semibold mb-2 tracking-widest uppercase">
            Get In Touch
          </p>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Start Your Project
          </h2>
          <p className="font-mono text-slate-500 text-sm">
            Ready to start your project? Let's talk
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <h3 className="font-mono font-bold text-lg text-slate-900 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-mono text-xs font-semibold text-slate-700 block mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 font-mono text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs font-semibold text-slate-700 block mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 font-mono text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs font-semibold text-slate-700 block mb-1.5">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 font-mono text-sm text-slate-900 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-colors bg-white"
                >
                  <option>Landing Page</option>
                  <option>Business Website</option>
                  <option>Ecommerce Store</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-xs font-semibold text-slate-700 block mb-1.5">
                  Budget
                </label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 font-mono text-sm text-slate-900 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-colors bg-white"
                >
                  <option>£150 - £300</option>
                  <option>£300 - £800</option>
                  <option>£500 - £1500</option>
                  <option>£1500+</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-xs font-semibold text-slate-700 block mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 font-mono text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-mono font-semibold text-sm py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            {/* Email */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="bg-indigo-500 w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-mono font-bold text-sm text-slate-900 mb-1">Email</p>
                <a href="mailto:hello@agency.co.uk" className="font-mono text-sm text-emerald-500 hover:text-emerald-600 transition-colors">
                  hello@agency.co.uk
                </a>
                <p className="font-mono text-xs text-slate-500 mt-0.5">We reply within 24 hours</p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="bg-emerald-500 w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-mono font-bold text-sm text-slate-900 mb-1">Phone</p>
                <a href="tel:+442012345678" className="font-mono text-sm text-emerald-500 hover:text-emerald-600 transition-colors">
                  +44 20 1234 5678
                </a>
                <p className="font-mono text-xs text-slate-500 mt-0.5">Mon–Fri 9am–6pm GMT</p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="bg-teal-500 w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-mono font-bold text-sm text-slate-900 mb-1">Location</p>
                <p className="font-mono text-sm text-emerald-500">London, United Kingdom</p>
                <p className="font-mono text-xs text-slate-500 mt-0.5">Remote &amp; on-site meetings</p>
              </div>
            </div>

            {/* Quick response */}
            <div className="bg-indigo-600 rounded-2xl p-6">
              <p className="font-mono font-bold text-sm text-white mb-2">
                ⚡ Quick Response
              </p>
              <p className="font-mono text-xs text-indigo-200 leading-relaxed">
                We typically respond to all inquiries within 24 hours. Need faster? Call us directly for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

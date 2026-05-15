import { useState } from "react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  "Landing Pages",
  "Business Websites",
  "Ecommerce Stores",
  "SEO Optimisation",
  "Logo Design",
  "Maintenance",
];

const socials = [
  { label: "Facebook", d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { label: "Instagram", d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z" },
  { label: "LinkedIn", d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
  { label: "Twitter", d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [signed, setSigned] = useState(false);

  return (
    <footer className="section-dark">
      {/* CTA strip */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #9b51e0 0%, #6b3fa0 50%, #C9A84C 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">Ready to grow your business online?</p>
            <p className="text-white/70 text-sm">Get a free quote — no obligation, no hidden fees.</p>
          </div>
          <Link to="/contact" className="bg-white font-bold text-sm px-6 py-3 rounded-lg transition-all hover:shadow-lg whitespace-nowrap shrink-0"
            style={{ color: "#9b51e0" }}>
            Get a Free Quote →
          </Link>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-sm"
                style={{ background: "linear-gradient(135deg, #9b51e0, #C9A84C)" }}>
                A
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-white text-base tracking-widest">AGENCY</span>
                <span className="text-[10px] text-[#C9A84C] font-semibold tracking-wider">LONDON</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              London's trusted digital agency for small businesses. We build websites that look great, load fast, and bring in customers.
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: "rgba(155,81,224,0.2)" }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = "#9b51e0"}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = "rgba(155,81,224,0.2)"}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-bold text-xs uppercase tracking-widest mb-5">Quick Links</p>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/50 hover:text-[#C9A84C] text-sm transition-colors flex items-center gap-1.5">
                    <span className="text-[#C9A84C] text-xs">›</span>{l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-bold text-xs uppercase tracking-widest mb-5">Services</p>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-white/50 hover:text-[#C9A84C] text-sm transition-colors flex items-center gap-1.5">
                    <span className="text-[#C9A84C] text-xs">›</span>{s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <p className="text-white font-bold text-xs uppercase tracking-widest mb-5">Contact</p>
            <ul className="space-y-3 mb-7">
              {[
                { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "veloraweb00@gmail.com", href: "mailto:veloraweb00@gmail.com" },
                { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", text: "07345 102502", href: "tel:+447345102502" },
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "London, UK", href: null },
              ].map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={c.icon} />
                  </svg>
                  {c.href
                    ? <a href={c.href} className="text-white/50 hover:text-white text-sm transition-colors">{c.text}</a>
                    : <span className="text-white/50 text-sm">{c.text}</span>
                  }
                </li>
              ))}
            </ul>

            <p className="text-white font-bold text-xs uppercase tracking-widest mb-2">Newsletter</p>
            <p className="text-white/40 text-xs mb-3">Tips and updates for your business.</p>
            {signed ? (
              <p className="text-[#C9A84C] text-xs font-semibold">Thanks for subscribing! ✓</p>
            ) : (
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 min-w-0 px-3 py-2 rounded-lg text-sm text-white placeholder-white/30 border focus:outline-none"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.12)" }}
                  onFocus={e => e.target.style.borderColor = "#C9A84C"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
                />
                <button
                  onClick={() => email && setSigned(true)}
                  className="btn-gold text-xs !py-2 !px-3 whitespace-nowrap"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <p className="text-white/30 text-xs">© 2026 Digital Agency. All Rights Reserved. London, UK.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/30 hover:text-white/60 text-xs transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

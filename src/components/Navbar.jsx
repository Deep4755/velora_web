import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[90px]">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-black text-lg select-none shadow-sm"
              style={{ background: "linear-gradient(135deg, #4F46E5, #C9A84C)" }}
            >
              A
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="font-black text-[#111111] text-xl tracking-wide"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                VELORA
              </span>
              <span
                className="text-[11px] text-[#4F46E5] font-semibold tracking-widest uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Web
              </span>
            </div>
          </Link>

          {/* ── Desktop links ── */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#4F46E5] font-semibold"
                      : "text-gray-600 hover:text-[#111111]"
                  }`
                }
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-5 btn-primary !text-base !py-3 !px-7"
            >
              Get Quote
            </Link>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            className="lg:hidden p-2.5 rounded-xl text-gray-500 hover:text-[#111111] hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-1 shadow-xl">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? "text-[#4F46E5] font-semibold bg-indigo-50"
                    : "text-gray-600 hover:text-[#111111] hover:bg-gray-50"
                }`
              }
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 btn-primary text-center !text-base !py-3"
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
}

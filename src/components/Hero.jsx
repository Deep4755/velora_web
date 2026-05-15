export default function Hero() {
  return (
    <section
      id="home"
      className="pt-16 min-h-[85vh] flex items-center bg-gradient-to-br from-slate-50 via-emerald-50/30 to-indigo-50/40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-8 font-mono">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
          Available for new projects
        </div>

        {/* Heading */}
        <h1 className="font-mono font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight mb-6 max-w-4xl mx-auto">
          We Build Simple Websites{" "}
          <span className="text-emerald-500">That Grow</span> Your Business
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-slate-500 text-base sm:text-lg mb-10 max-w-xl mx-auto">
          Landing Pages, Small Business Websites &amp; Ecommerce Stores
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors font-mono text-sm"
          >
            Get Started
          </a>
          <a
            href="#portfolio"
            className="border-2 border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors font-mono text-sm"
          >
            View Work
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-400 text-xs font-mono">
          <span>✓ No hidden fees</span>
          <span>✓ Mobile responsive</span>
          <span>✓ Fast delivery</span>
          <span>✓ Free revisions</span>
        </div>
      </div>
    </section>
  );
}

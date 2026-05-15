import { useState } from "react";
import { projects, stats, testimonials } from "../data/portfolio";

const filters = ["All", "Landing Pages", "Business Websites", "Ecommerce"];

const tagMap = {
  "All": null,
  "Landing Pages": "landing",
  "Business Websites": "business",
  "Ecommerce": "ecommerce",
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    tagMap[activeFilter] === null
      ? projects
      : projects.filter((p) => p.tag === tagMap[activeFilter]);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-mono text-emerald-500 text-sm font-semibold mb-2 tracking-widest uppercase">
            Our Work
          </p>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Recent Work
          </h2>
          <p className="font-mono text-slate-500 text-sm">
            Recent projects we've delivered for small businesses
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`font-mono text-xs font-semibold px-4 py-2 rounded-lg border transition-colors ${
                activeFilter === f
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Placeholder image */}
              <div
                className={`${project.bg} h-44 flex items-center justify-center`}
              >
                <span className="font-mono text-xs text-slate-400 border border-slate-200 px-3 py-1.5 rounded-lg bg-white/60">
                  [Project Screenshot]
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-mono font-bold text-sm text-slate-900 mb-1">
                  {project.title}
                </h3>
                <p className={`font-mono text-xs font-semibold mb-4 ${project.accent}`}>
                  {project.category}
                </p>
                <a
                  href="#contact"
                  className="font-mono text-xs font-semibold text-slate-600 border border-slate-200 hover:border-emerald-400 hover:text-emerald-600 px-3 py-1.5 rounded-lg transition-colors inline-block"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mb-20">
          <a
            href="#contact"
            className="font-mono text-sm font-semibold text-slate-700 border-2 border-slate-300 hover:border-emerald-500 hover:text-emerald-600 px-6 py-2.5 rounded-lg transition-colors inline-block"
          >
            View All Projects
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 bg-slate-50 rounded-2xl p-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className={`font-mono font-bold text-3xl sm:text-4xl ${stat.color} mb-1`}>
                {stat.value}
              </p>
              <p className="font-mono text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="font-mono font-bold text-2xl text-slate-900 text-center mb-8">
            Client Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-base">★</span>
                  ))}
                </div>
                <p className="font-mono text-sm text-slate-600 leading-relaxed mb-5">
                  "{t.quote}"
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-mono font-semibold text-sm text-slate-900">
                    {t.name}
                  </p>
                  <p className="font-mono text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

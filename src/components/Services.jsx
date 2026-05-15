import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-mono text-emerald-500 text-sm font-semibold mb-2 tracking-widest uppercase">
            What We Do
          </p>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="font-mono text-slate-500 text-sm max-w-md mx-auto">
            Professional web solutions for small businesses
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Image placeholder */}
              <div
                className={`${service.bgColor} h-44 flex items-center justify-center text-5xl`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-mono font-bold text-lg text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="font-mono text-slate-500 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <p className="font-mono text-emerald-500 text-sm font-semibold mb-5">
                  {service.price}
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-slate-900 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors font-mono"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

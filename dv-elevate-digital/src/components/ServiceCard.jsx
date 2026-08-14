import { Link } from "react-router-dom";

export function CategoryCard({ cat, index }) {
  return (
    <Link
      to={`/services/${cat.slug}`}
      className="group card overflow-hidden flex flex-col h-full hover:-translate-y-1.5 transition-transform duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={cat.image}
          alt={cat.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-800/70 via-ink-800/0 to-transparent" />
        <span className="absolute top-4 left-4 font-mono text-[11px] text-white/80 bg-white/10 backdrop-blur px-2 py-1 rounded-full border border-white/20">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg text-ink-800 group-hover:text-brand-500 transition-colors">
          {cat.title}
        </h3>
        <p className="text-sm text-slate mt-2 leading-relaxed flex-1">{cat.desc}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500">
          Explore services
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="group-hover:translate-x-1 transition-transform">
            <path d="M9 1L13 5L9 9M13 5H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export function ServiceItemCard({ service, categorySlug }) {
  return (
    <Link
      to={`/services/${categorySlug}/${service.slug}`}
      className="group card overflow-hidden flex flex-col h-full hover:-translate-y-1.5 transition-transform duration-300"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-base text-ink-800 group-hover:text-brand-500 transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-slate mt-2 leading-relaxed flex-1">{service.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500">
          View details
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="group-hover:translate-x-1 transition-transform">
            <path d="M9 1L13 5L9 9M13 5H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

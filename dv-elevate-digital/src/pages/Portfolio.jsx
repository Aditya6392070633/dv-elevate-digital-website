import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { portfolio } from "../data/portfolio";

export default function Portfolio() {
  const categories = useMemo(() => ["All", ...new Set(portfolio.map((p) => p.category))], []);
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === "All" ? portfolio : portfolio.filter((p) => p.category === active);

  return (
    <div>
      <PageHero
        eyebrow="Portfolio"
        title="A few projects we're proud to have shipped."
        copy="Real client work across e-commerce, consulting, education, real estate and more — filter by category to browse."
        crumbs={[{ label: "Portfolio" }]}
      />

      <section className="container-x py-20">
        <Reveal className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                active === c
                  ? "bg-brand-gradient text-white border-transparent"
                  : "bg-white border-ink-800/10 text-ink-800 hover:border-brand-500 hover:text-brand-500"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <button onClick={() => setLightbox(p)} className="group relative rounded-2xl overflow-hidden h-72 w-full text-left">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-800/85 via-ink-800/20 to-transparent" />
                <div className="absolute bottom-0 p-5 text-left">
                  <span className="text-xs font-mono uppercase tracking-wide text-sky">{p.category}</span>
                  <h3 className="font-display font-semibold text-lg text-white mt-1">{p.name}</h3>
                  <p className="text-white/60 text-xs mt-0.5">{p.url}</p>
                </div>
                <span className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-ink-800/90 backdrop-blur-sm flex items-center justify-center p-5"
          onClick={() => setLightbox(null)}
        >
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-2xl overflow-hidden bg-white">
              <img src={lightbox.image} alt={lightbox.name} className="w-full max-h-[60vh] object-cover" />
              <div className="p-7">
                <span className="text-xs font-mono uppercase tracking-wide text-brand-500">{lightbox.category}</span>
                <h3 className="font-display font-bold text-2xl mt-1">{lightbox.name}</h3>
                <p className="text-sm text-slate mt-1">{lightbox.url}</p>
                <p className="text-slate mt-4 leading-relaxed">{lightbox.summary}</p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Link to="/contact" className="btn-primary !py-3">Start a Similar Project</Link>
                  <button onClick={() => setLightbox(null)} className="btn-outline !py-3">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="container-x pb-24 text-center">
        <Reveal>
          <h2 className="font-display font-bold text-2xl sm:text-3xl">Want your project featured here next?</h2>
          <Link to="/contact" className="btn-primary mt-8">
            Start Your Project
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

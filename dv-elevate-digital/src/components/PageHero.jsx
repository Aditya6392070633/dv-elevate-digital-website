import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, copy, crumbs = [] }) {
  return (
    <section className="relative bg-ink-800 text-white overflow-hidden pt-36 pb-20">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 10%, rgba(56,189,248,0.25), transparent 40%), radial-gradient(circle at 10% 90%, rgba(21,94,239,0.3), transparent 40%)",
        }}
      />
      <div className="container-x relative text-center max-w-3xl mx-auto">
        {crumbs.length > 0 && (
          <Reveal>
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-white/50 mb-6">
              <Link to="/" className="hover:text-sky">Home</Link>
              {crumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span>/</span>
                  {c.to ? (
                    <Link to={c.to} className="hover:text-sky">{c.label}</Link>
                  ) : (
                    <span className="text-white/80">{c.label}</span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        )}
        <Reveal delay={60}>
          <span className="eyebrow text-sky">{eyebrow}</span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-display font-bold text-3xl sm:text-5xl mt-5 leading-tight">{title}</h1>
        </Reveal>
        {copy && (
          <Reveal delay={180}>
            <p className="text-white/65 mt-5 leading-relaxed">{copy}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

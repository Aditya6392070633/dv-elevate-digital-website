import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { blog } from "../data/blog";

const fmt = (d) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export default function Blog() {
  const categories = useMemo(() => ["All", ...new Set(blog.map((b) => b.category))], []);
  const [active, setActive] = useState("All");

  const [featured, ...rest] = blog;
  const list = active === "All" ? rest : blog.filter((b) => b.category === active);

  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title="Notes on design, code, SEO and growth."
        copy="Practical write-ups from projects we've actually shipped — not recycled trend lists."
        crumbs={[{ label: "Blog" }]}
      />

      <section className="container-x py-20">
        <Reveal>
          <Link to={`/blog/${featured.slug}`} className="group grid lg:grid-cols-2 gap-8 card overflow-hidden mb-16">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden bg-ink-800/[0.03]">
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <span className="text-xs font-mono uppercase tracking-wide text-brand-500">Featured · {featured.category}</span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl mt-3 leading-tight group-hover:text-brand-500 transition-colors">
                {featured.title}
              </h2>
              <p className="text-slate mt-4 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-slate mt-6">
                <span>{fmt(featured.date)}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
          </Link>
        </Reveal>

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
          {list.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 80}>
              <Link to={`/blog/${post.slug}`} className="group card overflow-hidden flex flex-col h-full hover:-translate-y-1.5 transition-transform duration-300">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-ink-800/[0.03]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-mono uppercase tracking-wide text-brand-500">{post.category}</span>
                  <h3 className="font-display font-semibold text-lg mt-2 leading-snug group-hover:text-brand-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate mt-2 line-clamp-2 flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-slate mt-5 pt-5 border-t border-ink-800/[0.06]">
                    <span>{fmt(post.date)}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
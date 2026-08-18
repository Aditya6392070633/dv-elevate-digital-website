import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { CategoryCard } from "../components/ServiceCard";
import { categories, services } from "../data/services";
import { useSEO } from "../hooks/useSEO";

export default function ServicesOverview() {
  useSEO({
    title: "Our Services | 70+ Digital Services — DV Elevate Digital",
    description: "Explore 70+ services across web design, web development, mobile apps, digital marketing, SEO/SMO, e-commerce, branding, hosting and IT consulting.",
    path: "/services",
  });

  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="70+ services, organised into 10 core disciplines."
        copy="Pick a category to see every individual service, or scroll straight to what you already know you need."
        crumbs={[{ label: "Services" }]}
      />

      <section className="container-x py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={(i % 3) * 80}>
              <CategoryCard cat={cat} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="container-x">
          <Reveal className="text-center max-w-xl mx-auto">
            <span className="eyebrow">Full Directory</span>
            <h2 className="font-display font-bold text-3xl mt-4">Every service, at a glance.</h2>
          </Reveal>

          <div className="mt-14 space-y-14">
            {categories.map((cat, ci) => (
              <Reveal key={cat.slug} delay={(ci % 3) * 60}>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-display font-semibold text-xl">{cat.title}</h3>
                    <Link to={`/services/${cat.slug}`} className="text-sm font-semibold text-brand-500 hover:underline">
                      View category →
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {services
                      .filter((s) => s.category === cat.slug)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${cat.slug}/${s.slug}`}
                          className="text-sm px-4 py-2 rounded-full bg-white border border-ink-800/10 text-ink-800 hover:border-brand-500 hover:text-brand-500 transition-colors"
                        >
                          {s.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 text-center">
        <Reveal>
          <h2 className="font-display font-bold text-2xl sm:text-3xl">Not sure which service you need?</h2>
          <p className="text-slate mt-3 max-w-md mx-auto">Tell us your goal and we'll recommend the right mix — no pressure, no jargon.</p>
          <Link to="/contact" className="btn-primary mt-8">
            Talk to Our Team
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

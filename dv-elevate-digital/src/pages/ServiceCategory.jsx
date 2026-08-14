import { Link, Navigate, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { ServiceItemCard } from "../components/ServiceCard";
import { categories, getCategory, getServicesByCategory } from "../data/services";

export default function ServiceCategory() {
  const { categorySlug } = useParams();
  const category = getCategory(categorySlug);

  if (!category) return <Navigate to="/services" replace />;

  const items = getServicesByCategory(categorySlug);
  const otherCats = categories.filter((c) => c.slug !== categorySlug);

  return (
    <div>
      <PageHero
        eyebrow={category.title}
        title={category.tagline}
        copy={category.desc}
        crumbs={[{ label: "Services", to: "/services" }, { label: category.title }]}
      />

      <section className="container-x py-24">
        <Reveal className="flex items-center justify-between mb-10">
          <h2 className="font-display font-bold text-2xl">{items.length} services in {category.title}</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <ServiceItemCard service={s} categorySlug={category.slug} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container-x">
          <Reveal className="text-center max-w-xl mx-auto mb-10">
            <span className="eyebrow">Explore More</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl mt-4">Other service categories</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-2.5">
            {otherCats.map((c) => (
              <Link
                key={c.slug}
                to={`/services/${c.slug}`}
                className="text-sm px-4 py-2.5 rounded-full bg-white border border-ink-800/10 text-ink-800 hover:border-brand-500 hover:text-brand-500 transition-colors"
              >
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 text-center">
        <Reveal>
          <h2 className="font-display font-bold text-2xl sm:text-3xl">Ready to start with {category.title.toLowerCase()}?</h2>
          <Link to="/contact" className="btn-primary mt-8">
            Get a Free Quote
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

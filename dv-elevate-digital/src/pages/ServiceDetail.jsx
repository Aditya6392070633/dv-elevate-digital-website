import { Link, Navigate, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import { ServiceItemCard } from "../components/ServiceCard";
import { getCategory, getService, getServicesByCategory } from "../data/services";
import { useSEO } from "../hooks/useSEO";

const processSteps = [
  { title: "Brief & scope", copy: "We confirm goals, timeline and budget so there are no surprises later." },
  { title: "Design & build", copy: "You see progress in stages, with room to give feedback before anything is final." },
  { title: "Review & refine", copy: "We polish based on your input, and test across devices and browsers." },
  { title: "Launch & support", copy: "We ship, monitor, and stay on hand for the tweaks every live project needs." },
];

export default function ServiceDetail() {
  const { categorySlug, serviceSlug } = useParams();
  const category = getCategory(categorySlug);
  const service = getService(categorySlug, serviceSlug);

  useSEO({
    title: service ? `${service.title} in Noida | DV Elevate Digital` : "Service",
    description: service ? `${service.description} Get in touch for a free quote.` : undefined,
    path: `/services/${categorySlug}/${serviceSlug}`,
    image: service?.image,
  });

  if (!category || !service) return <Navigate to="/services" replace />;

  const related = getServicesByCategory(categorySlug).filter((s) => s.slug !== serviceSlug).slice(0, 3);

  return (
    <div>
      <section className="relative bg-ink-800 text-white overflow-hidden pt-36 pb-16">
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 10%, rgba(56,189,248,0.25), transparent 40%), radial-gradient(circle at 10% 90%, rgba(21,94,239,0.3), transparent 40%)",
          }}
        />
        <div className="container-x relative">
          <Reveal>
            <div className="flex items-center flex-wrap gap-2 text-xs font-mono text-white/50 mb-6">
              <Link to="/" className="hover:text-sky">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-sky">Services</Link>
              <span>/</span>
              <Link to={`/services/${category.slug}`} className="hover:text-sky">{category.title}</Link>
              <span>/</span>
              <span className="text-white/80">{service.title}</span>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
            <div>
              <Reveal delay={60}>
                <span className="eyebrow text-sky">{category.title}</span>
                <h1 className="font-display font-bold text-3xl sm:text-5xl mt-5 leading-tight">{service.title}</h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-white/65 mt-5 leading-relaxed max-w-lg">{service.description}</p>
              </Reveal>
              <Reveal delay={200}>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link to="/contact" className="btn-primary">
                    Get a Quote for {service.title}
                  </Link>
                  <Link to={`/services/${category.slug}`} className="btn-outline-light">
                    All {category.title}
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src={service.image} alt={service.title} className="w-full h-[340px] object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x py-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Reveal>
            <span className="eyebrow">Overview</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl mt-4">
              What's included with {service.title.toLowerCase()}
            </h2>
            <p className="text-slate mt-5 leading-relaxed">{service.description}</p>
            <p className="text-slate mt-4 leading-relaxed">
              Every engagement starts with a short discovery call so we understand exactly how {service.title.toLowerCase()}
              {" "}fits into your broader goals — then we scope a fixed price and timeline before any work begins.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {service.features.map((f) => (
                <div key={f} className="flex items-start gap-3 card p-5">
                  <span className="mt-0.5 h-6 w-6 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center shrink-0">
                    <svg width="12" height="10" viewBox="0 0 11 9" fill="none">
                      <path d="M1 4.5L4 7.5L10 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-ink-800">{f}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <h3 className="font-display font-semibold text-xl mt-14 mb-6">How we deliver it</h3>
            <div className="space-y-5">
              {processSteps.map((step, i) => (
                <div key={step.title} className="flex gap-5">
                  <span className="font-mono text-sm font-semibold text-brand-500 shrink-0 w-6">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-semibold text-ink-800">{step.title}</p>
                    <p className="text-sm text-slate mt-1">{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal delay={80}>
            <div className="card p-7 sticky top-28">
              <span className="eyebrow">Category</span>
              <h3 className="font-display font-semibold text-lg mt-3">{category.title}</h3>
              <p className="text-sm text-slate mt-2 leading-relaxed">{category.desc}</p>
              <Link to={`/services/${category.slug}`} className="btn-outline w-full mt-6 !py-3">
                View All {category.title}
              </Link>
              <Link to="/contact" className="btn-primary w-full mt-3 !py-3">
                Request Free Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-paper py-20">
          <div className="container-x">
            <Reveal className="text-center max-w-xl mx-auto mb-12">
              <span className="eyebrow">Related</span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl mt-4">
                More in {category.title}
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((s, i) => (
                <Reveal key={s.slug} delay={i * 80}>
                  <ServiceItemCard service={s} categorySlug={category.slug} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

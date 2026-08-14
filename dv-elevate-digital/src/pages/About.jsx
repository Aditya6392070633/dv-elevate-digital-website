import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import { testimonials } from "../data/testimonials";

const values = [
  { title: "Build with intent", copy: "Every project starts with a clear brief and a plan, not a blank editor.", icon: "M4 20V10l8-6 8 6v10H4Z" },
  { title: "Innovate, don't decorate", copy: "We reach for new tools and techniques when they genuinely help — not for their own sake.", icon: "M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" },
  { title: "Elevate the outcome", copy: "A finished site isn't the goal — a measurable improvement to your business is.", icon: "M3 17l6-6 4 4 8-8M21 7v6h-6" },
];

const timeline = [
  { year: "Year 1", title: "Started as a two-person web studio", copy: "Took on small business websites across Delhi NCR, learning what actually moves the needle for local brands." },
  { year: "Year 3", title: "Expanded into full-stack development", copy: "Added mobile app development, e-commerce and CMS platforms as client needs grew more technical." },
  { year: "Year 6", title: "Built out marketing & SEO practice", copy: "Formalised SEO, paid media and content teams so growth didn't stop at launch day." },
  { year: "Today", title: "A 70-service, full-stack digital agency", copy: "DV Elevate Digital now covers design, development, apps, marketing, hosting and IT consulting end to end." },
];

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About DV Elevate Digital"
        title="Built by people who'd rather ship than pitch."
        copy="We're a small, senior team that treats every client project like our own product — measured, iterated, and never left to coast on a launch-day screenshot."
      />

      <section className="container-x py-24 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="rounded-3xl overflow-hidden">
            <img src="/images/services/58_Business_Strategy.jpg" alt="Business strategy session" className="w-full h-[420px] object-cover" />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4 leading-tight">
              Started with one website. Grew into a full digital partner.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-slate mt-6 leading-relaxed">
              DV Elevate Digital began the way most honest agencies do — with a handful of small business
              websites and a promise to actually deliver what was scoped. That reputation is still how most of
              our clients find us today.
            </p>
            <p className="text-slate mt-4 leading-relaxed">
              As briefs got more ambitious, so did we — bringing app development, e-commerce, digital marketing,
              SEO and IT consulting in-house so clients never have to stitch together five different vendors.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-paper py-24">
        <div className="container-x">
          <Reveal className="max-w-xl mx-auto text-center">
            <span className="eyebrow">What We Stand For</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4">Build. Innovate. Elevate.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6 mt-14">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="card p-8 h-full text-center">
                  <div className="h-14 w-14 mx-auto rounded-2xl bg-brand-gradient flex items-center justify-center text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d={v.icon} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-display font-semibold text-lg mt-5">{v.title}</h3>
                  <p className="text-sm text-slate mt-2 leading-relaxed">{v.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-x py-24">
        <Reveal className="max-w-xl mx-auto text-center">
          <span className="eyebrow">Our Journey</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4">From two-person studio to full agency.</h2>
        </Reveal>

        <div className="mt-16 relative max-w-3xl mx-auto">
          <div className="absolute left-[27px] sm:left-1/2 top-0 bottom-0 w-px bg-ink-800/10 sm:-translate-x-1/2" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 100}>
                <div className={`relative flex sm:items-center gap-6 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                  <div className="relative shrink-0 z-10">
                    <div className="h-14 w-14 rounded-full bg-brand-gradient text-white flex items-center justify-center font-mono text-xs font-semibold shadow-glow">
                      {t.year.replace("Year ", "Y")}
                    </div>
                  </div>
                  <div className="card p-6 flex-1">
                    <h3 className="font-display font-semibold text-lg">{t.title}</h3>
                    <p className="text-sm text-slate mt-2 leading-relaxed">{t.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL STRIP */}
      <section className="bg-ink-800 text-white py-24">
        <div className="container-x">
          <Reveal className="max-w-xl mx-auto text-center">
            <span className="eyebrow text-sky">Client Voices</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4">Why teams keep coming back.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {testimonials.slice(4).map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col">
                  <p className="text-sm text-white/75 leading-relaxed flex-1">"{t.quote}"</p>
                  <div className="flex items-center gap-3 mt-5 pt-5 border-t border-white/10">
                    <img src={t.photo} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-white/50">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 text-center">
        <Reveal>
          <h2 className="font-display font-bold text-2xl sm:text-3xl">Want to work with a team like this?</h2>
          <Link to="/contact" className="btn-primary mt-8">
            Let's Talk About Your Project
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

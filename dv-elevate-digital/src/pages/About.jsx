import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import { testimonials } from "../data/testimonials";
import { useSEO } from "../hooks/useSEO";

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
  useSEO({
    title: "About Us | DV Elevate Digital — Web Agency in Noida",
    description: "DV Elevate Digital is a Noida-based digital agency covering design, development, apps, marketing, hosting and IT consulting end to end. Learn about our story and values.",
    path: "/about",
  });

  return (
    <div>
      <PageHero
        eyebrow="About DV Elevate Digital"
        title="Built by people who'd rather ship than pitch."
        copy="We're a small, senior team that treats every client project like our own product — measured, iterated, and never left to coast on a launch-day screenshot."
      />

      <section className="container-x py-24">
        <Reveal>
          <div className="rounded-3xl overflow-hidden shadow-card">
            <img
              src="/images/about/our-story-infographic.png"
              alt="DV Elevate Digital's story — from one website to a full-service digital partner, guided by honesty, delivery and growth"
              className="w-full h-auto"
            />
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto text-center mt-14">
          <Reveal>
            <h3 className="font-display font-bold text-2xl sm:text-3xl leading-tight">
              Why businesses trust us with their growth
            </h3>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-slate mt-5 leading-relaxed">
              We've seen too many businesses get burned by agencies that disappear after the invoice clears —
              a pretty homepage, zero support, and a "good luck" on the way out. That's the exact experience
              we built DV Elevate Digital to replace. Every client gets a scoped plan, a senior team that
              actually answers the phone, and work that's judged by results, not just how it looks in a
              screenshot.
            </p>
            <p className="text-slate mt-4 leading-relaxed">
              Whether you're a local business launching your first website or a growing company ready to
              scale marketing, apps and infrastructure together — you get one accountable partner, honest
              timelines, and a team that treats your growth as the actual goal, not a side effect.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-8 text-sm">
              {[
                "70+ services under one roof",
                "No vendor hand-offs — one accountable team",
                "Built to scale with you, not just launch and leave",
              ].map((line) => (
                <span key={line} className="flex items-center gap-2 text-ink-800 font-medium">
                  <svg className="shrink-0 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12.5l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {line}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <Link to="/contact" className="btn-primary mt-10">
              Start Your Project With Us
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-paper py-24">
        <div className="container-x">
          <Reveal className="max-w-xl mx-auto text-center">
            <span className="eyebrow">Leadership</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4">Meet the Founder</h2>
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
            <Reveal>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-glow">
                  <img
                    src="/images/team/deepak-singh-founder.png"
                    alt="Deepak Singh, Founder of DV Elevate Digital"
                    className="w-full h-[460px] object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[88%] card px-6 py-4 text-center">
                  <p className="font-display font-semibold text-lg">Deepak Singh</p>
                  <p className="text-xs text-slate mt-1">Founder &amp; CEO, DV Elevate Digital</p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal delay={100}>
                <p className="text-slate leading-relaxed">
                  Deepak Singh founded DV Elevate Digital on a simple conviction: businesses deserve a
                  technology partner who ships, not just pitches. A full-stack developer at heart, he
                  spent years building web applications, APIs and ERP systems for schools and businesses
                  across India and the UAE before turning that hands-on engineering discipline into an
                  agency built the same way.
                </p>
                <p className="text-slate leading-relaxed mt-4">
                  That background shows up in how DV Elevate Digital operates today — every project is
                  scoped like a product, built on solid architecture, and handed over with the same care
                  a founder would give their own company. It's the reason clients come to DV Elevate
                  Digital for a website and stay for the growth partnership that follows.
                </p>
              </Reveal>

              <Reveal delay={150}>
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="card p-5">
                    <p className="text-2xl font-display font-bold text-brand">4+ yrs</p>
                    <p className="text-xs text-slate mt-1">Hands-on full-stack &amp; ERP development experience</p>
                  </div>
                  <div className="card p-5">
                    <p className="text-2xl font-display font-bold text-brand">India &amp; UAE</p>
                    <p className="text-xs text-slate mt-1">Clients and school systems built and supported across both regions</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-8 card p-6 sm:p-8 relative">
                  <svg className="absolute top-5 left-5 text-brand-100" width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.5 6C6.5 6 4 8.5 4 11.7c0 3 2.2 5.3 5 5.3.4 0 .8 0 1.1-.1-.6 1.7-2.1 3-4.1 3.6l.9 1.8c3.6-1 6.1-4 6.1-8.1C13 8.9 11.6 6 9.5 6Zm10 0c-3 0-5.5 2.5-5.5 5.7 0 3 2.2 5.3 5 5.3.4 0 .8 0 1.1-.1-.6 1.7-2.1 3-4.1 3.6l.9 1.8c3.6-1 6.1-4 6.1-8.1C23 8.9 21.6 6 19.5 6Z" />
                  </svg>
                  <p className="italic text-ink-800 leading-relaxed pl-8">
                    "I started this agency because I was tired of seeing businesses get a good-looking
                    website and nothing else — no strategy, no support, no measurable growth. DV Elevate
                    Digital exists to be the technology partner I always wanted to hire: senior, honest,
                    and genuinely invested in the outcome."
                  </p>
                  <p className="text-sm font-semibold mt-4 pl-8">— Deepak Singh, Founder</p>
                </div>
              </Reveal>

              <Reveal delay={250}>
                <div className="mt-8">
                  <span className="eyebrow">The Vision</span>
                  <h3 className="font-display font-semibold text-xl mt-3">
                    One partner for every stage of digital growth.
                  </h3>
                  <p className="text-slate leading-relaxed mt-3">
                    Deepak's vision for DV Elevate Digital is to remove the friction businesses face when
                    growing online — the five different freelancers, the dropped handoffs, the agency that
                    disappears after launch. Instead, DV Elevate Digital is built to cover design,
                    development, apps, marketing, SEO and hosting under one roof, run with an engineer's
                    attention to detail and a founder's stake in the result.
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Build technology that's engineered to last, not just to demo well on launch day.",
                      "Give small and mid-sized businesses access to senior-level talent, not junior guesswork.",
                      "Measure success in client growth and retention, not just projects delivered.",
                    ].map((line) => (
                      <li key={line} className="flex gap-3 text-sm text-slate">
                        <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M4 12.5l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
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

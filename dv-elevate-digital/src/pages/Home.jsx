import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { CategoryCard } from "../components/ServiceCard";
import { categories, services } from "../data/services";
import { portfolio } from "../data/portfolio";
import { blog } from "../data/blog";
import { testimonials } from "../data/testimonials";
import { useSEO } from "../hooks/useSEO";

const stats = [
  { value: "160+", label: "Projects delivered" },
  { value: "70+", label: "Digital services" },
  { value: "8 yrs", label: "Combined team experience" },
  { value: "96%", label: "Clients who refer us" },
];

const process = [
  { n: "01", title: "Discover", copy: "We dig into your goals, audience and competitors before proposing a single pixel." },
  { n: "02", title: "Plan", copy: "A clear scope, timeline and price — no vague retainers, no scope creep." },
  { n: "03", title: "Build", copy: "Design and development move together, with regular check-ins, not a black box." },
  { n: "04", title: "Elevate", copy: "Launch, then optimise — SEO, speed and conversion, tracked every month." },
];

export default function Home() {
  useSEO({
    title: "DV Elevate Digital | Web Design, Development & Digital Marketing in Noida",
    description: "Full-service digital agency in Sector 63, Noida offering website design, web development, mobile apps, digital marketing, SEO/SMO, e-commerce and IT consulting.",
    path: "/",
  });

  const featuredProjects = portfolio.slice(0, 6);
  const recentPosts = blog.slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-ink-800 text-white overflow-hidden pt-36 pb-28 lg:pt-44 lg:pb-36">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(21,94,239,0.35), transparent 40%), radial-gradient(circle at 85% 15%, rgba(56,189,248,0.25), transparent 40%)",
          }}
        />
        <PixelTrail className="hidden md:block absolute top-24 left-[6%] opacity-70" />
        <svg
          className="hidden lg:block absolute bottom-16 right-[8%] w-40 h-40 text-sky/40 animate-floaty"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path d="M15 85 L85 15" stroke="currentColor" strokeWidth="2" className="animate-dash" />
          <path d="M55 15 H85 V45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div className="container-x relative grid lg:grid-cols-[1.15fr,0.85fr] gap-16 items-center">
          <div>
            <Reveal>
              <span className="eyebrow text-sky">DV Elevate Digital</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display font-bold text-[2.4rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem] mt-5">
                We build websites, apps and brands that{" "}
                <span className="bg-brand-gradient bg-clip-text text-transparent">elevate</span> the businesses
                behind them.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-white/65 text-lg mt-6 max-w-xl leading-relaxed">
                A full-service digital agency covering web design, development, mobile apps, digital marketing,
                SEO and branding — one team, one roadmap, measurable growth.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-wrap gap-4 mt-9">
                <Link to="/contact" className="btn-primary">
                  Start a Project
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M9 1L13 5L9 9M13 5H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/portfolio" className="btn-outline-light">
                  View Our Work
                </Link>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/10 max-w-xl">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-bold text-2xl sm:text-3xl">{s.value}</div>
                    <div className="text-white/50 text-xs sm:text-sm mt-1 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/images/services/01_Modern_Website_Design.jpg"
                alt="Modern website design mockup"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-800/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden sm:block bg-white text-ink-800 rounded-2xl shadow-2xl p-5 w-56">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-slate">Live Project</span>
              </div>
              <p className="font-display font-bold text-lg">Site speed +64%</p>
              <p className="text-xs text-slate mt-1">After redesign & optimisation</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="bg-paper border-b border-ink-800/[0.05] py-8 overflow-hidden">
        <div className="container-x">
          <p className="text-center text-xs font-mono tracking-[0.2em] uppercase text-slate/70 mb-5">
            Trusted by growing brands across industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-ink-800/50 font-display font-semibold text-lg">
            {portfolio.slice(0, 6).map((p) => (
              <span key={p.slug}>{p.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="container-x py-24 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="rounded-3xl overflow-hidden">
            <img src="/images/services/63_Technology_Solutions.jpg" alt="DV Elevate Digital team at work" className="w-full h-[420px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-brand-gradient text-white rounded-2xl shadow-glow p-6 w-48">
            <p className="font-display font-bold text-3xl">10+</p>
            <p className="text-sm text-white/85 mt-1">Industries served, from SaaS to healthcare</p>
          </div>
        </Reveal>
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow">About Us</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4 leading-tight">
              A digital partner, not just a vendor.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-slate mt-6 leading-relaxed">
              DV Elevate Digital is a full-stack digital agency built around one idea: your website and marketing
              should work as hard as the rest of your business. We pair senior design and engineering talent with
              a straight-talking process — clear scopes, honest timelines, and reporting you can actually read.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <ul className="mt-8 space-y-4">
              {[
                "Dedicated project lead from kickoff to launch",
                "Design and development handled in-house",
                "SEO and performance built in, not bolted on",
                "Transparent monthly reporting on every campaign",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-800">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center shrink-0">
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                      <path d="M1 4.5L4 7.5L10 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={260}>
            <Link to="/about" className="btn-outline mt-9">
              More About Us
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-paper py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl mx-auto text-center">
            <span className="eyebrow">Services</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4">
              Everything your digital presence needs, under one roof.
            </h2>
            <p className="text-slate mt-4">
              {services.length}+ specific services across {categories.length} core disciplines — pick a category to
              see exactly what's included.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {categories.map((cat, i) => (
              <Reveal key={cat.slug} delay={(i % 3) * 80}>
                <CategoryCard cat={cat} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x py-24">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">How We Work</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4">A four-step process, every time.</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {process.map((step, i) => (
            <Reveal key={step.n} delay={i * 100}>
              <div className="relative card p-7 h-full">
                <span className="font-mono text-4xl font-bold text-brand-50">{step.n}</span>
                <h3 className="font-display font-semibold text-lg mt-3">{step.title}</h3>
                <p className="text-sm text-slate mt-2 leading-relaxed">{step.copy}</p>
                {i < process.length - 1 && (
                  <svg className="hidden lg:block absolute top-9 -right-6 text-brand-100" width="24" height="12" viewBox="0 0 24 12" fill="none">
                    <path d="M1 6H22M22 6L17 1M22 6L17 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="bg-ink-800 text-white py-24">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow text-sky">Portfolio</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4">Recent work we're proud of.</h2>
            </div>
            <Link to="/portfolio" className="btn-outline-light">
              View Full Portfolio
            </Link>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <div className="group relative rounded-2xl overflow-hidden h-72">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/40 to-transparent" />
                  <div className="absolute bottom-0 p-5">
                    <span className="text-xs font-mono uppercase tracking-wide text-sky">{p.category}</span>
                    <h3 className="font-display font-semibold text-lg mt-1">{p.name}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-x py-24">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">Testimonials</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4">What clients say after launch.</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {testimonials.slice(0, 4).map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="card p-6 h-full flex flex-col">
                <svg width="26" height="20" viewBox="0 0 26 20" fill="none" className="text-brand-100 mb-3">
                  <path d="M0 20V11.4C0 4.8 4 .8 10.4 0l1 2.8C7.6 4 5.6 6.4 5.2 9.6H10V20H0Zm14.6 0V11.4c0-6.6 4-10.6 10.4-11.4l1 2.8c-3.8 1.2-5.8 3.6-6.2 6.8h4.8V20h-10Z" fill="currentColor" />
                </svg>
                <p className="text-sm text-ink-800/80 leading-relaxed flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-ink-800/[0.06]">
                  <img src={t.photo} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-ink-800">{t.name}</p>
                    <p className="text-xs text-slate">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="bg-paper py-24">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">From the Blog</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4">Ideas on growth, design & code.</h2>
            </div>
            <Link to="/blog" className="btn-outline">
              Read All Articles
            </Link>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {recentPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <Link to={`/blog/${post.slug}`} className="group card overflow-hidden flex flex-col h-full hover:-translate-y-1.5 transition-transform duration-300">
                  <div className="h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-mono uppercase tracking-wide text-brand-500">{post.category}</span>
                    <h3 className="font-display font-semibold text-lg mt-2 leading-snug group-hover:text-brand-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate mt-2 line-clamp-2 flex-1">{post.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
        <Reveal>
          <div className="relative rounded-3xl bg-brand-gradient overflow-hidden px-8 py-16 sm:px-16 text-center">
            <div
              className="absolute inset-0 opacity-20"
              style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
            />
            <div className="relative">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white max-w-2xl mx-auto">
                Ready to build something your competitors will envy?
              </h2>
              <p className="text-white/80 mt-4 max-w-xl mx-auto">
                Tell us about your project — we'll reply within one business day with next steps and a clear
                estimate.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-brand-600 font-semibold px-7 py-3.5 hover:scale-105 transition-transform">
                  Get a Free Consultation
                </Link>
                <a href="tel:+919876543210" className="btn-outline-light">
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function PixelTrail({ className = "" }) {
  const squares = [
    [0, 0, 14], [18, 0, 10], [32, 4, 8],
    [4, 18, 10], [20, 16, 8],
    [10, 32, 8],
  ];
  return (
    <svg className={className} width="90" height="90" viewBox="0 0 90 90" fill="none">
      {squares.map(([x, y, s], i) => (
        <rect key={i} x={x} y={y} width={s} height={s} rx="2" fill="url(#pt-grad)" opacity={1 - i * 0.12} />
      ))}
      <defs>
        <linearGradient id="pt-grad" x1="0" y1="0" x2="90" y2="90">
          <stop offset="0" stopColor="#155EEF" />
          <stop offset="1" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

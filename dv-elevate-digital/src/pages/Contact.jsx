import { useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { categories } from "../data/services";
import { site } from "../data/site";

const faqs = [
  { q: "How long does a typical website take?", a: "A brochure-style site usually takes 2–3 weeks; e-commerce or app builds run 4–8 weeks depending on scope. You'll get an exact timeline in your proposal." },
  { q: "Do you work with businesses outside India?", a: "Yes — most of our communication happens over video calls, email and WhatsApp, so timezone hasn't been a blocker for our international clients." },
  { q: "What do you need from me to get started?", a: "A short brief of your goals, any existing brand assets, and access to your domain/hosting if you have one. We'll guide you through the rest." },
  { q: "Do you offer ongoing support after launch?", a: "Yes — we offer monthly maintenance plans covering updates, backups, security monitoring and small content changes." },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/xvzwkoge", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        copy="Fill out the form or reach us directly — we typically reply within one business day."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="container-x py-20 grid lg:grid-cols-[1fr,0.85fr] gap-12">
        <Reveal>
          <div className="card p-8 sm:p-10">
            {submitted ? (
              <div className="text-center py-14">
                <div className="h-16 w-16 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center mx-auto">
                  <svg width="26" height="20" viewBox="0 0 11 9" fill="none">
                    <path d="M1 4.5L4 7.5L10 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl mt-6">Thanks — message received.</h3>
                <p className="text-slate mt-2 max-w-sm mx-auto">
                  We'll get back to you at {form.email || "your email"} within one business day.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }} className="btn-outline mt-8">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                  <Field label="Email address" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Phone number" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                  <div>
                    <label className="block text-sm font-medium text-ink-800 mb-2">Service interested in</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-ink-800/10 px-4 py-3 text-sm bg-white focus:border-brand-500 outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      {categories.map((c) => (
                        <option key={c.slug} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-800 mb-2">Tell us about your project</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="What are you looking to build, and what's your rough timeline?"
                    className="w-full rounded-xl border border-ink-800/10 px-4 py-3 text-sm bg-white focus:border-brand-500 outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M9 1L13 5L9 9M13 5H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <p className="text-xs text-slate">By submitting, you agree to be contacted about your enquiry. We don't share your details with anyone.</p>
              </form>
            )}
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={60}>
            <InfoCard icon="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1L6.6 10.8Z" title="Call Us" value={site.phone} href={`tel:${site.phoneHref}`} />
          </Reveal>
          <Reveal delay={120}>
            <InfoCard icon="M4 4h16v16H4V4Zm0 0 8 8 8-8" title="Email Us" value={site.email} href={`mailto:${site.email}`} />
          </Reveal>
          <Reveal delay={180}>
            <InfoCard icon="M12 22s7-6.2 7-12A7 7 0 0 0 5 10c0 5.8 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" title="Visit Us" value={site.address} />
          </Reveal>
          <Reveal delay={240}>
            <div className="rounded-2xl overflow-hidden h-56 border border-ink-800/[0.06]">
              <iframe
                title="Office location map"
                className="w-full h-full grayscale-[20%]"
                src="https://www.google.com/maps?q=Sector%2063%2C%20Noida&output=embed"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="container-x max-w-3xl">
          <Reveal className="text-center max-w-xl mx-auto mb-14">
            <span className="eyebrow">FAQs</span>
            <h2 className="font-display font-bold text-3xl mt-4">Common questions before you reach out</h2>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <div className="card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-ink-800">{f.q}</span>
                    <svg
                      width="13"
                      height="8"
                      viewBox="0 0 11 7"
                      fill="none"
                      className={`shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    >
                      <path d="M1 1L5.5 5.5L10 1" stroke="#155EEF" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </button>
                  {openFaq === i && <p className="px-6 pb-5 text-sm text-slate leading-relaxed">{f.a}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink-800 mb-2">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-ink-800/10 px-4 py-3 text-sm bg-white focus:border-brand-500 outline-none transition-colors"
      />
    </div>
  );
}

function InfoCard({ icon, title, value, href }) {
  const content = (
    <div className="card p-6 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
      <span className="h-11 w-11 rounded-xl bg-brand-gradient text-white flex items-center justify-center shrink-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d={icon} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <div>
        <p className="text-xs font-mono uppercase tracking-wide text-slate">{title}</p>
        <p className="font-semibold text-ink-800 mt-1">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

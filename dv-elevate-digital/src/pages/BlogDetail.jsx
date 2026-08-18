import { Link, Navigate, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { blog } from "../data/blog";
import { useSEO } from "../hooks/useSEO";

const fmt = (d) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

const bodyBank = {
  SEO: [
    "Search has moved well past simple keyword matching. Engines now weigh page structure, load speed, and how directly content answers the underlying question — which means the old habit of writing for algorithms first has stopped working.",
    "In practice, this means auditing your existing pages for clarity as much as for keywords: is the main point in the first two sentences? Can a crawler tell what the page is actually about from its headings alone?",
    "We treat every SEO engagement the same way — technical fixes first, content structure second, and link-building only once the foundation is solid. Skipping straight to backlinks on a shaky site rarely holds up.",
  ],
  "Web Design": [
    "Good design decisions rarely show up as decoration — they show up as friction removed. A visitor should never have to guess what a button does or where a link leads.",
    "We start every design project with the content, not the layout. Once the message is clear, the visual system exists to support it: type scale, spacing, and colour all serve legibility before they serve style.",
    "The best-performing pages we've shipped share a pattern: a strong single message above the fold, generous white space, and a call to action that's impossible to miss on any screen size.",
  ],
  Development: [
    "Choosing a tech stack is a business decision as much as a technical one. The right choice depends on your team's skills, your growth plans, and how much you're willing to maintain long-term.",
    "We favour boring, well-supported technology for most projects — not because it's exciting, but because it's predictable. Predictable is what keeps a site running smoothly three years after launch.",
    "Every build we ship includes documentation and a clean handover, so you're never locked into us to make basic changes down the line.",
  ],
  Performance: [
    "Page speed compounds. A slower site doesn't just frustrate visitors — it quietly tells search engines your page is lower quality, which affects rankings long before anyone notices the lag themselves.",
    "Most speed problems trace back to a handful of causes: unoptimised images, unnecessary scripts, and render-blocking resources. Fixing these usually recovers most of the lost performance without a full rebuild.",
    "We benchmark every project against Core Web Vitals before launch, not after complaints start coming in.",
  ],
  Strategy: [
    "The best digital projects start with a business question, not a design brief. What do you actually need this website or campaign to do for the business in the next twelve months?",
    "We've seen plenty of beautifully executed projects fail simply because the underlying strategy was never clearly defined. Getting alignment upfront saves far more time than it costs.",
    "A clear strategy also makes it much easier to say no to scope creep — every decision can be measured against whether it serves the original goal.",
  ],
  "E-commerce": [
    "Online stores live and die on trust signals and friction. Every extra step between a product page and checkout is a chance for a customer to reconsider.",
    "We pay particular attention to mobile checkout flows, since the majority of e-commerce traffic now arrives on a phone — a desktop-first cart design quietly costs more sales than most owners realise.",
    "Product photography, clear return policies, and fast page loads consistently outperform flashy animations when it comes to actual conversion rate.",
  ],
  "AI & Tools": [
    "AI tools are genuinely useful for the repetitive, structural parts of a project — first drafts, boilerplate code, image variations. They're far less reliable for judgment calls that need real context.",
    "Our workflow uses AI to compress the slow parts of production, then puts a human review step before anything ships. That balance is what keeps quality consistent while still moving faster.",
    "We expect this balance to keep shifting as the tools mature — but the review step isn't going away any time soon.",
  ],
  Branding: [
    "A brand isn't a logo — it's the sum of every decision a customer notices, from your website's tone of voice to how quickly you reply to a message.",
    "Consistency compounds trust. When your website, social presence and printed materials all feel like the same company, customers relax a little faster and convert a little more easily.",
    "We build brand guidelines into every project from day one, so growth doesn't mean drift.",
  ],
};

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blog.find((b) => b.slug === slug);

  useSEO({
    title: post ? `${post.title} | DV Elevate Digital Blog` : "Blog Post",
    description: post?.excerpt,
    path: `/blog/${slug}`,
    image: post?.image,
  });

  if (!post) return <Navigate to="/blog" replace />;

  const paragraphs = bodyBank[post.category] || bodyBank.Strategy;
  const related = blog.filter((b) => b.slug !== slug && b.category === post.category).slice(0, 3);
  const fallbackRelated = related.length > 0 ? related : blog.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <div>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[{ label: "Blog", to: "/blog" }, { label: post.title }]}
      />

      <section className="container-x -mt-10 pb-20">
        <Reveal>
          <div className="rounded-3xl overflow-hidden max-w-4xl mx-auto shadow-2xl">
            <img src={post.image} alt={post.title} className="w-full h-[340px] sm:h-[420px] object-cover" />
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto mt-12">
          <Reveal>
            <div className="flex items-center gap-4 text-sm text-slate pb-8 border-b border-ink-800/[0.06]">
              <span>{fmt(post.date)}</span>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span className="text-brand-500 font-semibold">{post.category}</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="text-lg text-ink-800/80 leading-relaxed mt-8 font-medium">{post.excerpt}</p>
          </Reveal>

          <Reveal delay={140}>
            <div className="prose-content mt-6 space-y-5 text-slate leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12 card p-8 bg-brand-gradient border-none">
              <p className="text-white font-display font-semibold text-lg">
                Want help applying this to your own site?
              </p>
              <p className="text-white/80 text-sm mt-2">
                We offer a free 20-minute audit call — no obligation, just a clear next step.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-brand-600 font-semibold px-6 py-3 mt-5 hover:scale-105 transition-transform">
                Book a Free Audit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container-x">
          <Reveal className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow">Keep Reading</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl mt-4">More articles you might like</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fallbackRelated.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link to={`/blog/${p.slug}`} className="group card overflow-hidden flex flex-col h-full hover:-translate-y-1.5 transition-transform duration-300">
                  <div className="h-44 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-mono uppercase tracking-wide text-brand-500">{p.category}</span>
                    <h3 className="font-display font-semibold text-base mt-2 leading-snug group-hover:text-brand-500 transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

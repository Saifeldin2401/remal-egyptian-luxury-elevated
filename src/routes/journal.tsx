import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import { ScrollProgress } from "@/components/remal/ScrollProgress";
import { BackToTop } from "@/components/remal/BackToTop";
import { stories } from "@/data/journal";
import { ArrowRight } from "lucide-react";
import { useState, useMemo } from "react";
import hero from "@/assets/journal-stars.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — REMAL" },
      { name: "description", content: "Stories, philosophy and notes from REMAL — a luxury hospitality house in Egypt." },
      { property: "og:title", content: "Journal — REMAL" },
      { property: "og:description", content: "Stories from across Egypt and the philosophy behind every REMAL stay." },
      { property: "og:image", content: hero },
    ],
  }),
  component: JournalPage,
});

const categories = ["All", ...Array.from(new Set(stories.map((s) => s.eyebrow)))];

function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return stories;
    return stories.filter((s) => s.eyebrow === activeCategory);
  }, [activeCategory]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="bg-background text-foreground">
      <ScrollProgress />
      <PageHero
        eyebrow="Journal"
        title="Stories From the Sand."
        intro="Field notes, philosophy, and small obsessions."
        image={hero}
        imageAlt="Lone palm under a starry Egyptian night"
      />

      {/* Category filter */}
      <section className="mx-auto max-w-[1400px] px-6 pt-16 md:px-10">
        <Reveal>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.2em] transition-all ${
                  activeCategory === cat
                    ? "border-charcoal bg-charcoal text-ivory"
                    : "border-charcoal/15 text-muted-foreground hover:border-charcoal/40 hover:text-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Featured story */}
      {featured && (
        <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <Link
              to="/journal/$slug"
              params={{ slug: featured.slug }}
              className="group grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16"
            >
              <div className="img-hover-zoom overflow-hidden md:col-span-7">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center md:col-span-5">
                <Eyebrow>{featured.eyebrow}</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl transition-colors group-hover:text-clay md:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-6 text-muted-foreground">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{new Date(featured.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                  <span>{featured.readTime}</span>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-charcoal">
                  Read article
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      {/* Divider */}
      {rest.length > 0 && (
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="border-t hairline" />
        </div>
      )}

      {/* Rest of stories */}
      {rest.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10">
          <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 100}>
                <Link
                  to="/journal/$slug"
                  params={{ slug: s.slug }}
                  className="group block"
                >
                  <div className="img-hover-zoom overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                  <div className="eyebrow mt-6">{s.eyebrow}</div>
                  <h2 className="mt-3 font-serif text-2xl transition-colors group-hover:text-clay md:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground">{s.excerpt}</p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{new Date(s.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                    <span>{s.readTime}</span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-charcoal">
                    Read
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <section className="mx-auto max-w-[1400px] px-6 py-32 text-center md:px-10">
          <p className="text-muted-foreground">No stories in this category yet.</p>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="bg-charcoal py-24 text-center text-ivory md:py-32">
        <div className="mx-auto max-w-2xl px-5 sm:px-6">
          <Reveal>
            <Eyebrow className="text-ivory/50">Stay Informed</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl">
              Stories delivered to your inbox.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const btn = e.currentTarget.querySelector("button");
                if (btn) {
                  btn.textContent = "Subscribed";
                  (btn as HTMLButtonElement).disabled = true;
                }
              }}
              className="mx-auto mt-10 flex max-w-md border-b border-ivory/30 pb-2"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 bg-transparent text-sm text-ivory placeholder:text-ivory/40 focus:outline-none"
              />
              <button className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ivory/70 transition-colors hover:text-ivory disabled:opacity-50">
                Subscribe
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}

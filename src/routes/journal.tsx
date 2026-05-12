import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import { ScrollProgress } from "@/components/remal/ScrollProgress";
import { BackToTop } from "@/components/remal/BackToTop";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/journal-stars.jpg";
import a from "@/assets/journal-artisan.jpg";
import b from "@/assets/journal-dining.jpg";
import c from "@/assets/journal-stars.jpg";
import d from "@/assets/dest-luxor.jpg";
import e from "@/assets/dest-siwa.jpg";
import f from "@/assets/feature-pool.jpg";

const STORIES = [
  { eyebrow: "Craft", title: "The Hands That Shape a Stay", body: "How we work with weavers, ceramicists and perfumers across Egypt to give each property a sense of place.", image: a, featured: true },
  { eyebrow: "Experience", title: "A Table in the Sand", body: "Notes from a private dinner under the Sinai sky — where the menu was written by the land itself.", image: b, featured: false },
  { eyebrow: "Philosophy", title: "The Quiet of the Stars", body: "On designing for stillness in a hyper-connected world. A meditation on space and silence.", image: c, featured: false },
  { eyebrow: "Place", title: "The Light of Luxor at Dawn", body: "A morning walk among the temples, told in temperature and breath. Some places don't need a guidebook.", image: d, featured: false },
  { eyebrow: "People", title: "An Oasis in Conversation", body: "Inside the slow conversations of Siwa — and what they teach about hosting. Hospitality begins with listening.", image: e, featured: false },
  { eyebrow: "Design", title: "Architecture That Disappears", body: "On building so the landscape, not the structure, is the protagonist. The best hotels are invisible.", image: f, featured: false },
];

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

function JournalPage() {
  const featured = STORIES[0];
  const rest = STORIES.slice(1);

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

      {/* Featured story */}
      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44">
        <Reveal>
          <article className="group grid cursor-pointer grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
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
                {featured.body}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-charcoal">
                Read article
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </article>
        </Reveal>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="border-t hairline" />
      </div>

      {/* Rest of stories */}
      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10">
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <article className="group cursor-pointer">
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
                <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-charcoal">
                  Read
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-charcoal py-24 text-center text-ivory md:py-32">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <Eyebrow className="text-ivory/50">Stay Informed</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl">
              Stories delivered to your inbox.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-10 flex max-w-md border-b border-ivory/30 pb-2"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 bg-transparent text-sm text-ivory placeholder:text-ivory/40 focus:outline-none"
              />
              <button className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ivory/70 transition-colors hover:text-ivory">
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
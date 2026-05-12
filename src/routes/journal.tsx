import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal } from "@/components/remal/Reveal";
import hero from "@/assets/journal-stars.jpg";
import a from "@/assets/journal-artisan.jpg";
import b from "@/assets/journal-dining.jpg";
import c from "@/assets/journal-stars.jpg";
import d from "@/assets/dest-luxor.jpg";
import e from "@/assets/dest-siwa.jpg";
import f from "@/assets/feature-pool.jpg";

const STORIES = [
  { eyebrow: "Craft", title: "The Hands That Shape a Stay", body: "How we work with weavers, ceramicists and perfumers across Egypt to give each property a sense of place.", image: a },
  { eyebrow: "Experience", title: "A Table in the Sand", body: "Notes from a private dinner under the Sinai sky.", image: b },
  { eyebrow: "Philosophy", title: "The Quiet of the Stars", body: "On designing for stillness in a hyper-connected world.", image: c },
  { eyebrow: "Place", title: "The Light of Luxor at Dawn", body: "A morning walk among the temples, told in temperature and breath.", image: d },
  { eyebrow: "People", title: "An Oasis in Conversation", body: "Inside the slow conversations of Siwa — and what they teach about hosting.", image: e },
  { eyebrow: "Design", title: "Architecture That Disappears", body: "On building so the landscape, not the structure, is the protagonist.", image: f },
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
  return (
    <div className="bg-background text-foreground">
      <PageHero eyebrow="Journal" title="Stories From the Sand." intro="Field notes, philosophy, and small obsessions." image={hero} imageAlt="Lone palm under a starry Egyptian night" />
      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10">
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <article className="group cursor-pointer">
                <div className="overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]" />
                </div>
                <div className="eyebrow mt-6">{s.eyebrow}</div>
                <h2 className="mt-3 font-serif text-2xl md:text-3xl">{s.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
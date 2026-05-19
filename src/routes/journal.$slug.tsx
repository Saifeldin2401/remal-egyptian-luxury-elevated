import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import { ScrollProgress } from "@/components/remal/ScrollProgress";
import { BackToTop } from "@/components/remal/BackToTop";
import { Breadcrumb } from "@/components/remal/Breadcrumb";
import { ShareButtons } from "@/components/remal/ShareButtons";
import { ReadingProgress } from "@/components/remal/ReadingProgress";
import { stories, getStory } from "@/data/journal";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const story = getStory(params.slug);
    if (!story) throw notFound();
    return story;
  },
  head: ({ loaderData }) => {
    const d = loaderData;
    if (!d) return { meta: [{ title: "Journal — REMAL" }] };
    return {
      meta: [
        { title: `${d.title} — REMAL Journal` },
        { name: "description", content: d.excerpt },
        { property: "og:title", content: d.title },
        { property: "og:description", content: d.excerpt },
        { property: "og:image", content: d.image },
        { name: "twitter:image", content: d.image },
      ],
    };
  },
  component: JournalArticlePage,
});

function JournalArticlePage() {
  const story = Route.useLoaderData();
  const currentIndex = stories.findIndex((s) => s.slug === story.slug);
  const prevStory = currentIndex > 0 ? stories[currentIndex - 1] : null;
  const nextStory = currentIndex < stories.length - 1 ? stories[currentIndex + 1] : null;

  const paragraphs = story.body.split("\n\n");
  const pullIndex = Math.floor(paragraphs.length / 2);
  const pullQuote = paragraphs[pullIndex]?.split(".")[0] + ".";

  return (
    <div className="bg-background text-foreground">
      <ScrollProgress />
      <ReadingProgress targetSelector="article.journal-article" />
      <PageHero
        eyebrow={story.eyebrow}
        title={story.title}
        intro={story.excerpt}
        image={story.image}
        imageAlt={story.title}
      />

      <div className="mx-auto max-w-[1400px] px-6 pt-8 md:px-10">
        <Breadcrumb
          items={[
            { label: "Journal", href: "/journal" },
            { label: story.title },
          ]}
        />
      </div>

      {/* Article meta */}
      <section className="mx-auto max-w-3xl px-5 pt-12 sm:px-6 md:pt-24">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{new Date(story.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span>{story.readTime}</span>
            </div>
            <ShareButtons title={story.title} />
          </div>
        </Reveal>
      </section>

      {/* Article body */}
      <article className="journal-article mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16 md:py-24">
        <div className="article-body space-y-8">
          {paragraphs.map((para: string, i: number) => (
            <div key={i}>
              <Reveal delay={i * 40}>
                <p className="font-serif text-xl leading-[1.6] text-charcoal md:text-2xl">
                  {para}
                </p>
              </Reveal>
              {i === pullIndex && pullQuote && (
                <Reveal delay={i * 40 + 100}>
                  <blockquote className="pull-quote">{pullQuote}</blockquote>
                </Reveal>
              )}
            </div>
          ))}
        </div>
        <div className="mt-16 flex items-center justify-between border-t hairline pt-8">
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Published {new Date(story.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
          </span>
          <ShareButtons title={story.title} />
        </div>
      </article>

      {/* Share & navigation */}
      <section className="border-y hairline bg-secondary">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 py-12 md:grid-cols-2 md:px-10">
          {prevStory ? (
            <Reveal>
              <Link
                to="/journal/$slug"
                params={{ slug: prevStory.slug }}
                className="group flex flex-col"
              >
                <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
                  Previous
                </span>
                <span className="mt-2 font-serif text-xl transition-colors group-hover:text-clay md:text-2xl">
                  {prevStory.title}
                </span>
              </Link>
            </Reveal>
          ) : (
            <div />
          )}
          {nextStory ? (
            <Reveal delay={100}>
              <Link
                to="/journal/$slug"
                params={{ slug: nextStory.slug }}
                className="group flex flex-col items-start md:items-end md:text-right"
              >
                <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Next
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-2 font-serif text-xl transition-colors group-hover:text-clay md:text-2xl">
                  {nextStory.title}
                </span>
              </Link>
            </Reveal>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* Related stories */}
      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10">
        <Reveal>
          <Eyebrow>More Stories</Eyebrow>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          {stories
            .filter((s) => s.slug !== story.slug)
            .slice(0, 3)
            .map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
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
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <div className="eyebrow mt-4">{s.eyebrow}</div>
                  <h3 className="mt-2 font-serif text-xl transition-colors group-hover:text-clay">
                    {s.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}

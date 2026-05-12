import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import { ScrollProgress } from "@/components/remal/ScrollProgress";
import { BackToTop } from "@/components/remal/BackToTop";
import { destinations, getDestination } from "@/data/destinations";
import { ArrowRight, MapPin } from "lucide-react";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const dest = getDestination(params.slug);
    if (!dest) throw notFound();
    return { dest };
  },
  head: ({ loaderData }) => {
    const d = loaderData?.dest;
    if (!d) return { meta: [{ title: "Destination — REMAL" }] };
    return {
      meta: [
        { title: `${d.name} — REMAL Destinations` },
        { name: "description", content: d.intro },
        { property: "og:title", content: `${d.name} — REMAL` },
        { property: "og:description", content: d.intro },
        { property: "og:image", content: d.image },
        { name: "twitter:image", content: d.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background text-center">
      <div>
        <h1 className="font-serif text-5xl">Not found</h1>
        <Link to="/destinations" className="mt-6 inline-block text-clay underline">
          Back to destinations
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="flex min-h-screen items-center justify-center px-6 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: DestinationDetail,
});

function DestinationDetail() {
  const { dest } = Route.useLoaderData();
  const others = destinations.filter((d) => d.slug !== dest.slug).slice(0, 3);

  return (
    <div className="bg-background text-foreground">
      <ScrollProgress />
      <PageHero
        eyebrow={dest.region}
        title={dest.name}
        intro={dest.tagline}
        image={dest.image}
        imageAlt={`${dest.name}, Egypt`}
      />

      {/* The Place */}
      <section className="mx-auto max-w-3xl px-6 py-32 text-center md:py-44">
        <Reveal>
          <Eyebrow>The Place</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 font-serif text-2xl leading-[1.4] md:text-[32px]">
            {dest.intro}
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-10 text-base leading-relaxed text-muted-foreground">
            {dest.body}
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-clay" />
            <span>{dest.name}, Egypt</span>
          </div>
        </Reveal>
      </section>

      {/* Full-width image divider */}
      <section className="relative h-[70vh] w-full overflow-hidden md:h-[80vh]">
        <img src={dest.image} alt={dest.name} className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-charcoal/20" />
        <div className="absolute bottom-12 left-0 right-0 text-center">
          <Reveal>
            <Link
              to="/contact"
              className="btn-primary"
            >
              <span>Inquire about {dest.name}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Other Destinations */}
      <section className="bg-background py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <Eyebrow>Continue Exploring</Eyebrow>
            <h2 className="mt-4 mb-12 font-serif text-3xl md:text-4xl">Other Destinations</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((d, i) => (
              <Reveal key={d.slug} delay={i * 80}>
                <Link to="/destinations/$slug" params={{ slug: d.slug }} className="group block">
                  <div className="img-hover-zoom overflow-hidden">
                    <img
                      src={d.image}
                      alt={d.name}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                  <div className="mt-5">
                    <div className="eyebrow">{d.region}</div>
                    <h3 className="mt-2 font-serif text-2xl transition-colors group-hover:text-clay">{d.name}</h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-charcoal">
                      Explore
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}
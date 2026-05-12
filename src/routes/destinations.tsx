import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import { ScrollProgress } from "@/components/remal/ScrollProgress";
import { BackToTop } from "@/components/remal/BackToTop";
import { destinations } from "@/data/destinations";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/dest-redsea.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — REMAL" },
      {
        name: "description",
        content:
          "From the Red Sea to Siwa — explore the destinations shaped by REMAL across Egypt.",
      },
      { property: "og:title", content: "Destinations — REMAL" },
      {
        property: "og:description",
        content:
          "Boutique resorts and immersive retreats from the Red Sea coast to the Siwa oasis.",
      },
      { property: "og:image", content: hero },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <div className="bg-background text-foreground">
      <ScrollProgress />
      <PageHero
        eyebrow="Our Destinations"
        title="Where We're Heading."
        intro="Seven landscapes. One vision of hospitality."
        image={hero}
        imageAlt="Wooden jetty leading to overwater villas at sunrise on the Red Sea"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44">
        <div className="mb-16 text-center">
          <Reveal>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our vision traces a quiet line across Egypt — from coral coves on the Red Sea
              to palm-shaded oases in Siwa. Each destination will have its own rhythm, its own
              palette, its own way of welcoming.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <Reveal key={d.slug} delay={i * 60}>
              <Link
                to="/destinations/$slug"
                params={{ slug: d.slug }}
                className="group block"
              >
                <div className="img-hover-zoom overflow-hidden">
                  <img
                    src={d.image}
                    alt={`${d.name}, Egypt`}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="mt-6">
                  <div className="eyebrow">{d.region}</div>
                  <h2 className="mt-2 font-serif text-3xl transition-colors group-hover:text-clay">
                    {d.name}
                  </h2>
                  <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                    {d.tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-charcoal">
                    Explore
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24 text-center text-ivory md:py-32">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-5xl">
              Interested in developing a destination with us?
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Link to="/contact" className="btn-primary mt-10">
              <span>Start a conversation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}
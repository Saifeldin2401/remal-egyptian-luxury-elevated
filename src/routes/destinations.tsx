import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal } from "@/components/remal/Reveal";
import { destinations } from "@/data/destinations";
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
      <PageHero
        eyebrow="Our Destinations"
        title="Across Egypt, in Quiet Detail."
        intro="Seven landscapes, one philosophy of hospitality."
        image={hero}
        imageAlt="Wooden jetty leading to overwater villas at sunrise on the Red Sea"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <Reveal key={d.slug} delay={i * 60}>
              <Link
                to="/destinations/$slug"
                params={{ slug: d.slug }}
                className="group block"
              >
                <div className="overflow-hidden">
                  <img
                    src={d.image}
                    alt={`${d.name}, Egypt`}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-6">
                  <div className="eyebrow">{d.region}</div>
                  <h2 className="mt-2 font-serif text-3xl">{d.name}</h2>
                  <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                    {d.tagline}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal } from "@/components/remal/Reveal";
import hero from "@/assets/feature-pool.jpg";
import imgWellness from "@/assets/journal-stars.jpg";
import imgDesert from "@/assets/divider-desert.jpg";
import imgSea from "@/assets/dest-redsea.jpg";
import imgCulinary from "@/assets/journal-dining.jpg";
import imgCulture from "@/assets/journal-artisan.jpg";
import imgNile from "@/assets/dest-aswan.jpg";

const EXPERIENCES = [
  { title: "Wellness Rituals", body: "Hammam ceremonies, sand-scrub treatments and dawn yoga overlooking the sea.", image: imgWellness },
  { title: "Desert Expeditions", body: "Bedouin-guided treks through the White Desert and overnight camps under the stars.", image: imgDesert },
  { title: "Red Sea Diving", body: "Private guided dives across protected reefs of the Egyptian Red Sea.", image: imgSea },
  { title: "Culinary Journeys", body: "Multi-course tasting menus rooted in Egyptian terroir and ancient grains.", image: imgCulinary },
  { title: "Cultural Encounters", body: "Workshops with weavers, perfumers, and ceramicists across the country.", image: imgCulture },
  { title: "Nile Voyages", body: "Slow sailing days aboard restored feluccas with private chefs and musicians.", image: imgNile },
];

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — REMAL" },
      { name: "description", content: "Curated experiences across Egypt — wellness, desert, diving, culinary and cultural journeys." },
      { property: "og:title", content: "Experiences — REMAL" },
      { property: "og:description", content: "Cinematic, curated experiences across Egypt." },
      { property: "og:image", content: hero },
    ],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHero
        eyebrow="Curated Experiences"
        title="Moments, Composed With Care."
        intro="Six families of experience, designed to deepen every stay."
        image={hero}
        imageAlt="Open-air pool overlooking the sea at sunset"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2">
          {EXPERIENCES.map((e, i) => (
            <Reveal key={e.title} delay={(i % 2) * 120}>
              <article className="group">
                <div className="overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <h2 className="mt-6 font-serif text-3xl md:text-4xl">{e.title}</h2>
                <p className="mt-4 max-w-md text-muted-foreground">{e.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-32 text-center">
          <Link
            to="/contact"
            className="inline-block border border-charcoal px-10 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-charcoal hover:text-ivory transition-colors"
          >
            Plan an experience
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
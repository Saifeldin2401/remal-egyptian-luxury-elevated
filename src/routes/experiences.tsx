import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import { ScrollProgress } from "@/components/remal/ScrollProgress";
import { BackToTop } from "@/components/remal/BackToTop";
import { ParallaxSection } from "@/components/remal/ParallaxSection";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/feature-pool.jpg";
import imgWellness from "@/assets/journal-stars.jpg";
import imgDesert from "@/assets/divider-desert.jpg";
import imgSea from "@/assets/dest-redsea.jpg";
import imgCulinary from "@/assets/journal-dining.jpg";
import imgCulture from "@/assets/journal-artisan.jpg";
import imgNile from "@/assets/dest-aswan.jpg";

const EXPERIENCES = [
  {
    title: "Wellness Rituals",
    body: "Hammam ceremonies, sand-scrub treatments and dawn yoga overlooking the sea. Our wellness programmes draw on ancient Egyptian and Nubian traditions.",
    image: imgWellness,
    number: "01",
  },
  {
    title: "Desert Expeditions",
    body: "Bedouin-guided treks through the White Desert and overnight camps under the stars. Wake to silence, coffee brewed on sand, and a horizon with no end.",
    image: imgDesert,
    number: "02",
  },
  {
    title: "Red Sea Diving",
    body: "Private guided dives across protected reefs of the Egyptian Red Sea. From novice snorkellers to deep-water veterans, we match the sea to the swimmer.",
    image: imgSea,
    number: "03",
  },
  {
    title: "Culinary Journeys",
    body: "Multi-course tasting menus rooted in Egyptian terroir and ancient grains. Every dish tells the story of a region, a season, a farmer.",
    image: imgCulinary,
    number: "04",
  },
  {
    title: "Cultural Encounters",
    body: "Workshops with weavers, perfumers, and ceramicists across the country. Not a performance — a conversation between guest and maker.",
    image: imgCulture,
    number: "05",
  },
  {
    title: "Nile Voyages",
    body: "Slow sailing days aboard restored feluccas with private chefs and musicians. The Nile teaches patience — and rewards it with beauty.",
    image: imgNile,
    number: "06",
  },
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
      <ScrollProgress />
      <PageHero
        eyebrow="Curated Experiences"
        title="Moments We're Designing."
        intro="Six families of experience, crafted to deepen every future stay."
        image={hero}
        imageAlt="Open-air pool overlooking the sea at sunset"
      />

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <p className="font-serif text-xl leading-[1.5] text-muted-foreground md:text-2xl">
            Every experience will begin with a question: what would make this place unforgettable?
            The answer will never be the same twice.
          </p>
        </Reveal>
      </section>

      {/* Experiences grid - alternating layout */}
      <section className="mx-auto max-w-[1400px] px-6 pb-32 md:px-10">
        <div className="space-y-24 md:space-y-32">
          {EXPERIENCES.map((e, i) => {
            const isReversed = i % 2 === 1;
            return (
              <Reveal key={e.title} delay={(i % 2) * 120}>
                <div className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16`}>
                  <div className={`md:col-span-7 ${isReversed ? "md:order-2" : ""}`}>
                    <div className="img-hover-zoom overflow-hidden">
                      <img
                        src={e.image}
                        alt={e.title}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover md:aspect-[3/2]"
                      />
                    </div>
                  </div>
                  <div className={`md:col-span-5 ${isReversed ? "md:order-1 md:pr-4" : "md:pl-4"}`}>
                    <Eyebrow>{e.number}</Eyebrow>
                    <h2 className="mt-4 font-serif text-3xl md:text-4xl">{e.title}</h2>
                    <p className="mt-5 max-w-md text-muted-foreground">{e.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Parallax CTA */}
      <ParallaxSection
        image={imgDesert}
        imageAlt="Desert landscape at golden hour"
        height="h-[60vh]"
      >
        <div>
          <Reveal>
            <h2 className="font-serif text-3xl text-ivory md:text-5xl">
              Let us compose your journey.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Link to="/contact" className="btn-primary mt-10">
              <span>Plan an experience</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </ParallaxSection>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}
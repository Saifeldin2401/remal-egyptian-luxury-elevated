import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import { EditorialBlock } from "@/components/remal/EditorialBlock";
import { ScrollProgress } from "@/components/remal/ScrollProgress";
import { BackToTop } from "@/components/remal/BackToTop";
import { ArrowRight, Heart, Eye, Users } from "lucide-react";
import hero from "@/assets/dest-cairo.jpg";
import villa from "@/assets/feature-villa.jpg";
import sea from "@/assets/feature-pool.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — REMAL" },
      { name: "description", content: "REMAL is a hospitality house redefining luxury hospitality across Egypt." },
      { property: "og:title", content: "About — REMAL" },
      { property: "og:description", content: "A hospitality house redefining luxury across Egypt." },
      { property: "og:image", content: hero },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Heart,
    title: "Warmth",
    body: "Egyptian hospitality is not performed — it is felt. We train our teams to host from the heart, not a script.",
  },
  {
    icon: Eye,
    title: "Attention",
    body: "The unseen details — the fold of a napkin, the temperature of a hallway — define luxury more than any grand gesture.",
  },
  {
    icon: Users,
    title: "Community",
    body: "Every property is woven into the fabric of its place. We hire locally, source locally, and celebrate locally.",
  },
];

function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <ScrollProgress />
      <PageHero
        eyebrow="About REMAL"
        title="A Hospitality House for the New Egypt."
        intro="Hospitality is a form of generosity — and Egypt is its most generous stage."
        image={hero}
        imageAlt="Old Cairo at dusk"
      />

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-32 text-center md:py-44">
        <Reveal><Eyebrow>Our Story</Eyebrow></Reveal>
        <Reveal delay={150}>
          <p className="mt-10 font-serif text-2xl leading-[1.4] md:text-[32px]">
            REMAL was founded by a group of hoteliers, designers, and Egyptians
            who love their country too much to see it overlooked. We are building
            and branding places that will bring the world into Egypt's many quiet
            corners — and give Egyptians a hospitality scene worthy of their warmth.
          </p>
        </Reveal>
      </section>

      {/* Values */}
      <section className="bg-background py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-16 text-center">
            <Reveal><Eyebrow>Our Values</Eyebrow></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">What Guides Us</h2>
            </Reveal>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <div className="group border-t hairline pt-8 transition-all">
                  <v.icon className="h-6 w-6 text-bronze transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="mt-5 font-serif text-3xl">{v.title}</h3>
                  <p className="mt-4 text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EditorialBlock
        eyebrow="Philosophy"
        title="Slowness, on Purpose."
        body="We are designing our properties to invite a different speed of time. Long meals, long walks, long conversations. The future of luxury is space, attention, and depth — not display."
        image={villa}
        imageAlt="Warmly lit interior at dusk"
      />
      <EditorialBlock
        eyebrow="Approach"
        title="Operators, Not Just Brand-Builders."
        body="Behind every REMAL property will be an operations team obsessed with the unseen — laundries that smell right, a back-of-house calmer than the lobby, and SOPs that read like poems."
        image={sea}
        imageAlt="Open-air pool overlooking the sea"
        reverse
      />

      {/* Leadership CTA */}
      <section className="bg-charcoal py-32 text-ivory md:py-44">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal><Eyebrow className="text-ivory/50">Leadership</Eyebrow></Reveal>
          <Reveal delay={120}>
            <h2 className="mt-8 font-serif text-4xl md:text-5xl">A Senior Team, Building Something New.</h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 text-ivory/60">
              Our founding team brings together decades of experience in luxury operations,
              real-estate development, and Egyptian cultural production. We work as a flat,
              senior team — closer to a studio than a corporation.
            </p>
            <Link
              to="/contact"
              className="btn-primary mt-12"
            >
              <span>Meet the team</span>
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
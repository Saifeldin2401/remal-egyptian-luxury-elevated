import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import { EditorialBlock } from "@/components/remal/EditorialBlock";
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

function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHero eyebrow="About REMAL" title="A Hospitality House for the New Egypt." intro="Hospitality is a form of generosity — and Egypt is its most generous stage." image={hero} imageAlt="Old Cairo at dusk" />
      <section className="mx-auto max-w-3xl px-6 py-32 text-center md:py-44">
        <Reveal><Eyebrow>Our Story</Eyebrow></Reveal>
        <Reveal delay={150}>
          <p className="mt-10 font-serif text-2xl leading-[1.4] md:text-[32px]">
            REMAL was founded by a small group of hoteliers, designers, and Egyptians
            who loved their country too much to see it overlooked. We build, brand and
            operate places that bring the world into Egypt's many quiet corners — and
            give Egyptians a hospitality scene worthy of their warmth.
          </p>
        </Reveal>
      </section>
      <EditorialBlock eyebrow="Philosophy" title="Slowness, on Purpose." body="We design our properties to invite a different speed of time. Long meals, long walks, long conversations. The future of luxury is space, attention, and depth — not display." image={villa} imageAlt="Warmly lit interior at dusk" />
      <EditorialBlock eyebrow="Approach" title="Operators, Not Just Brand-Builders." body="Behind every REMAL property is an operations team obsessed with the unseen — laundries that smell right, a back-of-house calmer than the lobby, and SOPs that read like poems." image={sea} imageAlt="Open-air pool overlooking the sea" reverse />
      <section className="bg-secondary py-32 md:py-44">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal><Eyebrow>Leadership</Eyebrow></Reveal>
          <Reveal delay={120}>
            <h2 className="mt-8 font-serif text-4xl md:text-5xl">A Quiet, Senior Team.</h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 text-muted-foreground">
              Our leadership brings together decades of experience in luxury operations,
              real-estate development, and Egyptian cultural production. We work as a flat,
              senior team — closer to a studio than a corporation.
            </p>
            <Link to="/contact" className="mt-12 inline-block border border-charcoal px-10 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-charcoal hover:text-ivory transition-colors">
              Meet the team
            </Link>
          </Reveal>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
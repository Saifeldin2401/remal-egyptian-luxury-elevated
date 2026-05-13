import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import { EditorialBlock } from "@/components/remal/EditorialBlock";
import { StatCounter } from "@/components/remal/StatCounter";
import { ScrollProgress } from "@/components/remal/ScrollProgress";
import { BackToTop } from "@/components/remal/BackToTop";
import { Breadcrumb } from "@/components/remal/Breadcrumb";
import { pillars, impactStats } from "@/data/sustainability";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/sustainability.jpg";
import land from "@/assets/sustain-land.jpg";
import reef from "@/assets/sustain-reef.jpg";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — REMAL" },
      { name: "description", content: "REMAL's commitment to land, culture and community across Egypt." },
      { property: "og:title", content: "Sustainability — REMAL" },
      { property: "og:description", content: "Hospitality that regenerates landscape, culture and community." },
      { property: "og:image", content: hero },
    ],
  }),
  component: SustainabilityPage,
});

function SustainabilityPage() {
  return (
    <div className="bg-background text-foreground">
      <ScrollProgress />
      <PageHero
        eyebrow="Land · Culture · Community"
        title="A Sustainability Rooted in Place."
        intro="We measure success in what we leave behind."
        image={hero}
        imageAlt="Aerial view of turquoise lagoon meeting golden coastline"
      />

      <div className="mx-auto max-w-[1400px] px-6 pt-8 md:px-10">
        <Breadcrumb items={[{ label: "Sustainability", href: "/sustainability" }]} />
      </div>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-6 md:py-32">
        <Reveal>
          <p className="font-serif text-xl leading-[1.5] text-muted-foreground md:text-2xl">
            Sustainability is not a programme — it will be the foundation of every decision we make.
            From the stones we build with to the communities we serve alongside.
          </p>
        </Reveal>
      </section>

      {/* Three pillars */}
      <section className="mx-auto max-w-[1400px] px-6 pb-32 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="group border-t hairline pt-8">
                <p.icon className="h-6 w-6 text-palm transition-transform duration-500 group-hover:scale-110" />
                <Eyebrow className="mt-6">0{i + 1}</Eyebrow>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl">{p.title}</h2>
                <p className="mt-5 text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Impact stats */}
      <section className="border-y hairline bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-12 text-center">
            <Reveal><Eyebrow>Our Impact</Eyebrow></Reveal>
            <Reveal delay={100}>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
                These are our commitments and targets for our first five years of operation.
              </p>
            </Reveal>
          </div>
          <StatCounter stats={impactStats} />
        </div>
      </section>

      <EditorialBlock
        eyebrow="Our Commitment"
        title="Built With, Not On."
        body="From the choice of stone to the orientation of every window, our properties will be designed to disappear into their surroundings — leaving the landscape louder than the architecture."
        image={land}
        imageAlt="Low-impact mudbrick lodge nestled into Egyptian desert dunes"
      />
      <EditorialBlock
        eyebrow="The Long View"
        title="Tourism That Restores."
        body="A hotel can plant trees, restore reefs, and give a young weaver a workshop. Hospitality is one of Egypt's most powerful instruments — and we intend to use it deliberately."
        image={reef}
        imageAlt="Vibrant Red Sea coral reef teeming with marine life"
        reverse
      />

      {/* CTA */}
      <section className="bg-charcoal py-32 text-center text-ivory md:py-44">
        <div className="mx-auto max-w-2xl px-5 sm:px-6">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl">Partner with us on a regenerative project.</h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-6 max-w-lg text-ivory/60">
              If you share our vision for hospitality that heals rather than extracts,
              we'd love to hear from you.
            </p>
            <Link to="/contact" className="btn-primary mt-10">
              <span>Get in touch</span>
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

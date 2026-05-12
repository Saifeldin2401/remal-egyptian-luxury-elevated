import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import { EditorialBlock } from "@/components/remal/EditorialBlock";
import { ScrollProgress } from "@/components/remal/ScrollProgress";
import { BackToTop } from "@/components/remal/BackToTop";
import { Breadcrumb } from "@/components/remal/Breadcrumb";
import { team } from "@/data/team";
import { ArrowRight } from "lucide-react";
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
      <ScrollProgress />
      <PageHero
        eyebrow="About REMAL"
        title="A Hospitality House for the New Egypt."
        intro="Hospitality is a form of generosity — and Egypt is its most generous stage."
        image={hero}
        imageAlt="Old Cairo at dusk"
      />

      <div className="mx-auto max-w-[1400px] px-6 pt-8 md:px-10">
        <Breadcrumb items={[{ label: "About", href: "/about" }]} />
      </div>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-6 md:py-44">
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

      {/* Team */}
      <section className="bg-secondary py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-16 text-center">
            <Reveal><Eyebrow>Leadership</Eyebrow></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">The People Behind REMAL</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
                A senior team with decades of experience in luxury operations, design, and Egyptian cultural production.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>
                <div className="group text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-charcoal text-ivory transition-transform duration-500 group-hover:scale-105">
                    <span className="font-serif text-2xl">{member.initials}</span>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl">{member.name}</h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.2em] text-clay">{member.role}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
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
            {[
              { title: "Warmth", body: "Egyptian hospitality is not performed — it is felt. We train our teams to host from the heart, not a script." },
              { title: "Attention", body: "The unseen details — the fold of a napkin, the temperature of a hallway — define luxury more than any grand gesture." },
              { title: "Community", body: "Every property is woven into the fabric of its place. We hire locally, source locally, and celebrate locally." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <div className="group border-t hairline pt-8 transition-all">
                  <Eyebrow>0{i + 1}</Eyebrow>
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

      <SiteFooter />
      <BackToTop />
    </div>
  );
}

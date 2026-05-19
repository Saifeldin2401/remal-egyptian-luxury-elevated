import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import { EditorialBlock } from "@/components/remal/EditorialBlock";
import { ScrollProgress } from "@/components/remal/ScrollProgress";
import { BackToTop } from "@/components/remal/BackToTop";
import { Breadcrumb } from "@/components/remal/Breadcrumb";
import { ArrowRight } from "lucide-react";
import { Timeline } from "@/components/remal/Timeline";
import { PressStrip } from "@/components/remal/PressStrip";
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
            REMAL is a hospitality house founded in Egypt — built on a single belief:
            that this country deserves a generation of properties as quietly considered,
            as deeply rooted, and as warmly run as anywhere in the world. We are
            shaping that future from the ground up — coastline by coastline, oasis by oasis.
          </p>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="bg-secondary py-24 md:py-36">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <div className="mb-14 text-center">
            <Reveal><Eyebrow>The Arc</Eyebrow></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl">A house, taking shape.</h2>
            </Reveal>
          </div>
          <Timeline
            entries={[
              { year: "Foundations", title: "A vision for Egyptian hospitality", body: "REMAL is founded with a singular question: what would the next generation of Egyptian hospitality look like — rooted, quiet, and built to outlast trends?" },
              { year: "Now", title: "Brand, design & operations", body: "Assembling the team, the design language, and the operating playbook that will define every future REMAL property." },
              { year: "Soon", title: "First properties on the coast", body: "We are in conversation with landowners and developers across the Red Sea and Sinai to bring the first REMAL stays to life." },
              { year: "Ahead", title: "A quiet line across Egypt", body: "From coral coves to Siwa palm gardens, a small constellation of properties — each one inseparable from the place it stands." },
            ]}
          />
        </div>
      </section>

      <PressStrip />

      {/* What we do */}
      <section className="bg-background py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-16 text-center">
            <Reveal><Eyebrow>The House</Eyebrow></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">What REMAL Does</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
                A vertically integrated hospitality house — branding, designing,
                opening and operating boutique destinations across Egypt.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              { num: "01", title: "Brand & Concept", body: "We craft hospitality brands that feel inevitable — rooted in their geography, distinct in their voice, and built to outlast trends." },
              { num: "02", title: "Design & Development", body: "From masterplan to material library, we shape properties in dialogue with their landscape, working with Egypt's most considered architects and artisans." },
              { num: "03", title: "Operations & Management", body: "We run the day-to-day with the same care we put into the brand — service rituals, revenue strategy, and a uniquely Egyptian standard of warmth." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <div className="border-t hairline pt-8">
                  <Eyebrow>{v.num}</Eyebrow>
                  <h3 className="mt-5 font-serif text-2xl md:text-3xl">{v.title}</h3>
                  <p className="mt-4 text-muted-foreground">{v.body}</p>
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

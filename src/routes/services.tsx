import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import { ScrollProgress } from "@/components/remal/ScrollProgress";
import { BackToTop } from "@/components/remal/BackToTop";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/feature-villa.jpg";

const SERVICES = [
  {
    title: "Hotel Operations",
    body: "End-to-end day-to-day operation of boutique hotels and resorts, from front of house to F&B. We run properties as if they were our own — because that level of care is the only standard worth keeping.",
  },
  {
    title: "Revenue Management",
    body: "Pricing strategy, distribution and demand forecasting calibrated to luxury positioning. We blend data science with market intuition to maximise both ADR and guest perception.",
  },
  {
    title: "Hospitality Consulting",
    body: "Strategic advisory for owners, developers and investors entering the Egyptian market. From feasibility studies to brand audits, we give you the clarity to move with confidence.",
  },
  {
    title: "Resort Development",
    body: "Concept, masterplanning, and creative direction for new builds and conversions. We work from day one alongside architects, interior designers and landscape firms.",
  },
  {
    title: "Guest Experience Design",
    body: "Choreography of every guest touchpoint — arrival, room, ritual, departure. We map the emotional arc of a stay and design each moment to feel inevitable.",
  },
  {
    title: "Staff Training",
    body: "Service academies that build a uniquely Egyptian standard of warmth and craft. Our programmes blend technical hospitality skills with cultural storytelling.",
  },
  {
    title: "Brand Positioning",
    body: "Identity, story and visual world that make a property unmistakable. We create brands that attract the right guest and repel mediocrity.",
  },
  {
    title: "Pre-Opening Services",
    body: "Recruiting, systems, SOPs and soft-launch programmes that set the tone from day one. A hotel's first hundred days define its next thousand.",
  },
];

const PROCESS = [
  { step: "01", title: "Discovery", body: "We listen. Your vision, your land, your constraints. We study the place, the market, the story waiting to be told." },
  { step: "02", title: "Strategy", body: "Feasibility, positioning, financial modelling. We build the business case and the creative brief side by side." },
  { step: "03", title: "Design", body: "Architecture, interiors, identity, experience mapping. Every decision is made through the lens of the guest." },
  { step: "04", title: "Launch", body: "Recruiting, training, systems, soft-opening. We sweat the invisible details so the first guest feels they're the thousandth." },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — REMAL Hospitality Management" },
      { name: "description", content: "Hospitality management services in Egypt: operations, revenue, consulting, development, and pre-opening." },
      { property: "og:title", content: "Services — REMAL" },
      { property: "og:description", content: "Operating excellence, end to end — for hotel owners and developers across Egypt." },
      { property: "og:image", content: hero },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <ScrollProgress />
      <PageHero
        eyebrow="Hospitality Services"
        title="Operating Excellence, End to End."
        intro="From the first sketch to the day after opening — and every day after that."
        image={hero}
        imageAlt="Boutique villa interior at dusk"
      />

      {/* Services list */}
      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 100}>
              <article className="group border-t hairline pt-8">
                <Eyebrow>0{i + 1}</Eyebrow>
                <h2 className="mt-4 font-serif text-3xl md:text-4xl">{s.title}</h2>
                <p className="mt-5 text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-16">
            <Reveal><Eyebrow>Our Process</Eyebrow></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">From Vision to Reality</h2>
            </Reveal>
          </div>
          <div className="grid gap-12 md:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <div className="group">
                  <div className="stat-number text-bronze/30 transition-colors group-hover:text-bronze">{p.step}</div>
                  <h3 className="mt-4 font-serif text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-32 text-center text-ivory md:py-44">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-5xl">
              Ready to elevate your property?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-ivory/60">
              Whether you're launching a new resort or reimagining an existing hotel,
              we'd love to hear your vision.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link to="/contact" className="btn-primary mt-10">
              <span>Discuss a property</span>
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
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import hero from "@/assets/feature-villa.jpg";

const SERVICES = [
  { title: "Hotel Operations", body: "End-to-end day-to-day operation of boutique hotels and resorts, from front of house to F&B." },
  { title: "Revenue Management", body: "Pricing strategy, distribution and demand forecasting calibrated to luxury positioning." },
  { title: "Hospitality Consulting", body: "Strategic advisory for owners, developers and investors entering the Egyptian market." },
  { title: "Resort Development", body: "Concept, masterplanning, and creative direction for new builds and conversions." },
  { title: "Guest Experience Design", body: "Choreography of every guest touchpoint — arrival, room, ritual, departure." },
  { title: "Staff Training", body: "Service academies that build a uniquely Egyptian standard of warmth and craft." },
  { title: "Brand Positioning", body: "Identity, story and visual world that make a property unmistakable." },
  { title: "Pre-Opening Services", body: "Recruiting, systems, SOPs and soft-launch programmes that set the tone from day one." },
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
      <PageHero
        eyebrow="Hospitality Services"
        title="Operating Excellence, End to End."
        intro="From the first sketch to the day after opening — and every day after that."
        image={hero}
        imageAlt="Boutique villa interior at dusk"
      />
      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 100}>
              <article className="group border-t hairline pt-8">
                <Eyebrow>0{i + 1}</Eyebrow>
                <h2 className="mt-4 font-serif text-3xl md:text-4xl">{s.title}</h2>
                <p className="mt-5 max-w-md text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-32 text-center">
          <Link to="/contact" className="inline-block border border-charcoal px-10 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-charcoal hover:text-ivory transition-colors">
            Discuss a property
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import { EditorialBlock } from "@/components/remal/EditorialBlock";
import hero from "@/assets/sustainability.jpg";
import villa from "@/assets/feature-villa.jpg";
import desert from "@/assets/divider-desert.jpg";

const PILLARS = [
  { title: "Land", body: "Every property is built in dialogue with its landscape — minimal footprint, native materials, and zero single-use plastic." },
  { title: "Culture", body: "We hire locally, train rigorously, and celebrate the artisans who give each region its identity." },
  { title: "Community", body: "A share of every stay funds education, conservation and women-led enterprises near each property." },
];

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
      <PageHero eyebrow="Land · Culture · Community" title="A Sustainability Rooted in Place." intro="We measure success in what we leave behind." image={hero} imageAlt="Aerial view of turquoise lagoon meeting golden coastline" />
      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="border-t hairline pt-8">
                <Eyebrow>0{i + 1}</Eyebrow>
                <h2 className="mt-4 font-serif text-3xl md:text-4xl">{p.title}</h2>
                <p className="mt-5 text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <EditorialBlock eyebrow="Our Practice" title="Built With, Not On." body="From the choice of stone to the orientation of every window, our properties are designed to disappear into their surroundings — leaving the landscape louder than the architecture." image={villa} imageAlt="Mudbrick villa nestled into desert landscape" />
      <EditorialBlock eyebrow="The Long View" title="Tourism That Restores." body="A hotel can plant trees, restore reefs, and give a young weaver a workshop. Hospitality is one of Egypt's most powerful instruments — we use it deliberately." image={desert} imageAlt="Sun setting across Egyptian desert" reverse />
      <section className="bg-charcoal py-32 text-center text-ivory md:py-44">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl">Partner with us on a regenerative project.</h2>
          </Reveal>
          <Reveal delay={150}>
            <Link to="/contact" className="mt-12 inline-block border border-ivory px-10 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-ivory hover:text-charcoal transition-colors">
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
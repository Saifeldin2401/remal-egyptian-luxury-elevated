import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import { ScrollProgress } from "@/components/remal/ScrollProgress";
import { BackToTop } from "@/components/remal/BackToTop";
import { Breadcrumb } from "@/components/remal/Breadcrumb";
import { services, processSteps } from "@/data/services";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/feature-villa.jpg";

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

      <div className="mx-auto max-w-[1400px] px-6 pt-8 md:px-10">
        <Breadcrumb items={[{ label: "Services", href: "/services" }]} />
      </div>

      {/* Services list */}
      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          {services.map((s, i) => (
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
            {processSteps.map((p, i) => (
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
        <div className="mx-auto max-w-2xl px-5 sm:px-6">
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

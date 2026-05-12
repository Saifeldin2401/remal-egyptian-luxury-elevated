import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import { InquiryForm } from "@/components/remal/InquiryForm";
import { ScrollProgress } from "@/components/remal/ScrollProgress";
import { BackToTop } from "@/components/remal/BackToTop";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import hero from "@/assets/divider-desert.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — REMAL" },
      { name: "description", content: "Partner with REMAL — hospitality management and development inquiries across Egypt." },
      { property: "og:title", content: "Contact — REMAL" },
      { property: "og:description", content: "Hotel owners, developers and brands — we are listening." },
      { property: "og:image", content: hero },
    ],
  }),
  component: ContactPage,
});

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "General",
    value: "hello@remal.co",
    href: "mailto:hello@remal.co",
  },
  {
    icon: Mail,
    label: "Partnerships",
    value: "partners@remal.co",
    href: "mailto:partners@remal.co",
  },
  {
    icon: Mail,
    label: "Press",
    value: "press@remal.co",
    href: "mailto:press@remal.co",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 (0)2 2736 0000",
    href: "tel:+20227360000",
  },
];

function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <ScrollProgress />
      <PageHero
        eyebrow="Partnerships & Press"
        title="Begin the Conversation."
        intro="We work with hotel owners, developers, landowners, brands and journalists."
        image={hero}
        imageAlt="Egyptian desert at dusk"
      />

      {/* Contact form + info */}
      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal><Eyebrow>Cairo Studio</Eyebrow></Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-serif text-3xl md:text-4xl">
                Nile Corniche<br />Cairo, Egypt
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                <span>
                  Our studio overlooks the Nile in central Cairo.<br />
                  Meetings by appointment.
                </span>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-8 flex items-start gap-3 text-sm text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                <span>
                  Sunday – Thursday, 9:00 – 18:00 (EET)<br />
                  Responses within two business days.
                </span>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <dl className="mt-10 space-y-5">
                {CONTACT_INFO.map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <c.icon className="h-4 w-4 shrink-0 text-clay" />
                    <div>
                      <dt className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                        {c.label}
                      </dt>
                      <dd className="mt-0.5 text-sm">
                        <a href={c.href} className="transition-colors hover:text-clay">
                          {c.value}
                        </a>
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <Reveal className="md:col-span-7" delay={200}>
            <InquiryForm />
          </Reveal>
        </div>
      </section>

      {/* Map section */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-secondary md:h-[60vh]">
        <iframe
          title="REMAL Cairo Office"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.843453843453!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzQwLjAiTiAzMcKwMTQnMDguNSJF!5e0!3m2!1sen!2seg!4v1690000000000!5m2!1sen!2seg"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "saturate(0.6) contrast(1.1)" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
      </section>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}
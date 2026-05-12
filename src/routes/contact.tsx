import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/remal/PageHero";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import { InquiryForm } from "@/components/remal/InquiryForm";
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

function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHero eyebrow="Partnerships & Press" title="Begin the Conversation." intro="We work with hotel owners, developers, landowners, brands and journalists." image={hero} imageAlt="Egyptian desert at dusk" />
      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal><Eyebrow>Cairo Studio</Eyebrow></Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-serif text-3xl md:text-4xl">Nile Corniche<br />Cairo, Egypt</h2>
            </Reveal>
            <Reveal delay={240}>
              <dl className="mt-12 space-y-6 text-sm">
                <div><dt className="eyebrow">General</dt><dd className="mt-2">hello@remal.co</dd></div>
                <div><dt className="eyebrow">Partnerships</dt><dd className="mt-2">partners@remal.co</dd></div>
                <div><dt className="eyebrow">Press</dt><dd className="mt-2">press@remal.co</dd></div>
                <div><dt className="eyebrow">Phone</dt><dd className="mt-2">+20 (0)2 0000 0000</dd></div>
              </dl>
            </Reveal>
          </div>
          <Reveal className="md:col-span-7" delay={200}>
            <InquiryForm />
          </Reveal>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
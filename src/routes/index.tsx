import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/remal/SiteHeader";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import { EditorialBlock } from "@/components/remal/EditorialBlock";
import { InquiryForm } from "@/components/remal/InquiryForm";
import { destinations } from "@/data/destinations";
import hero from "@/assets/hero-desert.jpg";
import featureVilla from "@/assets/feature-villa.jpg";
import featurePool from "@/assets/feature-pool.jpg";
import dividerDesert from "@/assets/divider-desert.jpg";
import sustainability from "@/assets/sustainability.jpg";
import journalArtisan from "@/assets/journal-artisan.jpg";
import journalDining from "@/assets/journal-dining.jpg";
import journalStars from "@/assets/journal-stars.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "REMAL — Crafting Exceptional Hospitality Across Egypt" },
      {
        name: "description",
        content:
          "REMAL is a luxury hospitality management company in Egypt — boutique resorts, hotel operations, and immersive tourism experiences from the Red Sea to Siwa.",
      },
      { property: "og:title", content: "REMAL — Hospitality, Reimagined for Egypt" },
      {
        property: "og:description",
        content:
          "Boutique resorts, hotel operations, and immersive tourism — across the Red Sea, Sinai, the North Coast, Cairo, Luxor, Aswan and Siwa.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "REMAL",
          description:
            "Luxury hospitality management company based in Egypt.",
          areaServed: "Egypt",
          url: "https://remal.co",
        }),
      },
    ],
  }),
  component: Home,
});

const SERVICES = [
  "Hotel Operations",
  "Revenue Management",
  "Hospitality Consulting",
  "Resort Development",
  "Guest Experience Design",
  "Staff Training",
  "Brand Positioning",
  "Pre-Opening Services",
];

function Home() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader overlay />

      {/* HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={hero}
            aria-hidden="true"
          >
            <source
              src="https://videos.pexels.com/video-files/1093662/1093662-hd_1280_720_30fps.mp4"
              type="video/mp4"
            />
            <source
              src="https://videos.pexels.com/video-files/4763824/4763824-hd_1280_720_24fps.mp4"
              type="video/mp4"
            />
          </video>
          <img
            src={hero}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full object-cover ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/25 to-charcoal/70" />
          <div className="absolute inset-0 bg-charcoal/20" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-ivory">
          <Reveal>
            <Eyebrow className="text-ivory/80">Hospitality Management · Egypt</Eyebrow>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mx-auto mt-8 max-w-4xl font-serif text-[40px] leading-[1.05] md:text-7xl">
              Crafting Exceptional Hospitality Across Egypt
            </h1>
          </Reveal>
          <Reveal delay={350}>
            <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/85 md:text-lg">
              REMAL transforms hotels into immersive destinations through
              elevated hospitality, cultural connection, and world-class
              management.
            </p>
          </Reveal>
          <Reveal delay={520}>
            <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row">
              <Link
                to="/about"
                className="border border-ivory px-8 py-4 text-[11px] uppercase tracking-[0.3em] transition-colors hover:bg-ivory hover:text-charcoal"
              >
                Discover REMAL
              </Link>
              <Link
                to="/contact"
                className="border border-ivory/40 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-ivory/90 transition-colors hover:border-ivory hover:text-ivory"
              >
                Partner With Us
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-ivory/70">
          Scroll
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background py-32 md:py-48">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Eyebrow>A New Chapter in Egyptian Hospitality</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-10 font-serif text-2xl leading-[1.4] text-charcoal md:text-[34px]">
              We are a hospitality house — operators, designers and storytellers
              shaping the next generation of resorts, retreats and experiences
              along the Nile, the Red Sea and the great Egyptian desert.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="bg-background pb-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-16 flex items-end justify-between">
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl">Our Destinations</h2>
            </Reveal>
            <Reveal>
              <Link
                to="/destinations"
                className="hidden border-b border-charcoal pb-1 text-[11px] uppercase tracking-[0.3em] hover:text-clay md:inline-block"
              >
                View all
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d, i) => (
              <Reveal key={d.slug} delay={i * 60}>
                <Link
                  to="/destinations/$slug"
                  params={{ slug: d.slug }}
                  className="group block"
                >
                  <div className="overflow-hidden">
                    <img
                      src={d.image}
                      alt={`${d.name}, Egypt — REMAL destination`}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-6">
                    <div className="eyebrow">{d.region}</div>
                    <h3 className="mt-2 font-serif text-2xl">{d.name}</h3>
                    <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                      {d.tagline}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EXPERIENCE */}
      <EditorialBlock
        eyebrow="Featured Experience"
        title="Homecoming"
        body="There is a moment, on the second evening of every stay, when the days begin to slow. We design every element of a REMAL property — from the linen on the bed to the silence of the corridors — for that exact moment of arrival inside oneself."
        image={featureVilla}
        imageAlt="Warmly lit boutique villa interior at dusk"
        cta={{ label: "Read the philosophy", href: "/about" }}
      />

      <EditorialBlock
        eyebrow="Our Egypt Journey"
        title="From the Sea to the Sand Sea"
        body="Our properties trace a quiet line across Egypt — coral coves on the Red Sea, mountain wadis in Sinai, palm-shaded oases in Siwa, and rooftop suites above old Cairo. Each stay is a chapter in the same long, unhurried story."
        image={featurePool}
        imageAlt="Open-air dining pavilion overlooking the sea at sunset"
        reverse
        cta={{ label: "Explore destinations", href: "/destinations" }}
      />

      {/* SERVICES */}
      <section className="bg-secondary py-32 md:py-44">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4">
            <Reveal>
              <Eyebrow>Hospitality Services</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-5xl">
                Operating excellence, end to end.
              </h2>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-8 max-w-sm text-muted-foreground">
                We partner with owners and developers from concept to opening
                day — and stay long after, running the day-to-day with the same
                care we put into the brand.
              </p>
              <Link
                to="/services"
                className="mt-10 inline-block border-b border-charcoal pb-1 text-[11px] uppercase tracking-[0.3em] hover:text-clay"
              >
                All services
              </Link>
            </Reveal>
          </div>

          <ul className="md:col-span-8">
            {SERVICES.map((s, i) => (
              <Reveal key={s} delay={i * 40}>
                <li className="group flex items-baseline justify-between border-t hairline py-7 last:border-b">
                  <span className="font-serif text-2xl md:text-3xl">{s}</span>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-charcoal">
                    0{i + 1}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* DIVIDER */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img
          src={dividerDesert}
          alt="Egyptian desert at dusk with distant temple silhouette"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/45" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl text-ivory md:text-6xl">
              Hospitality Beyond Accommodation.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="bg-background py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-16 flex items-end justify-between">
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl">Our Stories</h2>
            </Reveal>
            <Reveal>
              <Link
                to="/journal"
                className="border-b border-charcoal pb-1 text-[11px] uppercase tracking-[0.3em] hover:text-clay"
              >
                Read the journal
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <article>
                <img
                  src={journalArtisan}
                  alt="Egyptian artisan weaving in warm window light"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="eyebrow mt-6">Craft</div>
                <h3 className="mt-3 font-serif text-3xl">
                  The Hands That Shape a Stay
                </h3>
                <p className="mt-4 max-w-lg text-muted-foreground">
                  How we work with weavers, ceramicists and perfumers across
                  Egypt to give each property a sense of place.
                </p>
              </article>
            </Reveal>
            <div className="space-y-12 md:col-span-5">
              <Reveal delay={120}>
                <article className="grid grid-cols-12 gap-5">
                  <img
                    src={journalDining}
                    alt="Long candlelit table set in the desert under stars"
                    loading="lazy"
                    className="col-span-5 aspect-square w-full object-cover"
                  />
                  <div className="col-span-7">
                    <div className="eyebrow">Experience</div>
                    <h3 className="mt-2 font-serif text-xl">
                      A Table in the Sand
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Notes from a private dinner under the Sinai sky.
                    </p>
                  </div>
                </article>
              </Reveal>
              <Reveal delay={220}>
                <article className="grid grid-cols-12 gap-5">
                  <img
                    src={journalStars}
                    alt="Lone palm under starry Egyptian night sky"
                    loading="lazy"
                    className="col-span-5 aspect-square w-full object-cover"
                  />
                  <div className="col-span-7">
                    <div className="eyebrow">Philosophy</div>
                    <h3 className="mt-2 font-serif text-xl">
                      The Quiet of the Stars
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      On designing for stillness in a hyper-connected world.
                    </p>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="bg-background pb-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-stretch gap-12 px-6 md:grid-cols-12 md:gap-20 md:px-10">
          <Reveal className="md:col-span-5 md:py-24">
            <Eyebrow>Land · Culture · Community</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-5xl">
              A Sustainability Rooted in Place.
            </h2>
            <p className="mt-8 text-muted-foreground">
              Each REMAL property is built in dialogue with its landscape and
              the communities that have shaped it for generations. We measure
              success in the regeneration we leave behind.
            </p>
            <Link
              to="/sustainability"
              className="mt-10 inline-block border-b border-charcoal pb-1 text-[11px] uppercase tracking-[0.3em] hover:text-clay"
            >
              Read more
            </Link>
          </Reveal>
          <Reveal className="md:col-span-7" delay={120}>
            <img
              src={sustainability}
              alt="Aerial view of turquoise lagoon meeting golden coastline"
              loading="lazy"
              className="h-[60vh] w-full object-cover md:h-full"
            />
          </Reveal>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="bg-charcoal py-32 text-ivory md:py-44">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow className="text-ivory/70">Partnerships</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-6xl">
                Let’s Shape the Future of Hospitality in Egypt.
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-md text-ivory/70">
                Hotel owners, developers, landowners, and brands — we’re
                listening. Tell us about your property, your land, or the idea
                you’ve been holding onto.
              </p>
            </Reveal>
          </div>
          <Reveal className="md:col-span-7" delay={200}>
            <InquiryForm tone="dark" />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

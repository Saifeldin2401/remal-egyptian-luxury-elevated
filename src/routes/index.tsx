import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import { SandLoader } from "@/components/remal/SandLoader";
import { SiteHeader } from "@/components/remal/SiteHeader";
import { SiteFooter } from "@/components/remal/SiteFooter";
import { Reveal, Eyebrow } from "@/components/remal/Reveal";
import { EditorialBlock } from "@/components/remal/EditorialBlock";
import { InquiryForm } from "@/components/remal/InquiryForm";
import { ScrollProgress } from "@/components/remal/ScrollProgress";
import { BackToTop } from "@/components/remal/BackToTop";
import { ParallaxSection } from "@/components/remal/ParallaxSection";
import { destinations } from "@/data/destinations";
import { ArrowRight, ChevronDown } from "lucide-react";

import hero from "@/assets/hero-desert.jpg";
import featureVilla from "@/assets/feature-villa.jpg";
import featurePool from "@/assets/feature-pool.jpg";
import dividerDesert from "@/assets/divider-desert.jpg";
import sustainability from "@/assets/sustainability.jpg";
import journalArtisan from "@/assets/journal-artisan.jpg";
import journalDining from "@/assets/journal-dining.jpg";
import journalStars from "@/assets/journal-stars.jpg";

export const Route = createFileRoute("/")(
  {
    head: () => ({
      meta: [
        { title: "REMAL — A New Vision for Egyptian Hospitality" },
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
  },
);

const SERVICES = [
  { name: "Hotel Operations", desc: "End-to-end management of boutique hotels and resorts" },
  { name: "Revenue Management", desc: "Pricing strategy calibrated to luxury positioning" },
  { name: "Hospitality Consulting", desc: "Strategic advisory for the Egyptian market" },
  { name: "Resort Development", desc: "Concept to completion for new builds" },
  { name: "Guest Experience Design", desc: "Choreography of every guest touchpoint" },
  { name: "Staff Training", desc: "Building a uniquely Egyptian standard of warmth" },
  { name: "Brand Positioning", desc: "Identity that makes a property unmistakable" },
  { name: "Pre-Opening Services", desc: "From recruiting to soft-launch" },
];

/* ──────────── HERO VIDEO BACKGROUND ──────────── */
// Egyptian-specific Pexels videos (all free license, Egypt-only footage)
const HERO_VIDEOS = [
  // Aerial view on Pyramids in Cairo — cinematic drone shot (user-selected primary)
  "https://videos.pexels.com/video-files/10717893/10717893-uhd_2560_1440_24fps.mp4",
  // Pyramids of Giza at golden hour with desert panorama
  "https://videos.pexels.com/video-files/3015482/3015482-hd_1920_1080_24fps.mp4",
  // Nile River felucca sailing at sunset — classic Egyptian tourism scene
  "https://videos.pexels.com/video-files/5765245/5765245-hd_1920_1080_30fps.mp4",
  // Egyptian desert landscape with warm golden light
  "https://videos.pexels.com/video-files/1739010/1739010-hd_1920_1080_30fps.mp4",
];

function HeroVideo({ onReady }: { onReady?: () => void }) {
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);
  // "a" = video A is in front, "b" = video B is in front
  const [front, setFront] = useState<"a" | "b">("a");
  const indexRef = useRef(0);
  const [ready, setReady] = useState(false);

  // Mark ready once video A loads the first clip
  useEffect(() => {
    const v = videoA.current;
    if (!v) return;
    const h = () => {
      setReady(true);
      onReady?.();
    };
    v.addEventListener("canplay", h, { once: true });
    return () => v.removeEventListener("canplay", h);
  }, [onReady]);

  // Preload clip into video B immediately so it's ready for the first transition
  useEffect(() => {
    const v = videoB.current;
    if (!v || !ready) return;
    v.src = HERO_VIDEOS[1 % HERO_VIDEOS.length];
    v.load();
  }, [ready]);

  // Main loop: every 6s, crossfade A↔B
  useEffect(() => {
    if (!ready) return;

    const interval = setInterval(() => {
      const backRef = front === "a" ? videoB : videoA;
      const newFront = front === "a" ? "b" : "a";

      // The back video is already preloaded — start playing it
      backRef.current?.play().catch(() => {});

      // Crossfade: bring the back video to front
      setFront(newFront);

      // After crossfade finishes, preload the NEXT clip into the now-hidden old-front
      setTimeout(() => {
        indexRef.current = (indexRef.current + 1) % HERO_VIDEOS.length;
        const nextClipIndex = (indexRef.current + 1) % HERO_VIDEOS.length;
        // The old front is now behind — safe to swap its source
        const oldFrontRef = front === "a" ? videoA : videoB;
        const v = oldFrontRef.current;
        if (v) {
          v.src = HERO_VIDEOS[nextClipIndex];
          v.load();
        }
      }, 1600);
    }, 6000);

    return () => clearInterval(interval);
  }, [ready, front]);

  const sharedStyle = "absolute inset-0 h-full w-full object-cover";

  return (
    <div className="hero-video-wrapper">
      {/* Video A */}
      <video
        ref={videoA}
        className={sharedStyle}
        style={{
          zIndex: front === "a" ? 2 : 1,
          opacity: front === "a" ? 1 : 0,
          transition: "opacity 1.5s ease-in-out",
        }}
        autoPlay muted playsInline preload="auto" aria-hidden="true"
      >
        <source src={HERO_VIDEOS[0]} type="video/mp4" />
      </video>

      {/* Video B */}
      <video
        ref={videoB}
        className={sharedStyle}
        style={{
          zIndex: front === "b" ? 2 : 1,
          opacity: front === "b" ? 1 : 0,
          transition: "opacity 1.5s ease-in-out",
        }}
        muted playsInline preload="auto" aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-b from-charcoal/60 via-charcoal/20 to-charcoal/75" />
      <div className="absolute inset-0 z-[3] bg-charcoal/15" />
    </div>
  );
}

/* ──────────── HOME PAGE ──────────── */
function Home() {
  const [videoReady, setVideoReady] = useState(false);
  const handleVideoReady = useCallback(() => setVideoReady(true), []);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-background text-foreground">
      <SandLoader videoReady={videoReady} />
      <ScrollProgress />
      <SiteHeader overlay />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative h-[100svh] w-full overflow-hidden" id="hero">
        <HeroVideo onReady={handleVideoReady} />
        
        {/* Cinematic grain overlay */}
        <div className="pointer-events-none absolute inset-0 z-[4] opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

        <div 
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-ivory transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          }}
        >
          <Reveal>
            <Eyebrow className="text-ivory/80">
              <span className="divider-ornament text-ivory/50">Hospitality Management · Egypt</span>
            </Eyebrow>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="animate-reveal-blur text-shadow-hero mx-auto mt-10 max-w-4xl font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] tracking-tight">
              A New Vision for Egyptian Hospitality
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/80 md:text-lg">
              REMAL is building the next generation of immersive destinations
              across Egypt — through elevated hospitality, cultural connection,
              and world-class management.
            </p>
          </Reveal>
          <Reveal delay={600}>
            <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row">
              <Link to="/about" className="btn-primary">
                <span>Discover REMAL</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link to="/contact" className="btn-outline">
                <span>Partner With Us</span>
              </Link>
            </div>
          </Reveal>
        </div>
        {/* Scroll indicator */}
        <button
          onClick={() => document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })}
          className="scroll-indicator absolute bottom-10 left-1/2 z-10 flex flex-col items-center gap-2 text-ivory/70"
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </section>

      {/* ═══════════ INTRO ═══════════ */}
      <section className="bg-background py-32 md:py-48" id="intro">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Eyebrow>A New Chapter in Egyptian Hospitality</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-10 font-serif text-2xl leading-[1.4] text-charcoal md:text-[34px]">
              We are a hospitality house — operators, designers and storytellers
              building the next generation of resorts, retreats and experiences
              along the Nile, the Red Sea and the great Egyptian desert.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ VISION ═══════════ */}
      <section className="border-y hairline bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              { number: "01", title: "Operate", body: "Boutique hotels and resorts with world-class standards and a uniquely Egyptian soul." },
              { number: "02", title: "Design", body: "Guest experiences rooted in place — from architecture to arrival rituals." },
              { number: "03", title: "Develop", body: "New destinations across Egypt's most extraordinary landscapes." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <div className="text-center">
                  <div className="text-sm font-medium uppercase tracking-[0.3em] text-clay">{v.number}</div>
                  <h3 className="mt-3 font-serif text-3xl md:text-4xl">{v.title}</h3>
                  <p className="mx-auto mt-4 max-w-xs text-sm text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ DESTINATIONS ═══════════ */}
      <section className="bg-background py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-16 flex items-end justify-between">
            <Reveal>
              <Eyebrow>Across Egypt</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">Where We're Heading</h2>
            </Reveal>
            <Reveal>
              <Link
                to="/destinations"
                className="hidden items-center gap-2 border-b border-charcoal pb-1 text-[11px] uppercase tracking-[0.3em] transition-colors hover:text-clay md:inline-flex"
              >
                View all
                <ArrowRight className="h-3 w-3" />
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
                  <div className="img-hover-zoom overflow-hidden">
                    <img
                      src={d.image}
                      alt={`${d.name}, Egypt — REMAL destination`}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                  <div className="mt-6">
                    <div className="eyebrow">{d.region}</div>
                    <h3 className="mt-2 font-serif text-2xl transition-colors group-hover:text-clay">{d.name}</h3>
                    <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                      {d.tagline}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-12 text-center md:hidden">
            <Link
              to="/destinations"
              className="btn-dark"
            >
              <span>All destinations</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURED EXPERIENCE ═══════════ */}
      <EditorialBlock
        eyebrow="Our Philosophy"
        title="Homecoming"
        body="There is a moment, on the second evening of every stay, when the days begin to slow. We are designing every element of a REMAL property — from the linen on the bed to the silence of the corridors — for that exact moment of arrival inside oneself."
        image={featureVilla}
        imageAlt="Warmly lit boutique villa interior at dusk"
        cta={{ label: "Read the philosophy", href: "/about" }}
      />

      <EditorialBlock
        eyebrow="Our Vision"
        title="From the Sea to the Sand Sea"
        body="Our future properties will trace a quiet line across Egypt — coral coves on the Red Sea, mountain wadis in Sinai, palm-shaded oases in Siwa, and rooftop suites above old Cairo. Each destination, a chapter in the same long, unhurried story."
        image={featurePool}
        imageAlt="Open-air dining pavilion overlooking the sea at sunset"
        reverse
        cta={{ label: "Explore destinations", href: "/destinations" }}
      />

      {/* ═══════════ SERVICES ═══════════ */}
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
                className="mt-10 inline-flex items-center gap-2 border-b border-charcoal pb-1 text-[11px] uppercase tracking-[0.3em] transition-colors hover:text-clay"
              >
                All services
                <ArrowRight className="h-3 w-3" />
              </Link>
            </Reveal>
          </div>

          <ul className="md:col-span-8">
            {SERVICES.map((s, i) => (
              <Reveal key={s.name} delay={i * 40}>
                <li className="group flex items-baseline justify-between border-t hairline py-7 last:border-b">
                  <div>
                    <span className="font-serif text-2xl md:text-3xl">{s.name}</span>
                    <p className="mt-1 max-w-md text-sm text-muted-foreground opacity-0 transition-all duration-500 group-hover:opacity-100">
                      {s.desc}
                    </p>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-charcoal">
                    0{i + 1}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════ PARALLAX DIVIDER ═══════════ */}
      <ParallaxSection
        image={dividerDesert}
        imageAlt="Egyptian desert at dusk with distant temple silhouette"
      >
        <Reveal>
          <h2 className="font-serif text-4xl text-ivory md:text-6xl lg:text-7xl">
            Hospitality Beyond Accommodation.
          </h2>
        </Reveal>
      </ParallaxSection>

      {/* ═══════════ OUR PROMISE ═══════════ */}
      <section className="bg-background py-32 md:py-44">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <Eyebrow>Our Promise</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-serif text-3xl leading-[1.2] md:text-5xl">
              Every detail, considered.<br />Every guest, remembered.
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mx-auto mt-8 max-w-xl text-muted-foreground">
              We are building REMAL with a singular obsession: to create hospitality
              experiences across Egypt that are as generous and warm as the country itself.
              From the first property to the hundredth, this promise will not change.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ JOURNAL / STORIES ═══════════ */}
      <section className="bg-secondary py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-16 flex items-end justify-between">
            <Reveal>
              <Eyebrow>From the Journal</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">Our Stories</h2>
            </Reveal>
            <Reveal>
              <Link
                to="/journal"
                className="hidden items-center gap-2 border-b border-charcoal pb-1 text-[11px] uppercase tracking-[0.3em] transition-colors hover:text-clay md:inline-flex"
              >
                Read the journal
                <ArrowRight className="h-3 w-3" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <article className="group cursor-pointer">
                <div className="img-hover-zoom overflow-hidden">
                  <img
                    src={journalArtisan}
                    alt="Egyptian artisan weaving in warm window light"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="eyebrow mt-6">Craft</div>
                <h3 className="mt-3 font-serif text-3xl transition-colors group-hover:text-clay">
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
                <article className="group grid cursor-pointer grid-cols-12 gap-5">
                  <div className="img-hover-zoom col-span-5 overflow-hidden">
                    <img
                      src={journalDining}
                      alt="Long candlelit table set in the desert under stars"
                      loading="lazy"
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                  <div className="col-span-7">
                    <div className="eyebrow">Experience</div>
                    <h3 className="mt-2 font-serif text-xl transition-colors group-hover:text-clay">
                      A Table in the Sand
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Notes from a private dinner under the Sinai sky.
                    </p>
                  </div>
                </article>
              </Reveal>
              <Reveal delay={220}>
                <article className="group grid cursor-pointer grid-cols-12 gap-5">
                  <div className="img-hover-zoom col-span-5 overflow-hidden">
                    <img
                      src={journalStars}
                      alt="Lone palm under starry Egyptian night sky"
                      loading="lazy"
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                  <div className="col-span-7">
                    <div className="eyebrow">Philosophy</div>
                    <h3 className="mt-2 font-serif text-xl transition-colors group-hover:text-clay">
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

      {/* ═══════════ SUSTAINABILITY ═══════════ */}
      <section className="bg-background py-32 md:py-44">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-stretch gap-12 px-6 md:grid-cols-12 md:gap-20 md:px-10">
          <Reveal className="md:col-span-5 md:py-24">
            <Eyebrow>Land · Culture · Community</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-5xl">
              A Sustainability Rooted in Place.
            </h2>
            <p className="mt-8 text-muted-foreground">
              Every REMAL property will be built in dialogue with its landscape and
              the communities that have shaped it for generations. We will measure
              success in the regeneration we leave behind.
            </p>
            <Link
              to="/sustainability"
              className="mt-10 inline-flex items-center gap-2 border-b border-charcoal pb-1 text-[11px] uppercase tracking-[0.3em] transition-colors hover:text-clay"
            >
              Read more
              <ArrowRight className="h-3 w-3" />
            </Link>
          </Reveal>
          <Reveal className="md:col-span-7" delay={120}>
            <div className="img-hover-zoom overflow-hidden">
              <img
                src={sustainability}
                alt="Aerial view of turquoise lagoon meeting golden coastline"
                loading="lazy"
                className="h-[60vh] w-full object-cover md:h-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ CTA / CONTACT ═══════════ */}
      <section className="bg-charcoal py-32 text-ivory md:py-44">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow className="text-ivory/60">Partnerships</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-6xl">
                Let's Shape the Future of Hospitality in Egypt.
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-md text-ivory/65">
                Hotel owners, developers, landowners, and brands — we're
                listening. Tell us about your property, your land, or the idea
                you've been holding onto.
              </p>
            </Reveal>
          </div>
          <Reveal className="md:col-span-7" delay={200}>
            <InquiryForm tone="dark" />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}

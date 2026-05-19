import { Reveal, Eyebrow } from "./Reveal";
import { SiteHeader } from "./SiteHeader";
import { WordReveal } from "./WordReveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <>
      <SiteHeader overlay />
      <section className="relative h-[70svh] w-full overflow-hidden sm:h-[80svh]">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover ken-burns"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/45 via-charcoal/20 to-charcoal/65" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-ivory sm:px-6">
          <Reveal>
            <Eyebrow className="text-ivory/80">{eyebrow}</Eyebrow>
          </Reveal>
          <WordReveal
            as="h1"
            text={title}
            delay={150}
            stagger={75}
            className="mx-auto mt-6 block max-w-4xl font-serif text-[clamp(2.25rem,7vw,5rem)] leading-[1.05] tracking-tight sm:text-5xl md:text-7xl"
          />
          {intro && (
            <Reveal delay={260}>
              <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-ivory/85 sm:text-base md:text-lg">
                {intro}
              </p>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}

import { Reveal, Eyebrow } from "./Reveal";
import { SiteHeader } from "./SiteHeader";

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
      <section className="relative h-[80svh] w-full overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover ken-burns"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/45 via-charcoal/20 to-charcoal/65" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-ivory">
          <Reveal>
            <Eyebrow className="text-ivory/80">{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mx-auto mt-8 max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={260}>
              <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/85">
                {intro}
              </p>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
import { Link } from "@tanstack/react-router";
import { Reveal, Eyebrow } from "./Reveal";

export function EditorialBlock({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  reverse = false,
  cta,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="bg-background py-20 md:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-5 sm:gap-12 sm:px-6 md:grid-cols-12 md:gap-20 md:px-10">
        <Reveal
          className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}
        >
          <div className="img-hover-zoom overflow-hidden shadow-2xl shadow-charcoal/10">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="h-[50vh] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 sm:h-[60vh] md:h-[80vh]"
            />
          </div>
        </Reveal>
        <Reveal
          delay={120}
          className={`md:col-span-5 ${reverse ? "md:order-1 md:pr-8" : "md:pl-8"}`}
        >
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="mt-5 font-serif text-[clamp(1.875rem,5vw,3.5rem)] leading-[1.05] sm:mt-6">
            {title}
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base sm:mt-8">
            {body}
          </p>
          {cta && (
            <Link
              to={cta.href}
              className="mt-8 inline-block border-b border-charcoal pb-1 text-[11px] uppercase tracking-[0.3em] text-charcoal transition-colors hover:text-clay sm:mt-10"
            >
              {cta.label}
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}

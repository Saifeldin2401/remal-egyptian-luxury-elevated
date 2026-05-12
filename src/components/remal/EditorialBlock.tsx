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
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:gap-20 md:px-10">
        <Reveal
          className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}
        >
          <div className="img-hover-zoom overflow-hidden shadow-2xl shadow-charcoal/10">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="h-[60vh] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 md:h-[80vh]"
            />
          </div>
        </Reveal>
        <Reveal
          delay={120}
          className={`md:col-span-5 ${reverse ? "md:order-1 md:pr-8" : "md:pl-8"}`}
        >
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-5xl">
            {title}
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            {body}
          </p>
          {cta && (
            <Link
              to={cta.href}
              className="mt-10 inline-block border-b border-charcoal pb-1 text-[11px] uppercase tracking-[0.3em] text-charcoal transition-colors hover:text-clay"
            >
              {cta.label}
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}
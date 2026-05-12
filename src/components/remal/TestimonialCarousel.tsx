import { useState, useEffect, useRef, useCallback } from "react";
import { Reveal } from "./Reveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    intervalRef.current = setInterval(next, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  const t = testimonials[current];

  return (
    <div className="relative mx-auto max-w-3xl px-6 text-center">
      <Reveal>
        <Quote className="mx-auto mb-8 h-8 w-8 text-bronze/40" />
      </Reveal>
      <div key={current} className="page-enter">
        <blockquote className="font-serif text-2xl leading-[1.45] text-charcoal md:text-[32px]">
          "{t.quote}"
        </blockquote>
        <div className="mt-8">
          <div className="text-sm font-medium uppercase tracking-[0.2em]">{t.author}</div>
          <div className="mt-1 text-xs text-muted-foreground">{t.role}</div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center border hairline transition-colors hover:bg-charcoal hover:text-ivory"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 transition-all duration-500 ${i === current ? "w-8 bg-charcoal" : "w-3 bg-charcoal/20"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center border hairline transition-colors hover:bg-charcoal hover:text-ivory"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

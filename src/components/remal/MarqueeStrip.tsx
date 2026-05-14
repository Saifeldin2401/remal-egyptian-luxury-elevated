import { Reveal } from "./Reveal";

const WORDS = [
  "Red Sea",
  "Sinai",
  "Siwa",
  "Luxor",
  "Aswan",
  "North Coast",
  "Cairo",
];

export function MarqueeStrip() {
  // Duplicate for seamless loop
  const items = [...WORDS, ...WORDS, ...WORDS];
  return (
    <Reveal>
      <div className="marquee-strip border-y hairline bg-ivory py-8 md:py-12">
        <div className="marquee-track">
          {items.map((w, i) => (
            <span key={i} className="marquee-item font-serif text-3xl text-charcoal/85 sm:text-4xl md:text-6xl">
              {w}
              <span aria-hidden className="mx-8 inline-block align-middle text-clay md:mx-14">✦</span>
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

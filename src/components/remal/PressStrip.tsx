import { Reveal, Eyebrow } from "./Reveal";

const NAMES = ["Condé Nast", "Wallpaper*", "Monocle", "Robb Report", "The Times"];

export function PressStrip() {
  return (
    <section className="border-y hairline bg-secondary/40 py-14 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Recognition</Eyebrow>
            <p className="mt-3 text-sm text-muted-foreground">
              Conversations underway with the publications that shape the future of hospitality.
            </p>
          </div>
        </Reveal>
        <div className="press-strip mt-10 md:mt-14">
          {NAMES.map((n, i) => (
            <Reveal key={n} delay={i * 80}>
              <span className="press-logo">{n}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
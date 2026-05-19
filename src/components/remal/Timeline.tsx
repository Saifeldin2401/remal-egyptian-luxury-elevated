import { Reveal } from "./Reveal";

export type TimelineEntry = {
  year: string;
  title: string;
  body: string;
};

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="timeline">
      {entries.map((e, i) => (
        <Reveal key={i} delay={i * 120}>
          <div className="timeline-item is-visible">
            <div className="text-[11px] uppercase tracking-[0.3em] text-clay">{e.year}</div>
            <h3 className="mt-2 font-serif text-2xl sm:text-3xl">{e.title}</h3>
            <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-base">{e.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
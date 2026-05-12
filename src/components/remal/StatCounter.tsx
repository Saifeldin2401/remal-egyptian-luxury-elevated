import { useEffect, useRef, useState } from "react";
import { Reveal, Eyebrow } from "./Reveal";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export function StatCounter({ stats, tone = "light" }: { stats: Stat[]; tone?: "light" | "dark" }) {
  const isDark = tone === "dark";

  return (
    <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 100}>
          <div className="text-center">
            <AnimatedNumber
              value={s.value}
              prefix={s.prefix}
              suffix={s.suffix}
              className={isDark ? "text-ivory" : "text-charcoal"}
            />
            <div className={`mt-3 text-xs font-medium uppercase tracking-[0.25em] ${isDark ? "text-ivory/60" : "text-muted-foreground"}`}>
              {s.label}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayed(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className={`stat-number ${className}`}>
      {prefix}{displayed}{suffix}
    </div>
  );
}

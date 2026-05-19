import { useEffect, useRef, useState } from "react";

export function ReadingProgress({ targetSelector = "article" }: { targetSelector?: string }) {
  const [pct, setPct] = useState(0);
  const raf = useRef(0);
  useEffect(() => {
    const compute = () => {
      const el = document.querySelector(targetSelector) as HTMLElement | null;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setPct(Math.min(100, (scrolled / Math.max(total, 1)) * 100));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, [targetSelector]);
  return <div className="reading-progress" style={{ width: `${pct}%` }} aria-hidden />;
}
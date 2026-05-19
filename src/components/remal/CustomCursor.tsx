import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    let rx = 0, ry = 0, dx = 0, dy = 0;
    let raf = 0;

    const move = (e: MouseEvent) => {
      dx = e.clientX; dy = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
    };
    const loop = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const hover = t.closest("a, button, [role='button'], input, textarea, .img-hover-zoom");
      ring.current?.classList.toggle("is-hover", !!hover);
      dot.current?.classList.toggle("is-hover", !!hover);
    };
    const onLeave = () => {
      if (dot.current) dot.current.style.opacity = "0";
      if (ring.current) ring.current.style.opacity = "0";
    };
    const onEnter = () => {
      if (dot.current) dot.current.style.opacity = "1";
      if (ring.current) ring.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={ring} className="custom-cursor-ring" aria-hidden />
      <div ref={dot} className="custom-cursor-dot" aria-hidden />
    </>
  );
}
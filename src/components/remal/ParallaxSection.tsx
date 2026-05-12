import { useEffect, useRef, useState, type ReactNode } from "react";

export function ParallaxSection({
  children,
  image,
  imageAlt,
  overlay = "bg-charcoal/45",
  height = "h-[80vh]",
}: {
  children: ReactNode;
  image: string;
  imageAlt: string;
  overlay?: string;
  height?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    if (!section || !img) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.bottom < 0 || rect.top > viewH) return;
      const scrollPercent = (viewH - rect.top) / (viewH + rect.height);
      const translateY = (scrollPercent - 0.5) * 60;
      img.style.transform = `translateY(${translateY}px) scale(1.1)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className={`relative ${height} w-full overflow-hidden`}>
      <img
        ref={imgRef}
        src={image}
        alt={imageAlt}
        loading="lazy"
        className="absolute inset-0 h-[120%] w-full object-cover parallax-bg"
        style={{ top: "-10%" }}
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        {children}
      </div>
    </section>
  );
}

import { useEffect, useRef, useState, useCallback } from "react";

interface SandLoaderProps {
  videoReady: boolean;
}

const PARTICLE_COUNT = 1200; // Significantly more for density
const LOGO_TEXT = "REMAL";
const TAGLINE = "HOSPITALITY  ·  EGYPT";
const MAX_LOADER_MS = 6000; 

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  originX: number;
  originY: number;
  size: number;
  alpha: number;
  speed: number;
  drift: number;
  color: [number, number, number];
  phase: number;
  isLogo: boolean;
  isSparkle: boolean;
  delay: number; // Staggered start
}

const SAND_COLORS = [
  [212, 175, 115], // warm gold
  [194, 154, 96],  // deep sand
  [227, 199, 150], // light sand
  [180, 140, 80],  // bronze
  [240, 215, 170], // pale gold
  [200, 165, 110], // sandstone
];

export function SandLoader({ videoReady }: SandLoaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");
  const startRef = useRef(Date.now());
  const exitStartRef = useRef(0);
  const resolvedRef = useRef(false);

  // Force exit fail-safe
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!resolvedRef.current) {
        resolvedRef.current = true;
        triggerExit();
      }
    }, MAX_LOADER_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!videoReady || resolvedRef.current) return;
    resolvedRef.current = true;
    setTimeout(triggerExit, 800); // Give them 800ms to admire the settled logo
  }, [videoReady]);

  const triggerExit = () => {
    exitStartRef.current = Date.now();
    setPhase("exiting");
    setTimeout(() => setPhase("done"), 1800);
  };

  const initParticles = useCallback((w: number, h: number) => {
    const offscreen = document.createElement("canvas");
    offscreen.width = w;
    offscreen.height = h;
    const octx = offscreen.getContext("2d")!;

    // Higher quality sampling
    const fontSize = Math.min(w * 0.08, 120);
    octx.font = `300 ${fontSize}px "Cormorant Garamond", "Georgia", serif`;
    octx.textAlign = "center";
    octx.textBaseline = "middle";
    octx.fillStyle = "white";
    octx.fillText(LOGO_TEXT, w / 2, h / 2 - 10);

    const tagSize = Math.min(w * 0.013, 12);
    octx.font = `400 ${tagSize}px "Inter", "Helvetica", sans-serif`;
    octx.letterSpacing = "0.4em";
    octx.fillText(TAGLINE, w / 2, h / 2 + fontSize * 0.55);

    const imageData = octx.getImageData(0, 0, w, h).data;
    const textPoints: { x: number; y: number }[] = [];
    const step = w > 1000 ? 2 : 1; 

    for (let py = 0; py < h; py += step) {
      for (let px = 0; px < w; px += step) {
        const i = (py * w + px) * 4;
        if (imageData[i + 3] > 100) {
          textPoints.push({ x: px, y: py });
        }
      }
    }

    const shuffled = textPoints.sort(() => Math.random() - 0.5);
    const logoGoal = Math.floor(PARTICLE_COUNT * 0.85);
    const particles: Particle[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const isLogo = i < logoGoal && i < shuffled.length;
      const target = isLogo ? shuffled[i] : { x: Math.random() * w, y: Math.random() * h };
      
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.max(w, h) * (0.6 + Math.random() * 0.4);
      const originX = w / 2 + Math.cos(angle) * dist;
      const originY = h / 2 + Math.sin(angle) * dist;

      particles.push({
        x: originX,
        y: originY,
        originX,
        originY,
        targetX: target.x,
        targetY: target.y,
        size: isLogo ? 0.8 + Math.random() * 1.4 : 0.5 + Math.random() * 2,
        alpha: 0,
        speed: isLogo ? 0.012 + Math.random() * 0.018 : 0.005 + Math.random() * 0.01,
        drift: 0.3 + Math.random() * 0.8,
        color: SAND_COLORS[Math.floor(Math.random() * SAND_COLORS.length)] as [number, number, number],
        phase: Math.random() * Math.PI * 2,
        isLogo,
        isSparkle: Math.random() > 0.96,
        delay: Math.random() * 800, 
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
      initParticles(w, h);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [initParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = () => window.innerWidth;
    const h = () => window.innerHeight;
    const isExiting = phase === "exiting";

    const animate = () => {
      ctx.clearRect(0, 0, w(), h());
      const now = Date.now();
      const elapsedMs = now - startRef.current;
      const elapsed = elapsedMs / 1000;
      const particles = particlesRef.current;

      let exitT = 0;
      if (isExiting) {
        exitT = Math.min(1, (now - exitStartRef.current) / 1600);
      }

      // 1. Draw "Ghost" logo for grounding
      if (!isExiting) {
        const ghostA = Math.min(0.08, (elapsedMs - 1500) / 4000);
        if (ghostA > 0) {
          ctx.font = `300 ${Math.min(w() * 0.08, 120)}px "Cormorant Garamond", serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = `rgba(212, 175, 115, ${ghostA})`;
          ctx.fillText(LOGO_TEXT, w() / 2, h() / 2 - 10);
        }
      }

      // 2. Draw Particles
      for (const p of particles) {
        if (elapsedMs < p.delay) continue;

        const pElapsed = (elapsedMs - p.delay) / 1000;
        const convergence = Math.min(1, pElapsed / 2.8);
        const t = easeOutCubic(convergence);

        // Wind/Drift physics
        const windX = Math.sin(elapsed * 0.8 + p.phase) * p.drift * (1 - t * 0.8);
        const windY = Math.cos(elapsed * 0.6 + p.phase * 1.2) * p.drift * 0.5 * (1 - t * 0.8);

        if (!isExiting) {
          p.x += (p.targetX - p.x) * p.speed * 2.5 + windX;
          p.y += (p.targetY - p.y) * p.speed * 2.5 + windY;
          p.alpha = Math.min(1, p.alpha + 0.015);
        } else {
          const exitEase = easeInQuart(exitT);
          const swirl = Math.sin(exitT * 4 + p.phase) * 15 * exitT;
          const dx = p.x - w() / 2;
          const dy = p.y - h() / 2;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          
          p.x += (dx / dist) * exitEase * 12 + swirl + windX * 4;
          p.y += (dy / dist) * exitEase * 10 - exitEase * 5 + windY * 4;
          p.alpha = Math.max(0, 1 - exitT * 2);
        }

        // Shimmer & Sparkle
        let shimmer = 1;
        if (p.isLogo && t > 0.8) {
          shimmer = 0.8 + Math.sin(elapsed * 2 + p.phase) * 0.2;
        }
        if (p.isSparkle && t > 0.9) {
          shimmer *= 1.2 + Math.sin(elapsed * 8 + p.phase) * 0.4;
        }

        const a = p.alpha * shimmer;
        if (a < 0.01) continue;

        ctx.beginPath();
        const size = p.isSparkle ? p.size * 1.2 : p.size;
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        const [r, g, b] = p.color;
        ctx.fillStyle = `rgba(${r},${g},${b},${a.toFixed(3)})`;
        ctx.fill();
      }

      // 3. Center Glow
      if (!isExiting) {
        const glowA = Math.min(0.12, elapsed / 10);
        const grad = ctx.createRadialGradient(w() / 2, h() / 2, 0, w() / 2, h() / 2, w() * 0.4);
        grad.addColorStop(0, `rgba(212, 175, 115, ${glowA})`);
        grad.addColorStop(1, "rgba(212, 175, 115, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w(), h());
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #2c2a27 0%, #1a1816 100%)",
        opacity: phase === "exiting" ? 0 : 1,
        transition: "opacity 1.4s ease-in-out",
        transitionDelay: phase === "exiting" ? "0.4s" : "0s",
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Cinematic noise/grain overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      {/* Shimmer line */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <div
          className="h-[1px] bg-gradient-to-r from-transparent via-amber-200/50 to-transparent"
          style={{
            width: phase === "exiting" ? "0px" : "160px",
            transition: "width 1s ease-in-out",
            animation: phase === "loading" ? "shimmer-line 2.5s ease-in-out infinite" : "none",
          }}
        />
      </div>
    </div>
  );
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function easeInQuart(t: number): number {
  return t * t * t * t;
}

import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/destinations", label: "Destinations" },
  { to: "/experiences", label: "Experiences" },
  { to: "/services", label: "Services" },
  { to: "/journal", label: "Journal" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tone =
    overlay && !scrolled
      ? "text-ivory"
      : "text-charcoal";
  const bg =
    scrolled || !overlay
      ? "bg-ivory/85 backdrop-blur-md border-b hairline"
      : "bg-transparent";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${bg} ${tone}`}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="font-serif text-2xl tracking-[0.18em]">
          REMAL
        </Link>
        <nav className="hidden gap-8 text-[12px] uppercase tracking-[0.22em] lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "opacity-100" }}
              inactiveProps={{ className: "opacity-70 hover:opacity-100" }}
              className="transition-opacity"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Open menu"
          className="lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-charcoal text-ivory animate-fade-in">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-serif text-2xl tracking-[0.18em]">REMAL</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-6 px-6 pt-12 font-serif text-3xl">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
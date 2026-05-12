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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const tone =
    overlay && !scrolled
      ? "text-ivory"
      : "text-charcoal";
  const bg =
    scrolled || !overlay
      ? "bg-ivory/90 backdrop-blur-lg border-b hairline shadow-sm shadow-charcoal/[0.03]"
      : "bg-transparent";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${bg} ${tone}`}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="group font-serif text-2xl tracking-[0.18em]">
          <span className="relative">
            REMAL
            <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-current transition-all duration-500 group-hover:w-full" />
          </span>
        </Link>
        <nav className="hidden gap-8 text-[12px] uppercase tracking-[0.22em] lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "opacity-100" }}
              inactiveProps={{ className: "opacity-70 hover:opacity-100" }}
              className="relative transition-opacity"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Open menu"
          className="relative z-50 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5 text-ivory" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Scroll progress bar (Subtle) */}
      {scrolled && (
        <div 
          className="absolute bottom-0 left-0 h-[1px] bg-bronze transition-all duration-150"
          style={{ width: `${Math.min(100, (typeof window !== 'undefined' ? (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100 : 0))}%` }}
        />
      )}

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-charcoal text-ivory mobile-menu-enter">
          <div className="flex h-full flex-col justify-between px-6 pb-12 pt-24">
            <nav className="flex flex-col gap-1">
              {NAV.map((n, i) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="mobile-menu-link group flex items-center justify-between border-b border-ivory/10 py-5 font-serif text-3xl transition-colors hover:text-bronze"
                  style={{ animationDelay: `${100 + i * 60}ms` }}
                >
                  <span>{n.label}</span>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-ivory/30 transition-colors group-hover:text-bronze">
                    0{i + 1}
                  </span>
                </Link>
              ))}
            </nav>
            <div
              className="mobile-menu-link space-y-3 text-sm text-ivory/60"
              style={{ animationDelay: `${100 + NAV.length * 60 + 100}ms` }}
            >
              <p>hello@remal.co</p>
              <p>Nile Corniche, Cairo, Egypt</p>
              <div className="flex gap-6 pt-4 text-xs uppercase tracking-[0.2em]">
                <a href="#" className="hover:text-ivory">Instagram</a>
                <a href="#" className="hover:text-ivory">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
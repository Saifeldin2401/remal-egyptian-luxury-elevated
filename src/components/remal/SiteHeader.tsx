import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
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
  const [closing, setClosing] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

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
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [open]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 350);
  };

  const tone =
    overlay && !scrolled
      ? "text-ivory"
      : "text-charcoal";
  const bg =
    scrolled || !overlay
      ? "bg-ivory/90 backdrop-blur-lg border-b hairline shadow-sm shadow-charcoal/[0.03]"
      : "bg-transparent";

  return (
    <header ref={headerRef} className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${bg} ${tone}`}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <Link to="/" className="group relative z-50 font-serif text-2xl tracking-[0.18em]">
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
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden active:bg-charcoal/5"
          onClick={() => open ? handleClose() : setOpen(true)}
        >
          {open ? <X className="h-5 w-5 text-ivory" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Scroll progress bar */}
      {scrolled && (
        <div
          className="absolute bottom-0 left-0 h-[1px] bg-bronze transition-all duration-150"
          style={{
            width: typeof window !== "undefined"
              ? `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
              : "0%",
          }}
        />
      )}

      {/* Mobile menu */}
      {open && (
        <div
          className={`fixed inset-0 z-40 bg-charcoal text-ivory ${closing ? "mobile-menu-exit" : "mobile-menu-enter"}`}
          style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="flex h-full flex-col justify-between px-5 pb-8 pt-20 md:px-10">
            <nav className="flex flex-col gap-1 overflow-y-auto">
              {NAV.map((n, i) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={handleClose}
                  className="mobile-menu-link group flex items-center justify-between border-b border-ivory/10 py-4 font-serif text-2xl transition-colors active:text-bronze sm:text-3xl"
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
              className="mobile-menu-link space-y-3 pt-6 text-sm text-ivory/60"
              style={{ animationDelay: `${100 + NAV.length * 60 + 100}ms` }}
            >
              <p>hello@remal.co</p>
              <p>Nile Corniche, Cairo, Egypt</p>
              <div className="flex gap-6 pt-4 text-xs uppercase tracking-[0.2em]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 transition-colors active:text-bronze"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 transition-colors active:text-bronze"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

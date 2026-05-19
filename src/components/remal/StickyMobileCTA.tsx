import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function StickyMobileCTA({
  label = "Begin a conversation",
  cta = "Inquire",
  to = "/contact",
}: {
  label?: string;
  cta?: string;
  to?: string;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      setVisible(window.scrollY > vh * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Link
      to={to}
      className={`sticky-mobile-cta ${visible ? "is-visible" : ""}`}
      aria-hidden={!visible}
    >
      <span className="cta-label">{label}</span>
      <span className="cta-button">
        {cta}
        <ArrowRight className="h-3 w-3" />
      </span>
    </Link>
  );
}
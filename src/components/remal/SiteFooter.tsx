import { Link } from "@tanstack/react-router";
import { Reveal, Eyebrow } from "./Reveal";
import { Instagram, Linkedin, Mail, MapPin, ArrowRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="border-b border-ivory/10">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <Reveal>
              <Eyebrow className="text-ivory/50">Stay Connected</Eyebrow>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl">
                Join Our Mailing List
              </h3>
            </Reveal>
            <Reveal delay={100}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const btn = e.currentTarget.querySelector("button");
                  const input = e.currentTarget.querySelector("input");
                  if (btn && input) {
                    btn.textContent = "Subscribed";
                    (btn as HTMLButtonElement).disabled = true;
                    (input as HTMLInputElement).value = "";
                  }
                }}
                className="flex max-w-lg border-b border-ivory/30 pb-2 transition-colors focus-within:border-ivory/60"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="flex-1 bg-transparent text-sm text-ivory placeholder:text-ivory/40 focus:outline-none"
                />
                <button className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ivory/70 transition-colors hover:text-ivory disabled:opacity-50">
                  Subscribe
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <Link to="/" className="font-serif text-3xl tracking-[0.2em]">REMAL</Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
              A hospitality management company building the next generation
              of immersive destinations across Egypt — where authentic culture
              meets elevated experience.
            </p>
          </Reveal>

          <Reveal className="md:col-span-2" delay={80}>
            <div className="eyebrow text-ivory/50">Brand</div>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              <li><Link to="/about" className="transition-colors hover:text-ivory">About</Link></li>
              <li><Link to="/sustainability" className="transition-colors hover:text-ivory">Sustainability</Link></li>
              <li><Link to="/journal" className="transition-colors hover:text-ivory">Journal</Link></li>
            </ul>
          </Reveal>
          <Reveal className="md:col-span-2" delay={160}>
            <div className="eyebrow text-ivory/50">Discover</div>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              <li><Link to="/destinations" className="transition-colors hover:text-ivory">Destinations</Link></li>
              <li><Link to="/experiences" className="transition-colors hover:text-ivory">Experiences</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-ivory">Services</Link></li>
            </ul>
          </Reveal>
          <Reveal className="md:col-span-2" delay={240}>
            <div className="eyebrow text-ivory/50">Partner</div>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              <li><Link to="/services" className="transition-colors hover:text-ivory">Our Services</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-ivory">Contact</Link></li>
            </ul>
          </Reveal>

          <Reveal className="md:col-span-2" delay={320}>
            <div className="eyebrow text-ivory/50">Cairo</div>
            <div className="mt-5 space-y-3 text-sm text-ivory/60">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ivory/40" />
                <span>Nile Corniche<br />Cairo, Egypt</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-ivory/40" />
                <a href="mailto:hello@remal.co" className="transition-colors hover:text-ivory">hello@remal.co</a>
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-ivory/10 pt-8 text-xs text-ivory/40 md:flex-row md:items-center">
          <Reveal>
            <span>© {new Date().getFullYear()} REMAL Hospitality. All rights reserved.</span>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-ivory"
              >
                <Instagram className="h-3.5 w-3.5" />
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-ivory"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>
              <span className="text-ivory/20">|</span>
              <Link to="/" className="transition-colors hover:text-ivory">Privacy</Link>
              <Link to="/" className="transition-colors hover:text-ivory">Terms</Link>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}

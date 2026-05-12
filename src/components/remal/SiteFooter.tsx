import { Link } from "@tanstack/react-router";
import { Reveal, Eyebrow } from "./Reveal";
import { Instagram, Linkedin, Mail, MapPin, ArrowRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory">
      {/* Upper footer with newsletter */}
      <div className="border-b border-ivory/10">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <Eyebrow className="text-ivory/50">Stay Connected</Eyebrow>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl">
                Join Our Mailing List
              </h3>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex max-w-lg border-b border-ivory/30 pb-2 transition-colors focus-within:border-ivory/60"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 bg-transparent text-sm placeholder:text-ivory/40 focus:outline-none"
              />
              <button className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ivory/70 transition-colors hover:text-ivory">
                Subscribe
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-3xl tracking-[0.2em]">REMAL</Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
              A hospitality management company building the next generation
              of immersive destinations across Egypt — where authentic culture
              meets elevated experience.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-ivory/50">Brand</div>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              <li><Link to="/about" className="transition-colors hover:text-ivory">About</Link></li>
              <li><Link to="/sustainability" className="transition-colors hover:text-ivory">Sustainability</Link></li>
              <li><Link to="/journal" className="transition-colors hover:text-ivory">Journal</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="eyebrow text-ivory/50">Discover</div>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              <li><Link to="/destinations" className="transition-colors hover:text-ivory">Destinations</Link></li>
              <li><Link to="/experiences" className="transition-colors hover:text-ivory">Experiences</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-ivory">Services</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="eyebrow text-ivory/50">Partner</div>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              <li><Link to="/services" className="transition-colors hover:text-ivory">Our Services</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-ivory">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-ivory/50">Cairo</div>
            <div className="mt-5 space-y-3 text-sm text-ivory/60">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ivory/40" />
                <span>Nile Corniche<br />Cairo, Egypt</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-ivory/40" />
                hello@remal.co
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-ivory/10 pt-8 text-xs text-ivory/40 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} REMAL Hospitality. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-1.5 transition-colors hover:text-ivory">
              <Instagram className="h-3.5 w-3.5" />
              Instagram
            </a>
            <a href="#" className="flex items-center gap-1.5 transition-colors hover:text-ivory">
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <a href="#" className="transition-colors hover:text-ivory">Privacy</a>
            <a href="#" className="transition-colors hover:text-ivory">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
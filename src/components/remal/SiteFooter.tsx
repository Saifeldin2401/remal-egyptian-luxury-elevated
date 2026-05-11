import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="font-serif text-3xl tracking-[0.2em]">REMAL</div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">
              A modern hospitality management company crafting immersive
              destinations across Egypt — where authentic culture meets
              elevated experience.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 flex max-w-sm border-b border-ivory/30 pb-2"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 bg-transparent text-sm placeholder:text-ivory/50 focus:outline-none"
              />
              <button className="text-[11px] uppercase tracking-[0.28em] text-ivory/80 hover:text-ivory">
                Subscribe
              </button>
            </form>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-ivory/60">Brand</div>
            <ul className="mt-4 space-y-3 text-sm text-ivory/80">
              <li><Link to="/about" className="hover:text-ivory">About</Link></li>
              <li><Link to="/sustainability" className="hover:text-ivory">Sustainability</Link></li>
              <li><Link to="/journal" className="hover:text-ivory">Journal</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="eyebrow text-ivory/60">Discover</div>
            <ul className="mt-4 space-y-3 text-sm text-ivory/80">
              <li><Link to="/destinations" className="hover:text-ivory">Destinations</Link></li>
              <li><Link to="/experiences" className="hover:text-ivory">Experiences</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="eyebrow text-ivory/60">Partner</div>
            <ul className="mt-4 space-y-3 text-sm text-ivory/80">
              <li><Link to="/services" className="hover:text-ivory">Services</Link></li>
              <li><Link to="/contact" className="hover:text-ivory">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-ivory/60">Cairo</div>
            <p className="mt-4 text-sm text-ivory/70">
              Nile Corniche
              <br />
              Cairo, Egypt
              <br />
              hello@remal.co
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-ivory/15 pt-8 text-xs text-ivory/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} REMAL Hospitality. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ivory">Instagram</a>
            <a href="#" className="hover:text-ivory">LinkedIn</a>
            <a href="#" className="hover:text-ivory">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
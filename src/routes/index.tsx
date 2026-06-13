import { createFileRoute } from "@tanstack/react-router";
import featureImage from "../public/WhatsApp Image 2026-06-13 at 11.22.03 AM.jpeg?url";
import logoImage from "../public/logo.jpg?url";
import projectImage1 from "../public/WhatsApp Image 2026-06-13 at 11.10.33 AM.jpeg?url";
import projectImage2 from "../public/WhatsApp Image 2026-06-13 at 11.10.33 AM (1).jpeg?url";
import projectImage3 from "../public/WhatsApp Image 2026-06-13 at 11.10.33 AM (2).jpeg?url";
import projectImage4 from "../public/WhatsApp Image 2026-06-13 at 11.10.33 AM (3).jpeg?url";
import projectImage5 from "../public/WhatsApp Image 2026-06-13 at 11.10.33 AM (4).jpeg?url";
import projectImage6 from "../public/WhatsApp Image 2026-06-13 at 11.10.34 AM.jpeg?url";
import projectImage7 from "../public/WhatsApp Image 2026-06-13 at 11.10.34 AM (1).jpeg?url";
import featuredBuildImage from "../public/WhatsApp Image 2026-06-13 at 11.10.34 AM (2).jpeg?url";
import projectImage8 from "../public/WhatsApp Image 2026-06-13 at 11.10.35 AM.jpeg?url";
import projectImage9 from "../public/WhatsApp Image 2026-06-13 at 11.10.35 AM (1).jpeg?url";
import rrImage from "../public/rr.jpeg?url";
import sureshImage from "../public/suresh.jpeg?url";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Suresh Construction — Building Homes That Last" },
      { name: "description", content: "Suresh Construction delivers premium residential homes, villas, and apartments across Tamil Nadu. Vaastu-compliant, on-time delivery, trusted builder." },
      { property: "og:title", content: "Suresh Construction — Building Homes That Last" },
      { property: "og:description", content: "Premium residential construction. Villas, apartments, and custom homes built with quality you trust." },
      { property: "og:image", content: rrImage },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: Home,
});

const projects = [
  { src: projectImage1, title: "Modern Illuminated Villa" },
  { src: projectImage2, title: "Contemporary Family Home" },
  { src: projectImage3, title: "Twilight Residence" },
  { src: projectImage4, title: "Urban Multi-Storey" },
  { src: projectImage5, title: "Hilltop Pergola Home" },
  { src: projectImage6, title: "Compact Modern Build" },
  { src: projectImage7, title: "Bright Family House" },
  { src: projectImage8, title: "Elegant Residence" },
  { src: projectImage9, title: "Modern Urban House" },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoImage}
        alt="Suresh Construction logo"
        className="h-11 w-11 rounded-lg object-cover shadow-[var(--shadow-card)]"
      />
      <div className="leading-tight">
        <div className="font-display text-lg font-semibold tracking-tight">Suresh Construction</div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Quality you trust</div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#projects" className="hover:text-primary">Projects</a>
            <a href="#ongoing" className="hover:text-primary">Ongoing</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">
            Get a quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-soft)" }} />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Builder · Since years of craft
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Homes built to <em className="not-italic text-primary">stand the test of time.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Suresh Construction designs and builds premium villas, residences, and apartments
              across Tamil Nadu — combining modern architecture with the comfort you deserve.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:translate-y-[-1px]">
                View our work
              </a>
              <a href="#ongoing" className="rounded-full border border-primary/30 px-7 py-3 text-sm font-medium text-primary transition hover:bg-primary/5">
                Ongoing project ↗
              </a>
            </div>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[["50+", "Homes built"], ["20+", "Years experience"], ["100%", "On-time delivery"]].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-3xl font-semibold text-primary">{k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-accent/20 blur-2xl" />
              <img src={featuredBuildImage} alt="Modern illuminated villa by Suresh Construction" loading="eager"
                className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-[var(--shadow-elegant)]" />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:block">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Featured build</div>
                <div className="mt-1 font-display text-lg font-semibold">Modern Illuminated Villa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-card/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-border md:grid-cols-4">
          {[
            ["Premium Construction", "Best-in-class materials"],
            ["Vaastu Compliant", "Designed with tradition"],
            ["On-Time Delivery", "Promised. Delivered."],
            ["Trusted Builder", "Decades of repeat clients"],
          ].map(([t, s]) => (
            <div key={t} className="bg-background p-6">
              <div className="font-display text-base font-semibold">{t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Selected work</div>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Our Houses</h2>
            <p className="mt-3 text-muted-foreground">A complete look at the homes shown here.</p>
          </div>
          <a href="#contact" className="text-sm font-medium text-primary hover:underline">Commission a home →</a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <button
              key={p.title}
              type="button"
              onClick={() => {
                window.location.href = p.src;
              }}
              className="group overflow-hidden rounded-2xl border border-border bg-card text-left shadow-[var(--shadow-card)] transition hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.src} alt={p.title} loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Ongoing — Radha Residency */}
      <section id="ongoing" className="relative overflow-hidden text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-secondary">Now launching</div>
            <h2 className="mt-3 font-display text-5xl font-semibold md:text-6xl">RR Residency</h2>
            <p className="mt-2 text-lg text-secondary">In Thirumazhisai · 2 BHK Premium Flats</p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {["Lift Facility", "Car Parking", "Digital Lock", "CCTV Coverage", "Solar Water Heater", "Vaastu Compliant"].map((f) => (
                <li key={f} className="flex items-center gap-3 rounded-lg bg-primary-foreground/10 px-4 py-3 backdrop-blur">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-accent-foreground">✓</span>
                  <span className="text-sm font-medium">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="tel:+919884481129" className="rounded-full bg-primary-foreground px-7 py-3 text-sm font-medium text-primary transition hover:opacity-90">
                Call +91 98844 81129
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-accent/20 blur-3xl" />
            <img src={rrImage} alt="RR Residency — 2 BHK premium flats in Thirumazhisai"
              className="relative w-full rounded-2xl shadow-[var(--shadow-elegant)]" />
          </div>
        </div>
      </section>

      {/* About / Founder */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-3xl bg-secondary/40 blur-2xl" />
              <img src={sureshImage} alt="Suresh — Founder & Civil Engineer"
                style={{ objectPosition: "50% 25%" }}
                className="relative aspect-[3/4] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.25em] text-accent">The builder</div>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Built by hand. <br/>Engineered with heart.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Suresh, Founder & Civil Engineer, has spent decades turning blueprints into homes that
              families call their own. Every column, every finish, every doorway carries the same
              promise — quality you trust, comfort you deserve.
            </p>
            <blockquote className="mt-8 border-l-4 border-accent pl-6 font-display text-2xl italic text-primary">
              "A house is concrete. A home is care. We pour both into every project."
            </blockquote>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <div className="font-display text-2xl font-semibold text-primary">Residential</div>
                <div className="text-sm text-muted-foreground">Villas & homes</div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-primary">Apartments</div>
                <div className="text-sm text-muted-foreground">2 & 3 BHK builds</div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-primary">Custom</div>
                <div className="text-sm text-muted-foreground">Turnkey builds</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-card">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent">Get in touch</div>
              <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Let's build your home.</h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Tell us about your land, vision, or budget. We'll walk you through the next steps —
                no pressure, just clarity.
              </p>
              <div className="mt-10 space-y-4 text-base">
                <a href="tel:+919884481129" className="flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition hover:border-primary">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">📞</span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Call</div>
                    <div className="font-medium">+91 98844 81129</div>
                  </div>
                </a>
              </div>
            </div>
            <form className="rounded-2xl border border-border bg-background p-8 shadow-[var(--shadow-card)]" onSubmit={(e) => { e.preventDefault(); alert("Thank you — we'll reach out shortly."); }}>
              <div className="grid grid-cols-1 gap-5">
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</span>
                  <input required className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-primary" />
                </label>
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Phone</span>
                  <input required type="tel" className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-primary" />
                </label>
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Tell us about your project</span>
                  <textarea rows={4} className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-primary" />
                </label>
                <button type="submit" className="mt-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:opacity-90">
                  Send enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <Logo />
          <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Suresh Construction. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

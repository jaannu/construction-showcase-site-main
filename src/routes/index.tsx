import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
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
import bfrImage from "../public/bfr.jpeg?url";

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
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;600;700&display=swap" },
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
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const featuredRef = useRef<HTMLImageElement | null>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLElement | null>(null);
  const baRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // header blur toggle and parallax
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || window.pageYOffset;
      setScrolled(y > 20);
      // parallax image
      const img = featuredRef.current;
      if (img) {
        const rect = img.getBoundingClientRect();
        const offset = window.scrollY - (img.offsetTop - window.innerHeight / 2);
        const translate = Math.round(offset * 0.06);
        img.style.transform = `translateY(${translate}px)`;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // counter animation
  useEffect(() => {
    const els = statsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLDivElement;
          const target = Number(el.dataset.target || 0);
          let start = 0;
          const duration = 1200;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const value = Math.floor(progress * target);
            el.textContent = value + (el.dataset.suffix || "");
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // before/after slider interactions
  useEffect(() => {
    const root = baRef.current;
    if (!root) return;
    const imgTop = root.querySelector<HTMLDivElement>(".ba-top");
    const handle = root.querySelector<HTMLDivElement>(".ba-handle");
    let dragging = false;
    function setPos(x: number) {
      const rect = root.getBoundingClientRect();
      let pct = (x - rect.left) / rect.width;
      pct = Math.max(0, Math.min(1, pct));
      if (imgTop) imgTop.style.width = `${pct * 100}%`;
      if (handle) (handle as HTMLElement).style.left = `${pct * 100}%`;
    }
    function onDown(e: PointerEvent) { dragging = true; (e.target as Element).setPointerCapture(e.pointerId); setPos(e.clientX); }
    function onMove(e: PointerEvent) { if (!dragging) return; setPos(e.clientX); }
    function onUp(e: PointerEvent) { dragging = false; }
    handle?.addEventListener("pointerdown", onDown as any);
    window.addEventListener("pointermove", onMove as any);
    window.addEventListener("pointerup", onUp as any);
    return () => {
      handle?.removeEventListener("pointerdown", onDown as any);
      window.removeEventListener("pointermove", onMove as any);
      window.removeEventListener("pointerup", onUp as any);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header ref={(el) => (headerRef.current = el)} className={`sticky top-0 z-40 border-b border-border/60 ${scrolled ? 'navbar-blur' : 'bg-background/80'} `}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#projects" className="hover:text-primary">Projects</a>
            <a href="#ongoing" className="hover:text-primary">Ongoing</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 cta-slide">
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
              {[["50+", "Homes built"], ["20+", "Years experience"], ["100%", "On-time delivery"]].map(([k, v], i) => (
                <div key={v}>
                  <dt>
                    <div
                      ref={(el) => (statsRef.current[i] = el)}
                      data-target={k.replace('+', '').replace('%', '')}
                      data-suffix={k.includes('%') ? '%' : '+'}
                      className="font-display text-3xl font-semibold"
                      style={{ color: 'var(--gold-1)' }}
                    >
                      0
                    </div>
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-accent/20 blur-2xl" />
              <img
                ref={featuredRef}
                src={featuredBuildImage}
                alt=""
                loading="eager"
                className="relative w-full rounded-3xl parallax-img featured-card object-cover shadow-[var(--shadow-elegant)]"
                style={{ maxHeight: 760 }}
              />
              <div className="absolute top-4 right-4 hidden sm:flex items-center gap-3">
                <div className="badge-rotating">Premium Build · Tamil Nadu ·</div>
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

        <div className="mt-12">
          <div className="gold-divider"><span className="diamond" /></div>
          <div className="masonry">
            {projects.map((p, i) => (
              <div key={p.src} className={`masonry-item ${i % 3 === 0 ? 'tall' : i % 3 === 1 ? 'short' : ''}`}>
                <button
                  type="button"
                  onClick={() => setLightbox(p.src)}
                  className="relative block overflow-hidden rounded-2xl border border-border bg-card text-left shadow-[var(--shadow-card)] transition hover:-translate-y-1"
                >
                  <img src={p.src} alt="" loading="lazy" className="w-full h-full object-cover" />
                  <div className="project-overlay">
                    <div className="meta">
                        <div className="text-sm font-semibold">Tamil Nadu</div>
                      </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline removed per request */}

      {/* Before / After slider */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h3 className="font-display text-2xl font-semibold mb-6">Before / After</h3>
        <div ref={baRef} className="ba-slider mx-auto">
          <img src={featuredBuildImage} alt="before" />
          <div className="ba-top" style={{ width: '50%', overflow: 'hidden' }}>
            <img src={bfrImage} alt="after" style={{ position: 'relative' }} />
          </div>
          <div className="ba-handle" />
        </div>
      </section>

      {/* Testimonial full-bleed */}
      <section className="testimonial-bleed" style={{ backgroundImage: `url(${projectImage4})` }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="quote">Our clients praise our attention to detail and timely delivery.</div>
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
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-[var(--charcoal)] text-base font-bold leading-none shadow-sm">✓</span>
                  <span className="text-sm font-semibold text-[var(--gold-2)]">{f}</span>
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
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">Call</span>
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

      {/* Mobile sticky bottom bar */}
      <div className="sticky-bottom-bar md:hidden">
        <a href="tel:+919884481129" className="btn">
          Call
        </a>
        <a href="https://wa.me/919884481129" className="btn" target="_blank">
          WhatsApp
        </a>
      </div>

      {lightbox ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-h-[95vh] max-w-[95vw]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close preview"
              className="absolute right-2 top-2 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-2xl text-white backdrop-blur transition hover:scale-105"
            >
              ×
            </button>
            <img src={lightbox} alt="" className="max-h-[95vh] w-auto object-contain" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

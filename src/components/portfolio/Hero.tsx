import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Top meta row */}
        <div className="mb-16 flex items-center justify-between border-b border-border pb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>Grand Rapids, MI · 42.96°N 85.67°W</span>
          <span className="hidden sm:inline">Available — Spring &lsquo;26 internships</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Online
          </span>
        </div>

        {/* Display headline */}
        <div className="fade-in-up grid gap-10 md:grid-cols-12">
          <div className="md:col-span-9">
            <h1 className="display text-[14vw] leading-[0.88] md:text-[10.5rem]">
              Karl
              <br />
              Krusel<span className="text-accent">.</span>
            </h1>
          </div>
          <div className="flex flex-col justify-end gap-6 md:col-span-3">
            <p className="eyebrow">— Index</p>
            <ul className="space-y-1 text-sm text-ink">
              <li className="flex justify-between border-b border-border py-1.5">
                <span className="text-muted-foreground">01</span> About
              </li>
              <li className="flex justify-between border-b border-border py-1.5">
                <span className="text-muted-foreground">02</span> Work
              </li>
              <li className="flex justify-between border-b border-border py-1.5">
                <span className="text-muted-foreground">03</span> Resume
              </li>
              <li className="flex justify-between border-b border-border py-1.5">
                <span className="text-muted-foreground">04</span> Contact
              </li>
            </ul>
          </div>
        </div>

        {/* Subhead row */}
        <div className="mt-16 grid gap-10 border-t border-border pt-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow mb-3">Currently</p>
            <p className="text-sm leading-relaxed text-ink">
              4th-year Information Technology student at Grand Valley State University. Building
              small, useful things across automation, cloud, data, and creative tech.
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-5">
            <p className="eyebrow mb-3">Focus</p>
            <p className="font-display text-3xl italic leading-tight text-ink md:text-4xl">
              Practical software, clean systems, and the occasional 30-second visual loop for a
              dark room at 2&nbsp;a.m.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 md:col-span-2 md:items-end">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink"
            >
              View Work
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-ink"
            >
              Get in touch
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

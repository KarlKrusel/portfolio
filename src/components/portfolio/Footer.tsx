export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-10">
        {/* Oversized signature */}
        <div className="mb-10 border-b border-border pb-10">
          <p className="display text-[18vw] leading-[0.85] text-ink md:text-[12rem]">
            Karl Krusel<span className="text-accent">.</span>
          </p>
        </div>

        <div className="flex flex-col gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} — Designed & built in Michigan</p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#projects" className="hover:text-ink">Work</a>
            <a href="#resume" className="hover:text-ink">Resume</a>
            <a href="#contact" className="hover:text-ink">Contact</a>
            <a
              href="https://karlkrusel.github.io/KRL-DJ/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink"
            >
              KRL ↗
            </a>
          </nav>
          <p>v1.0 — Updated 2026</p>
        </div>
      </div>
    </footer>
  );
}

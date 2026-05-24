import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#resume", label: "Resume" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 md:px-10">
        <a href="#home" className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink">
            Karl Krusel
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            / Portfolio &lsquo;26
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-chat"))}
            className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors md:inline"
          >
            AI Webpage Assistant
          </button>
          <a
            href="/resume.pdf"
            download
            className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-accent hover:opacity-80 transition-opacity sm:inline"
          >
            Resume ↓
          </a>
          <button
            className="grid h-9 w-9 place-items-center text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-strong border-t md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 font-mono text-xs uppercase tracking-[0.2em] text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="border-b border-border/60 py-3 font-mono text-xs uppercase tracking-[0.2em] text-accent"
            >
              Resume ↓
            </a>
            <button
              onClick={() => { setOpen(false); window.dispatchEvent(new CustomEvent("open-chat")); }}
              className="py-3 text-left font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              AI Webpage Assistant
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

import type { Experience } from "@/data/experience";

export function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="group grid gap-4 border-b border-border py-6 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {exp.dates}
        </p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {exp.location}
        </p>
      </div>
      <div className="md:col-span-9">
        <h4 className="font-display text-2xl text-ink">{exp.role}</h4>
        <p className="mt-0.5 text-sm text-accent">{exp.company}</p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-px w-3 shrink-0 bg-muted-foreground" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

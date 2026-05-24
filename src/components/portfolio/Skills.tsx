import { SectionHeader } from "./SectionHeader";
import { SkillBadge } from "./SkillBadge";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-surface/50 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader
          eyebrow="04 — Capabilities"
          index="Toolkit"
          title="Tools I actually use."
          description="Built up through coursework, internships, personal projects, and creative work."
        />
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div key={group.title} className="border-t border-ink pt-5">
              <div className="mb-5 flex items-baseline justify-between">
                <h3 className="font-display text-2xl text-ink">{group.title}</h3>
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <SkillBadge key={s} label={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

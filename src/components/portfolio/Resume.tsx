import { Download, GraduationCap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ExperienceCard } from "./ExperienceCard";
import { experiences } from "@/data/experience";

const areas = [
  "General Computing",
  "Hardware & Software",
  "Network Systems",
  "Data Analysis",
  "Cybersecurity",
  "Internet Media",
  "Management Information Systems",
  "Business Courses",
];

export function Resume() {
  return (
    <section id="resume" className="border-y border-border bg-surface/50 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="03 — Resume"
            index="CV"
            title="Education & experience."
          />
          <a
            href="/resume.pdf"
            download
            className="group mb-14 inline-flex items-center gap-2 border-b border-ink pb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink"
          >
            <Download className="h-3.5 w-3.5" />
            Download Full Resume
          </a>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          {/* Education */}
          <div className="md:col-span-5">
            <p className="eyebrow mb-4 border-b border-ink pb-3">— Education</p>
            <div className="glass-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center bg-ink text-background">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-display text-xl text-ink">Grand Valley State University</h4>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    Allendale, MI
                  </p>
                </div>
              </div>
              <p className="text-sm text-ink">Bachelor of Science in Information Technology</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-accent">
                Expected April 2027
              </p>

              <div className="mt-6 border-t border-border pt-5">
                <p className="eyebrow mb-3">Areas of Study</p>
                <div className="flex flex-wrap gap-1.5">
                  {areas.map((a) => (
                    <span
                      key={a}
                      className="border border-border bg-background/60 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience timeline */}
          <div className="md:col-span-7">
            <p className="eyebrow mb-4 border-b border-ink pb-3">— Work</p>
            <div className="space-y-px">
              {experiences.map((exp) => (
                <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

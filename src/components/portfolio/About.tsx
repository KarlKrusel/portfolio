import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader eyebrow="01 — About" index="Profile" title="Technology applied to real business problems." />

        <div className="grid gap-12 md:grid-cols-12">
          <div className="space-y-6 text-base leading-relaxed text-ink md:col-span-7 md:text-lg">
            <p className="font-display text-2xl italic leading-snug text-ink md:text-3xl">
              IT student at GVSU who applies technology inside real businesses, not just builds
              class projects.
            </p>
            <p className="text-muted-foreground">
              Most of my experience came from walking into actual business environments, finding
              where manual work was slowing things down, and fixing it. That covers IT support,
              Office automation, cloud infrastructure, data work, and client-facing systems.
              The skill isn't any one tool — it's identifying the problem and knowing how to
              close it with what's available.
            </p>
            <p className="text-muted-foreground">
              Running a freelance business as <span className="text-ink">DJ KRL</span> in Grand
              Rapids taught me things school doesn't: client management, real accountability,
              marketing, and operating under your own name. Every technical project I've built
              came from an actual problem I needed to solve.
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-9">
            <p className="eyebrow mb-4 border-b border-border pb-3">— Facts</p>
            <dl className="divide-y divide-border">
              {[
                { k: "Based", v: "Michigan, USA" },
                { k: "Studying", v: "B.S. Information Technology" },
                { k: "Graduating", v: "April 2027" },
                { k: "Focus", v: "Business Automation · Cloud · Data" },
                { k: "Also", v: "DJ KRL — Grand Rapids" },
              ].map((row) => (
                <div key={row.k} className="flex items-baseline justify-between py-3">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {row.k}
                  </dt>
                  <dd className="text-sm text-ink">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

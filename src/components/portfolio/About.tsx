import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader eyebrow="01 — About" index="Profile" title="IT student with real-world experience." />

        <div className="grid gap-12 md:grid-cols-12">
          <div className="space-y-6 text-base leading-relaxed text-ink md:col-span-7 md:text-lg">
            <p className="font-display text-2xl italic leading-snug text-ink md:text-3xl">
              IT student at GVSU with a background in automation, AI tools, cloud services, and
              business technology.
            </p>
            <p className="text-muted-foreground">
              My experience includes IT support, Office automation, cloud infrastructure, data
              analysis, and client-facing work in real business environments. I focus on building
              systems that reduce friction and help organizations run more efficiently.
            </p>
            <p className="text-muted-foreground">
              Outside of school, I perform as <span className="text-ink">DJ KRL</span> in Grand
              Rapids. That work built skills in communication, marketing, live troubleshooting,
              and managing the technical side of events.
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-9">
            <p className="eyebrow mb-4 border-b border-border pb-3">— Facts</p>
            <dl className="divide-y divide-border">
              {[
                { k: "Based", v: "Michigan, USA" },
                { k: "Studying", v: "B.S. Information Technology" },
                { k: "Graduating", v: "April 2027" },
                { k: "Focus", v: "Automation · AI · Cloud · Data" },
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

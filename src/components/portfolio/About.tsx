import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader eyebrow="01 — About" index="Profile" title="Technology applied to real business problems." />

        <div className="grid gap-12 md:grid-cols-12">
          <div className="space-y-6 text-base leading-relaxed text-ink md:col-span-7 md:text-lg">
            <p className="font-display text-2xl italic leading-snug text-ink md:text-3xl">
              Most of my real experience came from walking into business environments, seeing
              where things were slow or messy, and fixing them with the tools already there.
            </p>
            <p className="text-muted-foreground">
              A lot of businesses don't need a big expensive solution first. They need someone who
              can look at the problem clearly, understand what's slowing people down, and build
              something practical. At Brown Insurance I found client letters being formatted by hand
              and built an Excel and Word Mail Merge system that turned client data into
              print-ready letters. Simple on the surface, but it cut repeated work, reduced
              mistakes, and made the process consistent. That's the kind of IT that actually helps
              a business.
            </p>
            <p className="text-muted-foreground">
              At GVSU I've worked across databases, networking, cybersecurity, cloud systems,
              programming, and data analysis. The part that matters to me is how all of it connects
              to real problems. A database is how a business organizes information so it can use it.
              A network is what keeps people connected. Cybersecurity is about protecting people,
              money, and trust. My strongest skill isn't any one tool — it's walking into a problem
              and figuring out what needs to happen next. Sometimes that's Excel. Sometimes it's
              Python. The tool changes; the mindset doesn't.
            </p>
            <p className="text-muted-foreground">
              Running <span className="text-ink">DJ KRL</span> in Grand Rapids taught me things
              school doesn't. Client management, pitching yourself without sounding unsure,
              showing up prepared, reading a room, and making sure people remember you. There's no
              grade — the crowd reacts in real time and the manager either books you again or
              doesn't. That kind of accountability sharpens how you work fast. Going to Bonn
              International School in Germany also changed how I see things. It put me in a
              completely different environment, forced me to adapt quickly, and made me comfortable
              stepping into unfamiliar situations. That's something I carry into every project.
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

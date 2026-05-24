import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

export function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader eyebrow="01 — About" index="Profile" title="Technology applied to real business problems." />

        <div className="grid gap-12 md:grid-cols-12">
          <div className="space-y-6 text-base leading-relaxed text-ink md:col-span-7 md:text-lg">
            <p className="font-display text-2xl italic leading-snug text-ink md:text-3xl">
              Most of my experience has come from walking into real business environments, seeing
              where things are slow or messy, and figuring out how to fix them with the tools
              that are already there.
            </p>
            <p className="text-muted-foreground">
              A lot of businesses do not always need some huge expensive solution first. Sometimes
              they need someone who can look at the problem clearly, understand what is slowing
              people down, and build something practical. A good example of this was my work with
              Brown Insurance in Traverse City. I used Excel and Word Mail Merge to create a system
              that could take client data and turn it into personalized, print-ready letters. It was
              about reducing repeated work, cutting down mistakes, and making the process more
              consistent.
            </p>

            {/* Expandable content */}
            <div
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: expanded ? "800px" : "0px" }}
            >
              <div
                className="space-y-6 pt-2 transition-all duration-500"
                style={{ opacity: expanded ? 1 : 0, transform: expanded ? "translateY(0)" : "translateY(8px)" }}
              >
                <p className="text-muted-foreground">
                  That project taught me that IT is not just about knowing the most advanced tool or
                  using the newest software. A lot of IT is about understanding people, understanding
                  how they work, and then building a better process around that. I have learned that
                  my strongest skill is not just one specific tool. It is being able to walk into a
                  problem and figure out what needs to happen next. Sometimes that means using Excel
                  because it is the fastest and most realistic tool for the business. Sometimes it
                  means writing Python because the task needs automation. Sometimes it means building
                  a website. The tool changes depending on the problem, but the mindset stays the same.
                </p>
                <p className="text-muted-foreground">
                  Running my freelance business as <span className="text-ink">DJ KRL</span> in Grand
                  Rapids has taught me just as much as school in some ways. When you operate under
                  your own name, everything is on you. There is no professor giving you a grade at
                  the end. The crowd reacts in real time. The manager either wants to book you again
                  or they do not. That kind of accountability teaches you fast. Going to Bonn
                  International School in Germany also changed the way I see the world. It put me in
                  a completely different environment and forced me to grow up in ways I probably would
                  not have if I stayed in one place my whole life. After Germany, I finished my senior
                  year at Leland Public School in Northern Michigan. Bonn taught me about the world
                  and independence. Leland brought me back to a smaller community and reminded me how
                  important local connections are.
                </p>
              </div>
            </div>

            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-ink transition-colors"
            >
              <span
                className="inline-block transition-transform duration-300"
                style={{ transform: expanded ? "rotate(90deg)" : "rotate(0deg)" }}
              >
                ›
              </span>
              {expanded ? "Read Less" : "Read More"}
            </button>
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

const interests = [
  "IT Support",
  "Systems Administration",
  "Cloud Computing",
  "Data Analysis",
  "Business Technology",
  "Automation",
  "AI Tools",
  "Web Development",
  "Project Management",
];

export function CareerDirection() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow mb-4 border-b border-ink pb-3">— Direction</p>
            <h2 className="display text-5xl text-ink md:text-7xl">
              Technology that delivers <em className="font-display italic text-accent">real results</em>.
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground md:text-lg">
              <p>
                Most businesses have processes that shouldn't still be manual. I'm interested
                in finding those gaps and closing them through automation, better data systems,
                and AI tools that fit the actual problem. Long-term goal: build software that
                helps organizations operate more intelligently.
              </p>
              <p className="text-ink">Open to internships and entry-level roles in:</p>
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <p className="eyebrow mb-4 border-b border-ink pb-3">— Interests</p>
            <ul className="divide-y divide-border">
              {interests.map((i, idx) => (
                <li
                  key={i}
                  className="flex items-baseline justify-between py-3 text-ink transition-colors hover:text-accent"
                >
                  <span className="font-display text-xl md:text-2xl">{i}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

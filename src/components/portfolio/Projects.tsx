import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { projects, projectCategories, type Project } from "@/data/projects";

export function Projects() {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("All");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesCat = category === "All" || p.category === category;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.longDescription.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [category, query]);

  const visible = showAll ? filtered : filtered.slice(0, 6);

  const openProject = (p: Project) => {
    setActive(p);
    setOpen(true);
  };

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader
          eyebrow="02 — Selected Work"
          index={`${String(filtered.length).padStart(2, "0")} projects`}
          title="A working archive."
          description="Class projects, personal builds, and work from real workplaces — sorted by category, searchable, all real."
        />

        {/* Controls */}
        <div className="mb-10 flex flex-col gap-4 border-y border-border py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {projectCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                  category === c
                    ? "text-ink underline underline-offset-4"
                    : "text-muted-foreground hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-64">
            <Search className="pointer-events-none absolute left-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="border-0 border-b border-border bg-transparent pl-6 font-mono text-xs uppercase tracking-wider shadow-none focus-visible:ring-0 rounded-none"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} onOpen={openProject} index={i} />
          ))}
        </div>

        {filtered.length > 6 && (
          <div className="mt-14 flex justify-center">
            <Button variant="ghost" size="lg" onClick={() => setShowAll((v) => !v)}>
              <span className="font-mono text-xs uppercase tracking-[0.18em]">
                {showAll ? "Show Less" : `View All (${filtered.length})`}
              </span>
            </Button>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="grid place-items-center border border-dashed border-border py-16 text-center">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              No projects match.
            </p>
            <button
              className="mt-3 text-sm text-ink underline underline-offset-4"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      <ProjectModal project={active} open={open} onOpenChange={setOpen} />
    </section>
  );
}

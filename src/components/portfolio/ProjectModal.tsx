import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Project } from "@/data/projects";

interface Props {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, open, onOpenChange }: Props) {
  if (!project) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-3xl overflow-y-auto border-border bg-background p-0">
        {/* Brand header */}
        <div
          className="relative grid h-36 shrink-0 place-items-center overflow-hidden md:h-44"
          style={{ backgroundColor: project.brand ? `#${project.brand.bg}` : undefined }}
        >
          {project.brand?.wordmark ? (
            <span
              className="display text-8xl md:text-9xl"
              style={{ color: `#${project.brand.fg}` }}
            >
              {project.brand.wordmark}
            </span>
          ) : project.brand?.iconSlug ? (
            <img
              src={`https://cdn.simpleicons.org/${project.brand.iconSlug}/${project.brand.fg}`}
              alt=""
              className="h-24 w-24 md:h-32 md:w-32"
            />
          ) : (
            <span className="font-display text-7xl text-ink/20">
              {project.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}
            </span>
          )}
        </div>

        <div className="p-8 md:p-10">
          <DialogHeader className="text-left">
            <div className="mb-3 flex flex-wrap items-center gap-x-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span>{project.category}</span>
              <span className="text-border">/</span>
              <span>{project.status}</span>
            </div>
            <DialogTitle className="font-display text-4xl text-ink md:text-5xl">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              {project.longDescription}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-8 space-y-6 border-t border-border pt-6">
            {project.problem && <Block title="Problem" body={project.problem} />}
            {project.whatIBuilt && <Block title="What I built" body={project.whatIBuilt} />}
            {project.whatILearned && (
              <Block title="What I learned" body={project.whatILearned} />
            )}

            <div>
              <p className="eyebrow mb-3">Tools</p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((t) => (
                  <span
                    key={t}
                    className="border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-6 border-t border-border pt-5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 border-b border-ink pb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Visit Live Site
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-ink"
                >
                  <Github className="h-3.5 w-3.5" />
                  Source on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div className="grid gap-3 md:grid-cols-[140px_1fr]">
      <p className="eyebrow">{title}</p>
      <p className="text-base leading-relaxed text-ink">{body}</p>
    </div>
  );
}

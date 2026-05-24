import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  onOpen: (p: Project) => void;
  index?: number;
}

function BrandTile({ project }: { project: Project }) {
  const brand = project.brand;
  if (!brand) {
    return (
      <div className="grid h-full w-full place-items-center bg-surface-muted">
        <span className="font-display text-6xl text-ink/20">
          {project.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}
        </span>
      </div>
    );
  }
  const bg = `#${brand.bg}`;
  return (
    <div
      className="relative grid h-full w-full place-items-center overflow-hidden transition-transform duration-700 group-hover:scale-[1.03]"
      style={{ backgroundColor: bg }}
    >
      {/* subtle radial light */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(ellipse at 30% 20%, ${brand.fg}22, transparent 60%)`,
        }}
      />
      {brand.wordmark ? (
        <span
          className="display relative text-7xl tracking-tight md:text-8xl"
          style={{ color: `#${brand.fg}` }}
        >
          {brand.wordmark}
        </span>
      ) : brand.iconSlug ? (
        <img
          src={`https://cdn.simpleicons.org/${brand.iconSlug}/${brand.fg}`}
          alt=""
          className="relative h-20 w-20 opacity-95 md:h-24 md:w-24"
          loading="lazy"
        />
      ) : null}
    </div>
  );
}

export function ProjectCard({ project, onOpen, index }: Props) {
  return (
    <article className="group relative flex flex-col">
      <button
        onClick={() => onOpen(project)}
        className="relative aspect-[4/5] w-full overflow-hidden bg-surface-muted text-left"
        aria-label={`Open ${project.title}`}
      >
        {(project.image ?? project.images?.[0]) ? (
          <img
            src={`${import.meta.env.BASE_URL}${project.image ?? project.images![0]}`}
            alt={project.title}
            className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ backgroundColor: project.brand?.bg ? `#${project.brand.bg}` : undefined }}
          />
        ) : (
          <BrandTile project={project} />
        )}

        {/* top-left index */}
        {typeof index === "number" && (
          <span className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/80 mix-blend-difference">
            {String(index + 1).padStart(2, "0")} — {project.category}
          </span>
        )}

        {/* hover arrow */}
        <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-ink opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </button>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-display text-xl text-ink md:text-2xl">{project.title}</h3>
          <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
            {project.shortDescription}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3 pt-1.5 text-muted-foreground">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink"
              aria-label="Live site"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <span>{project.status}</span>
        <span>{project.techStack.slice(0, 2).join(" · ")}</span>
      </div>
    </article>
  );
}

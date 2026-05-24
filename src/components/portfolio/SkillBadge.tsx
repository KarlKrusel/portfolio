export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="border border-border bg-background/60 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-ink transition-colors hover:border-ink">
      {label}
    </span>
  );
}

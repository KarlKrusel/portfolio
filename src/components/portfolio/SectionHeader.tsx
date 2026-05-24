interface Props {
  eyebrow?: string;
  index?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, index, title, description, align = "left" }: Props) {
  return (
    <div className={`mb-14 ${align === "center" ? "mx-auto max-w-2xl text-center" : ""}`}>
      <div className="mb-6 flex items-baseline justify-between border-b border-border pb-3">
        <span className="eyebrow">{eyebrow ?? "Section"}</span>
        {index && <span className="eyebrow">{index}</span>}
      </div>
      <h2 className="display max-w-4xl text-5xl md:text-7xl">{title}</h2>
      {description && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center">
      <h2 className="heading text-h1 text-ink">{title}</h2>
      {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
    </div>
  );
}

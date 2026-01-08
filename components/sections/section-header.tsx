interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  hasBorder?: boolean
}

export function SectionHeader({ title, subtitle, description, hasBorder = false }: SectionHeaderProps) {
  return (
    <div className={`space-y-4 ${hasBorder ? "pb-6 border-b border-border" : ""}`}>
      {subtitle && (
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-md">{subtitle}</span>
        </div>
      )}
      <h2 className={subtitle ? "text-4xl font-bold" : "text-2xl font-bold"}>{title}</h2>
      {description && (
        <p className={subtitle ? "text-lg text-foreground/70 leading-relaxed max-w-2xl" : "text-sm text-foreground/60"}>
          {description}
        </p>
      )}
    </div>
  )
}

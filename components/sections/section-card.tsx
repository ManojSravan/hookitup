import { cn } from "@/lib/utils"

interface SectionCardProps {
  title: string
  type: string
  description: string
  className?: string
}

export function SectionCard({ title, type, description, className }: SectionCardProps) {
  return (
    <div
      className={cn("p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors", className)}
    >
      <div className="font-mono text-sm font-semibold text-primary mb-1">
        {title}: <span className="text-foreground">{type}</span>
      </div>
      <p className="text-sm text-foreground/70">{description}</p>
    </div>
  )
}

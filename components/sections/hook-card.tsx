import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface HookCardProps {
  name: string
  description: string
  category: string
  slug: string
}

export function HookCard({ name, description, category, slug }: HookCardProps) {
  return (
    <Link href={`/hooks/${slug}`}>
      <div className="group p-6 rounded-lg border border-border bg-card hover:border-primary hover:shadow-md hover:shadow-primary/10 transition-all duration-200 cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-md">{category}</span>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
        </div>
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-sm text-foreground/70">{description}</p>
      </div>
    </Link>
  )
}

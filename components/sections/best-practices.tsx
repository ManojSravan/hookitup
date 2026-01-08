interface BestPracticesListProps {
  practices: string[]
}

export function BestPracticesList({ practices }: BestPracticesListProps) {
  return (
    <ul className="space-y-3">
      {practices.map((practice, idx) => (
        <li key={idx} className="flex gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
          <span className="text-primary font-bold  shrink-0">→</span>
          <span className="text-foreground">{practice}</span>
        </li>
      ))}
    </ul>
  )
}

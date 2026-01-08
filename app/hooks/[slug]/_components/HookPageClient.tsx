"use client"

 
import { BestPracticesList } from "@/components/sections/best-practices"
import { CodeBlock } from "@/components/sections/code-block"
import { Header } from "@/components/sections/header"
import { SectionCard } from "@/components/sections/section-card"
import { SectionHeader } from "@/components/sections/section-header"
import { Sidebar } from "@/components/sections/sidebar"
import { hookDocs } from "@/lib/hookdata"
import { notFound } from "next/navigation"

const DEFAULT_BEST_PRACTICES = [
  "Always memoize or stabilize dependencies to prevent unnecessary re-renders",
  "Consider the performance implications when dealing with frequently updated values",
  "Test edge cases like null values, rapid updates, and component unmounting",
]

interface PageProps {
  slug: string
}

export default function HookPageClient({ slug }: PageProps) {
  const doc = hookDocs[slug as keyof typeof hookDocs]

  if (!doc) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
            <div className="space-y-10">
              <SectionHeader title={doc.title} subtitle={doc.category} description={doc.description} hasBorder={true} />

              <div className="space-y-4">
                <SectionHeader title="Overview" />
                <p className="text-foreground/80 leading-relaxed">{doc.longDescription}</p>
              </div>

              <div className="space-y-4">
                <SectionHeader title="Hook Implementation" description="The complete hook source code" />
                <CodeBlock code={doc.code} title={doc.title} language="typescript" />
              </div>

              <div className="space-y-4">
                <SectionHeader title="Usage Example" description="See how to use this hook in your components" />
                <CodeBlock code={doc.usage} title="Example Component" language="typescript" />
              </div>

              <div className="space-y-6 pt-6 border-t border-border">
                <SectionHeader title="API Reference" />

                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Parameters</h3>
                    <div className="space-y-2">
                      {doc.params.map((param, idx) => (
                        <SectionCard key={idx} title={param.name} type={param.type} description={param.description} />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Returns</h3>
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <p className="text-sm text-foreground/70">{doc.returns}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <SectionHeader title="Best Practices" />
                <BestPracticesList practices={DEFAULT_BEST_PRACTICES} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

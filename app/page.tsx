 
import { Header } from "@/components/sections/header"
import { HookCard } from "@/components/sections/hook-card"
import { SectionHeader } from "@/components/sections/section-header"
import { Sidebar } from "@/components/sections/sidebar"
import { APP_CONFIG } from "@/lib/constants"

const FEATURED_HOOKS = [
  {
    name: "usePrevious",
    description: "Track the previous value of a prop or state variable",
    category: "State",
    slug: "use-previous",
  },
  {
    name: "useDebounce",
    description: "Debounce values for optimized updates and API calls",
    category: "Performance",
    slug: "use-debounce",
  },
  {
    name: "useLocalStorage",
    description: "Sync component state with localStorage automatically",
    category: "Storage",
    slug: "use-local-storage",
  },
  {
    name: "useFetch",
    description: "Simplified API data fetching with error handling",
    category: "Data",
    slug: "use-fetch",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
            <div className="space-y-16">
              <div className="space-y-4 max-w-2xl">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {APP_CONFIG.name}
                </h1>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {APP_CONFIG.description} Explore custom hooks for state management, performance optimization, data
                  fetching, and more.
                </p>
              </div>

              <div className="space-y-8">
                <SectionHeader title="Featured Hooks" description="Get started with our most popular utilities" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {FEATURED_HOOKS.map((hook) => (
                    <HookCard
                      key={hook.slug}
                      name={hook.name}
                      description={hook.description}
                      category={hook.category}
                      slug={hook.slug}
                    />
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Ready to explore?</h2>
                  <p className="text-foreground/70 max-w-2xl">
                    Browse the hooks in the sidebar to view detailed documentation, implementation guides, usage
                    examples, and API references. Each hook comes with full TypeScript support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

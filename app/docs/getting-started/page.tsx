"use client"

import { CodeBlock } from "@/components/sections/code-block"
import { Header } from "@/components/sections/header"
import { Sidebar } from "@/components/sections/sidebar"


export default function GettingStarted() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 pl-60 overflow-auto">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
            <div className="space-y-10">
              {/* Header */}
              <div className="space-y-4 pb-6 border-b border-border">
                <h1 className="text-4xl font-bold">Getting Started</h1>
                <p className="text-lg text-foreground/70">
                  Learn how to use hookitup in your React projects. Step-by-step guide to get up and running.
                </p>
              </div>

              {/* Installation */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Installation</h2>
                <p className="text-foreground/80">Copy the hook code directly into your project or install from npm:</p>
                <CodeBlock code="npm install motion" language="bash" title="Terminal" />
              </div>

              {/* Basic Usage */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Basic Usage</h2>
                <p className="text-foreground/80">Each hook can be imported and used immediately in your components:</p>
                <CodeBlock
                  code={`import { usePrevious } from 'hookitup';

export function MyComponent() {
  
  return (
    <div>
      Current: {count}, Previous: {prevCount}
    </div>
  );
}`}
                  title="Example Component"
                  language="typescript"
                />
              </div>

              {/* TypeScript Support */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">TypeScript Support</h2>
                <p className="text-foreground/80">
                  All hooks are fully typed and work seamlessly with TypeScript projects. You get full type inference
                  and IDE support out of the box:
                </p>
                <CodeBlock
                  code={`// Full type inference
const [value, setValue] = useLocalStorage<string>('key', 'default');

// Type hints in your IDE
const debounced = useDebounce<SearchQuery>(query, 300);

// No need to specify types when they can be inferred
const prev = usePrevious(count); // Type is inferred as number`}
                  title="TypeScript Example"
                  language="typescript"
                />
              </div>

              {/* Key Features */}
              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h3 className="font-semibold mb-2 text-primary">Production Ready</h3>
                    <p className="text-sm text-foreground/70">
                      All hooks are thoroughly tested and optimized for production use
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h3 className="font-semibold mb-2 text-primary">TypeScript First</h3>
                    <p className="text-sm text-foreground/70">Full type safety with zero-config TypeScript support</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h3 className="font-semibold mb-2 text-primary">Zero Dependencies</h3>
                    <p className="text-sm text-foreground/70">No external dependencies, just pure React hooks</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h3 className="font-semibold mb-2 text-primary">Well Documented</h3>
                    <p className="text-sm text-foreground/70">
                      Each hook includes detailed docs, examples, and best practices
                    </p>
                  </div>
                </div>
              </div>

              {/* Explore Hooks */}
              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold">Browse Available Hooks</h2>
                <p className="text-foreground/80">
                  Check out the sidebar navigation to explore all available hooks. Each hook includes detailed
                  documentation, usage examples, and API references.
                </p>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-sm text-foreground/80">
                    <span className="font-semibold text-primary">Tip:</span> Use the search bar in the header to quickly
                    find the hook you need.
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

"use client"

import { CodeBlock } from "@/components/sections/code-block"
 
export default function GettingStarted() {
  return (
    <div className="flex flex-col min-h-screen">
   
      <div className="flex flex-1">
  
        <main className="flex-1 md:pl-60 overflow-auto">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
            <div className="space-y-10">
              {/* Header */}
              <div className="space-y-4 pb-6 border-b border-border">
                <h1 className="text-4xl font-bold">Getting Started</h1>
                <p className="text-lg text-foreground/70">
                  Learn how to use custom React hooks in your projects. A comprehensive guide to understanding and implementing hooks effectively.
                </p>
              </div>

              {/* What are Custom Hooks */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">What are Custom Hooks?</h2>
                <p className="text-foreground/80">
                  Custom hooks are reusable functions that encapsulate stateful logic in React. They allow you to extract component logic into reusable functions, following React's hooks rules and conventions.
                </p>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-sm text-foreground/80">
                    <span className="font-semibold text-primary">Key Principle:</span> Custom hooks must start with "use" and can call other hooks.
                  </p>
                </div>
              </div>

              {/* How to Use */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">How to Use These Hooks</h2>
                <p className="text-foreground/80">
                  Simply copy the hook code from any page and paste it into your project. Each hook is self-contained and ready to use:
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h3 className="font-semibold mb-2">Step 1: Create a hooks folder</h3>
                    <CodeBlock code="mkdir src/hooks" language="bash" title="Terminal" />
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h3 className="font-semibold mb-2">Step 2: Copy the hook code</h3>
                    <p className="text-sm text-foreground/70 mb-2">
                      Browse the hooks in the sidebar, find one you need, and copy its code into a new file.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h3 className="font-semibold mb-2">Step 3: Import and use</h3>
                    <CodeBlock
                      code={`import { usePrevious } from '@/hooks/usePrevious';

export function MyComponent() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  
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
                </div>
              </div>

              {/* Hook Categories */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Hook Categories</h2>
                <p className="text-foreground/80">
                  Our collection is organized into different categories to help you find what you need:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h3 className="font-semibold mb-2 text-primary">Animation</h3>
                    <p className="text-sm text-foreground/70">
                      Scroll animations, transitions, and motion effects for engaging UIs
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h3 className="font-semibold mb-2 text-primary">State Management</h3>
                    <p className="text-sm text-foreground/70">
                      Advanced state handling, persistence, and synchronization hooks
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h3 className="font-semibold mb-2 text-primary">Utilities</h3>
                    <p className="text-sm text-foreground/70">
                      Common patterns like debounce, throttle, and previous value tracking
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h3 className="font-semibold mb-2 text-primary">Performance</h3>
                    <p className="text-sm text-foreground/70">
                      Optimization hooks for rendering, memoization, and resource management
                    </p>
                  </div>
                </div>
              </div>

              {/* TypeScript Support */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">TypeScript Support</h2>
                <p className="text-foreground/80">
                  All hooks are written in TypeScript and provide full type safety. You get automatic type inference and comprehensive IDE support:
                </p>
                <CodeBlock
                  code={`// Full type inference
const [value, setValue] = useLocalStorage<string>('key', 'default');

// Generics for flexible typing
const debounced = useDebounce<SearchQuery>(query, 300);

// Automatic type inference
const prev = usePrevious(count); // Type is inferred as number`}
                  title="TypeScript Example"
                  language="typescript"
                />
              </div>

              {/* Best Practices */}
              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold">Best Practices</h2>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h3 className="font-semibold mb-2">✓ Follow the Rules of Hooks</h3>
                    <p className="text-sm text-foreground/70">
                      Always call hooks at the top level of your component, never inside loops, conditions, or nested functions.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h3 className="font-semibold mb-2">✓ Customize for Your Needs</h3>
                    <p className="text-sm text-foreground/70">
                      These hooks are templates. Feel free to modify them to fit your specific use cases and requirements.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h3 className="font-semibold mb-2">✓ Test Your Hooks</h3>
                    <p className="text-sm text-foreground/70">
                      When using hooks in production, ensure they're properly tested with tools like React Testing Library.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h3 className="font-semibold mb-2">✓ Keep Dependencies Updated</h3>
                    <p className="text-sm text-foreground/70">
                      Some hooks may require additional libraries (like Framer Motion). Make sure to install and update them as needed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Explore Hooks */}
              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold">Start Exploring</h2>
                <p className="text-foreground/80">
                  Ready to dive in? Browse through the sidebar to discover hooks for animations, state management, utilities, and more. Each hook includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Complete source code ready to copy</li>
                  <li>Detailed usage examples</li>
                  <li>Parameter descriptions and return types</li>
                  <li>Common use cases and patterns</li>
                </ul>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 mt-4">
                  <p className="text-sm text-foreground/80">
                    <span className="font-semibold text-primary">Pro Tip:</span> Use the search functionality to quickly find hooks by name or category. You can also bookmark your frequently used hooks for easy access.
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
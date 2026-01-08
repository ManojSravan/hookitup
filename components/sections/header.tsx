"use client"

import { Search, Github } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
 

export function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm  sticky top-0 z-50">
      <div className="px-6 md:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 min-w-fit">
            <span className="font-bold text-xl hidden sm:inline whitespace-nowrap">hookitup</span>
          </Link>

          <div className="flex-1 max-w-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search hooks..."
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-input bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-background transition-colors"
              />
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              title="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

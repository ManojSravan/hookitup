"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Github, Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { APP_CONFIG, NAVIGATION, EXTERNAL_LINKS, HOOK_CATEGORIES } from "@/lib/constants"
import { ThemeToggle } from "./theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function Header() {
  const pathname = usePathname()
  const [isFocused, setIsFocused] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 py-4">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-2 min-w-fit shrink-0">
            
            <span className="font-bold text-lg hidden sm:inline whitespace-nowrap text-foreground">
              {APP_CONFIG.name}
            </span>
          </Link>

          {/* Right side - Navigation, Search, Actions */}
          <div className="flex items-center justify-end gap-6 flex-1">
            {/* Navigation */}
            {/* <nav className="hidden md:flex items-center gap-8">
              {NAVIGATION.main.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav> */}

            {/* Search Bar */}
            {/* <div className="relative hidden md:flex items-center">
              <Search
                className={`absolute left-3 w-4 h-4 transition-colors ${
                  isFocused ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <input
                type="search"
                placeholder="Search documentation..."
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="pl-9 pr-12 py-2 rounded-lg border border-input bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-background transition-all"
              />
              <kbd className="absolute right-3 text-xs text-muted-foreground font-medium pointer-events-none">
                <span className="text-xs">Ctrl</span> K
              </kbd>
            </div> */}

            {/* Action Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="md:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Menu className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-64 p-6">
                    <div className="space-y-6">
                      <h3 className="section-title text-primary">Documentation</h3>
                      <nav className="space-y-1">
                        {NAVIGATION.main.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`nav-link block text-primary ${pathname === item.href ? "nav-link-primary" : ""}`}
                            onClick={() => setOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </nav>
                    </div>
                    <div className="space-y-4">
                      <h3 className="section-title">Hooks</h3>
                      <div className="space-y-2">
                        {Object.entries(HOOK_CATEGORIES).map(([category, items]) => (
                          <div key={category} className="space-y-1">
                            <h4 className="px-4 py-2 text-sm font-medium">{category}</h4>
                            <div className="space-y-1 pl-2">
                              {items.map((hook) => (
                                <Link
                                  key={hook.slug}
                                  href={`/hooks/${hook.slug}`}
                                  className={`nav-link block ${pathname === `/hooks/${hook.slug}` ? "nav-link-active" : ""}`}
                                  onClick={() => setOpen(false)}
                                >
                                  {hook.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              <Link
                href={EXTERNAL_LINKS.contribute}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex px-4 py-2 text-sm bg-primary text-background font-medium rounded-lg border border-input   transition-colors"
              >
                Be a Contributor
              </Link>

              <a
                href={EXTERNAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex px-4 py-2 text-sm font-medium rounded-lg border border-input hover:bg-muted transition-colors"
              >
                <span className="pr-2"><Github className="w-5 h-5" /></span>
                View Source
              </a>

              <ThemeToggle />


            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

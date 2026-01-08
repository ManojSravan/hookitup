"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { APP_CONFIG, HOOK_CATEGORIES, NAVIGATION } from "@/lib/constants"
 

export function Sidebar() {
  const pathname = usePathname()
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    "State Management": true,
  })

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  return (
    <aside className="w-64 border-r border-sidebar-border bg-sidebar hidden md:flex flex-col min-h-screen sticky top-16">
      <div className="p-6 space-y-6 flex-1 overflow-auto">
        <div className="space-y-2">
          <h3 className="section-title">Documentation</h3>
          <nav className="space-y-1">
            {NAVIGATION.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link block ${pathname === item.href ? "nav-link-active" : ""}`}
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
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium hover:bg-sidebar-accent/20 transition-colors text-left"
                >
                  {category}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform shrink-0 ${
                      expandedCategories[category] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedCategories[category] && (
                  <div className="space-y-1 pl-2">
                    {items.map((hook) => (
                      <Link
                        key={hook.slug}
                        href={`/hooks/${hook.slug}`}
                        className={`nav-link block ${pathname === `/hooks/${hook.slug}` ? "nav-link-active" : ""}`}
                      >
                        {hook.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-sidebar-border">
        <p className="text-xs text-sidebar-foreground/60 font-medium">
          {APP_CONFIG.name} v{APP_CONFIG.version}
        </p>
        <p className="text-xs text-sidebar-foreground/50 mt-1">Last updated Jan 2025</p>
      </div>
    </aside>
  )
}

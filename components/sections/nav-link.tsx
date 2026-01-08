import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
  className?: string
}

export function NavLink({ href, children, isActive, className }: NavLinkProps) {
  return (
    <Link href={href} className={cn("nav-link block", isActive && "nav-link-active", className)}>
      {children}
    </Link>
  )
}

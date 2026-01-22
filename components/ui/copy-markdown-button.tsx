"use client"

import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { generateHooksMarkdown } from "@/lib/utils"
import { toast } from "sonner"

export function CopyMarkdownButton() {
  const handleCopy = async () => {
    try {
      const markdown = generateHooksMarkdown()
      await navigator.clipboard.writeText(markdown)
      toast.success("All hooks copied as Markdown!")
    } catch (error) {
      toast.error("Failed to copy to clipboard")
      console.error("Copy failed:", error)
    }
  }

  return (
    <Button onClick={handleCopy} variant="outline" size="sm">
      <Copy className="w-4 h-4 mr-2" />
      Copy All as Markdown
    </Button>
  )
}
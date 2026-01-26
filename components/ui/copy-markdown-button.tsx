"use client"

import { useState } from "react"
import { Copy, Check, Loader2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { generateHooksMarkdown } from "@/lib/utils"
import { toast } from "sonner"

type ButtonState = "idle" | "loading" | "done"

export function CopyMarkdownButton() {
  const [state, setState] = useState<ButtonState>("idle")

  const handleCopy = async () => {
    if (state !== "idle") return

    setState("loading")

    try {
      const markdown = generateHooksMarkdown()
      await navigator.clipboard.writeText(markdown)
      setState("done")
      toast.success("All hooks copied as Markdown!")

      setTimeout(() => {
        setState("idle")
      }, 2000)
    } catch (error) {
      setState("idle")
      toast.error("Failed to copy to clipboard")
      console.error("Copy failed:", error)
    }
  }

  const getIcon = () => {
    switch (state) {
      case "loading":
        return <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      case "done":
        return <Check className="w-4 h-4 mr-2 text-green-500" />
      default:
        return <Copy className="w-4 h-4 mr-2" />
    }
  }

  const getLabel = () => {
    switch (state) {
      case "loading":
        return "Copying..."
      case "done":
        return "Copied!"
      default:
        return "Copy as Markdown"
    }
  }

  return (
    <Button
      onClick={handleCopy}
      variant="outline"
      size="sm"
      disabled={state === "loading"}
      className={state === "done" ? "border-green-500 text-green-500" : ""}
    >
      {getIcon()}
      {getLabel()}
    </Button>
  )
}

export function DownloadMarkdownButton() {
  const [state, setState] = useState<ButtonState>("idle")

  const handleDownload = async () => {
    if (state !== "idle") return

    setState("loading")

    try {
      const markdown = generateHooksMarkdown()
      const blob = new Blob([markdown], { type: "text/markdown" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "hookitup-hooks.md"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      setState("done")
      toast.success("Markdown file downloaded!")

      setTimeout(() => {
        setState("idle")
      }, 2000)
    } catch (error) {
      setState("idle")
      toast.error("Failed to download file")
      console.error("Download failed:", error)
    }
  }

  const getIcon = () => {
    switch (state) {
      case "loading":
        return <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      case "done":
        return <Check className="w-4 h-4 mr-2 text-green-500" />
      default:
        return <Download className="w-4 h-4 mr-2" />
    }
  }

  const getLabel = () => {
    switch (state) {
      case "loading":
        return "Downloading..."
      case "done":
        return "Downloaded!"
      default:
        return "Download as Markdown"
    }
  }

  return (
    <Button
      onClick={handleDownload}
      variant="outline"
      size="sm"
      disabled={state === "loading"}
      className={state === "done" ? "border-green-500 text-green-500" : ""}
    >
      {getIcon()}
      {getLabel()}
    </Button>
  )
}
"use client"
import ShikiHighlighter from "react-shiki";

import { Copy, Check, ChevronDown, ChevronUp } from "lucide-react"
import { useMemo, useState } from "react"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

export function CodeBlock({ code, language = "typescript", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const lines = useMemo(() => code.split("\n"), [code])
  const isLong = lines.length > 8

  const visibleCode = useMemo(() => {
    if (!isLong || expanded) return code
    return lines.slice(0, 8).join("\n")
  }, [code, lines, expanded, isLong])

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-lg border border-border overflow-hidden bg-card">
      {title && (
        <div className="px-4 py-3 border-b border-border flex items-center justify-between bg-muted/30">
          <span className="text-sm font-bold text-foreground">{title}</span>
          <span className="text-xs font-bold text-muted-foreground">{language}</span>
        </div>
      )}

      <div className="relative">
        <pre className="p-4 overflow-x-auto">
           <ShikiHighlighter language="jsx" theme="ayu-dark">
            {visibleCode}
     
           </ShikiHighlighter>
        </pre>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
          title="Copy code"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>

        {/* Expand / collapse */}
        {isLong && (
          <div className="border-t border-border bg-muted/20 px-4 py-2 flex justify-center">
            <button
              onClick={() => setExpanded(prev => !prev)}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition"
            >
              {expanded ? (
                <>
                  See less <ChevronUp className="w-3 h-3" />
                </>
              ) : (
                <>
                  See more <ChevronDown className="w-3 h-3" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

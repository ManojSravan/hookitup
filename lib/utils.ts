import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { hookDocs } from "./hookdata"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateHooksMarkdown(): string {
  const markdown = Object.entries(hookDocs).map(([, hook]) => {
    const lines = [
      `# ${hook.title}`,
      ``,
      `**Category:** ${hook.category}`,
      ``,
      `**Description:** ${hook.description}`,
      ``,
      `**Long Description:** ${hook.longDescription}`,
      ``,
      `## Usage`,
      ``,
      `\`\`\`tsx`,
      hook.usage.trim(),
      `\`\`\``,
      ``,
      `## Code`,
      ``,
      `\`\`\`tsx`,
      hook.code.trim(),
      `\`\`\``,
    ]

    if (hook.params && hook.params.length > 0) {
      lines.push(``, `## Parameters`, ``)
      hook.params.forEach(param => {
        lines.push(`- **${param.name}** (${param.type}): ${param.description}`)
      })
    }

    if (hook.returns) {
      lines.push(``, `**Returns:** ${hook.returns}`)
    }

    return lines.join('\n')
  }).join('\n\n---\n\n')

  return markdown
}

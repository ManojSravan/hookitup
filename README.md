# HookItUp 🔗

A modern, **Next.js** documentation/demo site showcasing useful React hooks and a small design system of UI components. This repository is designed to be a friendly reference for developers to explore, reuse, and contribute hook implementations and documentation.

---

## 🚀 Quick Start

Prerequisites:
- Node.js 18+ and npm (or yarn / pnpm)

Install dependencies and run locally:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

Lint the code:

```bash
npm run lint
```

---

## 🧭 Project Structure

Overview of the main files and folders:

- `app/` – Next.js App Router pages and layouts
  - `layout.tsx` – Root layout and common providers (theme, fonts, etc.)
  - `page.tsx` – Homepage
  - `docs/` – Static docs pages (e.g., getting-started)
  - `hooks/[slug]/` – Dynamic hook pages. Each slug is generated from the hook docs.
    - `_components/` – helper components used by hook pages (e.g., `generateStaticParams.tsx`, client components)

- `components/` – Shared visual components and section layouts
  - `sections/` – Documentation sections and page structure components
  - `header.tsx`, `sidebar.tsx`, `theme-toggle.tsx`, etc.

- `components/ui/` – Reusable UI primitives and atoms (Accordion, Button, Input, Table, Tooltip...)

- `hooks/` – Local helper hooks used by the site's UI (e.g., `use-mobile.ts`)

- `lib/` – Shared logic and data
  - `hookdata.ts` – Centralized hook documentation data (see below for contributor guidance)
  - `utils.ts`, `constants.ts` – shared helpers/constants

- `public/` – Static assets

- `package.json`, `tsconfig.json`, `tailwind.config` – project tooling and configuration

> Note: The hook documentation objects used to power the dynamic hook pages live in `lib/hookdata.ts`. Some helper components also include a local copy used to generate static params – try to keep them synchronized.

---

## ✍️ How Hooks Are Documented

Hook docs follow the `HookDoc` interface (see `lib/hookdata.ts`) and typically include:

- `title` – display name
- `category` – category for navigation and grouping
- `description` – short summary
- `longDescription` – longer explanation
- `code` – example implementation/snippet
- `usage` – example usage snippet
- `params` / `returns` – optional API details

When a hook doc is added, the site generates a route at `/hooks/<slug>` that shows the doc, code, and examples.

---

## ✨ Contributing

Thanks for wanting to contribute! ❤️ We welcome new hooks, docs improvements, UI tweaks, bug fixes, and accessibility or performance enhancements.

Recommended workflow:

1. Fork the repo and create a descriptive branch: `git checkout -b feature/add-use-foo`.
2. Add/update content:
   - To add a new hook doc, create a new entry in `lib/hookdata.ts` using the existing `HookDoc` shape.
   - Ensure the `slug` (object key) is URL-friendly (e.g., `use-local-storage`).
   - If you add or update `generateStaticParams` in `app/hooks/[slug]/_components`, keep it consistent with `lib/hookdata.ts`.
3. If you add code examples or component changes, make sure to keep TypeScript types correct and run the linter.
4. Run the site locally and verify your changes:

```bash
npm install
npm run dev
# open http://localhost:3000
```

5. Commit with a clear message and open a pull request with a short description of what you changed and why.

Pull Request checklist:
- [ ] Code compiles and site runs locally
- [ ] Linting (ESLint) passes
- [ ] Added or updated documentation where appropriate
- [ ] Small, focused PRs are preferred

---

## 🛠 Code Style & Tools

- TypeScript for type safety
- ESLint for linting (`npm run lint`)
- Tailwind CSS for styling
- Radix UI components are used across the UI
- Shiki is used for code highlighting in code blocks

Please follow the existing style patterns when adding new components.

---

## 💬 Need Help or Have Ideas?

Open an issue for feature requests or bugs. For quick questions, comments in PRs are the best place.

---

## 📜 License

This project has no license specified. If you'd like it to be open source, consider adding a license file (e.g., MIT).

---

Thank you for checking out HookItUp! Contributions are welcome — small improvements make a big difference. ✅

Happy hacking! 🔧

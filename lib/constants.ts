// Centralized hook data and navigation structure
export const NAVIGATION = {
  main: [
    { name: "Home", href: "/" },
    { name: "Getting Started", href: "/docs/getting-started" },
  ],
}

export const HOOK_CATEGORIES = {
  "State Management": [
    // { name: "usePrevious", slug: "use-previous" },
    // { name: "useAsync", slug: "use-async" },
    { name: "useLocalStorage", slug: "use-local-storage" },
  ],
   "Animations": [
    { name: "useReveal", slug: "use-reveal" },
    { name: "useSlideAnimations", slug: "use-slide-animations" },
  ],
  Performance: [
    { name: "useDebounce", slug: "use-debounce" },
    // { name: "useThrottle", slug: "use-throttle" },
    // { name: "useMemo", slug: "use-memo-guide" },
  ],
  "Data Fetching": [
    { name: "useFetch", slug: "use-fetch" },
    // { name: "useQuery", slug: "use-query" },
  ],
  // "UI & Forms": [
  //   { name: "useToggle", slug: "use-toggle" },
  //   { name: "useForm", slug: "use-form" },
  // ],
}

export const APP_CONFIG = {
  name: "hookitup",
  version: "1.0.0",
  description: "A collection of carefully crafted, production-ready React hooks",
}

export const EXTERNAL_LINKS = {
  github: "https://github.com/ManojSravan/hookitup",
  contribute: "https://github.com/ManojSravan/hookitup",
}
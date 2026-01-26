"use client";

// Centralized hook documentation data
export interface HookDoc {
  title: string;
  category: string;
  description: string;
  longDescription: string;
  code: string;
  usage: string;
  params?: Array<{ name: string; type: string; description: string }>;
  returns?: string;
}

export const hookDocs: Record<string, HookDoc> = {
  //animations
  "use-reveal": {
    title: "useReveal",
    category: "Animation",
    description:
      "Animate any given component with satisfying reveal animations.",
    longDescription:
      "useReveal provides smooth scroll-based animations for React components. It supports multiple animation types (slide, fade, scale, blur) with customizable directions, delays, and durations. Built with Framer Motion, it automatically triggers animations when elements enter the viewport.",
    code: ` 
'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right'
type AnimationType = 'slide' | 'fade' | 'scale' | 'blur'

interface useRevealProps {
  children: ReactNode
  type?: AnimationType
  direction?: Direction
  delay?: number
  duration?: number
  once?: boolean
  exit?: boolean
}

const useReveal: React.FC<useRevealProps> = ({
  children,
  type = 'slide',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
  exit = false,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-10%' })

  const getVariants = () => {
    const base = { opacity: 0 }
    const visible = { opacity: 1 }
    
    switch (type) {
      case 'slide':
        return {
          hidden: {
            ...base,
            x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
            y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
          },
          visible: { ...visible, x: 0, y: 0 },
          exit: exit ? {
            opacity: 0,
            x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
            y: direction === 'up' ? -50 : direction === 'down' ? 50 : 0,
          } : {},
        }
      
      case 'scale':
        return {
          hidden: { ...base, scale: 0.8 },
          visible: { ...visible, scale: 1 },
          exit: exit ? { opacity: 0, scale: 0.8 } : {},
        }
      
      case 'blur':
        return {
          hidden: { ...base, filter: 'blur(4px)' },
          visible: { ...visible, filter: 'blur(0px)' },
          exit: exit ? { opacity: 0, filter: 'blur(4px)' } : {},
        }
      
      default: // fade
        return {
          hidden: base,
          visible,
          exit: exit ? { opacity: 0 } : {},
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? 'visible' : (exit ? 'exit' : 'hidden')}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default useReveal
`,
    usage: `function Example() {
  return (
    <div>
  <RevealAnimation type="slide" direction="up" delay={0.2}>
 <h1>Title</h1>
 </RevealAnimation>
    </div>
  );
}`,
  },

  "use-slide-animations": {
    title: "useSlideAnimations",
    category: "Animation",
    description:
      "Animate components with smooth slide and fade effects on scroll.",
    longDescription:
      "useSlideAnimations provides directional slide animations combined with fade effects for React components. It supports sliding from left, right, top, or bottom with customizable offsets, delays, and durations. Built with Framer Motion, it triggers animations when elements enter the viewport with GPU acceleration for optimal performance.",
    code: ` 
'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Direction = 'left' | 'right' | 'top' | 'bottom' | 'none'

interface useSlideAnimationsProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: Direction
  offset?: number
}

const useSlideAnimations: React.FC<useSlideAnimationsProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'none',
  offset = 50,
}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -20% 0px',
  })

  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -offset, opacity: 0 }
      case 'right':
        return { x: offset, opacity: 0 }
      case 'top':
        return { y: -offset, opacity: 0 }
      case 'bottom':
        return { y: offset, opacity: 0 }
      default:
        return { opacity: 0 }
    }
  }

  const animateTo = { x: 0, y: 0, opacity: 1 }

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? animateTo : getInitialPosition()}
      transition={{ duration, delay, ease: 'easeOut' }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

export default useSlideAnimations
`,
    usage: `function Example() {
  return (
    <div>
  <useSlideAnimations direction="left" delay={0.2} offset={100}>
 <h1>Title</h1>
 </useSlideAnimations>
    </div>
  );
}`,
  },

  "use-debounce": {
    title: "useDebounce",
    category: "Performance",
    description:
      "Debounce a value to optimize frequent updates and function calls.",
    longDescription:
      "useDebounce delays the execution of a function or value update until after the user has stopped triggering changes for a specified duration. Perfect for search inputs, API calls, and heavy computations.",
    code: `import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => clearTimeout(handler);
  }, [value, delay]);
  
  return debouncedValue;
}`,
    usage: `function SearchUsers() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  
  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform API call
      console.log('Searching for:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  
  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search users..."
    />
  );
}`,
    params: [
      { name: "value", type: "T", description: "The value to debounce" },
      {
        name: "delay",
        type: "number",
        description: "Delay in milliseconds (default: 500)",
      },
    ],
    returns: "T - The debounced value",
  },
  "use-local-storage": {
    title: "useLocalStorage",
    category: "State Management",
    description:
      "Sync component state with browser localStorage automatically.",
    longDescription:
      "useLocalStorage combines React state with localStorage to persist data across browser sessions. It handles serialization, type safety, and provides easy state management with automatic persistence.",
    code: `import { useState, useEffect } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = typeof window !== 'undefined' 
        ? window.localStorage.getItem(key)
        : null;
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
}`,
    usage: `function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}`,
    params: [
      { name: "key", type: "string", description: "localStorage key" },
      {
        name: "initialValue",
        type: "T",
        description: "Initial value if key doesn't exist",
      },
    ],
    returns: "[T, (value: T) => void] - Current value and setter function",
  },
  "use-fetch": {
    title: "useFetch",
    category: "Data Fetching",
    description:
      "Simplified API data fetching with built-in loading and error states.",
    longDescription:
      "useFetch handles the complexity of data fetching, loading states, error handling, and caching. It's a lightweight alternative to larger data fetching libraries.",
    code: `import { useState, useEffect } from 'react';

interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useFetch<T>(url: string): UseFetchState<T> {
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });
  
  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('API Error');
        const data = await response.json();
        
        if (isMounted) {
          setState({ data, loading: false, error: null });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error: error instanceof Error ? error : new Error('Unknown error'),
          });
        }
      }
    };
    
    fetchData();
    return () => { isMounted = false; };
  }, [url]);
  
  return state;
}`,
    usage: `function UserProfile({ userId }: { userId: string }) {
  const { data, loading, error } = useFetch(\`/api/users/\${userId}\`);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.bio}</p>
    </div>
  );
}`,
    params: [{ name: "url", type: "string", description: "API endpoint URL" }],
    returns:
      "UseFetchState<T> - Object with data, loading, and error properties",
  },
  "use-click-outside": {
    title: "useClickOutside",
    category: "UI Behavior",
    description: "Detect clicks outside a specified element.",
    longDescription:
      "useClickOutside provides a simple way to detect when a user clicks outside a specific element. Perfect for closing modals, dropdowns, popovers, and other UI components when the user interacts outside of them.",
    code: `import { useEffect, RefObject } from 'react';

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}`,
    usage: `function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && (
        <div>
          <p>Dropdown content</p>
        </div>
      )}
    </div>
  );
}`,
    params: [
      {
        name: "ref",
        type: "RefObject<T>",
        description:
          "React ref object pointing to the element to detect outside clicks for",
      },
      {
        name: "handler",
        type: "(event: MouseEvent | TouchEvent) => void",
        description:
          "Callback function to execute when a click outside is detected",
      },
    ],
     returns: "void",
   },
   "use-optimistic": {
     title: "useOptimistic",
     category: "State Management",
     description:
       "Provides optimistic updates for immediate UI feedback during async operations.",
     longDescription:
       "useOptimistic allows you to show immediate UI updates while async operations are pending, then reconcile with the actual result. Perfect for forms, likes, and other interactive elements where instant feedback improves UX.",
     code: `import { useOptimistic, useState } from 'react';

export function useOptimisticLike(initialLikes: number, userId: string) {
  const [likes, setLikes] = useState(initialLikes);
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(likes);

  const toggleLike = async () => {
    const newLikes = optimisticLikes + (likes === optimisticLikes ? 1 : -1);
    setOptimisticLikes(newLikes);

    try {
      // Simulate API call
      await fetch('/api/like', {
        method: 'POST',
        body: JSON.stringify({ userId }),
      });
      setLikes(newLikes);
    } catch (error) {
      // Revert on error
      setOptimisticLikes(likes);
    }
  };

  return [optimisticLikes, toggleLike];
}`,
     usage: `function LikeButton({ initialLikes, userId }: { initialLikes: number; userId: string }) {
  const [likes, toggleLike] = useOptimisticLike(initialLikes, userId);

  return (
    <button onClick={toggleLike}>
      ❤️ {likes} likes
    </button>
  );
}`,
     params: [
       { name: "initialValue", type: "T", description: "Initial value for the state" },
     ],
     returns: "[T, (updater: T | ((prev: T) => T)) => void] - Optimistic value and update function",
   },
   "use-transition": {
     title: "useTransition",
     category: "Performance",
     description:
       "Manages non-blocking UI transitions and loading states.",
     longDescription:
       "useTransition enables smooth UI updates by marking some updates as non-urgent transitions. It provides a way to keep the UI responsive during heavy computations or data fetches.",
     code: `import { useTransition, useState } from 'react';

export function useTransitionSearch<T>(data: T[], searchFn: (item: T, query: string) => boolean) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<T[]>(data);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    startTransition(() => {
      const filtered = data.filter(item => searchFn(item, newQuery));
      setResults(filtered);
    });
  };

  return { query, results, isPending, handleSearch };
}`,
     usage: `function SearchComponent({ items }: { items: Array<{ id: number; name: string }> }) {
  const { query, results, isPending, handleSearch } = useTransitionSearch(
    items,
    (item, q) => item.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <input
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search..."
      />
      {isPending && <div>Loading...</div>}
      <ul>
        {results.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}`,
     params: [
       { name: "data", type: "T[]", description: "Array of data to search through" },
       { name: "searchFn", type: "(item: T, query: string) => boolean", description: "Function to filter items" },
     ],
     returns: "Object with query, results, isPending, and handleSearch",
   },
   "use-deferred-value": {
     title: "useDeferredValue",
     category: "Performance",
     description:
       "Defers expensive computations to prevent blocking the UI.",
     longDescription:
       "useDeferredValue allows React to defer re-rendering of expensive components until after more urgent updates. It's useful for search inputs, large lists, and other computationally intensive UI elements.",
     code: `import { useDeferredValue, useMemo } from 'react';

export function useDeferredSearch<T>(data: T[], query: string, filterFn: (item: T, query: string) => boolean) {
  const deferredQuery = useDeferredValue(query);

  const filteredData = useMemo(() => {
    return data.filter(item => filterFn(item, deferredQuery));
  }, [data, deferredQuery, filterFn]);

  const isStale = query !== deferredQuery;

  return { filteredData, isStale };
}`,
     usage: `function DeferredSearchList({ items }: { items: Array<{ id: number; title: string }> }) {
  const [query, setQuery] = useState('');
  const { filteredData, isStale } = useDeferredSearch(
    items,
    query,
    (item, q) => item.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search titles..."
      />
      {isStale && <div>Updating...</div>}
      <ul>
        {filteredData.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  );
}`,
     params: [
       { name: "data", type: "T[]", description: "Data array to filter" },
       { name: "query", type: "string", description: "Search query string" },
       { name: "filterFn", type: "(item: T, query: string) => boolean", description: "Filtering function" },
     ],
     returns: "Object with filteredData and isStale flag",
   },
 };

"use client"

// Centralized hook documentation data
export interface HookDoc {
  title: string
  category: string
  description: string
  longDescription: string
  code: string
  usage: string
  params: Array<{ name: string; type: string; description: string }>
  returns: string
}

export const hookDocs: Record<string, HookDoc> = {
  "use-reveal": {
    title: "useReveal",
    category: "Animation",
    description: "Animate any given component with satisfying reveal animations.",
    longDescription:
      "usePrevious is useful when you need to compare the current value with its previous state. Common use cases include detecting value changes, implementing undo/redo functionality, or tracking value transitions.",
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
    params: [{ name: "value", type: "T", description: "Any value to track" }],
    returns: "T | undefined - The previous value or undefined on first render",
  },
  "use-debounce": {
    title: "useDebounce",
    category: "Performance",
    description: "Debounce a value to optimize frequent updates and function calls.",
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
      { name: "delay", type: "number", description: "Delay in milliseconds (default: 500)" },
    ],
    returns: "T - The debounced value",
  },
  "use-local-storage": {
    title: "useLocalStorage",
    category: "State Management",
    description: "Sync component state with browser localStorage automatically.",
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
      { name: "initialValue", type: "T", description: "Initial value if key doesn't exist" },
    ],
    returns: "[T, (value: T) => void] - Current value and setter function",
  },
  "use-fetch": {
    title: "useFetch",
    category: "Data Fetching",
    description: "Simplified API data fetching with built-in loading and error states.",
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
    returns: "UseFetchState<T> - Object with data, loading, and error properties",
  },
}

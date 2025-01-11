import { CopyButton } from "../../../../components/landing/components/preview/copy-button";

export default function ConfigAldaui() {
  const codeExample1 = `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
`;

  const codeExample2 = `import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
`;

  const codeExample3 = `import { Route, Routes } from "react-router-dom";
import { ToastProvider } from "../components/ui/ToastContext";
import ToastContainer from "../components/ui/ToastContainer";
import { ThemeProvider } from "../lib/theme-provider";  

function AppRoutes() {
  return (
    <ThemeProvider> 
      <ToastProvider>
        <Routes>
          <Route/>
        </Routes>
        <ToastContainer />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default AppRoutes;
`;

  const codeExample4 = `import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) return savedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
`;

  return (
    <div className="flex-1 px-8 py-2 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Configuration</h1>
      <p className="text-gray-600 mb-8">
        To use Alda UI in your React application, follow these steps for proper setup and configuration.
      </p>

      <div className="relative my-6">
        <div className="absolute right-4 top-4">
          <CopyButton text={codeExample1} />
        </div>
        <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 pt-12 font-mono text-sm overflow-x-auto">
          {codeExample1}
        </pre>
      </div>
      <p className="text-gray-500 mb-6">
        The above code sets up a basic React app with `ReactDOM` for rendering the root component (`App`) into the DOM.
      </p>

      <div className="relative my-6">
        <div className="absolute right-4 top-4">
          <CopyButton text={codeExample2} />
        </div>
        <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 pt-12 font-mono text-sm overflow-x-auto">
          {codeExample2}
        </pre>
      </div>
      <p className="text-gray-500 mb-6">
        The second snippet sets up routing with `React Router` to handle multiple routes. It wraps the app with a router to allow for different views based on the URL path.
      </p>

      <div className="relative my-6">
        <div className="absolute right-4 top-4">
          <CopyButton text={codeExample3} />
        </div>
        <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 pt-12 font-mono text-sm overflow-x-auto">
          {codeExample3}
        </pre>
      </div>
      <p className="text-gray-500 mb-6">
        Here we integrate the `ThemeProvider` and `ToastProvider`. The `ThemeProvider` is responsible for managing the theme (dark or light), and the `ToastProvider` will manage notifications across the app.
      </p>

      <div className="relative my-6">
        <div className="absolute right-4 top-4">
          <CopyButton text={codeExample4} />
        </div>
        <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 pt-12 font-mono text-sm overflow-x-auto">
          {codeExample4}
        </pre>
      </div>
      <p className="text-gray-500 mb-6">
        Finally, the fourth code snippet shows how to implement a `ThemeContext` in your app, which allows you to manage and toggle between light and dark themes globally. It also persists the theme setting in `localStorage` so that the user's preference is saved even after refreshing the page.
      </p>
    </div>
  );
}

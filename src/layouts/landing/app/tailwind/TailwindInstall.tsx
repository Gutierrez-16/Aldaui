import { CopyButton } from "../../../../components/landing/components/preview/copy-button";

export default function TailwindInstall() {
  const codeExample1 = `npm create vite@latest my-project -- --template react
cd my-project`;

  const codeExample2 = `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`;

  const codeExample3 = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff', 
          dark: '#000000',
        },
        surface: {
          DEFAULT: '#f9fafb',
          dark: '#1f2937',
        },
        border: {
          DEFAULT: '#e5e7eb',
          dark: '#374151',
        },
        text: {
          DEFAULT: '#111827',
          dark: '#f3f4f6',
        },
        muted: '#6b7280',
        primary: {
          DEFAULT: '#0ea2e9',
          hover: '#0288d1',
        },
      },
    },
  },
  plugins: [],
}`;

  const codeExample4 = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}`;

  return (
    <div className="flex-1 px-8 py-2 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Tailwind CSS</h1>
      
      <p className="text-gray-600 mb-8">
        Tailwind CSS is a popular utility-first CSS framework that fits perfectly with the unstyled mode to skin the entire UI with a design system of your choice.
      </p>

      <h2 className="text-xl font-semibold mb-4">Install Aldaui</h2>
      
      <p className="text-gray-600 mb-4">
        Start by creating a new project with Vite if you don’t have one set up already. The most common approach is to use Create Vite.
      </p>

      <div className="relative my-6">
        <div className="absolute right-4 top-4">
          <CopyButton text={codeExample1} />
        </div>
        <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 pt-12 font-mono text-sm overflow-x-auto">
          {codeExample1}
        </pre>
      </div>

      <h2 className="text-xl font-semibold mb-4">Install Tailwind CSS</h2>

      <p className="text-gray-600 mb-4">
        Install Tailwind CSS and its peer dependencies, then generate your <code className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">tailwind.config.js</code> and <code className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">postcss.config.js</code> files.
      </p>

      <div className="relative my-6">
        <div className="absolute right-4 top-4">
          <CopyButton text={codeExample2} />
        </div>
        <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 pt-12 font-mono text-sm overflow-x-auto">
          {codeExample2}
        </pre>
      </div>

      <h2 className="text-xl font-semibold mb-4">Tailwind Configuration</h2>

      <p className="text-gray-600 mb-4">
        Next, configure the <code className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">tailwind.config.js</code> file to tell Tailwind which files to process.
      </p>

      <div className="relative my-6">
        <div className="absolute right-4 top-4">
          <CopyButton text={codeExample3} />
        </div>
        <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 pt-12 font-mono text-sm overflow-x-auto">
          {codeExample3}
        </pre>
      </div>

      <h2 className="text-xl font-semibold mb-4">Entry CSS File</h2>

      <p className="text-gray-600 mb-4">
        Finally, in your <code className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">index.css</code>, add the following to import Tailwind’s utilities and set up additional custom styles.
      </p>

      <div className="relative my-6">
        <div className="absolute right-4 top-4">
          <CopyButton text={codeExample4} />
        </div>
        <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 pt-12 font-mono text-sm overflow-x-auto">
          {codeExample4}
        </pre>
      </div>

      <h2 className="text-xl font-semibold mb-4">Unstyled Mode</h2>
      
      <p className="text-gray-600">
        In unstyled mode, Aldaui’s exclusive integration with Tailwind is a great choice for developers who want the flexibility of Tailwind with the convenience of a UI Component library. Tailwind is a perfect match for Aldaui’s unstyled mode to implement design systems.
      </p>
    </div>
  );
}

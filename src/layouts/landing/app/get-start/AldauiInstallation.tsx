import { CopyButton } from "../../../../components/landing/components/preview/copy-button";

export default function AldauiInstallation() {
    const codeExample1 = `npm install aldaui`;

    const codeExample2 = `yarn add aldaui`;

    const codeExample3 = `import { AldauiProvider } from 'aldaui';

// _app.js
import { AldauiProvider } from 'aldaui';

export default function MyApp({ Component, pageProps }) {
    return (
        <AldauiProvider>
            <Component {...pageProps} />
        </AldauiProvider>
    );
}`;

    const codeExample4 = `import { Button } from 'aldaui';`;

    const codeExample5 = `import "aldaui/dist/styles.css";`;

    const codeExample6 = `import { AldauiProvider } from "aldaui";

// Enable unstyled mode globally
return(
    <AldauiProvider value={{ unstyled: true }}>
        <App />
    </AldauiProvider>
)`;

    return (
        <div className="flex-1 px-8 py-2 dark:text-white">
            <h1 className="text-3xl font-bold mb-4">Aldaui Installation</h1>

            <p className="text-gray-600 mb-8">
                Aldaui is a versatile UI component library designed to work seamlessly with frameworks like React. It is especially beneficial for developers who want to integrate a custom design system while using a set of reusable components.
            </p>

            <h2 className="text-xl font-semibold mb-4">Download Aldaui</h2>

            <p className="text-gray-600 mb-4">
                Start by installing Aldaui in your project using either npm or yarn.
            </p>

            <div className="relative my-6">
                <div className="absolute right-4 top-4">
                    <CopyButton text={codeExample1} />
                </div>
                <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 pt-12 font-mono text-sm overflow-x-auto">
                    {codeExample1}
                </pre>
            </div>

            <div className="relative my-6">
                <div className="absolute right-4 top-4">
                    <CopyButton text={codeExample2} />
                </div>
                <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 pt-12 font-mono text-sm overflow-x-auto">
                    {codeExample2}
                </pre>
            </div>

            <h2 className="text-xl font-semibold mb-4">Context Configuration</h2>

            <p className="text-gray-600 mb-4">
                Aldaui configuration is handled through the <code className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">AldauiProvider</code>.
            </p>

            <div className="relative my-6">
                <div className="absolute right-4 top-4">
                    <CopyButton text={codeExample3} />
                </div>
                <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 pt-12 font-mono text-sm overflow-x-auto">
                    {codeExample3}
                </pre>
            </div>

            <h2 className="text-xl font-semibold mb-4">Usage</h2>

            <p className="text-gray-600 mb-4">
                You can import individual components as needed. Here’s an example of how to import a <code className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">Button</code> component.
            </p>

            <div className="relative my-6">
                <div className="absolute right-4 top-4">
                    <CopyButton text={codeExample4} />
                </div>
                <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 pt-12 font-mono text-sm overflow-x-auto">
                    {codeExample4}
                </pre>
            </div>

            <h2 className="text-xl font-semibold mb-4">Theming</h2>

            <p className="text-gray-600 mb-4">
                Aldaui offers two modes: styled and unstyled. The styled mode comes with pre-built components and themes, while the unstyled mode allows you to apply your own custom design system.
            </p>

            <div className="relative my-6">
                <div className="absolute right-4 top-4">
                    <CopyButton text={codeExample5} />
                </div>
                <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 pt-12 font-mono text-sm overflow-x-auto">
                    {codeExample5}
                </pre>
            </div>

            <h2 className="text-xl font-semibold mb-4">Unstyled Mode</h2>

            <p className="text-gray-600 mb-4">
                Aldaui supports an unstyled mode where components come with no pre-defined styles, allowing you to use your custom styles or design system like Tailwind CSS. To enable this mode, wrap your app with the <code className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">AldauiProvider</code> and pass the <code className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">unstyled: true</code> option.
            </p>

            <div className="relative my-6">
                <div className="absolute right-4 top-4">
                    <CopyButton text={codeExample6} />
                </div>
                <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 pt-12 font-mono text-sm overflow-x-auto">
                    {codeExample6}
                </pre>
            </div>

            <h2 className="text-xl font-semibold mb-4">Examples</h2>

            <p className="text-gray-600">
                Aldaui can be used with popular React frameworks like Create React App, Vite.js, and Vite. Examples of integration and usage can be found in the documentation.
            </p>

            <h2 className="text-xl font-semibold mb-4">Vite.js Integration</h2>

            <p className="text-gray-600">
                Aldaui provides first-class support for Server-Side Rendering (SSR) with Vite.js. You can easily integrate Aldaui with your Vite.js project and leverage its components while using your own custom styles.
            </p>
        </div>
    );
}



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="min-h-screen flex flex-col">
            {/* Header */}
      <header className="bg-base-200 shadow">
        <nav className="navbar container mx-auto px-4">
            <div className="flex-1">
              <a className="text-xl font-bold">MyApp</a>
            </div>
            <div className="flex gap-4">
              <a className="btn btn-ghost">Home</a>
              <a className="btn btn-ghost">About</a>
              <a className="btn btn-ghost">Contact</a>
            </div>
          </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto p-4">
        <section className="mb-8">
          <h1 className="text-3xl font-semibold mb-2">Welcome to MyApp</h1>
          <p className="text-base-content">This is a sample application using React, Tailwind, and daisyUI.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Counter</h2>
          <p className="text-lg">Count: <span className="font-mono">{count}</span></p>
          <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            <button className="btn btn-soft">Default</button>
            <button className="btn btn-soft btn-primary">Primary</button>
            <button className="btn btn-soft btn-secondary">Secondary</button>
            <button className="btn btn-soft btn-accent">Accent</button>
            <button className="btn btn-soft btn-info">Info</button>
            <button className="btn btn-soft btn-success">Success</button>
            <button className="btn btn-soft btn-warning">Warning</button>
            <button className="btn btn-soft btn-error">Error</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-base-300 text-base-content py-4 mt-4">
        <div className="container mx-auto text-center">
          &copy; 2025 MyApp. All rights reserved.
        </div>
      </footer>
    </div>
    </>
  )
}

export default App

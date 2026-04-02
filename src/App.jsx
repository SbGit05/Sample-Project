import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="hero">
        <h1>React Sample Project</h1>
        <p>Build and customize this demo to learn React.</p>
        <div className="card">
          <p>Count: {count}</p>
          <button onClick={() => setCount((c) => c + 1)}>
            Increment
          </button>
          <button onClick={() => setCount((c) => c - 1)}>
            Decrement
          </button>
        </div>
      </header>
    </div>
  )
}

export default App

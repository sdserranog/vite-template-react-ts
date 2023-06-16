import { useState } from 'react'

const App = (): JSX.Element => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-700 text-white">
      <h1>Vite + React</h1>

      <button
        className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
        onClick={() => {
          setCount((count) => count + 1)
        }}
      >
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  )
}
App.displayName = 'App'

export default App

import './App.css';

import { useState } from 'react';

import { useGetBooks } from '@api/books';

const App = (): JSX.Element => {
  const [count, setCount] = useState(0)

  const { data, isLoading } = useGetBooks()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1)
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        {isLoading && <p>Loading...</p>}
        {!isLoading && data && (
          <ul>
            {data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}
App.displayName = 'App'

export default App

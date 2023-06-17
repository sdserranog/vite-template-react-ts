import { useState } from 'react'

import { Header, SwitchTheme } from '@/components'

const App = (): JSX.Element => {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto flex h-screen flex-col">
      <Header right={<SwitchTheme />} />
      <div className="grid h-full place-content-center gap-4">
        <h1>Vite + React</h1>

        <button
          className="btn-primary btn"
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
    </div>
  )
}
App.displayName = 'App'

export default App

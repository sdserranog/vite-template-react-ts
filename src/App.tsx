import { useState } from 'react'

import { Header, SwitchTheme } from '@/components'
import { useAddBook, useGetBooks } from '@api/books'

const App = (): JSX.Element => {
  const [count, setCount] = useState(0)

  const { data, isLoading, isError } = useGetBooks()
  const { mutate } = useAddBook()

  const handleAddBook = (): void => {
    mutate({
      author: 'J.R.R. Tolkien',
      description:
        'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      genre: 'Fantasy',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg',
      isbn: '9780261103252',
      published: 1954,
      publisher: 'George Allen & Unwin',
      title: 'The Lord of the Rings',
    })
  }

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
        <section id="books" className=" flex flex-col">
          <h2 className="my-4 text-2xl text-white">Books</h2>
          <button className="btn-secondary btn" onClick={handleAddBook}>
            Add Book
          </button>

          {isLoading && <p>Loading...</p>}
          {isError && <p>Error</p>}
          {!isLoading && data && (
            <ul>
              {data.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}
App.displayName = 'App'

export default App

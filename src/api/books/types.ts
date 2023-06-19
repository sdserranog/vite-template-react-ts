export type Book = {
  id: number
  title: string
  author: string
  genre: string
  description: string
  isbn: string
  image: string
  published: number
  publisher: string
}

export type AddBook = Omit<Book, 'id'>

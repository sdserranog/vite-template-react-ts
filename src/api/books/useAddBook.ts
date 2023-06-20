import { toast } from 'sonner'

import { client } from '@api/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { UseMutationResult } from '@tanstack/react-query'
import type { Book, AddBook } from './types'

export const addBook = async (book: AddBook): Promise<Book> => {
  const data = await client.post<Book>(book)
  return data
}

export const useAddBook = (): UseMutationResult<Book, Error, AddBook> => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: addBook,
    onError: () => {
      toast.error('Error adding book')
    },
    onSuccess: async (book) => {
      queryClient.setQueryData<Book[]>(['books'], (old) =>
        old ? [...old, book] : [book]
      )
    },
  })
}

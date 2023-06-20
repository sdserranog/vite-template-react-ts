import type { UseQueryResult } from '@tanstack/react-query'
import { toast } from 'sonner'

import { client } from '@api/api'
import { useQuery } from '@tanstack/react-query'

import type { Book } from './types'

const getBooks = async (): Promise<Book[]> => {
  const data = await client.get<Book[]>('', {
    params: {
      _limit: 20,
    },
  })
  return data
}

export const useGetBooks = (): UseQueryResult<Book[]> => {
  return useQuery({
    onError: () => {
      toast.error('Error fetching books')
    },
    queryFn: getBooks,
    queryKey: ['books'],
  })
}

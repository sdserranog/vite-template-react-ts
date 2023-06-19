import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query';

import { getBooks } from './getBooks';

import type { Book } from './types'

export const useGetBooks = (): UseQueryResult<Book[]> => {
  return useQuery({
    queryFn: getBooks,
    queryKey: ['posts'],
  })
}

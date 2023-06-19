import client from '@api/axios';

import type { Book } from './types'

export const getBooks = async (): Promise<Book[]> => {
  const { data } = await client.get('', { params: { _quantity: 10 } })
  if (data.code !== 200) throw new Error('Error fetching books')
  return data.data
}

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const mockQueryClient = new QueryClient()

type Props = {
  children: React.ReactNode
}

export const MockQueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={mockQueryClient}>
      {children}
    </QueryClientProvider>
  )
}

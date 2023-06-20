import {
  QueryClient,
  QueryClientProvider as Provider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 2,
    },
  },
})

type Props = {
  children: React.ReactNode
}
export const QueryClientProvider = ({ children }: Props): JSX.Element => (
  <Provider client={queryClient}>
    {children}
    <ReactQueryDevtools />
  </Provider>
)

QueryClientProvider.displayName = 'QueryClientProvider'

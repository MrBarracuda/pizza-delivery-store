import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import type { ReactNode } from 'react'

const queryClient = new QueryClient()

export const withQuery = (component: () => ReactNode) => () =>
  (
    <QueryClientProvider client={queryClient}>
      {component()}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )

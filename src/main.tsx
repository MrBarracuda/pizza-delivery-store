import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './i18n'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
)

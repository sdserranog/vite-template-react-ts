import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClientProvider } from '@/api/QueryClientProvider.tsx'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)

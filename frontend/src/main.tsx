import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Providers } from './utils/Providers.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} fallbackElement={<div>Загрузка...</div>} />
    </Providers>
  </React.StrictMode>,
)

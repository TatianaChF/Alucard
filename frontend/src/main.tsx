import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Providers } from './utils/Providers.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/Router.tsx'
import { Provider } from 'react-redux/dist/react-redux'
import { store } from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<div>Загрузка...</div>} />
      </Provider>
    </Providers>
  </React.StrictMode>,
)

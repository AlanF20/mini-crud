import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App.jsx'
import Create from './components/Create.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Users from './components/Users.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Ver',
    element: <Users />
  },
  {
    path: '/Crear',
    element: <Create />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

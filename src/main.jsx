import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App.jsx'
import Create from './components/Create.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ViewUsers from './components/ViewUsers.jsx'

const router = createBrowserRouter([
  {
    path: '/mini-crud',
    element: <App />
  },
  {
    path: '/mini-crud/Ver',
    element: <ViewUsers />
  },
  {
    path: '/mini-crud/Crear',
    element: <Create />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

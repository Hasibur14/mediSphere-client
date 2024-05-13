import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './provider/AuthProvider.jsx'
import router from './routes/Route.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
   <AuthProvider>
   <HelmetProvider>
   <RouterProvider router={router}></RouterProvider>
   <Toaster></Toaster>
   </HelmetProvider>
   </AuthProvider>
  </React.StrictMode>,

)


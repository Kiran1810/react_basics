import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contacts/contact.jsx'

const router= createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
path: "",
element:<Home/>

      },{
path: "about",
element:<About/>

      },
      {
path:"/Contact",
element:<Contact/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contacts/contact.jsx'
import User from './components/User/User.jsx';
import Github from './components/Github/Github.jsx';

// one way of routing 
/*const router= createBrowserRouter([
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
])*/
  

// other way to create the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='user/:userid' element={<User/>}/>
      <Route path='Github' element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import { createBrowserRouter } from 'react-router-dom'
import About from './components/About/About.jsx' 
import Contact from './contact/Contact.jsx' 

// const router = createBrowserRouter ([

// //     path: '/',
// //     element: <Layout/>,
// //   {
// //     Children: [
// //       {
// //         path: "",
// //         element: <Home/>
// //       },
// //       {
// //         path: "about",
// //         element: <About/>
// //       },
// //       {
// //         path: "contact",
// //         element: <Contact/>
// //       }
// //     ]
// //   }
// // ])

const router  = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/'  element={<Layout/>} />
    <Route path=''  element={<Home/>} />
    <Route path='/about'  element={<About/>} />
    <Route path='/contact'  element={<Contact/>} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)

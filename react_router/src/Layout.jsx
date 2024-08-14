import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'

function Layout() {
  return (
    <>
      <Header/>
      <Home/>
       <Outlet/>
       <Footer/>
    </>
  )
}

export default Layout

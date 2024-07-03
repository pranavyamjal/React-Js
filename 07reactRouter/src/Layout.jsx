import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom' // Importing the Outlet component from react-router-dom for nested routes

export function Layout() {
  return (
    <>


    <Header/>    {/* Rendering the Header component */}

    <Outlet />    {/* Rendering the Outlet component which will render the matched child route's component */}

    <Footer/>     {/* Rendering the Footer component */}
    
    
    </>
  )
}

export default Layout
import React from 'react'
import About from '../Components/About'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Aboutus() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
         <About />
    </div>
    <Footer/>
    </>
  )
}

export default Aboutus
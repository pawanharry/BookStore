import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Bookinfor from '../Components/Bookinfor'

function Bookinfo() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
         <Bookinfor/>
    </div>
    <Footer/>
    </>
  )
}

export default Bookinfo
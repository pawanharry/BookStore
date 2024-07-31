import React from 'react';
import Home from './home/Home';

import { Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './Components/Signup';
import Aboutus from './aboutus/Aboutus';
import Contactus from './contactus/Contactus';
import Bookinfo from './bookinfo/Bookinfo';






function App  () {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          
            <Route path='/' element={<Home />}/>
            <Route path='/course' element={ <Courses/>}/>
            <Route path='/signup' element={ <Signup/>}/>
            <Route path='/contact' element={ <Contactus/>}/>
            <Route path='/aboutus' element={ <Aboutus/>}/>

           
            <Route path='/Bookinfo/:id' element={<Bookinfo />} />
         

        </Routes>


      </div>
    
   
    </>
  )
}

export default App
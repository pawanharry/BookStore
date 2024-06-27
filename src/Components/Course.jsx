import React from 'react'
import Cards from './Cards'
import list from  '../../public/list.json'
import { Link } from 'react-router-dom'

function Course  () {
  return (
    <>
    <div className='`max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl  md:text-4xl'>Explore captivating stories. <span className='text-pink-500'>Happy reading!</span></h1>
            <p className='mt-12'> Dive into a world of literature where stories come alive and imagination knows no bounds. Whether you're seeking thrilling adventures, heartwarming romances, or profound wisdom, you'll find it all here on our carefully curated books page. Explore our collection, discover new authors, and embark on unforgettable journeys with every turn of the page. </p>
            <Link to='/'>
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'> Back  </button>
            </Link>

           
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
            list.map((item)=> (
                <Cards key={item.id} item={item}/>
            ))
        }
        </div>
        
    </div>
    </>
  )
}

export default Course
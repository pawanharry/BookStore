import React from 'react'
import Cards from './Cards'
import list from  '../../public/list.json'
import { Link } from 'react-router-dom'


function Bookinfor() {
  return (
  
import { useParams } from 'react-router-dom';
import  { useState, useEffect } from 'react'

function Bookinfor() {
  const { id } = useParams(); // Get book id from route parameter
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch('/list.json')
      .then(response => response.json())
      .then(data => {
        // Find the book with the matching id
        const selectedBook = data.find(book => book.id === parseInt(id));
        setBook(selectedBook);
       
        
      })

      .catch(error => console.error('Error fetching data:', error));
    }, [id]); // Fetch data whenever id changes


    if (!book) {
      return <div>Loading...</div>;
    }


  return (
    <>
    
    <div className="  py-8  max-w-screen-2xl container mx-auto md:px-20 px-4 mt-30">
      <div className="mt-28 items-center justify-center text-center">

        {/* Book Details */}
        <div className="bg-white p-4 rounded-lg shadow-lg ">
          <div className="flex justify-center mt-50">
            <img src={book.image} alt={book.title} className=" w-110 h-110 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border" />
          </div>
          <h2 className="text-xl font-bold mb-2 text-black">{book.title}</h2>
          <p className="text-gray-700 mb-2"><span className="font-bold">Author:</span> {book.name}</p>
          <p className="text-gray-700 mb-2"><span className="font-bold">Price:</span> {book.price}</p>
          <p className="text-gray-700 mb-2"><span className="font-bold">Category:</span> {book.category}</p>
          <p className="text-gray-700">{book.description}</p>

        </div>
        <div className='flex items-center justify-center mt-6'>
     
        <button className="px-4 py-2 rounded-full border-2 border-pink-500 bg-pink-500 text-white hover:bg-pink-600 hover:border-pink-600 duration-200 focus:outline-none">
          Proceed To Pay
        </button>
    
    </div>

    

      </div>
     

     
    </div>
    
    



    </>

  )
}

export default Bookinfor
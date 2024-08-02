import React from 'react';
import sample from '../../public/sample.jpg';

function About() {
  return (
    <>

     <div className='mt-28 items-center justify-center text-center'>
     <h1 className='text-pink-500 text-4xl  md:text-6xl'>About Us</h1>
     </div>
        
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-6'>
    
        <div className='w-full mw-1/2 mt-12 md:mt-32' >
            <div className='space-y-12'>
                    <h1 className='text-4xl font-bold'> 
                        Book
                        <span className='text-pink-500'>Haven  </span> 
                     </h1>
                     <p className='text-s md:l  pr-4'>
                     At BookHaven, we pride ourselves on our carefully curated collection of books that spans genres, from thrilling mysteries to heartwarming romances, thought-provoking non-fiction to enchanting children's tales. Our shelves are filled with both timeless classics and the latest bestsellers, ensuring there's always something for everyone to discover.

                    Beyond our extensive selection, BookHaven is a place where reading journeys begin and friendships are formed. Our passionate team of book enthusiasts is here to guide you, offering personalized recommendations and creating a welcoming environment where bookworms can connect and share their love for literature.

                    Whether you're exploring new worlds or revisiting old favorites, we invite you to experience the magic of books at BookHaven. Join us and embark on a literary adventure unlike any other.
                     </p>
                   
              </div>
             
              
        </div>
        
     <div className='w-full mw-1/2 mt-20'>
       <img src={sample} alt='sample.jpg' className='w-88 h-88 pr-4' />
     
     </div>
     </div>
       



    </>
  )
}

export default About
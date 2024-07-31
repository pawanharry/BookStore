import React from 'react'

function Contact() {
  return (
   <>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-pink-500 text-4xl  md:text-6xl'>Contact Us</h1>
         </div>   

        {/* left Column - Contact Form */}
        <div className='flex h-screen items-center justify-center '>

       
           
            <form >    

            {/* Name*/}

            <div className='mt-4 space-y-2'>
                <span>Name</span><br/>
                <input type='text' placeholder='Enter Your Name' className='w-80 px-3 py-1 border rounded-md outline-none'/>

            </div>
            
            
            {/* Email*/}

            <div className='mt-4 space-y-2'>
                <span>Email</span><br/>
                <input type='email' placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none'/>

            </div>

             {/*text*/}

            <div className='mt-4 space-y-2'>
                <span>Message</span><br/>
                <input type='text' placeholder='Enter Your Message' className='w-80 px-3 py-1 border rounded-md outline-none'/>

            </div>

             {/* button*/}

            <div className='flex justify-around  mt-4 '>
                <button className=' bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Contact Us</button>
                
            </div>
            
            </form>

        {/* right Column - Contact Info */}
        <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Contact Information</h2>
            <div className="flex flex-col space-y-2">
                <div>
                   <span className="font-bold">Name:</span> BookHaven
                </div>
                <div>
                    <span className="font-bold">Contact Number:</span> +1 123-456-7890
                </div>
                <div>
                   <span className="font-bold">Email:</span> info@bookhaven.com
                </div>
                <div>
                   <span className="font-bold">Address:</span> 123 Book Street, Toronto, Canada
                </div>
            </div>
        </div>

     </div>

   
   </>
     )
    }

export default Contact
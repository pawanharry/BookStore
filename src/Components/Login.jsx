import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
   <>
    <div>
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          
            <h1 className="text-3xl  text-center text-pink-500 font-bold ">Login</h1>
            
            
            {/* Email*/}

            <div className='mt-4 space-y-2'>
                <span className='text-black'>Email</span><br/>
                <input type='email' placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none'/>

            </div>

             {/* password*/}

            <div className='mt-4 space-y-2'>
                <span className='text-black'>Password</span><br/>
                <input type='password' placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md outline-none'/>

            </div>

             {/* button*/}

            <div className='flex justify-around  mt-4 '>
                <Link to='/' className=' bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</Link>
                <p>Not Registered? 
                    <Link to='/signup' className='underline text-blue-500 cursor-pointer'>SignUp</Link>{''}
                    </p>
            </div>
            </form>
            
        </div>
        </dialog>
    </div>
   </>
  )
}

export default Login
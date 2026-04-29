import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {Link} from 'react-router-dom'

export const Login = () => {
  return (
    <>
    <Navbar/>

    <div className='flex items-center justify-center mt-28'>
      <div className='w-96 border rounded bg-white px-7 py-10'>
        <form>
          <h4 className='text-2xl mb-7'>Login </h4>
            <input type='text' placeholder='Email' className='input-box'/>

            <button  type="submit" className='btn-primary'>Login</button>

            <p>Not regsitered yet?{" "}
              <Link to="/signup" className="font-medium underline">Create and account</Link>
            </p>
         
        </form>
      </div>
    </div>
    </>
  )
}

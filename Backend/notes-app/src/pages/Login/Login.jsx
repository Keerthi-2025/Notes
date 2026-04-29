import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {Link} from 'react-router-dom'
import PasswordInput from '../../components/Input/PasswordInput'

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  return (
    <>
    <Navbar/>

    <div className='flex items-center justify-center mt-28'>
      <div className='w-96 border rounded bg-white px-7 py-10'>
        <form>
          <h4 className='text-2xl mb-7'>Login </h4>
            <input type='text' placeholder='Email' className='input-box'/>

            <PasswordInput/>

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

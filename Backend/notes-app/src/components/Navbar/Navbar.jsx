import React from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

const navigate = useNavigate();

const onLogout =() =>{
  navigate("/login");
}


  return (
    <div className='bg-white px-6 py-2 flex items-center justify-between drop-shadow-2xl'>
        <h2 className='text-xl font-medium py-2'>Notes</h2>

        <ProfileInfo  onLogout={onLogout}/>
    </div>
  )
}

export default Navbar
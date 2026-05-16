import React from 'react'
import ProfileInfo from '../Cards/ProfileInfo'

const Navbar = () => {
  return (
    <div className='bg-white px-6 py-2 flex items-center justify-between drop-shadow-2xl'>
        <h2 className='text-xl font-medium py-2'>Notes</h2>

        <ProfileInfo/>
    </div>
  )
}

export default Navbar
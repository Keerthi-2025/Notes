import React from 'react'

const AddEditNotes = () => {
  return (
    <div>
      <div>
        <label className='input-label'>Title</label>
        <br>
        </br>
        <input 
        type='text'
        className='text-2xl text-slate-950 outline-none'
        placeholder='Go to Gym at 5'/>
      </div>

      <div className='flex flex-col gap-2 mt-4'>
        <label className='input-label'>Content</label>
        <textarea
        type="text"
        placeholder='content'
        className='text-sm outline-none text-slate-900 bg-slate-200 rounded'
        rows={10}/>
      </div>

      <div className='mt-3'>
        <label className='input-label'>Tags</label>
        <TagInput/>
      </div>

      <button className='bg-blue-600 mt-5 w-full p-3 font-medium'>ADD</button>
    </div>
  )
}

export default AddEditNotes
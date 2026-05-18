import React from 'react'

import { MdAdd, MdClose } from 'react-icons/md'

const TagInput = ({tags, setTags}) => {
  return (
    <div>
        <div className='flex items-center gap-4 mt-3'>
            <input type='text' placeholder='Add Tags' className='text-sm bg-transparent px3 py-2 rounded outline-none'/>

            <button className='w-6.5 h-8 items-center justify-center rounded border border-blue-700 hover:bg-blue-700'><MdAdd className='text-2xl text-blue-700 hover:text-white'/></button>
        </div>
    </div>
  )
}

export default TagInput 
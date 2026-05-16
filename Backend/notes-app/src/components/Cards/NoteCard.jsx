import React from 'react'
import {MdOutlinePushPin} from "react-icons/md";
import { MdCreate, MdDelete } from 'react-icons/md';

const NoteCard = ({title, date, content, tags, isPinned, onEdit, onDelete, onPinNote}) => {
  return (
    <div>
        <div className='border rounded-2xl p-4 hover:shadow-xl transition-all ease-in-out'>
            <div className='flex items-center justify-between'>
            <h6 className='text-sm font-medium'>{title}</h6>
            <span className='text-xs text-slate-500'>{date}</span>
            

            <MdOutlinePushPin className={`icon-btn ${isPinned ? 'text-blue-500' : 'text-slate-300'}`} onClick={onPinNote}/>
            </div>

            <p className='text-xs items-center gap-2'>{content?.slice(0,60)}</p>
            
            <div className='flex justify-between gap-2'> 
                <div className='text-xs text-slate-500'>{tags}</div>

                <div>
                    <MdCreate  className='icon-btn hover:text-green-400' onClick={onEdit}/>

                    <MdDelete className='icon-btn hover:text-red-500' onClick={onDelete}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NoteCard
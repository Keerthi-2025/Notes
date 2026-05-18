import React, { useState } from 'react'
import TagInput from '../../components/Input/TagInput'

import { MdClose } from 'react-icons/md';

const AddEditNotes = ({noteData, type, onClose}) => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");  
  const [tags, setTags] = useState([]);

  const [error, setError] = useState(null);


  //add note
  const addNewNote = () =>{};

  //edit note
  const editNote = () =>{};

  const handleAddNote = () =>{
    if(!title){
      setError("Please enter the title");
      return;
    };

    if(!content){
      setError("Please enter the content");
      return;
    };

    setError("");

    if(type === 'edit'){
      editNote();
    }else{
      addNewNote();
    }
  }

  return (
    <div className='relative'>
      <button onClick={onClose}
      className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-500'><MdClose/></button>


      <div>
        <label className='input-label'>Title</label>
        <br>
        </br>
        <input 
        type='text'
        className='text-2xl text-slate-950 outline-none'
        placeholder='Go to Gym at 5'
        value={title}
        onChange={({target}) =>setTitle(target.value)}/>
      </div>

      <div className='flex flex-col gap-2 mt-4'>
        <label className='input-label'>Content</label>
        <textarea
        type="text"
        placeholder='content'
        className='text-sm outline-none text-slate-900 bg-slate-200 rounded'
        rows={10}
        value={content}
        onChange={({target})=> setContent(target.value)}/>
      </div>

      <div className='mt-3'>
        <label className='input-label'>Tags</label>
        <TagInput tags={tags} setTags={setTags}/>

      </div>

      {error && <p className='text-sm text-red-500 pt-4'>{error}</p>}

      <button className='bg-blue-600 mt-5 w-full p-3 font-medium'
      onClick={handleAddNote}>
        ADD
      </button>
    </div>
  )
}

export default AddEditNotes
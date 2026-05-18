import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../components/Cards/NoteCard'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'
import Modal from "react-modal";

const Home = () => {

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    date: null,
  });

  return (

<>
<Navbar/>

<div className='container mx-auto'>
  <div className='grid grid-cols-3 gap-4 mt-8'>
    <NoteCard 
  title="meeting on tommorow"
  date="3rd april 2025"
  content="meeting at 12 morning everyone should come to the office for the meeting"
  isPinned={true}
  onEdit={()=>{}}
  onDelete={()=>{}}
  onPinNote={()=>{}}/>
    </div>
</div>

<button 
onClick={()=>{
  setOpenAddEditModal({isShown: true, type: "add", data: null});
}}
className='w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-400 hover:bg-blue-600 absolute right-10 bottom-10'><MdAdd className='text-2xl text-white'/></button>

<Modal
  isOpen ={openAddEditModal.isShown}
  onRequestClose={() =>{}}
  style={{
    overlay:{
      backgroundColor: "rgba(0,0,0,0,2)",
    },
  }}
  contentLabel =""
  className="w-full max-h-3/4 bg-white mx-auto mt-14 p-5 overflow-scroll"
>

<AddEditNotes
type={openAddEditModal}
noteData={openAddEditModal.data}
onClose={() =>{
  setOpenAddEditModal({isShown: false, type: "add", data: null});

}}/>
</Modal>
</>
  

)
}

export default Home
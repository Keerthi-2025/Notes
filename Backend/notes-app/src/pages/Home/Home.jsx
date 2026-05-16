import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../components/Cards/NoteCard'

const Home = () => {
  return (

<>
<Navbar/>

<div className='container mx-auto'>
  <NoteCard 
  title="meeting on tommorow"
  date="3rd april 2025"
  content="meeting "
  isPinned={true}
  onEdit={()=>{}}
  onDelete={()=>{}}
  onPinNote={()=>{}}/>

</div>

</>
  

)
}

export default Home
import React from 'react'
import Home from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

const App = () => {
  return (
    <div>
      <Home/>
      <Login/>
      <Signup/>
    </div>
  )
}

export default App
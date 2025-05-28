import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import View from './components/view'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Navbar/>
 <Routes>
  <Route path='/add' element={<Add/>}/>
  <Route path='/' element={<View/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/login' element={<Login/>}/>
 </Routes>
 
    </>
  )
}

export default App

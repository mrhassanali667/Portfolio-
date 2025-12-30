import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero.jsx'
import Navbar from './components/layout/Navbar.jsx'

function App() {

  return (
    <div className='bg-[#000319] h-screen w-screen overflow-auto'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App

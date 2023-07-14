// import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Agent from './pages/Agent'
import Maps from './pages/Maps'
import Weapons from './pages/Weapons'
import './App.css'

function App() {
  return (
    <div className='p-14 h-screen'>
      <nav className="flex space-x-4 text-white mb-10">
        <Link to='/agent'>Agent</Link>
        <Link to='/maps'>Maps</Link>
        <Link to='/weapons'>Weapons</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Agent />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/weapons" element={<Weapons />} />
       </Routes>
    </div>
  )
}

export default App

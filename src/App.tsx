// import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Agent from './pages/Agent'
import Maps from './pages/Maps'
import Weapons from './pages/Weapons'
import './App.css'

function App() {
  return (
    <>
      <div>
        <nav className="flex space-x-4 text-white mb-10">
          <Link to='/agent'>Agent</Link>
          <Link to='/maps'>Maps</Link>
          <Link to='/weapons'>Weapons</Link>
          {/* <a href="/agent" className="font-bold px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Agents</a>
          <a href="/maps" className="font-bold px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Maps</a>
          <a href="/weapons" className="font-bold px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Weapons</a> */}
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Agent />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/weapons" element={<Weapons />} />
       </Routes>
    </>
  )
}

export default App

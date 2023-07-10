// import { useState, useEffect } from 'react'
import Agent from './pages/Agent'
import './App.css'

function App() {
  return (
    <>
      <div className='p-20'>
        <nav className="flex space-x-4 text-white mb-10">
          <a href="/agent" className="font-bold px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Agents</a>
          <a href="/maps" className="font-bold px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Maps</a>
          <a href="/weapons" className="font-bold px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Weapons</a>
        </nav>
        <Agent></Agent>
      </div>
    </>
  )
}

export default App

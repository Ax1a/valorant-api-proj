import { Routes, Route } from 'react-router-dom';
import Agent from './pages/Agent'
import Maps from './pages/Maps'
import Weapons from './pages/Weapons'
import bg from './assets/bg.mp4'
import './App.css'

function App() {
  return (
    <>
      <video autoPlay muted loop id="background">
        <source src={bg} type="video/mp4" />
      </video>
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

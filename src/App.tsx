import { useState, useEffect } from 'react'
import './App.css'

const URL = `https://valorant-api.com/v1/agents?isPlayableCharacter=true`

interface Agent {
  uuid: string
  displayName: string
  displayIcon: string
}

function App() {
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
      result.json().then(json => {
        console.log(json)
        setAgents(json.data)
      })
    }
    fetchData()
  }, [])

  return (
    <>
      <div className='p-20 font-poppins'>
        <h1 className='text-4xl font-bold'>Agents</h1>
        <div className="mt-5 flex flex-wrap gap-3">
          {agents.map(agent => 
            <div key={agent.uuid} className='rounded-md bg-slate-400 p-6'>
              <img key={agent.displayIcon} src={agent.displayIcon} alt={agent.displayName} className='w-36 h-36'></img>
              <h2 key={agent.displayName} className='text-xl'>{agent.displayName}</h2>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App

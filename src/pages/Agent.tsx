import { useState, useEffect } from 'react'
import hover from '../assets/sounds/hover.mp3'
import select from '../assets/sounds/select.mp3'

const agentsURL = `https://valorant-api.com/v1/agents?isPlayableCharacter=true`

interface Agent {
  uuid: string
  displayName: string
  displayIcon: string
  description: string
  fullPortrait: string
  background: string
  role: any
  abilities: any
  voiceLine: any
}

const Agent = () => {
  const [agents, setAgents] = useState<Agent[]>([])
  const [agent, setAgent] = useState<Agent>()
  
  const fetchData = async (URL: string, callback: (data: any) => void) => {
    const result = await fetch(URL)
    result.json().then(json => {
      callback(json.data)
    })
  }
  
  useEffect(() => {
    fetchData(agentsURL, setAgents)
  }, [])

  const playSound = (sound: any) => {
    new Audio(sound).play()
  }

  const selectAgent = (UUID: string) => {
    playSound(select)
    fetchData(`https://valorant-api.com/v1/agents/${UUID}?isPlayableCharacter=true`, setAgent)
  }

  return ( 
    <div className='font-poppins text-white'>
      <h1 className='text-4xl font-bold'>Agents</h1>
      <div className='flex flex-row' key={agent?.uuid}>
        <img src={agent?.fullPortrait} alt={agent?.displayName} className='h-80 animate-fade animate-scale'></img>
        <img src={agent?.background} alt={agent?.displayName} className='h-80 animate-fade animate-scale'></img>
        <div className='animate-fade'>
          <p>{agent?.displayName} </p>
          <p>{(agent != null) ? <div>Role</div> : <></>}</p>
          <p>{agent?.role.displayName}</p>
          <p>{agent?.description} </p><br></br>
          <p>{(agent != null) ? <div>Abilities</div> : <></>}</p>
          {agent?.abilities.map((ability: any) => 
            <p>{ability.displayName}</p>  
          )}
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {agents.map(agent => 
          // <AgentButton key={agent.uuid} agent={agent}></AgentButton>
          <button className='bg-white/30 hover:bg-white/60 border-solid border-2 focus:outline-none focus:ring-2 focus:border-yellow-400 focus:ring-yellow-400 md:transition-all' type="button" key={agent.uuid} onMouseOver={() => playSound(hover)} onClick={() => selectAgent(agent.uuid)}>
            <img key={agent.displayIcon} src={agent.displayIcon} alt={agent.displayName} className='w-28 h-28'></img>
          </button>
          // <button key={agent.uuid} className='bg-white/30 hover:bg-white/60 border-solid border-2' type="button">
          //   <img key={agent.displayIcon} src={agent.displayIcon} alt={agent.displayName} className='w-28 h-28'></img>
          // </button>
        )}
      </div>
    </div>
   );
}
 
export default Agent
;
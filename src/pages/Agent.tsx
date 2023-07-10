import { useState, useEffect } from 'react'

const agentsURL = `https://valorant-api.com/v1/agents?isPlayableCharacter=true`

interface Abilities {
  slot: string
  displayName: string
  description: string
  displayIcon: string
}

interface Agent {
  uuid: string
  displayName: string
  displayIcon: string
  description: string
  abilities: Abilities[]
  fullPortrait: string
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

  const selectAgent = (UUID: string) => {
    fetchData(`https://valorant-api.com/v1/agents/${UUID}?isPlayableCharacter=true`, setAgent)
  }

  return ( 
    <div className='font-poppins text-white'>
      <h1 className='text-4xl font-bold'>Agents</h1>
      <div className='flex flex-row'>
        <img src={agent?.fullPortrait} alt={agent?.displayName} className='h-80'></img>
        <div>
          <p>{agent?.displayName} </p>
          <p>{agent?.description} </p><br></br>
          <p>Abilities</p>
          {agent?.abilities.map(ability => 
            <p>{ability.displayName}</p>  
          )}
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {agents.map(agent => 
          // <AgentButton key={agent.uuid} agent={agent}></AgentButton>
          <button className='bg-white/30 hover:bg-white/60 border-solid border-2' type="button" key={agent.uuid} onClick={() => selectAgent(agent.uuid)}>
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
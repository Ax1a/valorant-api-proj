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

const Maps = () => {
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
      <h1 className='text-4xl font-bold'>Maps</h1>
    </div>
   );
}
 
export default Maps
;
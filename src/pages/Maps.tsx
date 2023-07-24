// import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'

// const agentsURL = `https://valorant-api.com/v1/agents?isPlayableCharacter=true`

const Maps = () => {
  // const [agents, setAgents] = useState<Agent[]>([])
  // const [agent, setAgent] = useState<Agent>()
  
  // const fetchData = async (URL: string, callback: (data: any) => void) => {
  //   const result = await fetch(URL)
  //   result.json().then(json => {
  //     callback(json.data)
  //   })
  // }

  // useEffect(() => {
  //   fetchData(agentsURL, setAgents)
  // }, [])

  // const selectAgent = (UUID: string) => {
  //   fetchData(`https://valorant-api.com/v1/agents/${UUID}?isPlayableCharacter=true`, setAgent)
  // }

  return ( 
    <div className='font-poppins text-white px-20 py-7'>
      <NavBar></NavBar>
      <h1 className='text-4xl font-bold mb-5'>Maps</h1>
      <p>Working in Progress...</p>
    </div>
   );
}
 
export default Maps
;
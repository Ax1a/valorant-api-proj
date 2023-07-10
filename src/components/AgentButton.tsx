interface Agent {
  uuid: string
  displayName: string
  displayIcon: string
  fullPortrait: string
}

const AgentButton = ({ agent }: { agent: Agent }) => {
  const selectAgent = () => {
    console.log(agent)
  }

  return ( 
    <button className='bg-white/30 hover:bg-white/60 border-solid border-2' type="button" onClick={selectAgent}>
      <img key={agent.displayIcon} src={agent.displayIcon} alt={agent.displayName} className='w-28 h-28'></img>
    </button>
   );
}
 
export default AgentButton;
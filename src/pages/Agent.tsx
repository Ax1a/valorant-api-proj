import { useState, useEffect } from "react";
import hover from "../assets/sounds/hover.mp3";
import select from "../assets/sounds/select.mp3";
import NavBar from "../components/NavBar";
import "./Fonts.css";

const agentsURL = `https://valorant-api.com/v1/agents?isPlayableCharacter=true`;

interface Agent {
  uuid: string;
  displayName: string;
  displayIcon: string;
  description: string;
  fullPortrait: string;
  background: string;
  role: any;
  abilities: any;
  voiceLine: any;
}

const Agent = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [agent, setAgent] = useState<Agent>();

  const fetchData = async (URL: string, callback: (data: any) => void) => {
    const result = await fetch(URL);
    result.json().then((json) => {
      callback(json.data);
    });
  };

  useEffect(() => {
    fetchData(agentsURL, setAgents);
  }, []);

  const playSound = (sound: any) => {
    new Audio(sound).play();
  };

  const selectAgent = (UUID: string) => {
    playSound(select);
    fetchData(
      `https://valorant-api.com/v1/agents/${UUID}?isPlayableCharacter=true`,
      setAgent
    );
  };

  return (
    <div className="flex flex-col font-poppins text-white h-screen px-20 py-7">
      <NavBar></NavBar>
      <div
        className="flex h-3/4 animate-fade justify-center pt-4"
        key={agent?.uuid}
      >
        <div className="rounded-lg basis-1/3 z-10 p-9 mr-[700px] hover:bg-gray-950/50 hover:z-50 duration-300">
          <h1 className="valorant text-8xl">{agent?.displayName} </h1>
          {agent != null ? <p className="text-2xl font-bold">Role</p> : <></>}
          <p className="text-xl italic">{agent?.role.displayName}</p>
          <br />
          <p>{agent?.description} </p>
          <br></br>
          {agent != null ? (
            <p className="text-2xl font-bold">Abilities</p>
          ) : (
            <></>
          )}
          {agent?.abilities.map((ability: any) => (
            <p key={ability.displayName}>{ability.displayName}</p>
          ))}
        </div>
        <img
          src={agent?.fullPortrait}
          alt={agent?.displayName}
          className="absolute z-20 h-3/5 animate-scale"
        ></img>
        <img
          src={agent?.background}
          alt={agent?.displayName}
          className="absolute h-2/3 -z-50 opacity-20 animate-fade animate-scale2"
        ></img>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto w-full">
        {agents.map((agent) => (
          <button
            className="bg-white/30 hover:bg-white/60 border-solid border-2 focus:outline-none focus:ring-2 focus:border-yellow-400 focus:ring-yellow-400 md:transition-all"
            type="button"
            key={agent.uuid}
            onMouseOver={() => playSound(hover)}
            onClick={() => selectAgent(agent.uuid)}
          >
            <img
              key={agent.displayIcon}
              src={agent.displayIcon}
              alt={agent.displayName}
              className="w-24 h-24"
            ></img>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Agent;

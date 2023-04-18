import React, {useState, useEffect} from "react";
import PokemonPage from "./PokemonPage";

function App() {

const [pokemon, setPokemon] = useState([]) 

useEffect(() => {
  fetch("http://localhost:3001/pokemon")
  .then((res) => res.json())
  .then((data) => setPokemon(data))
}, [])

  return (
    <div className="App">
      <PokemonPage pokemon={pokemon} setPokemon={setPokemon}/>
    </div>
  );
}

export default App;

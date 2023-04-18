import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon, searchedPokemon}) {

const filteredArrayOfPokemon = pokemon.filter((poke) => {
  return poke.name.toLowerCase().includes(searchedPokemon.toLowerCase())
})

const arrayOfPokemon = filteredArrayOfPokemon.map((poke) => {
  return <PokemonCard poke={poke} key={poke.name}/>
})  

  return (
    <Card.Group itemsPerRow={6}>
      <h1>{arrayOfPokemon}</h1>
    </Card.Group>
  );
}

export default PokemonCollection;

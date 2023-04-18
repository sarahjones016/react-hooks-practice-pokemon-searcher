import React, {useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemon, setPokemon}) {

const [searchedPokemon, setSearchedPokemon] = useState("") 

function handleSearch(newSearch) {
    setSearchedPokemon(newSearch)
}

function handleSubmit(newSubmit) {
  setPokemon([...pokemon, newSubmit])
}
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onSubmit={handleSubmit}/>
      <br />
      <Search onSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemon={pokemon} searchedPokemon={searchedPokemon} />
    </Container>
  );
}

export default PokemonPage;

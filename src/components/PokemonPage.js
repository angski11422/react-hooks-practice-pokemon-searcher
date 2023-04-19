import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((resp) => resp.json())
    .then((data) => setPokemons(data))
  }, [])

  const displayPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  })

  function addPokemon(newPokemon) {
    const updatedPokemon = [...pokemons, newPokemon]
    setPokemons(updatedPokemon);
  }
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={addPokemon}/>
      <br />
      <Search search={search} onSearch={setSearch}/>
      <br />
      <PokemonCollection pokemons={displayPokemons}/>
    </Container>
  );
}

export default PokemonPage;

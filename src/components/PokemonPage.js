import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  
  // UseEffect to render each pokemon when the page initially renders
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(data => setPokemons(data))
  }, [])

  // Adds new pokemon to the pokemons array
  function addPokemon(newPokemon) {
    setPokemons([
      ...pokemons,
      newPokemon
    ])
  }

  // Items displayed based on the search value
  const pokemonsDisplayed = pokemons.filter((pokemon) => 
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={addPokemon}/>
      <br />
      <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      <br />
      <PokemonCollection pokemons={pokemonsDisplayed}/>
    </Container>
  );
}

export default PokemonPage;

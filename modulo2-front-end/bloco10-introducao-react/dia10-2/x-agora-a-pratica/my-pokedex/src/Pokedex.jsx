import React, { Component } from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data";

class Pokedex extends Component {
  render() {
    const pokemonCards = pokemons.map((pokemonObj) => <Pokemon key={pokemonObj.id} pokemon={pokemonObj} />);
    return (<>
      {pokemonCards}
    </>);
  }
}

export default Pokedex;

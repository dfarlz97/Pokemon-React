import React from "react";
import PokemonDetail from "./PokemonDetail";

function Pokemon({ pokemon, title }) {
  console.log(pokemon);
  const renderPokemonDetail = pokemon.map((poke) => {
    return (
      <PokemonDetail
        name={poke.name}
        type={poke.type}
        image={poke.image}
        region={poke.region}
        abilities={poke.abilities.ability}
      ></PokemonDetail>
    );
  });
  //   [{}, {}, {}];

  // const {pokemon, title} = props
  return (
    <div>
      <h1
        style={{
          fontFamily: "montserrat",
          color: "Red",
        }}
      >
        {title}
      </h1>

      {renderPokemonDetail}
      {/* <Mewtwo mewtwo={pokemon} />
      <IronValiant /> */}
    </div>
  );
}

export default Pokemon;
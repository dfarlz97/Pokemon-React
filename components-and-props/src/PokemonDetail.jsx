import React from "react";

function PokemonDetail({ name, image, onPokemonSelect }) {
  function handleClick(){
    onPokemonSelect(name);
  }
  
  return (
    <div onClick={handleClick}>
      <img height={250} src={image}></img>
      <p>{name}</p>
    </div>
  );
}

export default PokemonDetail;
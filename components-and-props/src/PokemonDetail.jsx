import React from "react";

function PokemonDetail({name, image, type, region, abilities}) {
  return (
    <div>
        <img src={image} style={{
        width: "25%",
        }}></img> 
            <p>{name}</p>
            <p>Type: {type}</p>
            <p>Region: {region}</p>
            <p>Ability: {abilities}</p>     
    </div>
  );
}
export default PokemonDetail;
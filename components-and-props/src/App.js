import Pokemon from './Pokemon';
import './App.css';

const pokemon = [
  {
    image: "https://archives.bulbagarden.net/media/upload/8/8a/0373Salamence.png",
    name: "Salamence",
    region: "Kanto",
    type: "Dragon",
    abilities: {
      ability: "Intimidate",
    }
  },
  {
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    name: "Mewtwo",
    type: "Psychic",
    region: "Hoenn",
    abilities: {
      ability: "Unnerve"
    }
  },
  {
    image: "https://cosplayfu-website.s3.amazonaws.com/_Upload/b/30cm-Ninetales-Pokemon-Plush-Toy.jpg",
    name: "Ninetales",
    type: "Fire",
    region: "Alola",
    abilities: {
      ability: "Flamethrower",
    }
  },
  ]

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <br></br>
      {/* a prop is an object */}
      {/* a prop is passed as a html attribute */}
      {/* a prop can be named anything */}
      <Pokemon pokemon={pokemon} title={"Pokemon List"} />
    </div>
  );
}
export default App;

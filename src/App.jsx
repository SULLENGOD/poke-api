import { useState } from "react";
import { AddPokemon } from "./components/AddPokemon";
import { GridCard } from "./components/GridCard";

function App() {

  const [ initialPokemon, setInitialPokemon ] = useState(["gengar", "haunter", "gastly", 41, 42, 169]);

  return (
    <>
      <div className="text-center mt-3">
        <h1>Poke API</h1>
        <AddPokemon setInitialPokemon={setInitialPokemon} />
      </div>
      
      <ol className="d-flex flex-wrap m-auto p-0">
        {initialPokemon.map((pokemon) => (
          <GridCard key={pokemon} pokemon={pokemon} />
        ))}
      </ol>
    </>
  );
}

export default App;

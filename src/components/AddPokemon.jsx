import { useState } from "react";
import PropTypes from "prop-types";


export const AddPokemon = ({setInitialPokemon}) => {
  const [inputPokemon, setInputPokemon] = useState("");

  const handleInputChange = (e) => {
    setInputPokemon(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputPokemon.trim().length > 0) {
      setInitialPokemon((poke) => [inputPokemon, ...poke]);
      setInputPokemon("");
    }
  };

  return (
    <form className="p-2" onSubmit={handleSubmit}>
      <input className="form-control mb-3 m-auto shadow-sm" type="text" value={inputPokemon} onChange={handleInputChange} />
    </form>
  );
};


AddPokemon.propTypes = {
  setInitialPokemon: PropTypes.func.isRequired,
};

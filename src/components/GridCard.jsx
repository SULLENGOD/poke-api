import { useFetchPoke } from "../hook/useFetchPoke";
import PropTypes from "prop-types";
import { PokeCard } from "./PokeCard";

export const GridCard = ({ pokemon }) => {
  const { data, loading } = useFetchPoke(pokemon);
  return (
    <>
      

      <PokeCard data={data} loading={ loading }/>
    </>
  );
};

GridCard.propTypes = {
  pokemon: PropTypes.string.isRequired,
};

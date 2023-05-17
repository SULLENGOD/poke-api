import { useEffect, useState } from "react"
import { getPokemon } from "../api/getPokemon";

export const useFetchPoke = ( pokemon ) => {

    const [ data, setData ] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getPokemon(pokemon)
            .then( pokemon => {
                setData({
                    data: pokemon,
                    loading: false
                });
            });
    }, [pokemon]);


  return data
}

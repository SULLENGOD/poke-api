export const getPokemon = async ( pokemon ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`


    const resp = await fetch( url );

    const pokemonData = await resp.json();

    return {
        id: pokemonData.id,
        name: pokemonData.name,
        img: pokemonData.sprites.other.dream_world.front_default
    };

}
import { notFound } from "next/navigation";
import { PokemonResponse, PokemonsResponse, SimplePokemon } from "../types";

export const getPokemons = async (limit: number = 20, offset: number = 0) => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((data) => data.json());

  const pokemons: SimplePokemon[] = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export const getPokemonByName = async (pokemonName: string) => {
  const pokemon: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
    cache: "force-cache",
  })
    .then((res) => res.json())
    .catch(() => notFound());

  return pokemon;
};

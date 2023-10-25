import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import { PokemonsResponse, SimplePokemon } from "@/pokemons/types";

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

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemons <small>estático</small>
        <PokemonGrid pokemons={pokemons} />
      </span>
    </div>
  );
}

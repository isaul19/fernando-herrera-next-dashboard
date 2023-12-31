import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import { getPokemons } from "@/pokemons/utils/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokemons",
  description: "Observa varios pokemones",
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

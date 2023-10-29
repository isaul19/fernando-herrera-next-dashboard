import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import { getPokemons } from "@/pokemons/utils/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "lorem lorem lorem",
};

export default async function FavoritePage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemons Favoritos <small>Global state</small>
        <PokemonGrid pokemons={[]} />
      </span>
    </div>
  );
}

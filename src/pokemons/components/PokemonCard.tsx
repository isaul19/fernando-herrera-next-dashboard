import Image from "next/image";
import { SimplePokemon } from "../types";
import Link from "next/link";
import { Heart } from "lucide-react";

interface Props {
  pokemon: SimplePokemon;
}

const urlBase =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Link href={`/dashboard/pokemons/${pokemon.id}`} className="mx-auto right-0 mt-2 w-60">
      <article className="bg-white rounded overflow-hidden shadow-lg">
        <div className="p-6 bg-gray-800 border-b flex flex-col justify-center items-center">
          <Image
            className="max-w-[100px] max-h-[80px]"
            src={urlBase + pokemon.id + ".svg"}
            width={100}
            height={80}
            alt={`pokemon-${pokemon.name}`}
          />

          <p className="pt-2 text-lg font-semibold text-gray-50">{pokemon.name}</p>
        </div>
        <div className="border-b">
          <button className="px-4 py-2 hover:bg-gray-100 flex gap-4 items-center w-full">
            <Heart className="text-red-400" />
            <p className="text-sm font-medium text-gray-800 leading-none">No está en favoritos</p>
          </button>
        </div>
      </article>
    </Link>
  );
};

"use client";

import Image from "next/image";
import { SimplePokemon } from "../types";
import Link from "next/link";
import { Heart, HeartOffIcon, Satellite } from "lucide-react";
import { useAppSelector } from "@/store";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemon;
}

const urlBase =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

export const PokemonCard = ({ pokemon }: Props) => {
  const isFavorite = useAppSelector((state) => !!state.pokemons[pokemon.id]);
  const dispatch = useDispatch();

  const handleFavorite = (pokemon: SimplePokemon) => {
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <article className="bg-white rounded overflow-hidden shadow-lg  right-0 mt-2 w-60 mx-auto">
      <Link href={`/dashboard/pokemons/${pokemon.name}`}>
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
      </Link>

      <div className="border-b">
        <button
          className="px-4 py-2 hover:bg-gray-100 flex gap-4 items-center w-full"
          onClick={() => handleFavorite(pokemon)}
        >
          {isFavorite ? (
            <>
              <Heart className="text-red-400" />
              <p className="text-sm font-medium text-gray-800 leading-none">Si está en favoritos</p>
            </>
          ) : (
            <>
              <HeartOffIcon className="text-black" />
              <p className="text-sm font-medium text-gray-800 leading-none">No está en favoritos</p>
            </>
          )}
        </button>
      </div>
    </article>
  );
};

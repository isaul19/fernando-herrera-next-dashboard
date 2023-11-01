"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";
import { NotFavoritePokemons } from "./NotFavoritePokemons";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) => state.pokemons);
  const [pokemons] = useState(Object.values(favoritePokemons));

  return pokemons.length ? <PokemonGrid pokemons={pokemons} /> : <NotFavoritePokemons />;
};

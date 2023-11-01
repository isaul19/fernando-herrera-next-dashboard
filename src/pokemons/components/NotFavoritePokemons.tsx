import { HeartCrackIcon } from "lucide-react";
import React from "react";

export const NotFavoritePokemons = () => {
  return (
    <div className="flex h-[vh] items-center justify-center text-3xl gap-5 mt-20">
      <HeartCrackIcon className="text-red-400" />
      No hay favoritos
    </div>
  );
};

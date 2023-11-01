import { FavoritePokemons } from "@/pokemons/components/FavoritePokemons";

export default function FavoritePage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemons Favoritos <small>Global state</small>
        <FavoritePokemons />
      </span>
    </div>
  );
}

import { useGetPokemonsQuery } from '../middleware/graphql/generated';

export function PokemonList() {
  const { data } = useGetPokemonsQuery({
    variables: { limit: 148, offset: 3 },
  });

  console.log(data?.pokemons?.results);

  const pokemons = data?.pokemons?.results;

  if (!pokemons) {
    return <h1>Carregando......</h1>;
  }

  return (
    <div className="grid grid-cols-6 justify-items-center gap-8 p-5">
      {pokemons.map(
        (pokemon) =>
          pokemon && (
            <div className="flex w-40 flex-col rounded-xl border border-gray-200 bg-gray-500">
              <img src={pokemon.image ? pokemon?.image : ''} alt="" />
              <h1 className="mb-5 text-center text-2xl capitalize">
                {pokemon.name}
              </h1>
            </div>
          )
      )}
    </div>
  );
}

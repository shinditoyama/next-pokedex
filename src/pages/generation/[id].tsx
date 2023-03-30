import PokemonCard from "@/components/PokemonCard";
import SEO from "@/components/SEO";
import { useGetPokemon } from "@/lib/useRequest";
import { searchState, typeState } from "@/store/atoms";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

export default function Generation() {
  const router = useRouter();
  const { id } = router.query;
  const [name] = useAtom(searchState);
  const [types] = useAtom(typeState);

  const { data, isLoading, isError } = useGetPokemon(Number(id), name, types);

  return (
    <>
      <SEO title={`Pokédex Generation ${id}`} />
      <SimpleGrid minChildWidth="180px" spacing="20px">
        {isLoading && <Spinner />}
        {isError && <div>Ops! Algo deu errado.</div>}
        {data?.pokemons.map((item: IPokemons) => (
          <PokemonCard key={item.id} pokemon={item} />
        ))}
        {data?.pokemons.length === 0 && (
          <div>Nenhum pokemon foram encontrado.</div>
        )}
      </SimpleGrid>
    </>
  );
}

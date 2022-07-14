import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { useQuery } from "@apollo/client";
import { generationState, nameState, typeState } from "../atoms/pokeAtom";
import Layout from "../components/Layout";
import PokemonCard from "../components/PokemonCard";
import { MotionBox, containerBox } from "../styles/animation";
import { GET_POKEMON_BY_GENERATION } from "../lib/queries/getPokemonByGeneration";
import { IPokemons } from "../types/Pokemon";

export default function Home() {
  const generation = useRecoilValue(generationState);
  const pokemonName = useRecoilValue(nameState);
  const pokemonType = useRecoilValue(typeState);

  const { data, loading } = useQuery(GET_POKEMON_BY_GENERATION, {
    variables: { gid: generation, name: pokemonName, type: pokemonType },
  });

  return (
    <Layout title="Pokédex">
      <MotionBox variants={containerBox} initial="hidden" animate="visible">
        <SimpleGrid minChildWidth="180px" spacing="20px">
          {loading && <Spinner />}
          {data?.pokemons.map((item: IPokemons) => (
            <PokemonCard key={item.id} pokemon={item} />
          ))}
        </SimpleGrid>
      </MotionBox>
    </Layout>
  );
}

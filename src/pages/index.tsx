import { SimpleGrid } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { generationState } from "../atoms/pokeAtom";
import Layout from "../components/Layout";
import PokemonCard from "../components/PokemonCard";
import { MotionBox, containerBox } from "../styles/animation";
import { useQuery } from "../utils/graphql";
import { POKEMON_GENERATION } from "../utils/query";
import { IPokemons } from "../types/Pokemon";

export default function Home() {
  const generation = useRecoilValue(generationState);
  const { data } = useQuery(POKEMON_GENERATION(generation));

  return (
    <Layout title="Pokédex">
      <MotionBox variants={containerBox} initial="hidden" animate="visible">
        <SimpleGrid minChildWidth="180px" spacing="20px">
          {data?.pokemons.map((item: IPokemons) => (
            <PokemonCard key={item.id} pokemon={item} />
          ))}
        </SimpleGrid>
      </MotionBox>
    </Layout>
  );
}

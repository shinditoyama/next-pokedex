import { GetServerSideProps } from "next";
import { SimpleGrid, Heading } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import PokemonInfo from "../../components/PokemonInfo";
import { client } from "../../lib/apollo-client";
import { GET_POKEMON } from "../../lib/queries/getPokemon";
import { IPokemonDetail } from "../../types/Pokemon";

interface Props {
  pokemon: IPokemonDetail;
}

export default function Pokemon({ pokemon }: Props) {
  return (
    <Layout title={pokemon.name}>
      <Heading sx={{ textTransform: "capitalize" }}>{pokemon.name}</Heading>
      <SimpleGrid columns={{ sm: 1, md: 3 }} spacing="10px">
        <PokemonInfo pokemon={pokemon} />
      </SimpleGrid>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { name } = context.params;
  const { data } = await client.query({
    query: GET_POKEMON,
    variables: { name },
  });

  return {
    props: {
      pokemon: data?.pokemon[0],
    },
  };
};

/* export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_ALL_POKEMON,
    variables: { limit: LIMIT },
  });

  const paths = data?.pokemon.map((pokemon: any) => ({
    params: { name: pokemon.name },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { name } = context.params;
  const { data } = await client.query({
    query: GET_POKEMON,
    variables: { name },
  });

  return {
    props: {
      pokemon: data?.pokemon[0],
    },
  };
}; */

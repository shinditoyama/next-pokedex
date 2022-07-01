import { GetServerSideProps } from "next";
import Image from "next/image";
import { gql } from "@apollo/client";
import Layout from "../../components/Layout";
import { IMAGE_URL } from "../../utils/constants";
import { client } from "../../utils/graphql";
import { GET_POKEMONS } from "../../utils/query";
import { IPokemonDetail } from "../../types/Pokemon";

interface Props {
  pokemon: IPokemonDetail;
}

export default function Pokemon({ pokemon }: Props) {
  return (
    <Layout title={`Pokémon | ${pokemon.name}`}>
      <h2>
        #{`00${pokemon.id}`.slice(-3)}. {pokemon.name.toUpperCase()}
      </h2>
      <Image
        src={`${IMAGE_URL}${pokemon.id}.png`}
        width="200%"
        height="200%"
        alt={pokemon.name}
      />
      <p>
        <span>Weight:</span>
        {pokemon.weight}
      </p>
      <p>
        <span>Height:</span>
        {pokemon.height}
      </p>
      <h2>Types</h2>
      {pokemon.types?.map((type, index) => (
        <p key={index}>{type.type.name}</p>
      ))}
      <h2>Status</h2>
      {pokemon.stats?.map((stats, index) => (
        <p key={index}>
          {stats.stat.name}: {stats.base_stat}
        </p>
      ))}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { name } = context.params;
  const { data } = await client.query({
    query: gql`
      ${GET_POKEMONS(name)}
    `,
  });

  return {
    props: {
      pokemon: data.pokemon[0],
    },
  };
};

/* export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${BASE_URL}pokemon?limit=${LIMIT}`);
  const { results } = await response.json();

  const paths = results.map((pokemon: any) => ({
    params: {
      name: pokemon.name,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { name } = context.params;
  const { data } = await client.query({
    query: gql`
      ${GET_POKEMONS(name)}
    `,
  });

  return {
    props: {
      pokemon: data.pokemon[0],
    },
  };
}; */

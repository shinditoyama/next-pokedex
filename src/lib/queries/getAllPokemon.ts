import { gql } from "@apollo/client";

export const GET_ALL_POKEMON = gql`
  query GetAllPokemon($limit: Int!) {
    pokemon: pokemon_v2_pokemon(limit: $limit) {
      id
      name
    }
  }
`;

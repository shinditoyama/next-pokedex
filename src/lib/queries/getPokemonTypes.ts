import { gql } from "@apollo/client";

export const GET_POKEMON_TYPES = gql`
  query GetPokemonTypes {
    types: pokemon_v2_type(limit: 18) {
      id
      name
    }
  }
`;

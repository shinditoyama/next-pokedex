import { gql } from "@apollo/client";

export const GET_POKEMON_BY_GENERATION = gql`
  query GetGeneration($gid: Int!, $name: String, $type: String) {
    pokemons: pokemon_v2_pokemon(
      where: {
        pokemon_v2_pokemonspecy: {
          generation_id: { _eq: $gid }
          name: { _regex: $name }
        }
        is_default: { _eq: true }
        pokemon_v2_pokemontypes: {
          pokemon_v2_type: { name: { _regex: $type } }
        }
      }
      order_by: { id: asc }
    ) {
      id
      name
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          id
          name
        }
      }
    }
  }
`;

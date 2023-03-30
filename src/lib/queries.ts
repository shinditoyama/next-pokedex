import { gql } from "graphql-request";

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

export const GET_POKEMON = gql`
  query GetPokemon($name: String!) {
    pokemon: pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
      id
      name
      height
      weight
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          id
          name
        }
      }
      stats: pokemon_v2_pokemonstats {
        base_stat
        stat: pokemon_v2_stat {
          name
        }
      }
      pokemon_species: pokemon_v2_pokemonspecy {
        evolutionchain: pokemon_v2_evolutionchain {
          pokemon: pokemon_v2_pokemonspecies(order_by: { order: asc }) {
            id
            name
          }
        }
      }
    }
  }
`;

export const GET_TYPE = gql`
  query GetPokemonTypes {
    types: pokemon_v2_type(limit: 18) {
      id
      name
    }
  }
`;

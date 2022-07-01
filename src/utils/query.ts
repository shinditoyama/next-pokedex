import { gql } from "graphql-request";

export const POKEMON_GENERATION = (pid: number) => gql`
  query {
    pokemons: pokemon_v2_pokemonspecies(
      where: { pokemon_v2_generation: { id: { _eq: ${pid} } } }
      order_by: { id: asc }
    ) {
      id
      name
      pokemon_color_id
    }
  }
`;

export const GET_POKEMONS = (name: string) => gql`
  query {
    pokemon: pokemon_v2_pokemon(where: { name: { _eq: ${name} } }) {
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
    }
  }
`;

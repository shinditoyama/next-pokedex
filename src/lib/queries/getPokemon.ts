import { gql } from "@apollo/client";

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

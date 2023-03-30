import { API_URL } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { GET_POKEMON, GET_POKEMON_BY_GENERATION, GET_TYPE } from "./queries";

const graphQLClient = new GraphQLClient(API_URL);

export function useGetPokemon(gid: number, name: string, type: string) {
  return useQuery<any>(["get-pokemon", gid, name, type], async () => {
    const getPokemon = await graphQLClient.request(GET_POKEMON_BY_GENERATION, {
      gid,
      name,
      type,
    });
    return getPokemon;
  });
}

export function useGetPokemonDetail(name: string) {
  return useQuery<any>(["get-detail", name], async () => {
    const getDetail = await graphQLClient.request(GET_POKEMON, { name });
    return getDetail;
  });
}

export function useGetType() {
  return useQuery<any>(["get-type"], async () => {
    const getType = await graphQLClient.request(GET_TYPE);
    return getType;
  });
}

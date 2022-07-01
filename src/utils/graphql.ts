import useSWR from "swr";
import { request } from "graphql-request";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const fetcher = (query: any) =>
  request("https://beta.pokeapi.co/graphql/v1beta", query);

export const useQuery = (query: any) => useSWR(query, fetcher);

export const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

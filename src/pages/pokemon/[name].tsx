// import { queryClient } from "@/lib/query-client";
import SEO from "@/components/SEO";
import { useGetPokemonDetail } from "@/lib/useRequest";
import { IMAGE_URL } from "@/utils/constants";
import { getColor } from "@/utils/getColors";
import {
  Box,
  Center,
  Heading,
  HStack,
  SimpleGrid,
  Spinner,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Pokemon() {
  const router = useRouter();
  const name = router.query?.name as string;
  const { data, isLoading, isError, isSuccess } = useGetPokemonDetail(name);

  const pokemon: IPokemonDetail = data?.pokemon[0];

  return (
    <>
      <SEO title={name} />
      {isLoading && <Spinner />}
      {isError && <div>Ops! Algo deu errado.</div>}
      {isSuccess && (
        <Box>
          <Heading sx={{ textTransform: "capitalize" }}>{pokemon.name}</Heading>
          <SimpleGrid columns={{ sm: 1, md: 3 }} spacing="10px">
            <Box p={4} borderWidth="1px" borderRadius="md" bg="tomato">
              <Center>
                <Image
                  src={`${IMAGE_URL}${
                    pokemon.id < 1000 ? `00${pokemon.id}`.slice(-3) : pokemon.id
                  }.png`}
                  alt={pokemon.name}
                  width="250"
                  height="250"
                  priority
                />
              </Center>
            </Box>
            <Box p={4}>
              <VStack spacing={4} align="stretch">
                <Text>
                  ID:{" "}
                  {pokemon.id < 1000 ? `00${pokemon.id}`.slice(-3) : pokemon.id}
                </Text>
                <Text>Height: {(pokemon.height / 10).toFixed(1)}m</Text>
                <Text>Weight: {(pokemon.weight / 10).toFixed(1)}kg</Text>
                <Text>Types: </Text>
                <HStack justifyContent="flex-start">
                  {pokemon.types?.map((_type) => (
                    <Tag
                      key={_type.type.id}
                      size="lg"
                      borderRadius="base"
                      variant="solid"
                      sx={{ background: getColor(_type.type.id) }}
                    >
                      <TagLabel>{_type.type.name}</TagLabel>
                    </Tag>
                  ))}
                </HStack>
              </VStack>
            </Box>
            <Box p={4}>
              <VStack spacing={4} align="stretch">
                <Text>Status</Text>
                {pokemon.stats?.map((_stats, index) => (
                  <Text key={index}>
                    {_stats.stat.name}: {_stats.base_stat}{" "}
                  </Text>
                ))}
              </VStack>
            </Box>
            <Box p={4}>
              <HStack justifyContent="space-around">
                {pokemon.pokemon_species?.evolutionchain?.pokemon?.map(
                  (evolution) => (
                    <Box
                      key={evolution.id}
                      borderWidth="1px"
                      borderRadius="full"
                      p={2}
                    >
                      <Image
                        src={`${IMAGE_URL}${
                          evolution.id < 1000
                            ? `00${evolution.id}`.slice(-3)
                            : evolution.id
                        }.png`}
                        alt={evolution.name}
                        width="100"
                        height="100"
                      />
                    </Box>
                  )
                )}
              </HStack>
            </Box>
          </SimpleGrid>
        </Box>
      )}
    </>
  );
}

/*export const getStaticProps: GetStaticProps = async (context) => {
  const name = context.params?.name as string;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["get-detail"], () =>
    useGetPokemonDetail(name)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};*/

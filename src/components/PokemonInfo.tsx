import Image from "next/image";
import { Box, Center, VStack, Tag, TagLabel, Text } from "@chakra-ui/react";
import { IPokemonDetail } from "../types/Pokemon";
import { IMAGE_URL } from "../utils/constants";
import { getColors } from "../utils/getColors";

interface Props {
  pokemon: IPokemonDetail;
}

export default function PokemonInfo({ pokemon }: Props) {
  return (
    <>
      <Box p={4} /* borderWidth="1px" borderRadius="md" bg="tomato" */>
        <Center>
          <Image
            src={`${IMAGE_URL}${`00${pokemon.id}`.slice(-3)}.png`}
            width="250%"
            height="250%"
            alt={pokemon.name}
          />
        </Center>
      </Box>
      <Box p={4}>
        <VStack spacing={4} align="stretch">
          <Text>ID: #{`00${pokemon.id}`.slice(-3)}</Text>
          <Text>Height: {(pokemon.height / 10).toFixed(1)}m</Text>
          <Text>Weight: {(pokemon.weight / 10).toFixed(1)}kg</Text>
          <Text>
            Types:
            {pokemon.types?.map((_type, index) => (
              <Tag
                key={index}
                size="lg"
                borderRadius="base"
                variant="solid"
                sx={{ background: getColors(_type.type.id) }}
              >
                <TagLabel>{_type.type.name}</TagLabel>
              </Tag>
            ))}
          </Text>
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
      {/* <Box p={4}>
        <HStack justifyContent="space-around">
          {pokemon.pokemon_species?.evolutionchain?.pokemon?.map(
            (evolution, index) => (
              <Box key={index} borderWidth="1px" borderRadius="full" p={2}>
                <Image
                  src={`${IMAGE_URL}${`00${evolution.id}`.slice(-3)}.png`}
                  width="100%"
                  height="100%"
                  alt={evolution.name}
                />
              </Box>
            )
          )}
        </HStack>
            </Box> */}
    </>
  );
}

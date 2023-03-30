import { MotionBox } from "@/styles/animation";
import { IMAGE_URL } from "@/utils/constants";
import { getColor } from "@/utils/getColors";
import { Badge, Center, Heading, Tag, TagLabel } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  pokemon: IPokemons;
}

export default function PokemonCard({ pokemon }: Props) {
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <MotionBox
        p={3}
        borderWidth="1px"
        borderRadius="md"
        shadow="lg"
        // variants={containerBox}
        whileHover={{ translateY: -5 }}
        sx={{
          background: `linear-gradient(0deg, #fafafa, ${getColor(
            pokemon.types[0].type.id
          )})`,
        }}
      >
        <Badge variant="subtle" fontSize="0.8em">
          {pokemon.id < 1000 ? `00${pokemon.id}`.slice(-3) : pokemon.id}
        </Badge>
        <Center>
          <Image
            src={`${IMAGE_URL}${
              pokemon.id < 1000 ? `00${pokemon.id}`.slice(-3) : pokemon.id
            }.png`}
            alt={pokemon.name}
            width="120"
            height="120"
            priority
          />
        </Center>
        <Heading
          as="h4"
          size="md"
          sx={{ textAlign: "center", textTransform: "capitalize" }}
        >
          {pokemon.name}
        </Heading>
        <Center pt={2} justifyContent="space-around">
          {pokemon.types.map((_type) => (
            <Tag
              key={_type.type.id}
              size="lg"
              borderRadius="full"
              variant="solid"
              sx={{ background: getColor(_type.type.id) }}
            >
              <TagLabel>{_type.type.name}</TagLabel>
            </Tag>
          ))}
        </Center>
      </MotionBox>
    </Link>
  );
}

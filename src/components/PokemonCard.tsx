import Link from "next/link";
import Image from "next/image";
import { Center, Heading, Badge, Tag, TagLabel } from "@chakra-ui/react";
import { MotionBox, itemAnimation } from "../styles/animation";
import { IMAGE_URL } from "../utils/constants";
import { getColors } from "../utils/getColors";
import { IPokemons } from "../types/Pokemon";

interface Props {
  pokemon: IPokemons;
}

export default function PokemonCard({ pokemon }: Props) {
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <a>
        <MotionBox
          p={3}
          borderWidth="1px"
          borderRadius="md"
          shadow="md"
          variants={itemAnimation}
          whileHover={{ translateY: -6 }}
          sx={{
            background: `linear-gradient(0deg, #fafafa, ${getColors(
              pokemon.types[0].type.id
            )})`,
          }}
        >
          <Badge variant="subtle" fontSize="0.8em">
            #{`00${pokemon.id}`.slice(-3)}
          </Badge>
          <Center>
            <Image
              alt={pokemon.name}
              src={`${IMAGE_URL}${`00${pokemon.id}`.slice(-3)}.png`}
              width="120%"
              height="120%"
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
            {pokemon.types.map((_type, index) => (
              <Tag
                key={index}
                size="lg"
                borderRadius="full"
                variant="solid"
                sx={{ background: getColors(_type.type.id) }}
              >
                <TagLabel>{_type.type.name}</TagLabel>
              </Tag>
            ))}
          </Center>
        </MotionBox>
      </a>
    </Link>
  );
}

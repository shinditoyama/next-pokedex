import Link from "next/link";
import Image from "next/image";
import { Center, Heading, Badge } from "@chakra-ui/react";
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
          p={5}
          borderWidth="1px"
          borderRadius="md"
          shadow="md"
          variants={itemAnimation}
          whileHover={{ translateY: -6 }}
          style={{
            background: `linear-gradient(0deg, #fafafa, ${getColors(
              pokemon.pokemon_color_id
            )})`,
          }}
        >
          <Badge variant="subtle" fontSize="0.8em">
            #{`00${pokemon.id}`.slice(-3)}
          </Badge>
          <Center>
            <Image
              alt={pokemon.name}
              src={`${IMAGE_URL}${pokemon.id}.png`}
              width="120%"
              height="120%"
            />
          </Center>
          <Heading
            as="h4"
            size="md"
            style={{ textAlign: "center", textTransform: "capitalize" }}
          >
            {pokemon.name}
          </Heading>
        </MotionBox>
      </a>
    </Link>
  );
}

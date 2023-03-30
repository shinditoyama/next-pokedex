import SEO from "@/components/SEO";
import { SimpleGrid, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <SEO title="Pokédex" />
      <SimpleGrid minChildWidth="180px" spacing="20px">
        <Text fontSize="4xl" fontWeight="bold">
          Bem vindo à Pokédex
        </Text>
      </SimpleGrid>
    </>
  );
}

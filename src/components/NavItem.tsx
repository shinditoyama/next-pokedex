import { Flex, Link, FlexProps } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { generationState } from "../atoms/pokeAtom";

interface LinkItemProps {
  id: number;
  name: string;
}

interface NavItemProps extends FlexProps {
  links: LinkItemProps;
}
export default function NavItem({ links, ...rest }: NavItemProps) {
  const [geracao, setGeracao] = useRecoilState(generationState);

  return (
    <Link
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      onClick={() => setGeracao(links.id)}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        backgroundColor={links.id === geracao ? "cyan.400" : ""}
        color={links.id === geracao ? "white" : ""}
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {links.name}
      </Flex>
    </Link>
  );
}

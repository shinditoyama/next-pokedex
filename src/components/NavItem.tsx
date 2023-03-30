import { Flex, FlexProps } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface LinkItemProps {
  id: number;
  name: string;
}

interface NavItemProps extends FlexProps {
  links: LinkItemProps;
}
export default function NavItem({ links, ...rest }: NavItemProps) {
  const { asPath } = useRouter();

  return (
    <Link href={`/generation/${links.id}`}>
      <Flex
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        backgroundColor={asPath === `/generation/${links.id}` ? "cyan.400" : ""}
        color={asPath === `/generation/${links.id}` ? "white" : ""}
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

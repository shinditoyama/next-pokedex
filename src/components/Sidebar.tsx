import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import NavItem from "./NavItem";
import SearchName from "./SearchName";
import SearchType from "./SearchType";

interface LinkItemProps {
  id: number;
  name: string;
}
const LinkItems: Array<LinkItemProps> = [
  { id: 1, name: "Generation I" },
  { id: 2, name: "Generation II" },
  { id: 3, name: "Generation III" },
  { id: 4, name: "Generation IV" },
  { id: 5, name: "Generation V" },
  { id: 6, name: "Generation VI" },
  { id: 7, name: "Generation VII" },
  { id: 8, name: "Generation VIII" },
  { id: 9, name: "Generation IX" },
];

export default function SidebarWithHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useRouter();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} path={pathname} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => (
  <Box
    transition="3s ease"
    bg={useColorModeValue("white", "gray.900")}
    borderRight="1px"
    borderRightColor={useColorModeValue("gray.200", "gray.700")}
    w={{ base: "full", md: 60 }}
    pos="fixed"
    h="full"
    {...rest}
  >
    <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Link href="/">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Pokédex
        </Text>
      </Link>
      <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
    </Flex>

    {LinkItems.map((link) => (
      <NavItem key={link.id} links={link} />
    ))}
  </Box>
);

interface MobileProps extends FlexProps {
  onOpen: () => void;
  path: string;
}
const MobileNav = ({ onOpen, path, ...rest }: MobileProps) => (
  <Flex
    ml={{ base: 0, md: 60 }}
    px={{ base: 4, md: 4 }}
    height="20"
    alignItems="center"
    bg={useColorModeValue("white", "gray.900")}
    borderBottomWidth="1px"
    borderBottomColor={useColorModeValue("gray.200", "gray.700")}
    justifyContent={{ base: "space-between", md: "flex-end" }}
    {...rest}
  >
    <IconButton
      display={{ base: "flex", md: "none" }}
      onClick={onOpen}
      variant="outline"
      aria-label="open menu"
      icon={<HamburgerIcon />}
      bg="white"
    />

    {path !== "/" && (
      <HStack spacing={{ base: "0", sm: "3", md: "6" }}>
        <SearchType />
        <SearchName />
      </HStack>
    )}
  </Flex>
);

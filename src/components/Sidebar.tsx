import React from "react";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import NavItem from "./NavItem";

interface LinkItemProps {
  id: number;
  name: string;
}
const LinkItems: Array<LinkItemProps> = [
  { id: 1, name: "Geração I" },
  { id: 2, name: "Geração II" },
  { id: 3, name: "Geração III" },
  { id: 4, name: "Geração IV" },
  { id: 5, name: "Geração V" },
  { id: 6, name: "Geração VI" },
  { id: 7, name: "Geração VII" },
  { id: 8, name: "Geração VIII" },
];

export default function SidebarWithHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <MobileNav onOpen={onOpen} />
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
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
      <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
    </Flex>

    {LinkItems.map((link) => (
      <NavItem key={link.id} links={link} />
    ))}
  </Box>
);

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => (
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
    <Text
      display={{ base: "flex", md: "none" }}
      fontSize="2xl"
      fontFamily="monospace"
      fontWeight="bold"
    >
      Logo
    </Text>
  </Flex>
);

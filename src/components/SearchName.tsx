import { searchState } from "@/store/atoms";
import { Input, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

export default function SearchName() {
  const { pathname } = useRouter();
  const [search, setSearch] = useAtom(searchState);

  return (
    <>
      <Text>Name:</Text>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        disabled={pathname.indexOf("/pokemon") === 0}
        size="lg"
        bg="white"
      />
    </>
  );
}

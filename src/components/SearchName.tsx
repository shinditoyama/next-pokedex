import React from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { Input } from "@chakra-ui/react";
import { nameState } from "../atoms/pokeAtom";

export default function SearchName() {
  const [search, setSearch] = useRecoilState(nameState);

  const router = useRouter();
  const { pathname } = router;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <Input
      value={search}
      onChange={onChange}
      placeholder="Search..."
      size="lg"
      disabled={pathname !== "/"}
      bg="white"
    />
  );
}

import React from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { Select } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { typeState } from "../atoms/pokeAtom";
import { GET_POKEMON_TYPES } from "../lib/queries/getPokemonTypes";
import { ITypes } from "../types/Pokemon";

export default function SearchType() {
  const [selected, setSelected] = useRecoilState(typeState);
  const { data } = useQuery(GET_POKEMON_TYPES);

  const router = useRouter();
  const { pathname } = router;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setSelected(event.target.value);
  };

  return (
    <Select
      placeholder="All"
      size="lg"
      value={selected}
      onChange={handleChange}
      disabled={pathname !== "/"}
      bg="white"
    >
      {data?.types.map((item: ITypes) => (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      ))}
    </Select>
  );
}

import { useGetType } from "@/lib/useRequest";
import { typeState } from "@/store/atoms";
import { Select, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

export default function SearchType() {
  const { pathname } = useRouter();
  const { data } = useGetType();
  const [selected, setSelected] = useAtom(typeState);

  return (
    <>
      <Text>Type:</Text>
      <Select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        placeholder="All"
        disabled={pathname.indexOf("/pokemon") === 0}
        size="lg"
        bg="white"
      >
        {data?.types.map((item: IType) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </Select>
    </>
  );
}

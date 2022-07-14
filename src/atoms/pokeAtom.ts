import { atom } from "recoil";

export const generationState = atom({
  key: "GENERATION_STATE",
  default: 1,
});

export const nameState = atom({
  key: "NAME_STATE",
  default: "",
});

export const typeState = atom({
  key: "TYPE_STATE",
  default: "",
});

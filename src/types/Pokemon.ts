export interface IPokemons {
  id: number;
  name: string;
  pokemon_color_id: number;
}

export interface IPokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  types?: [
    {
      type: {
        id: number;
        name: string;
      };
    }
  ];
  stats?: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
}

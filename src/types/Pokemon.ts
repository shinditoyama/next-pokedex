export interface IPokemons {
  id: number;
  name: string;
  types: [
    {
      type: {
        id: number;
        name: string;
      };
    }
  ];
}

export interface IPokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: [
    {
      type: {
        id: number;
        name: string;
      };
    }
  ];
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  pokemon_species: {
    evolutionchain: {
      pokemon: [
        {
          id: number;
          name: string;
        }
      ];
    };
  };
}

export interface ITypes {
  id: number;
  name: string;
}

export type PokemonData = {
  sprites: { front_default: string };
  nome: string;
  id: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
};

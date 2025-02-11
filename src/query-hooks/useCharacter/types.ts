export type CharacterParams = {
  get: {
    memberId: number;
  };
};

export type CharacterResponse = {
  characters: CharacterItem[];
};

export type CharacterItem = {
  ordinalNumber: number;
  bundleId: number;
};

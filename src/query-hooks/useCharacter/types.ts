import type { CharacterKeys } from '@/constants/enums';

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

export type LatestCharacterResponse = {
  characterNo: string;
  characterType: string;
  description: string;
  startDate: string;
  endDate: string;
  keyword: CharacterKeys;
};

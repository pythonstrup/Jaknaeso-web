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
  characterNo: string;
  characterId: number;
  bundleId: number;
  isCompleted: boolean;
};

export type LatestCharacterResponse = {
  characterId: number;
  characterNo: string;
  characterType: CharacterKeys;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type CharacterReports = {
  keyword: CharacterKeys;
  percentage: number;
};

export type CharacterAnalysisResponse = { valueReports: CharacterReports[] };

export type CharacterTrait = { description: string };
export type CharacterTraits = {
  mainTraits: CharacterTrait[];
  strengths: CharacterTrait[];
  weaknesses: CharacterTrait[];
};
export type CharacterReportInfoResponse = LatestCharacterResponse & CharacterTraits;

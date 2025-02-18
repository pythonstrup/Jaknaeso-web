import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CharacterState {
  characterNo: string;
  characterId: number;
  isCompleted: boolean;
}

interface CharacterStoreState {
  character: CharacterState;
  setCharacter: (character: CharacterState) => void;
  //getBundleId: () => number;
}

export const useCharacterStore = create(
  persist<CharacterStoreState>(
    (set, get) => ({
      character: {
        bundleId: 0,
        characterId: 0,
        characterNo: '',
        isCompleted: false,
      },
      setCharacter: (character) => {
        set({ character });
        //setBundleIdToken(String(character.bundleId ?? 0));
      },
      //getBundleId: () => get().character.bundleId,
    }),
    {
      name: 'character',
    },
  ),
);

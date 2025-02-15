import type { PropsWithChildren } from 'react';

import type { CharacterItem } from '@/query-hooks/useCharacter/types';

import CharacterSelectBottomSheet from '../CharacterSelectBottomSheet';
import CharacterSelectButton from '../CharacterSelectButton';
import CharacterTabNav from '../CharacterTabNav';

import styles from './CharacterSelectLayout.module.scss';

type Props = {
  open: boolean;
  selectedCharacter: CharacterItem;
  characters: CharacterItem[];
  onButtonClick: () => void;
  onCloseSheet: () => void;
  onSelect: (character: CharacterItem) => void;
};

export default function CharacterSelectLayout({
  children,
  open,
  selectedCharacter,
  characters,
  onButtonClick,
  onCloseSheet,
  onSelect,
}: PropsWithChildren<Props>) {
  return (
    <div>
      <CharacterSelectButton selectedCharacter={selectedCharacter} onClick={onButtonClick} />
      <CharacterTabNav />
      <div className={styles.content}>{children}</div>
      <CharacterSelectBottomSheet
        open={open}
        characters={characters}
        selectedCharacter={selectedCharacter}
        onCloseSheet={onCloseSheet}
        onSelect={onSelect}
      />
    </div>
  );
}

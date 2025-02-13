import { CheckIcon } from '@/assets/icons';
import { BottomSheet } from '@/components/BottomSheet';
import type { CharacterItem } from '@/query-hooks/useCharacter/types';
import { formatToKoreanOrder } from '@/utils';

import styles from './CharacterSelectBottomSheet.module.scss';

type Props = {
  open: boolean;
  characters: CharacterItem[];
  selectedCharacter: CharacterItem;
  onCloseSheet: () => void;
  onSelect: (character: CharacterItem) => void;
};

const CharacterSelectBottomSheet = ({ open, characters = [], selectedCharacter, onCloseSheet, onSelect }: Props) => {
  return (
    <BottomSheet title="가치관 캐릭터 선택하기" isOpen={open} height={380} closeSheet={onCloseSheet} closeIcon>
      <BottomSheet.Content className={styles.characterList}>
        {Array.isArray(characters) &&
          characters.map((character) => (
            <div key={character.bundleId} className={styles.characterItem} onClick={() => onSelect(character)}>
              <span>{formatToKoreanOrder(character.ordinalNumber)} 캐릭터</span>
              {character.bundleId === selectedCharacter.bundleId && (
                <CheckIcon className={styles.checkIcon} width={24} height={24} />
              )}
            </div>
          ))}
      </BottomSheet.Content>
    </BottomSheet>
  );
};

export default CharacterSelectBottomSheet;

import { BottomSheet } from '@/components/BottomSheet';
import styles from '@/app/(route)/report/components/CharacterSelectBottomSheet.module.scss';
import { CheckIcon } from '@/assets/icons';

type Props = {
  open: boolean;
  characters: Character[];
  selectedCharacter: Character;
  onCloseSheet: () => void;
  onSelect: (character: Character) => void;
};

type Character = {
  id: number;
  name: string;
};

const CharacterSelectBottomSheet = ({ open, characters, selectedCharacter, onCloseSheet, onSelect }: Props) => {
  return (
    <BottomSheet title="가치관 캐릭터 선택하기" isOpen={open} height={380} closeSheet={onCloseSheet} closeIcon>
      <BottomSheet.Content className={styles.characterList}>
        {characters.map((character) => (
          <div key={character.id} className={styles.characterItem} onClick={() => onSelect(character)}>
            <span>{character.name}</span>
            {character.id === selectedCharacter.id && <CheckIcon className={styles.checkIcon} width={24} height={24} />}
          </div>
        ))}
      </BottomSheet.Content>
    </BottomSheet>
  );
};

export default CharacterSelectBottomSheet;

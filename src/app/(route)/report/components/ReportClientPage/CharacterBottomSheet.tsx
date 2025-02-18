import { useState } from 'react';

import { ArrowDown2Icon, CheckIcon } from '@/assets/icons';
import { BottomSheet } from '@/components/BottomSheet';
import { TextButton } from '@/components/TextButton';
import { useGetCharacters } from '@/query-hooks/useCharacter';
import type { CharacterItem } from '@/query-hooks/useCharacter/types';

import styles from './ReportClientPage.module.scss';
interface CharacterProps {
  selectCharacter: CharacterItem;
  onSelectCharacter: (value: CharacterItem) => void;
}
export default function CharacterBottomSheet({ selectCharacter, onSelectCharacter }: CharacterProps) {
  const { data: characterData = { characters: [] } } = useGetCharacters();
  const buttonText = characterData.characters.filter((char) => char.characterId === selectCharacter.characterId)[0]
    ?.characterNo;

  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <TextButton className={styles.characterButton} onClick={() => setOpen(true)}>
        {buttonText && `${buttonText} 캐릭터`}
        <ArrowDown2Icon className={styles.characterButtonIcon} width={24} height={24} />
      </TextButton>
      <BottomSheet
        title="가치관 캐릭터 선택하기"
        isOpen={open}
        height={380}
        closeSheet={() => setOpen(false)}
        closeIcon
      >
        <BottomSheet.Content className={styles.characterList}>
          {characterData.characters.map((character) => (
            <div
              key={character.bundleId}
              className={styles.characterItem}
              onClick={() => {
                onSelectCharacter(character);
                setOpen(false);
              }}
            >
              <span>{`${character.characterNo} 캐릭터`}</span>
              {character.characterId === selectCharacter.characterId && (
                <CheckIcon className={styles.checkIcon} width={24} height={24} />
              )}
            </div>
          ))}
        </BottomSheet.Content>
      </BottomSheet>
    </div>
  );
}

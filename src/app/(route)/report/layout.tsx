'use client';

import type { PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';

import { ArrowDown2Icon, CheckIcon } from '@/assets/icons';
import { BottomSheet } from '@/components/BottomSheet';
import { FooterLayout } from '@/components/Layout/Footer';
import { TabNav } from '@/components/TabNav';
import { TextButton } from '@/components/TextButton';
import { ROUTES } from '@/constants';

import styles from './layout.module.scss';

type Character = {
  id: number;
  name: string;
};

const TABS = [
  {
    href: ROUTES.reportAnalysis,
    label: '캐릭터 분석',
  },
  {
    href: ROUTES.reportQuestions,
    label: '나의 답변 모아보기',
  },
];

const MOCK_CHARACTER1 = {
  id: 1,
  name: '첫번째 캐릭터',
};
const MOCK_CHARACTER2 = {
  id: 2,
  name: '두번째 캐릭터',
};
const MOCK_CHARACTERS = [MOCK_CHARACTER1, MOCK_CHARACTER2];

export default function ReportLayout({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const [characters, setCharacters] = useState<Character[]>(MOCK_CHARACTERS);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();
  const setItem = (key: string, item: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, item);
    }
  };

  const handleCharacter = (character: Character) => {
    setSelectedCharacter(character);
    setOpen(false);
    setItem('character', character.name);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCharacter = localStorage.getItem('character');
      if (storedCharacter) {
        const foundCharacter = MOCK_CHARACTERS.find((char) => char.name === storedCharacter);
        if (foundCharacter) {
          setSelectedCharacter(foundCharacter); // 찾은 캐릭터로 업데이트
        }
      } else {
        setSelectedCharacter(MOCK_CHARACTER1); // 로컬스토리지에 값이 없으면 기본값 설정
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <FooterLayout>
        <TextButton className={styles.characterButton} onClick={() => setOpen(true)}>
          {selectedCharacter?.name}
          <ArrowDown2Icon className={styles.characterButtonIcon} width={24} height={24} />
        </TextButton>
        <TabNav tabs={TABS} />
        {children}
      </FooterLayout>
      <BottomSheet
        title="가치관 캐릭터 선택하기"
        isOpen={open}
        height={380}
        closeSheet={() => setOpen(false)}
        closeIcon
      >
        <BottomSheet.Content className={styles.characterList}>
          {characters.map((character) => (
            <div key={character.id} className={styles.characterItem} onClick={() => handleCharacter(character)}>
              <span>{character.name}</span>
              {character.id === selectedCharacter?.id && (
                <CheckIcon className={styles.checkIcon} width={24} height={24} />
              )}
            </div>
          ))}
        </BottomSheet.Content>
      </BottomSheet>
    </div>
  );
}

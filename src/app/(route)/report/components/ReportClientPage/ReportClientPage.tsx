'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { Tabs } from '@/components/Tabs';
import { ROUTES } from '@/constants';
import type { CharacterItem } from '@/query-hooks/useCharacter/types';
import { useCharacterStore } from '@/stores';

import { AnalysisTab } from '../AnalysisTab';
import { EmptyTab } from '../EmptyTab';
import { QuestionsTab } from '../QuestionsTab';

import CharacterBottomSheet from './CharacterBottomSheet';
import styles from './ReportClientPage.module.scss';

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

interface ReportProps {
  bundleId: number;
  characterId: number;
}

export type SelectCharacter = Omit<CharacterItem, 'characterNo'>;

export default function ReportClientPage({ bundleId, characterId }: ReportProps) {
  const searchParams = useSearchParams().get('type');

  const { character } = useCharacterStore();
  const [selectCharacter, setSelectCharacter] = useState<CharacterItem>({
    characterId,
    bundleId,
    characterNo: '',
    isCompleted: false,
  });

  useEffect(() => {
    if (character.characterNo) {
      setSelectCharacter((prevCharacter) => ({
        ...prevCharacter,
        characterNo: character.characterNo,
        isCompleted: character.isCompleted,
      }));
    }
  }, [character.characterNo]);

  const onSelectCharacter = (character: CharacterItem) => {
    setSelectCharacter(character);
  };

  return (
    <div>
      <div className={styles.header}>
        <CharacterBottomSheet selectCharacter={selectCharacter} onSelectCharacter={onSelectCharacter} />
        <Tabs tabs={TABS} />
      </div>
      <div className={styles.content}>
        {searchParams === 'analysis' && selectCharacter?.isCompleted && (
          <AnalysisTab bundleId={String(selectCharacter.bundleId)} characterId={String(selectCharacter.characterId)} />
        )}
        {searchParams === 'analysis' && !selectCharacter?.isCompleted && (
          <EmptyTab
            title={`${selectCharacter.characterNo} 캐릭터를\n만드는 중이에요`}
            subTitle={'15일 간의 가치관 질문에\n응답하면 캐릭터가 완성돼요.'}
          />
        )}
        {searchParams === 'questions' && <QuestionsTab bundleId={selectCharacter.bundleId} />}
      </div>
    </div>
  );
}
// /api/v1/characters/{characterId}

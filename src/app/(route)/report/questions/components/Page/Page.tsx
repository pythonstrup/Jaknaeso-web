'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import dayjs from 'dayjs';

import type { CharacterItem } from '@/query-hooks/useCharacter/types';
import { useGetCharacters } from '@/query-hooks/useCharacter';
import { useMemberStore } from '@/stores';
import { useGetSubmissions } from '@/query-hooks/useSurvey';
import CharacterSelectLayout from '@/app/(route)/report/components/CharacterSelectLayout';
import { Card } from '@/components/Card';

import styles from './Page.module.scss';
import { useCharacterStore } from '@/stores/useCharacter';

export default function ReportQuestionsPage() {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();

  const focusIndex = searchParams.get('focus') ? Number(searchParams.get('focus')) - 1 : null;
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (focusIndex !== null && cardRefs.current[focusIndex]) {
      cardRefs.current[focusIndex]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [focusIndex]);

  const { data: characterData = { characters: [] } } = useGetCharacters({ memberId: useMemberStore().getMemberId() });
  const { character, setCharacter } = useCharacterStore();

  const { data: submissionData = { surveyRecords: [] } } = useGetSubmissions(
    useMemberStore().getMemberId(),
    String(character.bundleId),
  );

  const handleCharacter = (character: CharacterItem) => {
    setCharacter(character);
    setOpen(false);
  };

  const formatDate = (date: string) => {
    const format = 'M월 D일';
    return dayjs(date, 'YYYY.MM.DD').format(format);
  };

  return (
    <CharacterSelectLayout
      open={open}
      selectedCharacter={character}
      characters={characterData.characters}
      onButtonClick={() => setOpen(true)}
      onCloseSheet={() => setOpen(false)}
      onSelect={handleCharacter}
    >
      <div className={styles.contentContainer}>
        {submissionData.surveyRecords.map((question, index) => (
          <Card
            key={question.submissionId}
            count={index + 1}
            date={formatDate(question.submittedAt)}
            question={question.question}
            answer={question.answer}
            retrospective={question.retrospective}
            className={styles.card}
          />
        ))}
      </div>
    </CharacterSelectLayout>
  );
}

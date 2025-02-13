'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import dayjs from 'dayjs';

import { Card } from '@/components/Card';
import { useGetCharacters } from '@/query-hooks/useCharacter';
import type { CharacterItem } from '@/query-hooks/useCharacter/types';
import { useGetSubmissions } from '@/query-hooks/useSurvey';
import { useMemberStore } from '@/stores';

import CharacterSelectLayout from '../components/CharacterSelectLayout';

import styles from './page.module.scss';

export default function ReportQuestions() {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();

  const focusIndex = searchParams.get('focus') ? Number(searchParams.get('focus')) - 1 : null;
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (focusIndex !== null && cardRefs.current[focusIndex]) {
      cardRefs.current[focusIndex]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [focusIndex]);
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterItem>({ ordinalNumber: 0, bundleId: 0 });

  const { data: characterData = { characters: [] } } = useGetCharacters({ memberId: useMemberStore().getMemberId() });
  const { data: submissionData = { surveyRecords: [] } } = useGetSubmissions(
    useMemberStore().getMemberId(),
    String(selectedCharacter.bundleId),
  );

  const handleCharacter = (character: CharacterItem) => {
    setSelectedCharacter(character);
    setOpen(false);
  };

  const formatDate = (date: string) => {
    const format = 'M월 D일';
    return dayjs(date).format(format);
  };

  useEffect(() => {
    if (characterData && characterData.characters.length > 0) {
      setSelectedCharacter(characterData.characters[0]);
    }
  }, [characterData]);

  return (
    <CharacterSelectLayout
      open={open}
      selectedCharacter={selectedCharacter}
      characters={characterData.characters}
      onButtonClick={() => setOpen(true)}
      onCloseSheet={() => setOpen(false)}
      onSelect={handleCharacter}
    >
      <div className={styles.contentContainer}>
        {submissionData.surveyRecords.map((question, index) => (
          <Card
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            key={index}
            count={index + 1}
            date={formatDate(question.submittedAt)}
            question={question.question}
            answer={question.answer}
            retrospective={question.retrospective}
            isOpen={focusIndex === index}
            className={styles.card}
          />
        ))}
      </div>
    </CharacterSelectLayout>
  );
}

'use client';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { Card } from '@/components/Card';
import styles from './page.module.scss';
import CharacterSelectLayout from '../components/CharacterSelectLayout';
import { useGetCharacters } from '@/query-hooks/useCharacter';
import { useMemberStore } from '@/stores';
import type { CharacterItem } from '@/query-hooks/useCharacter/types';
import { useGetSubmissions } from '@/query-hooks/useSurvey';

export default function ReportQuestions() {
  const [open, setOpen] = useState(false);
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
            key={index}
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

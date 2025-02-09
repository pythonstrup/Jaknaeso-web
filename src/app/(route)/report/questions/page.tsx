'use client';

import { useState } from 'react';
import dayjs from 'dayjs';

import CharacterSelectBottomSheet from '@/app/(route)/report/components/CharacterSelectBottomSheet';
import CharacterSelectButton from '@/app/(route)/report/components/CharacterSelectButton';
import CharacterTabNav from '@/app/(route)/report/components/CharacterTabNav';
import { Card } from '@/components/Card';

import styles from './page.module.scss';

type Character = {
  id: number;
  name: string;
};

type Question = {
  date: string;
  question: string;
  answer: string;
  retrospective: string;
};

const mockQuestions: Question[] = [];

const MOCK_CHARACTER1 = {
  id: 1,
  name: '첫번째 캐릭터',
};
const MOCK_CHARACTERS = [MOCK_CHARACTER1];

export default function ReportQuestions() {
  const [open, setOpen] = useState(false);
  const [characters, setCharacters] = useState<Character[]>(MOCK_CHARACTERS);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(MOCK_CHARACTER1);
  const [questions, setQuestions] = useState(mockQuestions);

  const handleCharacter = (character: Character) => {
    setSelectedCharacter(character);
    setOpen(false);
  };

  const formatDate = (date: string) => {
    const format = 'M월 D일';
    return dayjs(date).format(format);
  };

  return (
    <div>
      <CharacterSelectButton selectedCharacterName={selectedCharacter.name} onClick={() => setOpen(true)} />
      <CharacterTabNav />
      <div className={styles.contentContainer}>
        {questions.map((question, index) => (
          <Card
            key={index}
            count={index + 1}
            date={formatDate(question.date)}
            question={question.question}
            answer={question.answer}
            retrospective={question.retrospective}
            className={styles.card}
          />
        ))}
      </div>
      <CharacterSelectBottomSheet
        open={open}
        characters={characters}
        selectedCharacter={selectedCharacter}
        onCloseSheet={() => setOpen(true)}
        onSelect={handleCharacter}
      />
    </div>
  );
}

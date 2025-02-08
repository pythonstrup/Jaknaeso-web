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

type Month = {
  month: string;
  disabled: boolean;
};

const mockQuestions = Array.from({ length: 1 }, (_, i) => {
  return {
    date: `2025-01-${String(i + 1).padStart(2, '0')}`,
    question: '커리어를 향상시킬 수 있는 일자리이지만 가까운 사람들과 멀어져야한다면, 이 일자리를 선택하실 건가요?',
    answer: '주변 사람과 물리적으로 멀어지더라도, 커리어를 선택한다.',
    retrospective:
      '가까운 사람들과 물리적으로 멀어지더라도 그 관계가 사라지진 않음.  내 노력에 따라 관계는 달라질 수 있지만 커리어 기회는 원할 때 오는게 아님',
  };
});

const MOCK_CHARACTER1 = {
  id: 1,
  name: '첫번째 캐릭터',
};
const MOCK_CHARACTER2 = {
  id: 2,
  name: '두번째 캐릭터',
};
const MOCK_CHARACTERS = [MOCK_CHARACTER1, MOCK_CHARACTER2];

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

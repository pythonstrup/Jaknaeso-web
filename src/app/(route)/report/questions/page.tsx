'use client';

import { useState } from 'react';

import { TextButton } from '@/components/TextButton';
import { BottomSheet } from '@/components/BottomSheet';
import { Card } from '@/components/Card';
import styles from './page.module.scss';
import dayjs from 'dayjs';
import { CheckIcon } from '@/assets/icons';

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

const mockQuestions = Array.from({ length: 10 }, (_, i) => {
  return {
    date: `2025-01-${String(i + 1).padStart(2, '0')}`,
    question: '커리어를 향상시킬 수 있는 일자리이지만 가까운 사람들과 멀어져야한다면, 이 일자리를 선택하실 건가요?',
    answer: '주변 사람과 물리적으로 멀어지더라도, 커리어를 선택한다.',
    retrospective:
      '가까운 사람들과 물리적으로 멀어지더라도 그 관계가 사라지진 않음.  내 노력에 따라 관계는 달라질 수 있지만 커리어 기회는 원할 때 오는게 아님',
  };
});

const month1 = {
  month: '2025년 3월',
  disabled: false,
};
const month2 = {
  month: '2025년 2월',
  disabled: true,
};
const month3 = {
  month: '2025년 1월',
  disabled: false,
};
const mockMonths = [month1, month2, month3];

export default function ReportQuestions() {
  const [open, setOpen] = useState(false);
  const [months, setMonths] = useState<Month[]>(mockMonths);
  const [selectedMonth, setSelectedMonth] = useState<Month>(month1);
  const formatDate = (date: string) => {
    const format = 'M월 D일';
    return dayjs(date).format(format);
  };

  const [questions, setQuestions] = useState(mockQuestions);

  const handleMonth = (month: Month) => {
    if (!month.disabled) {
      setSelectedMonth(month);
      setOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      <TextButton className={styles.monthButton} onClick={() => setOpen(true)}>
        {selectedMonth.month}
      </TextButton>
      <BottomSheet title="월 선택하기" isOpen={open} height={380} closeSheet={() => setOpen(false)} closeIcon>
        <BottomSheet.Content className={styles.monthList}>
          {months.map((month) => (
            <div
              key={month.month}
              className={`${styles.item} ${month.disabled ? styles.disabled : ''}`}
              onClick={() => handleMonth(month)}
            >
              <span>{month.month}</span>
              {month.month === selectedMonth.month && <CheckIcon className={styles.checkIcon} width={24} height={24} />}
              {month.disabled && <span className={styles.noAnswer}>답변 없음</span>}
            </div>
          ))}
        </BottomSheet.Content>
      </BottomSheet>
      {questions.map((question, index) => (
        <Card
          key={index}
          date={formatDate(question.date)}
          question={question.question}
          answer={question.answer}
          retrospective={question.retrospective}
          className={styles.card}
        />
      ))}
    </div>
  );
}

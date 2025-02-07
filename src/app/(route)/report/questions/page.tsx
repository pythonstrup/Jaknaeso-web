'use client';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { Card } from '@/components/Card';

import styles from './page.module.scss';

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

export default function ReportQuestions() {
  const formatDate = (date: string) => {
    const format = 'M월 D일';
    return dayjs(date).format(format);
  };

  const [questions, setQuestions] = useState(mockQuestions);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const report = localStorage.getItem('report');
      const retrospective = localStorage.getItem('retrospective');

      if (!report) return;
      setQuestions([
        {
          ...JSON.parse(report),
          retrospective,
        },
      ]);
    }
  }, []);

  return (
    <div className={styles.container}>
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
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { Skeleton } from '@radix-ui/themes';

import { Card } from '@/components/Card';
import { useGetSubmissions } from '@/query-hooks/useSurvey';
import { formatDate } from '@/utils';

import { EmptyTab } from '../EmptyTab';

import styles from './QuestionsTab.module.scss';

export default function QuestionsTab({ bundleId }: { bundleId: number }) {
  const searchParams = useSearchParams();
  const focusIndex = searchParams.get('focus') ? Number(searchParams.get('focus')) - 1 : null;
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { data: submissionData = { surveyRecords: [] }, isLoading } = useGetSubmissions(String(bundleId));

  useEffect(() => {
    if (focusIndex !== null && cardRefs.current[focusIndex]) {
      const cardElement = cardRefs.current[focusIndex];
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [focusIndex]);

  if (submissionData.surveyRecords.length === 0 && !isLoading) {
    return <EmptyTab title={'아직 작성하신 회고가 없어요'} subTitle={'가치관 질문에 회고를 작성해보세요.'} />;
  }

  return (
    <div className={styles.contentContainer}>
      {submissionData.surveyRecords.map((question, index) => (
        <Skeleton key={question.submissionId} loading={isLoading}>
          <Card
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            count={index + 1}
            date={formatDate(question.submittedAt)}
            question={question.question}
            answer={question.answer}
            isOpen={focusIndex === index}
            retrospective={question.retrospective}
            className={styles.card}
          />
        </Skeleton>
      ))}
    </div>
  );
}

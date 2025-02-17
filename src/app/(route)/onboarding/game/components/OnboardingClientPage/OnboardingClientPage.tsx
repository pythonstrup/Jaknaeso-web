'use client';
import { useState } from 'react';

import { Button } from '@/components/Button';
import { Chip } from '@/components/Chip';
import { Slider } from '@/components/Slider';
import { useGetOnboarding, useSubmitOnboarding } from '@/query-hooks/useSurvey';
import type { AnswerType, SurveyOption } from '@/query-hooks/useSurvey/types';

import styles from './OnboardingClientPage.module.scss';

const initialData = [
  {
    id: 0,
    contents: '',
    options: [
      {
        id: 1,
        optionContents: '매우 동의해요',
      },
    ],
    surveyType: 'ONBOARDING',
  },
];

const MultipleChoice = ({
  options,
  value,
  onSelect,
}: {
  options: SurveyOption[];
  value: number;
  onSelect: (id: number) => void;
}) => (
  <div className={styles.sliderContainer}>
    <Slider options={options} value={value} setValue={onSelect} />
  </div>
);

export default function OnboardingClientPage() {
  const { data } = useGetOnboarding();
  const surveyResponses = data?.surveyResponses ?? initialData;

  const [currentSurveyIndex, setCurrentSurveyIndex] = useState(0);
  const [answer, setAnswer] = useState(surveyResponses[0].options[0].id);
  const [answerList, setAnswerList] = useState<{ [key: number]: AnswerType }>({});
  const submitOnboardingSurvey = useSubmitOnboarding();

  const onClick = (type: 'prev' | 'next') => {
    setAnswerList((prev) => ({
      ...prev,
      [currentSurveyIndex]: {
        surveyId: surveyResponses[currentSurveyIndex].id,
        optionId: answer,
      },
    }));
    if (type === 'prev') {
      setCurrentSurveyIndex((prev) => prev - 1);
      setAnswer(surveyResponses[currentSurveyIndex - 1].options[0].id);
    } else {
      setCurrentSurveyIndex((prev) => prev + 1);
      setAnswer(surveyResponses[currentSurveyIndex + 1].options[0].id);
    }
  };

  const submitOnboarding = () => {
    const result = Object.values(answerList);
    result.push({
      surveyId: surveyResponses[currentSurveyIndex].id,
      optionId: answer,
    });

    submitOnboardingSurvey.mutate({
      submissionsInfo: result,
    });
  };

  const isLast = currentSurveyIndex === surveyResponses.length - 1;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Chip color="brand" size="big">
          {currentSurveyIndex + 1} <span className={styles.blue300}>/ {surveyResponses.length}</span>
        </Chip>
        <h3 className={styles.title}>{surveyResponses[currentSurveyIndex].contents}</h3>
      </div>

      <div className={styles.content}>
        <MultipleChoice options={surveyResponses[currentSurveyIndex].options} value={answer} onSelect={setAnswer} />
      </div>

      <div className={styles.footer}>
        {isLast ? (
          <Button onClick={submitOnboarding} className={styles.button}>
            완료
          </Button>
        ) : (
          <>
            {currentSurveyIndex > 0 && (
              <Button color="neutral" onClick={() => onClick('prev')} className={styles['button__half']}>
                이전으로
              </Button>
            )}
            <Button
              onClick={() => onClick('next')}
              className={currentSurveyIndex > 0 ? styles['button__half'] : styles.button}
            >
              다음으로
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

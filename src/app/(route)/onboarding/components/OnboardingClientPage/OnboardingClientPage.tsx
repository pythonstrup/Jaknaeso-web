'use client';
import { useState } from 'react';

import { Button } from '@/components/Button';
import { Chip } from '@/components/Chip';
import { Slider } from '@/components/Slider';
import { useSubmitOnboarding } from '@/query-hooks/useSurvey';
import type { SurveyOption } from '@/query-hooks/useSurvey/types';

import styles from './OnboardingClientPage.module.scss';

const MOCK_DATA = [
  {
    id: 1,
    contents:
      '새로운 아이디어를 갖고 창의적인 것이 그/그녀에게 중요하다. 그/그녀는 일을 자신만의 독특한 방식으로 하는 것을 좋아한다.',
    surveyType: 'ONBOARDING',
    options: [
      {
        id: 1,
        optionContents: '전혀 나와 같지 않다.',
      },
      {
        id: 2,
        optionContents: '나와 같지 않다.',
      },
      {
        id: 3,
        optionContents: '나와 조금 같다.',
      },
      {
        id: 4,
        optionContents: '나와 같다.',
      },
      {
        id: 5,
        optionContents: '나와 매우 같다.',
      },
    ],
  },
  {
    id: 2,
    contents: '그/그녀에게 부자가 되는 것은 중요하다. 많은 돈과 비싼 물건들을 가지길 원한다.',
    surveyType: 'ONBOARDING',
    options: [
      {
        id: 6,
        optionContents: '전혀 나와 같지 않다.',
      },
      {
        id: 7,
        optionContents: '나와 같지 않다.',
      },
      {
        id: 8,
        optionContents: '나와 조금 같다.',
      },
      {
        id: 9,
        optionContents: '나와 같다.',
      },
      {
        id: 10,
        optionContents: '나와 매우 같다.',
      },
    ],
  },
  {
    id: 3,
    contents:
      '세상의 모든 사람들이 평등하게 대우받아야 한다고 생각한다. 그/그녀는 모든 사람이 인생에서 동등한 기회를 가져야 한다고 믿는다.',
    surveyType: 'ONBOARDING',
    options: [
      {
        id: 11,
        optionContents: '전혀 나와 같지 않다.',
      },
      {
        id: 12,
        optionContents: '나와 같지 않다.',
      },
      {
        id: 13,
        optionContents: '나와 조금 같다.',
      },
      {
        id: 14,
        optionContents: '나와 같다.',
      },
      {
        id: 15,
        optionContents: '나와 매우 같다.',
      },
    ],
  },
  {
    id: 4,
    contents: '그/그녀에게 자신의 능력을 보여주는 것이 매우 중요하다. 사람들이 자신이 하는 일을 인정해주길 바란다.',
    surveyType: 'ONBOARDING',
    options: [
      {
        id: 16,
        optionContents: '전혀 나와 같지 않다.',
      },
      {
        id: 17,
        optionContents: '나와 같지 않다.',
      },
      {
        id: 18,
        optionContents: '나와 조금 같다.',
      },
      {
        id: 19,
        optionContents: '나와 같다.',
      },
      {
        id: 20,
        optionContents: '나와 매우 같다.',
      },
    ],
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

type AnswerType = {
  surveyId: number;
  optionId: number;
};

export default function OnboardingClientPage() {
  // 현재 온보딩 데이터 내려오지 않음 - MOCK_DATA 사용, 이후 변경 예정
  //const { data } = useGetOnboarding();
  const data = MOCK_DATA;
  const [currentSurveyIndex, setCurrentSurveyIndex] = useState(0);
  const [answer, setAnswer] = useState(data[0].options[0].id);
  const [answerList, setAnswerList] = useState<{ [key: number]: AnswerType }>({});
  const submitOnboardingSurvey = useSubmitOnboarding();

  const onClick = (type: 'prev' | 'next') => {
    setAnswerList((prev) => ({
      ...prev,
      [currentSurveyIndex]: {
        surveyId: data[currentSurveyIndex].id,
        optionId: answer,
      },
    }));
    if (type === 'prev') {
      setCurrentSurveyIndex((prev) => prev - 1);
      setAnswer(data[currentSurveyIndex - 1].options[0].id);
    } else {
      setCurrentSurveyIndex((prev) => prev + 1);
      setAnswer(data[currentSurveyIndex + 1].options[0].id);
    }
  };

  const submitOnboarding = () => {
    const result = Object.values(answerList);
    result.push({
      surveyId: data[currentSurveyIndex].id,
      optionId: answer,
    });

    submitOnboardingSurvey.mutate({
      submissionsInfo: result,
    });
  };

  const isLast = currentSurveyIndex === data.length - 1;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Chip color="brand" size="big">
          {currentSurveyIndex + 1} <span className={styles.blue300}>/ {data.length}</span>
        </Chip>
        <h3 className={styles.title}>{data[currentSurveyIndex].contents}</h3>
      </div>

      <div className={styles.content}>
        <MultipleChoice options={data[currentSurveyIndex].options} value={answer} onSelect={setAnswer} />
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

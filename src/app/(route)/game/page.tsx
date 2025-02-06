'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Slider } from '@/components/Slider';
import { ROUTES } from '@/constants';

import FlipCard from './components/FlipCard';
import GamePageLayout from './components/GameLayout';
import styles from './page.module.scss';

const MOCK_DATA_BALANCE = {
  id: 1,
  contents:
    '친구들과 함께 여행을 계획하는 중이다.\n하지만 여행 스타일에 대한 의견이 갈린다. \n한 친구는 세부 일정을 미리 정해야 한다고 주장하지만, 다른 친구는 즉흥적으로 현지에서 결정하는 것이 여행의 묘미라고 말한다.',
  surveyType: 'BALANCE',
  options: [
    {
      id: 1,
      optionContents: '세부 일정을 철저히 계획하고 여행한다.',
    },
    {
      id: 2,
      optionContents: '계획 없이 즉흥적으로 여행을 즐긴다.',
    },
  ],
};

const MOCK_DATA_MULTIPLE = {
  id: 2,
  contents: '나는 일을 할 때, 결과보다는 과정에서 얻는 경험과 배움이 더 중요하다고 생각한다',
  surveyType: 'MULTIPLE_CHOICE',
  options: [
    {
      id: 1,
      optionContents: '1점',
    },
    {
      id: 2,
      optionContents: '2점',
    },
    {
      id: 3,
      optionContents: '3점',
    },
    {
      id: 4,
      optionContents: '4점',
    },
    {
      id: 5,
      optionContents: '5점',
    },
  ],
};

type SurveyType = 'balance' | 'multiple';

const MOCK_DATA: Record<SurveyType, typeof MOCK_DATA_BALANCE | typeof MOCK_DATA_MULTIPLE> = {
  balance: MOCK_DATA_BALANCE,
  multiple: MOCK_DATA_MULTIPLE,
};

const MultipleChoice = () => {
  const [value, setValue] = useState(50);
  return (
    <div className={styles.sliderContainer}>
      <Slider value={value} setValue={setValue} />
    </div>
  );
};

export default function Game() {
  const [surveyType, setSurveyType] = useState<SurveyType>('balance');
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const goToResultPage = () => {
    router.push(ROUTES.gameComplete);
  };

  const getSurveyType = () => {
    if (localStorage.getItem('surveyType')) {
      const type = localStorage.getItem('surveyType');
      return type;
    }
    return 'balance';
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const type = getSurveyType() as SurveyType;
      setSurveyType(type);
    }
  }, []);

  const survey = MOCK_DATA[surveyType];

  return (
    <GamePageLayout
      title={survey.contents}
      isOpen={open}
      openSheet={() => setOpen(true)}
      closeSheet={() => setOpen(false)}
      goToResultPage={goToResultPage}
      className={surveyType === 'balance' ? styles.container : ''}
    >
      {surveyType === 'balance' ? <FlipCard options={survey.options} /> : <MultipleChoice />}
    </GamePageLayout>
  );
}

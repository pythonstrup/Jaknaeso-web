import type { PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';
import cn from 'classnames';

import { ArrowLeft2Icon } from '@/assets/icons';
import { Button } from '@/components/Button';
import { ROUTES } from '@/constants';

import GameBottomSheet from '../GameBottomSheet';

import styles from './GameLayout.module.scss';

type SurveyType = 'balance' | 'multiple';

interface GamePageLayoutProps {
  title: string;
  isOpen: boolean;
  closeSheet: () => void;
  goToResultPage: () => void;
  openSheet: () => void;
  className?: string;
  surveyType: SurveyType;
}

export default function GamePageLayout({
  children,
  title,
  isOpen,
  openSheet,
  closeSheet,
  goToResultPage,
  className,
  surveyType,
}: PropsWithChildren<GamePageLayoutProps>) {
  const router = useRouter();
  const goHomePage = () => router.push(ROUTES.home);
  const isBalance = surveyType === 'balance';

  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.topBar}>
        <ArrowLeft2Icon width="1.875rem" height="1.875rem" onClick={goHomePage} />
        <h3 className="title4">오늘의 질문</h3>
      </div>
      <div className={cn(styles.header, isBalance && styles.balanceHeader)}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <Button onClick={openSheet}>결정하기</Button>
        <GameBottomSheet isOpen={isOpen} closeSheet={closeSheet} goToResultPage={goToResultPage} />
      </div>
    </div>
  );
}

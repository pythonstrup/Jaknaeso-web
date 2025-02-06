'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useCycle } from 'framer-motion';

import { ArrowRightIcon } from '@/assets/icons';
import { BottomSheet } from '@/components/BottomSheet';
import { Button } from '@/components/Button';
import { Chip } from '@/components/Chip';
import { TextButton } from '@/components/TextButton';
import { Textfield } from '@/components/Textfield';

import styles from './page.module.scss';

const MOCK_DATA = {
  title: '대학 동기 모임에서 나의 승진 이야기가 나왔습니다.',
  options: [
    {
      id: 1,
      content: '이런 상황은 어색해.. 간단하게 이야기하고 다른 이야기로 빠져나가야지',
    },
    {
      id: 2,
      content: '내 시간이다! 승진되는데 큰 영향을 미친 프로젝트의 담당자가 된 이야기부터 이야기해야지',
    },
  ],
};

const FlipCard = () => {
  const [isFlipped, toggleFlip] = useCycle(false, true);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.flipCard}>
        <motion.div
          className={styles.flipCardFront}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.cardTitle}>첫번째 질문</p>
          <h3 className="title3">{MOCK_DATA.options[0].content}</h3>
          <TextButton onClick={() => toggleFlip()} className={styles.nextButton}>
            다음 답변 선택 <ArrowRightIcon width="1.5rem" height="1.5rem" />
          </TextButton>
        </motion.div>
        <motion.div
          className={styles.flipCardBack}
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.cardTitle}>두번째 질문</p>
          <h3 className="title3">{MOCK_DATA.options[1].content}</h3>
          <TextButton onClick={() => toggleFlip()} className={styles.nextButton}>
            다음 답변 선택 <ArrowRightIcon width="1.5rem" height="1.5rem" />
          </TextButton>
        </motion.div>
      </div>
    </div>
  );
};

const RetrospectiveBottomSheet = ({
  isOpen,
  closeSheet,
  goToResultPage,
}: {
  isOpen: boolean;
  closeSheet: VoidFunction;
  goToResultPage: VoidFunction;
}) => (
  <BottomSheet title="답변을 선택한 이유를 알려주세요" isOpen={isOpen} height={400} closeSheet={closeSheet}>
    <BottomSheet.Content className={styles.bottomSheetContent}>
      <Textfield placeholder="오늘의 나에게 집중해서 적어보세요" />
    </BottomSheet.Content>
    <BottomSheet.Footer className={styles.bottomSheetFooter}>
      <Button color="primary" onClick={goToResultPage}>
        작성 완료
      </Button>
      <Button color="neutral" onClick={goToResultPage}>
        넘어가기
      </Button>
    </BottomSheet.Footer>
  </BottomSheet>
);

export default function Game() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const goToResultPage = () => {
    router.push('/game/complete');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Chip size="big" color="brand">
          N회차 질문
        </Chip>
        <h3 className="title3">{MOCK_DATA.title}</h3>
      </div>
      <FlipCard />
      <div className={styles.footer}>
        <Button onClick={() => setOpen(true)}>결정</Button>
        <RetrospectiveBottomSheet isOpen={open} closeSheet={() => setOpen(false)} goToResultPage={goToResultPage} />
      </div>
    </div>
  );
}

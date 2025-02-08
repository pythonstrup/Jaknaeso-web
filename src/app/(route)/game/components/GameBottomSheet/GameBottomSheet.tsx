import { useState } from 'react';

import { BottomSheet } from '@/components/BottomSheet';
import { Button } from '@/components/Button';
import { Textfield } from '@/components/Textfield';

import styles from './GameBottomSheet.module.scss';

const GameBottomSheet = ({
  isOpen,
  closeSheet,
  goToResultPage,
}: {
  isOpen: boolean;
  closeSheet: VoidFunction;
  goToResultPage: VoidFunction;
}) => {
  const [content, setContent] = useState('');

  const saveRetrospective = () => {
    goToResultPage();
    localStorage.setItem('retrospective', content);
  };

  return (
    <BottomSheet title="답변을 선택한 이유를 알려주세요" isOpen={isOpen} height={400} closeSheet={closeSheet}>
      <BottomSheet.Content className={styles.bottomSheetContent}>
        <Textfield
          placeholder="오늘의 나에게 집중해서 적어보세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </BottomSheet.Content>
      <BottomSheet.Footer className={styles.bottomSheetFooter}>
        <Button color="primary" onClick={saveRetrospective}>
          작성 완료
        </Button>
        <Button color="neutral" onClick={goToResultPage}>
          넘어가기
        </Button>
      </BottomSheet.Footer>
    </BottomSheet>
  );
};

export default GameBottomSheet;

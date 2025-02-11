import { useState } from 'react';
import { useParams } from 'next/navigation';

import { BottomSheet } from '@/components/BottomSheet';
import { Button } from '@/components/Button';
import { Textfield } from '@/components/Textfield';
import { useSubmitSurvey } from '@/query-hooks/useSurvey';

import styles from './GameBottomSheet.module.scss';

const GameBottomSheet = ({
  isOpen,
  closeSheet,
  optionId,
}: {
  isOpen: boolean;
  closeSheet: VoidFunction;
  optionId: number;
}) => {
  const { bundleId } = useParams();
  const [content, setContent] = useState('');
  const submitSurvey = useSubmitSurvey();

  const saveRetrospective = () => {
    submitSurvey.mutate({
      bundleId: bundleId as string,
      survey: {
        optionId,
        comment: content,
      },
    });
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
        <Button color="neutral" onClick={saveRetrospective}>
          넘어가기
        </Button>
      </BottomSheet.Footer>
    </BottomSheet>
  );
};

export default GameBottomSheet;

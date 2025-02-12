import { useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';

import { ArrowRightIcon } from '@/assets/icons';
import { TextButton } from '@/components/TextButton';
import type { SurveyOption } from '@/query-hooks/useSurvey/types';

import styles from './FlipCard.module.scss';

interface FlipCardProps {
  options: SurveyOption[];
  onSelect: (id: number) => void;
}

const FlipCard = ({ options, onSelect }: FlipCardProps) => {
  const [isFlipped, toggleFlip] = useCycle(false, true);

  const onClick = (id: number) => {
    toggleFlip();
    onSelect(id);
  };

  useEffect(() => {
    onSelect(options[0].id);
  }, [options, onSelect]);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.flipCard}>
        <motion.div
          className={styles.flipCardFront}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          initial={false}
        >
          <p className={styles.cardTitle}>첫번째 질문</p>
          <h3 className="title3">{options[0].optionContents}</h3>
          <TextButton onClick={() => onClick(options[1].id)} className={styles.nextButton}>
            다음 답변 선택 <ArrowRightIcon width="1.5rem" height="1.5rem" />
          </TextButton>
        </motion.div>
        <motion.div
          className={styles.flipCardBack}
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.6 }}
          initial={false}
        >
          <p className={styles.cardTitle}>두번째 질문</p>
          <h3 className="title3">{options[1].optionContents}</h3>
          <TextButton onClick={() => onClick(options[0].id)} className={styles.nextButton}>
            다음 답변 선택 <ArrowRightIcon width="1.5rem" height="1.5rem" />
          </TextButton>
        </motion.div>
      </div>
    </div>
  );
};

export default FlipCard;

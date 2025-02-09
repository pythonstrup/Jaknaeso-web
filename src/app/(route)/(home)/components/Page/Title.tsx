'use client';

import { Chip } from '@/components/Chip';

import styles from './Page.module.scss';

export default function HomeTitle() {
  return (
    <>
      <div className={styles.content}>
        <Chip size="md" color="neutral">
          <h5>첫번째 캐릭터</h5>
        </Chip>
        <h1 className="title01">즐거운 모험가</h1>
      </div>
    </>
  );
}

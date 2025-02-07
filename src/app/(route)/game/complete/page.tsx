'use client';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/Button';

import styles from './page.module.scss';

export default function GameComplete() {
  const router = useRouter();
  const setItem = (key: string, item: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, item);
    }
  };

  const onClick = () => {
    setItem('isCompletedSurvey', 'true');
    router.push('/');
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className="title2">
          오늘의 질문
          <br />
          답변을 완료했어요!
        </h3>
        <p className={styles.subTitle}>내일도 답변을 완료해 내 캐릭터를 완성해 보세요</p>
      </div>
      <div className={styles.content}>
        {/* 로티 이미지 들어갈 부분, 임시 조치 */}
        <div
          style={{
            width: '220px',
            height: '220px',
            borderRadius: '1.625rem',
            background: '#F8F8FA',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#6A6A6A',
          }}
        >
          로티 애니메이션
        </div>
      </div>
      <div className={styles.footer}>
        <Button color="primary" onClick={onClick}>
          완료
        </Button>
      </div>
    </div>
  );
}

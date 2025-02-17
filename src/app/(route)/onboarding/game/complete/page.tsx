'use client';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/Button';
import { LottieAnimation } from '@/components/LottieAnimation';
import { ROUTES } from '@/constants';
import { setIsCompletedOnboarding } from '@/libs/cookie/manageCookie.client';

import styles from './page.module.scss';

export default function GameComplete() {
  const router = useRouter();

  const onClick = () => {
    setIsCompletedOnboarding(true);
    router.push(ROUTES.home);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className="title2">
          내 가치관 캐릭터가
          <br />
          완성됐어요!
        </h3>
        <p className={styles.subTitle}>홈 화면에서 내 캐릭터를 확인해보세요.</p>
      </div>
      <div className={styles.content}>
        <LottieAnimation type="celebrate" width="300px" height="300px" />
      </div>
      <div className={styles.footer}>
        <Button color="primary" onClick={onClick}>
          완료
        </Button>
      </div>
    </div>
  );
}

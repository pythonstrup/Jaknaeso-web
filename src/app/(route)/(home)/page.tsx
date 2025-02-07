'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { redirect, useRouter } from 'next/navigation';

import { LineIcon } from '@/assets/icons';
import { Button } from '@/components/Button';
import { Capsule } from '@/components/Capsule';
import { Chip } from '@/components/Chip';
import { LockBtn } from '@/components/LockBtn';
import { ROUTES } from '@/constants';

import styles from './page.module.scss';

const Drawer = dynamic(() => import('./components/Drawer/Drawer'), { ssr: false });
const DrawerContent = dynamic(() => import('./components/Drawer/Content'), { ssr: false });
const DrawerFooter = dynamic(() => import('./components/Drawer/Footer'), { ssr: false });

export default function Home() {
  const routes = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isCompleted, setIsCompleted] = useState<string>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const surveyType = localStorage.getItem('surveyType');
      if (!surveyType) {
        redirect(ROUTES.selectGame);
      }
      setIsCompleted(localStorage.getItem('isCompletedSurvey') as string);
    }
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Chip size="md" color="neutral">
            <h5>첫번째 캐릭터</h5>
          </Chip>
          <h1 className="title01">즐거운 모험가</h1>
        </div>
        <div className={styles.wrapper}>
          <Capsule className={styles.capsule}>
            <label>캐릭터 완성까지</label>
            <LineIcon color="#A9AEBA" />
            <label>{`${isCompleted ? 14 : 15}개`}</label>
          </Capsule>
        </div>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <DrawerContent>
            <div className={styles.grid}>
              <LockBtn
                label="1회차"
                className={styles.lock}
                variant={isCompleted ? 'completedToday' : 'default'}
                onClick={() => {
                  if (!isCompleted) {
                    routes.push(ROUTES.game);
                  }
                }}
              />
              <LockBtn label="2회차" className={styles.lock} disabled />
              <LockBtn label="3회차" className={styles.lock} disabled />
              <LockBtn label="4회차" className={styles.lock} disabled />
              <LockBtn label="5회차" className={styles.lock} disabled />

              {!isOpen && (
                <>
                  <LockBtn label="6회차" className={styles.lock} disabled />
                  <LockBtn label="7회차" className={styles.lock} disabled />
                  <LockBtn label="8회차" className={styles.lock} disabled />
                  <LockBtn label="9회차" className={styles.lock} disabled />
                  <LockBtn label="10회차" className={styles.lock} disabled />
                  <LockBtn label="11회차" className={styles.lock} disabled />
                  <LockBtn label="12회차" className={styles.lock} disabled />
                  <LockBtn label="13회차" className={styles.lock} disabled />
                  <LockBtn label="14회차" className={styles.lock} disabled />
                  <LockBtn label="15회차" className={styles.lock} disabled />
                </>
              )}
            </div>
          </DrawerContent>
          <DrawerFooter>
            <Button style={{ height: '58px' }} onClick={() => routes.push(ROUTES.game)} disabled={Boolean(isCompleted)}>
              오늘의 질문 답변하기
            </Button>
          </DrawerFooter>
        </Drawer>
      </div>
    </div>
  );
}

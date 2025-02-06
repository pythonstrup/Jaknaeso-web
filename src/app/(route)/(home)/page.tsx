'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

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
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Chip size="md" color="neutral">
            <h5>1번째 캐릭터</h5>
          </Chip>
          <h1 className="title01">valueType</h1>
        </div>
        <div className={styles.wrapper}>
          <Capsule className={styles.capsule}>
            <label>캐릭터 완성까지</label>
            <LineIcon color="#A9AEBA" />
            <label>15개</label>
          </Capsule>
        </div>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <DrawerContent>
            <div className={styles.grid}>
              <LockBtn label="1회차" className={styles.lock} onClick={() => routes.push(ROUTES.game)} />
              <LockBtn label="1회차" className={styles.lock} disabled onClick={() => routes.push(ROUTES.game)} />
              <LockBtn
                label="1회차"
                className={styles.lock}
                variant="completed"
                onClick={() => routes.push(ROUTES.game)}
              />
              <LockBtn
                label="1회차"
                className={styles.lock}
                variant="completedToday"
                onClick={() => routes.push(ROUTES.game)}
              />
              <LockBtn label="1회차" className={styles.lock} onClick={() => routes.push(ROUTES.game)} />

              {!isOpen && (
                <>
                  <LockBtn label="1회차" className={styles.lock} onClick={() => routes.push(ROUTES.game)} />
                  <LockBtn label="1회차" className={styles.lock} onClick={() => routes.push(ROUTES.game)} disabled />
                  <LockBtn
                    label="1회차"
                    className={styles.lock}
                    onClick={() => routes.push(ROUTES.game)}
                    variant="completed"
                  />
                  <LockBtn
                    label="1회차"
                    className={styles.lock}
                    onClick={() => routes.push(ROUTES.game)}
                    variant="completedToday"
                  />
                  <LockBtn label="1회차" className={styles.lock} onClick={() => routes.push(ROUTES.game)} />

                  <LockBtn label="1회차" className={styles.lock} onClick={() => routes.push(ROUTES.game)} />
                  <LockBtn label="1회차" className={styles.lock} onClick={() => routes.push(ROUTES.game)} disabled />
                  <LockBtn
                    label="1회차"
                    className={styles.lock}
                    onClick={() => routes.push(ROUTES.game)}
                    variant="completed"
                  />
                  <LockBtn
                    label="1회차"
                    className={styles.lock}
                    onClick={() => routes.push(ROUTES.game)}
                    variant="completedToday"
                  />
                  <LockBtn label="1회차" className={styles.lock} onClick={() => routes.push(ROUTES.game)} />
                </>
              )}
            </div>
          </DrawerContent>
          <DrawerFooter>
            <Button style={{ height: '58px' }} onClick={() => routes.push(ROUTES.game)}>
              오늘의 질문 답변하기
            </Button>
          </DrawerFooter>
        </Drawer>
      </div>
    </div>
  );
}

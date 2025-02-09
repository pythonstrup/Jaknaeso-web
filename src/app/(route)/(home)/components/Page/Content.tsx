'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { LineIcon } from '@/assets/icons';
import { Button } from '@/components/Button';
import { Capsule } from '@/components/Capsule';
import { LockBtn } from '@/components/LockBtn';
import type { LockBtnVariant } from '@/components/LockBtn/LockBtn';
import { ROUTES } from '@/constants';
import { useGetSurvey } from '@/query-hooks/useSurvey';

import { Drawer } from '../Drawer';

import styles from './Page.module.scss';

export default function HomeContent() {
  const routes = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { data } = useGetSurvey();

  const daysArr = Array.from({ length: 15 }, (_, i) => i + 1);

  const getLockState = (day: number): LockBtnVariant => {
    if (data) {
      const isSolved = data.surveyHistoryDetails.map((value) => value.submissionId).includes(day);
      const curDay = data.nextSurveyIndex;
      if (day > curDay) {
        return 'disabled';
      }
      if (day < curDay) {
        return isSolved ? 'completed' : 'disabled';
      }
      if (day === curDay) {
        return data.isCompleted ? 'completedToday' : 'default';
      }
    }

    return 'default';
  };

  const onClickBtn = (day: number): void => {
    if (getLockState(day) === 'default') {
      routes.push(`${ROUTES.game}/${data?.bundleId}`);
    }
  };

  return (
    <>
      {data && (
        <>
          <div className={styles.wrapper}>
            <Capsule className={styles.capsule}>
              <label>캐릭터 완성까지</label>
              <LineIcon color="#A9AEBA" />
              <label>{`${15 - data.surveyHistoryDetails.length} 개`}</label>
            </Capsule>
          </div>
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <Drawer.Content>
              <div className={styles.grid}>
                {daysArr.slice(0, 5).map((day) => (
                  <LockBtn
                    key={day}
                    label={`${day}회차`}
                    className={styles.lock}
                    variant={getLockState(day)}
                    disabled={getLockState(day) === 'disabled'}
                    onClick={() => onClickBtn(day)}
                  />
                ))}
                {!isOpen &&
                  daysArr
                    .slice(5)
                    .map((day) => (
                      <LockBtn
                        key={day}
                        label={`${day}회차`}
                        className={styles.lock}
                        variant={getLockState(day)}
                        disabled={getLockState(day) === 'disabled'}
                        onClick={() => onClickBtn(day)}
                      />
                    ))}
              </div>
            </Drawer.Content>
            <Drawer.Footer>
              <Button
                //style={{ height: '58px' }}
                disabled={data.isCompleted}
                onClick={() => onClickBtn(data?.nextSurveyIndex)}
              >
                오늘의 질문 답변하기
              </Button>
            </Drawer.Footer>
          </Drawer>
        </>
      )}
    </>
  );
}

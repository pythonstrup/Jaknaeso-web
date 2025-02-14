'use client';
import { Fragment } from 'react';

import { Button } from '../Button';
import { LottieAnimation } from '../LottieAnimation';

import styles from './ErrorComponent.module.scss';

interface ErrorComponentProps {
  title: string;
  subTitle: string;
  reset?: VoidFunction;
  redirect: VoidFunction;
}

export default function ErrorComponent({ title, subTitle, reset, redirect }: ErrorComponentProps) {
  return (
    <div className={styles.container}>
      <LottieAnimation type="warning" />
      <div className={styles.content}>
        <h3 className="title2">{title}</h3>
        <div>
          {subTitle.split('\\n').map((line, index) => (
            <Fragment key={index}>
              <p className={styles.subtitle3}>{line}</p>
            </Fragment>
          ))}
        </div>
      </div>
      <div className={styles.buttons}>
        {reset && (
          <Button size="sm" className={styles.reset} onClick={reset}>
            화면 새로고침
          </Button>
        )}
        <Button size="sm" className={styles.redirect} onClick={redirect}>
          홈으로
        </Button>
      </div>
    </div>
  );
}

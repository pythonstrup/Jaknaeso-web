'use client';

import type { PropsWithChildren } from 'react';

import { FooterLayout } from '@/components/Layout/Footer';

import styles from './layout.module.scss';

export default function ReportLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <FooterLayout>{children}</FooterLayout>
    </div>
  );
}

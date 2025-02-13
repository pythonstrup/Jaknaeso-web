'use client';

import { Toast as RadixToast } from 'radix-ui';

import { useToast } from '@/hooks';

import styles from './Toast.module.scss';

export default function Toast() {
  const { toast, updateToast } = useToast();

  return (
    <RadixToast.Provider swipeDirection="down" duration={1000}>
      <RadixToast.Root className={styles.root} open={toast.open} onOpenChange={updateToast}>
        <RadixToast.Title className={styles.title}>{toast.message}</RadixToast.Title>
      </RadixToast.Root>
      <RadixToast.Viewport className={styles.viewport} />
    </RadixToast.Provider>
  );
}

'use client';

import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

import styles from './Drawer.module.scss';
import DrawerHandle from './Handle';
import { useDrawer } from './useDrawer';

export const WINDOW_HEIGHT = typeof window !== 'undefined' ? window.innerHeight : 768;
export const BOTTOM_SHEET_MAX_HEIGHT = window.innerHeight - 248 - 4.25 * 16;
export const BOTTOM_SHEET_MIN_HEIGHT = window.innerHeight - 487 - 4.25 * 16;

export default function Drawer({ children }: PropsWithChildren) {
  const { onDragEnd, controls, isOpen } = useDrawer();
  return (
    <motion.div
      drag="y"
      onDragEnd={onDragEnd}
      initial="visible"
      animate={controls}
      variants={{
        visible: { top: BOTTOM_SHEET_MAX_HEIGHT, bottom: '4.25rem' },
        hidden: { top: BOTTOM_SHEET_MIN_HEIGHT, bottom: '4.25rem' },
      }}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.2}
      className={styles.container}
    >
      <div className={styles.layout}>
        <DrawerHandle isOpen={isOpen} />
        {children}
      </div>
    </motion.div>
  );
}

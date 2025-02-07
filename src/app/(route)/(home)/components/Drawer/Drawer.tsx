'use client';

import { type PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

import styles from './Drawer.module.scss';
import DrawerHandle from './Handle';

//export const WINDOW_HEIGHT = typeof window !== 'undefined' ? window.innerHeight : 768;
export const BOTTOM_SHEET_MAX_HEIGHT = 487;
export const BOTTOM_SHEET_MIN_HEIGHT = 261;

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
export default function Drawer({ isOpen, setIsOpen, children }: PropsWithChildren<DrawerProps>) {
  // const { onDragEnd, controls, isOpen } = useDrawer();
  const animateState = isOpen ? 'visible' : 'hidden';

  return (
    <motion.div
      drag="y"
      onDragEnd={(event, info) => {
        const offsetThreshold = 150;
        const deltaThreshold = 5;
        const isOverOffsetThreshold = Math.abs(info.offset.y) > offsetThreshold;
        const isOverDeltaThreshold = Math.abs(info.delta.y) > deltaThreshold;
        const isOverThreshold = isOverOffsetThreshold || isOverDeltaThreshold;
        if (!isOverThreshold) return;
        const newIsOpened = info.offset.y >= 0;
        setIsOpen(newIsOpened);
      }}
      animate={animateState}
      variants={{
        visible: { bottom: '4.25rem', height: 261 },
        hidden: { bottom: '4.25rem', height: 500 },
      }}
      dragMomentum={false}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.01}
      transition={{ type: 'tween', duration: 0.3 }}
      className={styles.container}
    >
      <div className={styles.layout}>
        <DrawerHandle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        {children}
      </div>
    </motion.div>
  );
}

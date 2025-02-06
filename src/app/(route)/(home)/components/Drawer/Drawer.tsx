'use client';

import { type PropsWithChildren, useEffect } from 'react';
import type { PanInfo } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';

import { usePreviousValue } from '@/hooks';

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

  const controls = useAnimation();
  const prevIsOpen = usePreviousValue(isOpen);

  const onDragEnd = (event: PointerEvent, { point, velocity }: PanInfo): void => {
    const shouldClose = event.type === 'pointerdown' || velocity?.y < 487;

    if (shouldClose) {
      controls.start('hidden');
      setIsOpen(false);
    } else {
      controls.start('visible');
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (prevIsOpen && !isOpen) {
      controls.start('hidden');
    } else if (!prevIsOpen && isOpen) {
      controls.start('visible');
    }
  }, [controls, isOpen, prevIsOpen]);

  return (
    <motion.div
      drag="y"
      onDragEnd={onDragEnd}
      initial="visible"
      animate={controls}
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

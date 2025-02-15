'use client';

import { type PropsWithChildren } from 'react';
import type { PanInfo } from 'framer-motion';
import { motion, useDragControls } from 'framer-motion';

import styles from './Drawer.module.scss';
import DrawerHandle from './Handle';

export const BOTTOM_SHEET_MAX_HEIGHT = 451;
export const BOTTOM_SHEET_MIN_HEIGHT = 225;

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
export default function Drawer({ isOpen, setIsOpen, children }: PropsWithChildren<DrawerProps>) {
  const animateState = isOpen ? 'visible' : 'hidden';
  const dragControls = useDragControls();

  const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offsetThreshold = 10;
    const deltaThreshold = 1;
    const isOverOffsetThreshold = Math.abs(info.offset.y) > offsetThreshold;
    const isOverDeltaThreshold = Math.abs(info.delta.y) > deltaThreshold;
    const isOverThreshold = isOverOffsetThreshold || isOverDeltaThreshold;
    if (!isOverThreshold) return;
    const newIsOpened = info.offset.y >= 0;
    setIsOpen(newIsOpened);
  };
  return (
    <motion.div
      drag="y"
      dragControls={dragControls}
      onDragEnd={onDragEnd}
      animate={animateState}
      variants={{
        visible: { bottom: '4.25rem', height: BOTTOM_SHEET_MIN_HEIGHT },
        hidden: { bottom: '4.25rem', height: BOTTOM_SHEET_MAX_HEIGHT },
      }}
      dragListener={false}
      dragMomentum={true}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.2}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={styles.container}
    >
      <div className={styles.layout}>
        <motion.div onPointerDown={(e) => dragControls.start(e)}>
          <DrawerHandle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </motion.div>
        {children}
      </div>
    </motion.div>
  );
}

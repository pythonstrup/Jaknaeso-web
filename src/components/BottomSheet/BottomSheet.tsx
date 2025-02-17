import type { ReactNode } from 'react';
import { type PropsWithChildren } from 'react';
import { Dialog } from 'radix-ui';

import { CloseIcon } from '@/assets/icons';

import style from './BottomSheet.module.scss';

import '@radix-ui/themes/styles.css';

interface BottomSheetProps {
  isOpen: boolean;
  height?: number;
  title?: ReactNode;
  closeIcon?: boolean;
  closeSheet: VoidFunction;
}

const BOTTOM_SHEET_HEIGHT = 261;

export default function BottomSheetMain({
  isOpen,
  closeSheet,
  height = BOTTOM_SHEET_HEIGHT,
  title,
  closeIcon = false,
  children,
}: PropsWithChildren<BottomSheetProps>) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={closeSheet}>
      <Dialog.Portal>
        <Dialog.Overlay className={style.overlay} />
        <Dialog.Content
          className={style.content}
          style={{ height: `${height}px` }}
          onOpenAutoFocus={(event: Event) => event.preventDefault()}
        >
          <Dialog.Title className={style.header}>
            {title}
            {closeIcon && <CloseIcon width={24} height={24} onClick={closeSheet} />}
          </Dialog.Title>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

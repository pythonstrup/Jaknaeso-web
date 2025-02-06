import { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';

import { usePreviousValue } from '@/hooks';

export const useDrawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const controls = useAnimation();
  const prevIsOpen = usePreviousValue(isOpen);

  const onDragEnd = (info: any) => {
    const shouldClose = info?.y < -30;
    const shouldOpen = info?.y > 1;

    if (shouldOpen) {
      controls.start('visible');
      setIsOpen(true);
    } else if (shouldClose) {
      controls.start('hidden');
      setIsOpen(false);
    } else {
      controls.start(isOpen ? 'visible' : 'hidden');
    }
  };

  useEffect(() => {
    if (prevIsOpen && !isOpen) {
      controls.start('hidden');
    } else if (!prevIsOpen && isOpen) {
      controls.start('visible');
    }
  }, [controls, isOpen, prevIsOpen]);

  return { onDragEnd, controls, setIsOpen, isOpen };
};

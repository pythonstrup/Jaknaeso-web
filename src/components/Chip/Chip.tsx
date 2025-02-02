import type { PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './Chip.module.scss';

interface ChipProps {
  size: 'sm' | 'md' | 'big';
  color: 'neutral' | 'brand' | 'black';
}

export default function Chip({ size, color, children }: PropsWithChildren<ChipProps>) {
  return <div className={cn(styles.container, styles[`size-${size}`], styles[`color-${color}`])}>{children}</div>;
}

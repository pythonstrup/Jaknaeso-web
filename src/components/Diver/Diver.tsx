import type { HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Diver.module.scss';

export default function Diver({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className, styles.container)} {...props} />;
}

import type { HTMLAttributes, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './Capsule.module.scss';

export default function Capsule({ className, children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={cn(styles.container, className)} {...props}>
      {children}
    </div>
  );
}

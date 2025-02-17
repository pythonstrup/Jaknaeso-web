import type { HTMLAttributes, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './Modal.module.scss';

export default function ModalFooter({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={cn(styles.footer, className)} {...props}>
      {children}
    </div>
  );
}
